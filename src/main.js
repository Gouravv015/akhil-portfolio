import './styles.css';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initWork } from './work.js';
import { initCase } from './case.js';
import { pixelSwap } from './pixels.js';
import { denoise, land } from './preloader.js';
import { initAsk } from './ask.js';
import { initPolish } from './polish.js';

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

// easter egg: type "sudo" anywhere (outside inputs) for a green phosphor terminal theme; again to leave
let typed = '';
addEventListener('keydown', (e) => {
  if (e.target.closest?.('input, textarea') || e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-4);
  if (typed !== 'sudo' || swapping) return;
  typed = '';
  const next = root.dataset.theme === 'term' ? 'dark' : 'term';
  if (reduced) return setTheme(next);
  swapping = true;
  pixelSwap(() => setTheme(next)).finally(() => (swapping = false));
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
    gsap.from(el, { y: 28, autoAlpha: 0, duration: 0.9, ease: 'power3.out', clearProps: 'opacity,visibility', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
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
  gsap.fromTo('.hero-intro, .hero-meta', { yPercent: 0, autoAlpha: 1 }, { yPercent: -60, autoAlpha: 0, ease: 'none', immediateRender: false, scrollTrigger: hero });
  // experience rows slide in from alternating sides while scrubbing
  gsap.utils.toArray('.xp li').forEach((li, i) =>
    gsap.fromTo(li, { xPercent: i % 2 ? 4 : -4 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: li, start: 'top bottom', end: 'top 60%', scrub: true } })
  );
  // contact: the two big words close in from opposite sides
  gsap.fromTo('.contact-big .mask:first-child .rise', { xPercent: -18 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 20%', scrub: true } });
  gsap.fromTo('.contact-big .mask:last-child .rise', { xPercent: 18 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 20%', scrub: true } });
}

// ---------- preloader: denoise -> pixels land as the hero name -> rest of the hero fades in ----------
function intro() {
  if (reduced) return;
  gsap.from('.nav > :not(.nav-progress), .hero-meta span, .hero-intro, .hero-foot > *', { y: 14, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out', delay: 0.7 });
}

const announceAsk = initAsk({ reduced });
const pre = document.querySelector('.preloader');
const heroName = document.querySelector('.hero-name .rise');
lenis?.stop();
// letters are read from the pixel font, so wait for it, but never hang on a slow font server
const font = Promise.race([document.fonts.load('40px Silkscreen'), new Promise((r) => setTimeout(r, 2000))]).catch(() => {});
const loading = reduced ? font : font.then(() => denoise(pre, heroName));
Promise.all([document.fonts.ready, loading]).then(() => {
  initWork(document.querySelector('.work'), { reduced, scrollTo, lenis, openCase: initCase({ reduced, lenis }) });
  initPolish({ reduced, lenis });
  scrollFx();
  ScrollTrigger.refresh();
  if (reduced) return pre.remove(), announceAsk();
  intro();
  land(pre, heroName).then(() => { lenis?.start(); announceAsk(); });
});
