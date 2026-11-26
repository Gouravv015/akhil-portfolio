// Preloader: a "diffusion model" denoises full-screen pixel static into the wordmark, then those pixels
// fly to the hero and become the real heading.
import gsap from 'gsap';
import { pixelOut } from './pixels.js';

const ROWS = 5; // Silkscreen capitals are 5 pixels tall
const STEPS = 28;
const PROMPT = '> AI SOFTWARE ENGINEER, AGENTS + RAG';

let g, ink, accent, glyphs, centre; // carried from denoise() to land()

const metrics = document.createElement('canvas').getContext('2d', { willReadFrequently: true });

// read a letter as a pixel map: which of its cols x ROWS cells are filled
function readGlyph(ch, font) {
  metrics.font = font;
  const m = metrics.measureText(ch);
  const u = (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) / ROWS;
  const w = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
  const cols = Math.max(1, Math.round(w / u));
  metrics.canvas.width = Math.ceil(w) + 2;
  metrics.canvas.height = Math.ceil(u * ROWS) + 2;
  metrics.font = font; // resizing resets it
  metrics.fillText(ch, m.actualBoundingBoxLeft, m.actualBoundingBoxAscent);
  const cells = [];
  for (let y = 0; y < ROWS; y++)
    for (let x = 0; x < cols; x++)
      if (metrics.getImageData((x + 0.5) * (w / cols), (y + 0.5) * u, 1, 1).data[3] > 127) cells.push([x, y]);
  return { cells, cols, u, uw: w / cols, left: m.actualBoundingBoxLeft, ascent: m.actualBoundingBoxAscent };
}

const fontOf = (el) => { const s = getComputedStyle(el); return `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`; };

export function denoise(pre, heading) {
  const canvas = pre.querySelector('canvas');
  const W = innerWidth, H = innerHeight, dpr = Math.min(devicePixelRatio, 2);
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = `${W}px`; // not 100%: a scrollbar would squash it and the pixels would land off
  canvas.style.height = `${H}px`;
  g = canvas.getContext('2d');
  g.scale(dpr, dpr);
  const css = getComputedStyle(pre);
  ink = css.getPropertyValue('--ink').trim();
  accent = css.getPropertyValue('--accent').trim();

  // centred wordmark, one empty column between letters
  glyphs = [...heading.textContent].map((ch) => readGlyph(ch, fontOf(heading)));
  const total = glyphs.reduce((n, q) => n + q.cols + 1, -1);
  const U = Math.max(8, Math.floor(Math.min(W * 0.7, 1100) / total));
  const ox = Math.round((W - total * U) / 2), oy = Math.round((H - ROWS * U) / 2);
  centre = [];
  const lit = new Set();
  let col = 0;
  glyphs.forEach((q, letter) => {
    q.cells.forEach(([x, y]) => {
      centre.push({ letter, x: ox + (col + x) * U, y: oy + y * U, s: U });
      lit.add(`${col + x},${y}`);
    });
    col += q.cols + 1;
  });

  // noise grid lines up with the letters, a few noise pixels per letter pixel
  const c = U / (U < 18 ? 2 : 3);
  const cells = [];
  for (let y = oy - Math.ceil(oy / c) * c; y < H; y += c)
    for (let x = ox - Math.ceil(ox / c) * c; x < W; x += c)
      cells.push([x, y, lit.has(`${Math.floor((x - ox + 0.01) / U)},${Math.floor((y - oy + 0.01) / U)}`) ? 1 : 0]);

  const [prompt, sigma, stepOut] = pre.querySelectorAll('.pre-hud b');
  const draw = (step) => {
    const p = step / STEPS, sig = (1 - p) ** 1.3;
    g.clearRect(0, 0, W, H);
    for (const [x, y, t] of cells) {
      const a = Math.round(Math.min(1, Math.max(0, t * p ** 0.7 + (Math.random() - 0.42) * sig * 1.3)) * 4) / 4;
      if (!a) continue;
      g.globalAlpha = a;
      g.fillStyle = Math.random() < 0.08 * sig ? accent : ink;
      g.fillRect(x, y, c + 0.5, c + 0.5);
    }
    g.globalAlpha = 1;
    prompt.textContent = PROMPT.slice(0, Math.ceil(PROMPT.length * Math.min(1, p * 2)));
    sigma.textContent = sig.toFixed(3);
    stepOut.textContent = String(step).padStart(2, '0');
  };

  let shown = -1;
  const state = { s: 0 };
  return gsap.to(state, {
    s: STEPS, duration: 2.3, ease: 'power1.inOut',
    onUpdate: () => { const s = Math.round(state.s); if (s !== shown) draw((shown = s)); },
  }).then();
}

// the finished pixels travel to the hero heading and hand over to the real text
export function land(pre, heading) {
  pre.style.pointerEvents = 'none';
  heading.style.visibility = 'hidden';
  const letters = [...heading.querySelectorAll('.ch')]; // split by techText(); its svg marks each baseline
  const font = fontOf(heading);
  const targets = letters.flatMap((el) => {
    const at = el.firstChild.getBoundingClientRect(), q = readGlyph(el.textContent.slice(-1), font);
    return q.cells.map(([x, y]) => ({ x: at.left - q.left + x * q.uw, y: at.bottom - q.ascent + y * q.u, w: q.uw, h: q.u }));
  });
  const parts = centre.map((from, i) => ({ from, to: targets[i] ?? targets.at(-1), delay: from.letter * 0.06 + (i % 7) * 0.012, dx: gsap.utils.random(-90, 90), dy: gsap.utils.random(-90, 90) }));

  const FLY = 0.95, clock = { t: 0 }, ease = gsap.parseEase('power3.inOut');
  const end = FLY + Math.max(...parts.map((p) => p.delay));
  const paint = () => {
    g.clearRect(0, 0, g.canvas.width, g.canvas.height);
    g.fillStyle = ink;
    for (const { from, to, delay, dx, dy } of parts) {
      const q = ease(gsap.utils.clamp(0, 1, (clock.t - delay) / FLY));
      const arc = Math.sin(q * Math.PI); // scatter mid-flight
      const mix = (a, b) => a + (b - a) * q;
      g.fillRect(mix(from.x, to.x) + dx * arc, mix(from.y, to.y) + dy * arc, mix(from.s, to.w) + 0.4, mix(from.s, to.h) + 0.4);
    }
  };
  gsap.to(pre.querySelectorAll('.pre-hud'), { autoAlpha: 0, duration: 0.3 });
  pixelOut(pre.querySelector('.pre-bg'), 1000);
  return gsap.to(clock, { t: end, duration: end, ease: 'none', delay: 0.25, onUpdate: paint }).then(() => {
    heading.style.visibility = '';
    pre.remove();
  });
}
