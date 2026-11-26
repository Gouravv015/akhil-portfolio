import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blip, soundOn, setSound } from './sound.js';
import { techText, folders, pixelTrail } from './bits.js';

const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

export function initPolish({ reduced, lenis }) {
  sound();
  counter();
  copyEmail();
  marquee(reduced, lenis);
  if (reduced) return;
  folders(document.querySelector('.stack-grid'));
  techText(document.querySelector('.hero-name .rise'));
  decodeLabels();
  countUp();
  if (!fine) return; // pointer-only flourishes
  cursor();
  magnetic();
  xpPreview();
  letters();
  pixelTrail();
}

// ---------- labels and small headings decode from glyph noise as they enter ----------
const GLYPHS = '!<>-_\\/[]{}=+*^?#01';
function decode(el, dur = 700) {
  const text = el.textContent;
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const done = Math.floor(p * text.length);
    el.textContent = [...text].map((ch, i) => (i < done || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join('');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function decodeLabels() {
  document.querySelectorAll('.label, .work-ui h2, .folder-label').forEach((el) =>
    ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => decode(el) }));
}

// ---------- about numbers count up from zero when they scroll in ----------
function countUp() {
  document.querySelectorAll('.about-grid .v').forEach((el) => {
    const text = el.textContent, m = text.match(/\d+/);
    if (!m) return;
    const zero = (v) => text.replace(m[0], String(Math.round(v)).padStart(m[0].length, '0'));
    const o = { v: 0 };
    el.textContent = zero(0);
    gsap.to(o, { v: +m[0], duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true }, onUpdate: () => (el.textContent = zero(o.v)) });
  });
}

// ---------- contact words: letters lean away from the cursor (the hero name uses techText) ----------
function letters() {
  const chars = [...document.querySelectorAll('.contact-big .rise')].flatMap((rise) => {
    rise.innerHTML = [...rise.textContent].map((ch) => `<span class="ch">${ch}</span>`).join(''); // headings keep their aria-label
    return [...rise.children];
  });
  document.querySelectorAll('.contact-big .mask').forEach((m) => (m.style.overflow = 'visible')); // lifted letters aren't cut off
  const movers = chars.map((el) => ({
    el,
    x: gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3' }),
    y: gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3' }),
    r: gsap.quickTo(el, 'rotation', { duration: 0.7, ease: 'power3' }),
  }));
  addEventListener('pointermove', (e) => {
    for (const m of movers) {
      const r = m.el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) continue;
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const f = Math.max(0, 1 - Math.hypot(dx, dy) / 320) ** 2; // falloff: only nearby letters react
      m.x(-dx * f * 0.25);
      m.y(-f * r.height * 0.18);
      m.r(-dx * f * 0.04);
    }
  });
}

// ---------- sound toggle + UI blips ----------
function sound() {
  const btn = document.querySelector('.sound-toggle');
  const sync = () => {
    btn.setAttribute('aria-pressed', soundOn());
    btn.querySelector('.snd-label').textContent = soundOn() ? 'SND ON' : 'SND OFF';
  };
  sync();
  btn.addEventListener('click', () => { setSound(!soundOn()); sync(); blip(990, 0.05, 0.03); });
  let last = null;
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('a, button');
    if (t && t !== last) blip(2600, 0.012, 0.012);
    last = t;
  });
  document.addEventListener('click', (e) => { if (e.target.closest('a, button')) blip(640, 0.04, 0.025); });
}

// ---------- section counter + scroll progress in the nav ----------
function counter() {
  const out = document.querySelector('.nav-count');
  const bar = document.querySelector('.nav-progress');
  const sections = [...document.querySelectorAll('main > section')];
  const total = String(sections.length - 1).padStart(2, '0');
  sections.forEach((s, i) => ScrollTrigger.create({
    trigger: s, start: 'top center', end: 'bottom center',
    onToggle: (st) => st.isActive && (out.textContent = `${String(i).padStart(2, '0')} / ${total}`),
  }));
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (st) => (bar.style.transform = `scaleX(${st.progress})`) });
}

