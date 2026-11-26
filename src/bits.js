// Effects inspired by React Bits (Tech Text, Folder Float, Pixel Trail), written for this site on GSAP.
import gsap from 'gsap';
import { blip } from './sound.js';

// ---------- tech text: the active letter becomes a dashed vector path inside a selection frame ----------
export function techText(rise) {
  const chars = [...rise.textContent].map((ch) => {
    const el = document.createElement('span');
    el.className = 'ch';
    // a 1px svg (0px would not render) sits on the baseline, so its <text> lands exactly over the real letter
    el.innerHTML = `<svg class="tech-out" aria-hidden="true"><text y="1">${ch}</text></svg>${ch}`;
    return el;
  });
  rise.replaceChildren(...chars);
  const frame = document.createElement('span');
  frame.className = 'tech-frame';
  frame.setAttribute('aria-hidden', 'true');
  frame.innerHTML = '<i></i><i></i><i></i><i></i><b></b>' + '<s></s>'.repeat(10);
  rise.append(frame);
  const label = frame.querySelector('b'), specks = [...frame.querySelectorAll('s')];

  const ctx = document.createElement('canvas').getContext('2d');
  const box = (el) => { // the letter's ink box, in the wordmark's own coordinates
    const cs = getComputedStyle(el), at = el.firstChild.getBoundingClientRect(), home = rise.getBoundingClientRect();
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = ctx.measureText(el.textContent.slice(-1));
    return {
      x: at.left - home.left - m.actualBoundingBoxLeft, y: at.bottom - home.top - m.actualBoundingBoxAscent,
      w: m.actualBoundingBoxLeft + m.actualBoundingBoxRight, h: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
    };
  };

  let active = -1, cur = null, visible = false, hovering = false, drag = null, ready = false, dir = 1, nextSweep = 0;
  const activate = (i) => {
    if (i === active) return;
    chars[active]?.classList.remove('on');
    active = i;
    chars[i].classList.add('on');
    const b = box(chars[i]);
    label.textContent = `${chars[i].textContent.slice(-1)} ${Math.round(b.w)} × ${Math.round(b.h)}`;
    cur ||= b;
    frame.classList.add('on');
    specks.forEach((s) => { // scattered just around the frame
      const side = Math.random() < 0.5;
      s.style.left = `${side ? Math.random() * 100 : Math.random() < 0.5 ? -8 : 106}%`;
      s.style.top = `${side ? (Math.random() < 0.5 ? -8 : 106) : Math.random() * 100}%`;
      s.style.animationDelay = `${-Math.random() * 1.4}s`;
    });
  };

  chars.forEach((el, i) => {
    el.addEventListener('pointerenter', () => { if (ready && !drag) { hovering = true; activate(i); } });
    el.addEventListener('pointerdown', (e) => {
      if (!ready) return;
      activate(i);
      if (e.pointerType !== 'mouse') return; // touch keeps scrolling; a tap still kicks
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      gsap.killTweensOf(el);
      drag = { el, x: e.clientX - gsap.getProperty(el, 'x'), y: e.clientY - gsap.getProperty(el, 'y'), moved: false };
    });
    el.addEventListener('pointermove', (e) => {
      if (drag?.el !== el) return;
      const x = e.clientX - drag.x, y = e.clientY - drag.y;
      if (Math.hypot(x, y) > 4) drag.moved = true;
      gsap.set(el, { x, y });
      if (drag.moved) label.textContent = `X ${Math.round(x)} Y ${Math.round(y)}`;
    });
    const drop = () => {
      if (drag?.el !== el) return;
      if (drag.moved) gsap.to(el, { x: 0, y: 0, duration: 1.1, ease: 'elastic.out(1, 0.4)' });
      el.dataset.dragged = drag.moved ? '1' : '';
      drag = null;
      active = -1; // refresh the size label
      activate(i);
    };
    el.addEventListener('pointerup', drop);
    el.addEventListener('pointercancel', drop);
    el.addEventListener('click', () => {
      if (!ready || el.dataset.dragged) return void (el.dataset.dragged = '');
      blip(520, 0.12, 0.03);
      chars.forEach((c, j) => { // kick, rippling out through the neighbours
        const d = Math.abs(j - i), up = -c.offsetHeight * 0.3 * 0.5 ** d;
        gsap.to(c, { delay: d * 0.06, keyframes: [{ x: 0, y: up, duration: 0.12, ease: 'power2.out' }, { y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' }], overwrite: true });
      });
    });
  });
  rise.addEventListener('pointerleave', () => { hovering = false; nextSweep = gsap.ticker.time + 1.2; });

  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(rise);
  gsap.ticker.add((t, dt) => {
    if (!ready || !visible) return;
    if (!hovering && !drag && t > nextSweep) { // idle: the frame walks the wordmark by itself
      if (active + dir < 0 || active + dir >= chars.length) dir = -dir;
      activate(active + dir);
      nextSweep = t + 1.1;
    }
    if (active < 0) return; // pointer left before the first sweep
    const b = box(chars[active]), k = 1 - Math.exp(-dt * 0.014);
    for (const p of ['x', 'y', 'w', 'h']) cur[p] += (b[p] - cur[p]) * k;
    frame.style.transform = `translate(${cur.x - 8}px, ${cur.y - 8}px)`;
    frame.style.width = `${cur.w + 16}px`;
    frame.style.height = `${cur.h + 16}px`;
  });
  // the mask hides the intro rise; free it afterwards so the frame and dragged letters aren't cut off
  gsap.delayedCall(2.5, () => { rise.parentElement.style.overflow = 'visible'; ready = true; });
}

// ---------- folder float: each toolkit column becomes a folder whose skills spring out and drift ----------
export function folders(grid) {
  const all = [...grid.children].map((card, n) => {
    const title = card.querySelector('h3').textContent;
    const skills = card.querySelector('p').innerText.split(/[·\n]/).map((s) => s.trim()).filter(Boolean);
    card.classList.add('folder');
    card.innerHTML = `
      <ul class="folder-cloud" id="folder-${n}">${skills.map((s) => `<li>${s}</li>`).join('')}</ul>
      <h3><button type="button" aria-expanded="false" aria-controls="folder-${n}">
        <span class="folder-back"></span><span class="folder-paper"></span>
        <span class="folder-front"><span class="folder-label">${title}</span><small>${skills.length} SKILLS</small></span>
      </button></h3>`;
    return { card, btn: card.querySelector('button'), cloud: card.querySelector('ul'), pills: [...card.querySelectorAll('li')], open: false, spots: [] };
  });

  // pack pills into centred rows above the folder, and reserve that height so nothing overlaps
  const layout = () => {
    const GAP = 8, ROW = 36, LIFT = 22;
    const rows = all.map((f) => {
      const max = f.card.clientWidth, out = [[]];
      let w = 0;
      f.pills.forEach((p) => {
        const pw = p.offsetWidth + GAP;
        if (w + pw > max && w) { out.push([]); w = 0; }
        out.at(-1).push(p);
        w += pw;
      });
      return out;
    });
    const height = Math.max(...rows.map((r) => r.length)) * ROW + LIFT;
    all.forEach((f, n) => {
      f.card.style.paddingTop = `${height}px`;
      f.spots = [];
      rows[n].forEach((row, r) => {
        const total = row.reduce((s, p) => s + p.offsetWidth + GAP, -GAP);
        let x = -total / 2;
        row.forEach((p) => { f.spots.push({ x: x + p.offsetWidth / 2, y: -LIFT - ROW / 2 - r * ROW }); x += p.offsetWidth + GAP; });
      });
      if (f.open) toggle(f, true, true);
    });
  };

  function toggle(f, open, force) {
    if (f.open === open && !force) return;
    f.open = open;
    f.btn.setAttribute('aria-expanded', open);
    f.card.classList.toggle('open', open);
    if (!force) blip(open ? 720 : 480, 0.05, 0.02);
    gsap.killTweensOf(f.pills);
    f.pills.forEach((p, i) => {
      if (!open) return gsap.to(p, { x: 0, y: 20, rotation: 0, scale: 0.4, autoAlpha: 0, duration: 0.3, ease: 'power2.in', delay: (f.pills.length - 1 - i) * 0.03 });
      const s = f.spots[i];
      gsap.to(p, {
        x: s.x, y: s.y, scale: 1, autoAlpha: 1, rotation: gsap.utils.random(-5, 5), duration: 0.55, ease: 'back.out(1.7)', delay: i * 0.045,
        onComplete: () => gsap.to(p, { x: s.x + gsap.utils.random(-3, 3), y: s.y + gsap.utils.random(-5, 5), rotation: gsap.utils.random(-5, 5), duration: gsap.utils.random(1.4, 2.4), ease: 'sine.inOut', yoyo: true, repeat: -1 }),
      });
    });
  }

  const hover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  all.forEach((f) => {
    gsap.set(f.pills, { xPercent: -50, yPercent: -50, y: 20, scale: 0.4, autoAlpha: 0 });
    if (hover) {
      f.card.addEventListener('pointerenter', () => toggle(f, true));
      f.card.addEventListener('pointerleave', () => toggle(f, false));
    } else { // touch has no hover: open once on arrival, taps toggle after that
      new IntersectionObserver(([e], io) => { if (e.isIntersecting) { io.disconnect(); toggle(f, true); } }, { threshold: 0.6 }).observe(f.btn);
    }
    f.btn.addEventListener('click', (e) => { if (!hover || !e.detail) toggle(f, !f.open); }); // tap or keyboard
  });
  layout();
  addEventListener('resize', layout);
}

// ---------- pixel trail: grid cells light up behind the pointer and fade, on one layer behind the whole page ----------
export function pixelTrail() {
  const CELL = 28, LIFE = 700;
  const c = document.createElement('canvas');
  c.className = 'pixel-trail';
  c.setAttribute('aria-hidden', 'true');
  document.body.prepend(c);
  const g = c.getContext('2d'), cells = new Map();
  let raf = 0;
  const draw = (now) => {
    g.clearRect(0, 0, innerWidth, innerHeight);
    g.fillStyle = getComputedStyle(c).color;
    cells.forEach(({ x, y, t }, key) => {
      const p = (now - t) / LIFE;
      if (p >= 1) return void cells.delete(key);
      g.globalAlpha = (1 - p) * 0.16;
      g.fillRect(x * CELL, y * CELL - scrollY, CELL - 1, CELL - 1); // cells stay put on the page as it scrolls
    });
    raf = cells.size ? requestAnimationFrame(draw) : 0; // idle when nothing is lit
  };
  const size = () => {
    const dpr = Math.min(devicePixelRatio, 2);
    c.width = innerWidth * dpr;
    c.height = innerHeight * dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  size();
  addEventListener('resize', size);
  let last = null;
  addEventListener('pointermove', (e) => {
    const px = e.clientX, py = e.clientY + scrollY, now = performance.now();
    const from = last ?? { px, py }, n = Math.min(40, Math.max(1, Math.ceil(Math.hypot(px - from.px, py - from.py) / CELL)));
    for (let i = 1; i <= n; i++) { // fill the gaps on fast moves
      const x = Math.floor((from.px + ((px - from.px) * i) / n) / CELL), y = Math.floor((from.py + ((py - from.py) * i) / n) / CELL);
      cells.set(`${x},${y}`, { x, y, t: now });
    }
    last = { px, py };
    raf ||= requestAnimationFrame(draw);
  });
  document.documentElement.addEventListener('pointerleave', () => (last = null));
}
