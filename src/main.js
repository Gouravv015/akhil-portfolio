import './styles.css';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initWork } from './work.js';
import { pixelSwap, pixelOut } from './pixels.js';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- smooth scroll: Lenis driven by GSAP's ticker, feeding ScrollTrigger ----------
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 4), wheelMultiplier: 0.9, touchMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollTo = (y, duration = 1.6) => (lenis ? lenis.scrollTo(y, { duration }) : window.scrollTo(0, y));
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener('click', (e) => {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    scrollTo(el.getBoundingClientRect().top + scrollY);
  })
);

// ---------- theme ----------
const toggle = document.querySelector('.theme-toggle');
const label = toggle.querySelector('.tt-label');
const syncToggle = () => {
  const next = root.dataset.theme === 'dark' ? 'LIGHT' : 'DARK';
  label.textContent = next;
  toggle.setAttribute('aria-label', `Switch to ${next.toLowerCase()} theme`);
};
const setTheme = (t) => {
  root.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch {}
  syncToggle();
  dispatchEvent(new Event('themechange'));
};
syncToggle();
let swapping = false;
toggle.addEventListener('click', async () => {
  if (swapping) return;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  if (reduced) return setTheme(next);
  swapping = true;
  await pixelSwap(() => setTheme(next)); // one pass: new theme spreads over the old, cell by cell
  swapping = false;
});

// ---------- text scramble on hover ----------
const GLYPHS = '!<>-_\\/[]{}=+*^?#01';
document.querySelectorAll('[data-scramble]').forEach((el) => {
  const text = el.textContent;
  if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', text);
  let raf;
  el.addEventListener('mouseenter', () => {
    if (reduced) return;
    cancelAnimationFrame(raf);
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / 380);
      const done = Math.floor(p * text.length);
      el.textContent = [...text].map((ch, i) => (i < done || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join('');
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  });
});

// ---------- local clock ----------
const clock = document.querySelector('.clock');
const tick = () => (clock.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }));
tick();
setInterval(tick, 30_000);

// ---------- scroll-driven GSAP ----------
function scrollFx() {
  if (reduced) return;
  gsap.utils.toArray('[data-reveal]').forEach((el) =>
    gsap.from(el, { y: 28, autoAlpha: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
  );
  // statement: words light up as you read down (unsplit text stays as the accessible name)
  document.querySelectorAll('[data-words]').forEach((el) => {
    el.setAttribute('aria-label', el.textContent.trim().replace(/\s+/g, ' '));
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
    gsap.to(el.querySelectorAll('.w'), { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });
  // hero: name sinks slower than the page and the intro drifts, so the hero peels away with depth
  const hero = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero-name', { yPercent: 35, ease: 'none', scrollTrigger: hero });
  gsap.to('.hero-intro, .hero-meta', { yPercent: -60, autoAlpha: 0, ease: 'none', scrollTrigger: hero });
  // experience rows slide in from alternating sides while scrubbing
  gsap.utils.toArray('.xp li').forEach((li, i) =>
    gsap.fromTo(li, { xPercent: i % 2 ? 4 : -4 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: li, start: 'top bottom', end: 'top 60%', scrub: true } })
  );
  // contact: the two big words close in from opposite sides
  gsap.fromTo('.contact-big .mask:first-child .rise', { xPercent: -18 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 20%', scrub: true } });
  gsap.fromTo('.contact-big .mask:last-child .rise', { xPercent: 18 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 20%', scrub: true } });
}

// ---------- preloader -> pixel erase -> hero intro ----------
function intro() {
  if (reduced) return;
  gsap.timeline()
    .from('.hero-name .rise', { yPercent: 105, duration: 1.2, ease: 'power4.out' })
    .from('.nav > *, .hero-meta span, .hero-foot > *', { y: 14, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=0.8');
}

const pre = document.querySelector('.preloader');
const count = pre.querySelector('.pre-count');
const bar = pre.querySelector('.pre-bar i');
lenis?.stop();
const state = { p: 0 };
const loading = gsap.to(state, {
  p: 100, duration: reduced ? 0 : 1.6, ease: 'power2.inOut',
  onUpdate: () => { bar.style.width = state.p + '%'; count.textContent = String(Math.round(state.p)).padStart(3, '0'); },
});
Promise.all([document.fonts.ready, loading.then()]).then(() => {
  initWork(document.querySelector('.work'), { reduced, scrollTo, lenis });
  scrollFx();
  ScrollTrigger.refresh();
  if (reduced) return pre.remove();
  intro();
  pixelOut(pre, 1000).then(() => lenis?.start());
});