// ---------- click the email to copy it ----------
function copyEmail() {
  const mail = document.querySelector('.contact-mail');
  const addr = mail.getAttribute('href').replace('mailto:', '');
  const text = mail.textContent;
  mail.setAttribute('aria-label', `Copy email ${addr}`);
  let timer;
  mail.addEventListener('click', (e) => {
    if (!navigator.clipboard) return; // no clipboard API: let mailto open the mail app
    e.preventDefault();
    navigator.clipboard.writeText(addr).then(
      () => {
        mail.textContent = 'COPIED TO CLIPBOARD';
        clearTimeout(timer);
        timer = setTimeout(() => (mail.textContent = text), 1600);
      },
      () => (location.href = mail.href),
    );
  });
}

// ---------- toolkit marquee: drifts on its own, speeds up and leans with scroll velocity ----------
function marquee(reduced, lenis) {
  const track = document.querySelector('.marquee-track');
  if (!track || reduced) return;
  let x = 0, dir = 1, visible = false;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(track);
  const skew = gsap.quickTo(track, 'skewX', { duration: 0.4, ease: 'power3' });
  gsap.ticker.add((_, dt) => {
    if (!visible) return;
    const v = lenis ? lenis.velocity : 0;
    if (Math.abs(v) > 0.5) dir = Math.sign(v);
    x -= dir * (0.002 + Math.min(Math.abs(v), 60) * 0.0004) * dt; // % of track per ms
    x = ((x % 50) - 50) % 50; // two identical halves: wrap every 50%
    gsap.set(track, { xPercent: x });
    skew(gsap.utils.clamp(-10, 10, -v * 0.25));
  });
}

// ---------- pixel cursor: grows over links, shows a word over [data-cursor] ----------
function cursor() {
  const c = document.createElement('div');
  c.className = 'cursor';
  c.innerHTML = '<span></span>';
  document.body.append(c);
  document.documentElement.classList.add('has-cursor');
  const label = c.firstChild;
  const x = gsap.quickTo(c, 'x', { duration: 0.18, ease: 'power3' });
  const y = gsap.quickTo(c, 'y', { duration: 0.18, ease: 'power3' });
  let idle;
  addEventListener('pointermove', (e) => {
    x(e.clientX); y(e.clientY);
    c.classList.add('on');
    c.classList.remove('idle');
    clearTimeout(idle);
    idle = setTimeout(() => c.classList.add('idle'), 500); // spins once the pointer rests
  });
  document.documentElement.addEventListener('pointerleave', () => c.classList.remove('on'));
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-cursor], a, button, input');
    c.dataset.state = !t ? '' : t.matches('input') ? 'text' : t.dataset.cursor ? 'label' : 'link';
    label.textContent = t?.dataset.cursor || '';
  });
}

// ---------- magnetic buttons ----------
function magnetic() {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.35);
      y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

// ---------- experience: a preview card trails the cursor over each row ----------
function xpPreview() {
  const box = document.createElement('div');
  box.className = 'xp-preview';
  box.setAttribute('aria-hidden', 'true');
  box.innerHTML = '<b></b><span></span>';
  document.body.append(box);
  const x = gsap.quickTo(box, 'x', { duration: 0.45, ease: 'power3' });
  const y = gsap.quickTo(box, 'y', { duration: 0.45, ease: 'power3' });
  const rot = gsap.quickTo(box, 'rotation', { duration: 0.6, ease: 'power3' });
  let px = 0;
  document.querySelectorAll('.xp li').forEach((li) => {
    li.addEventListener('pointerenter', (e) => {
      // shortcut: colour block + company name until real images exist; set data-img on the <li> to show a photo
      box.style.background = li.dataset.img ? `center/cover url(${li.dataset.img})` : li.dataset.color;
      box.firstChild.textContent = li.querySelector('.xp-co').textContent;
      box.lastChild.textContent = li.querySelector('.xp-year').textContent;
      gsap.set(box, { x: e.clientX, y: e.clientY });
      px = e.clientX;
      box.classList.add('on');
    });
    li.addEventListener('pointermove', (e) => {
      x(e.clientX); y(e.clientY);
      rot(gsap.utils.clamp(-12, 12, (e.clientX - px) * 0.6));
      px = e.clientX;
    });
    li.addEventListener('pointerleave', () => box.classList.remove('on'));
  });
}
