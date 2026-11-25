import { ask } from './content.js';
import { blip } from './sound.js';

const pick = (a) => a[(Math.random() * a.length) | 0];

const botTick = () => blip(1300 + Math.random() * 900, 0.025, 0.025);
const keyTick = () => blip(520 + Math.random() * 160, 0.035, 0.035, 'triangle');
const sendChirp = () => { blip(880, 0.05, 0.03); setTimeout(() => blip(1320, 0.07, 0.03), 60); };

// shortcut: keyword scoring over hand-written answers, swap for an LLM behind a server once free-form questions matter
export function answer(q) {
  const s = ` ${q.toLowerCase().replace(/[^a-z0-9]+/g, ' ')} `;
  // keys match at word starts (short ones as whole words); longer matches count for more
  const score = (t) => t.keys.reduce((n, k) => n + (s.includes(k.length > 3 ? ` ${k}` : ` ${k} `) ? k.length : 0), 0);
  const best = ask.topics.reduce((a, t) => (score(t) > score(a) ? t : a));
  return pick(score(best) ? best.answers : ask.fallback);
}

export function initAsk({ reduced }) {
  const toggle = document.querySelector('.ask-toggle');
  const panel = document.querySelector('.ask-panel');
  const hint = document.querySelector('.ask-hint');
  const log = panel.querySelector('.ask-log');
  const form = panel.querySelector('.ask-form');
  const input = form.q;
  const send = form.querySelector('button');
  const chips = panel.querySelector('.ask-chips');
  let busy = false, greeted = false;

  const line = (who, text = '') => {
    const p = document.createElement('p');
    p.className = `ask-msg ask-${who}`;
    p.innerHTML = `<span class="ask-who">${who === 'you' ? 'YOU' : 'AKHIL'}</span><span class="ask-text"></span>`;
    p.lastChild.textContent = text;
    log.append(p);
    log.scrollTop = log.scrollHeight;
    return p.lastChild;
  };

  // stream the reply a few characters at a time, like model output
  const reply = (text) => new Promise((done) => {
    const el = line('bot');
    el.classList.add('typing');
    if (reduced) { el.textContent = text; el.classList.remove('typing'); return done(); }
    let i = 0;
    setTimeout(function step() {
      i = Math.min(text.length, i + 1 + ((Math.random() * 3) | 0));
      el.textContent = text.slice(0, i);
      botTick();
      log.scrollTop = log.scrollHeight;
      if (i < text.length) setTimeout(step, 18 + Math.random() * 30);
      else { el.classList.remove('typing'); done(); }
    }, 350); // short "thinking" pause
  });

  const submit = async (q) => {
    q = q.trim();
    if (!q || busy) return;
    busy = true; send.disabled = true;
    sendChirp();
    line('you', q);
    input.value = '';
    await reply(answer(q));
    busy = false; send.disabled = false;
  };

  input.addEventListener('keydown', (e) => { if (e.key.length === 1 || e.key === 'Backspace') keyTick(); });
  form.addEventListener('submit', (e) => { e.preventDefault(); submit(input.value); });
  ask.suggestions.forEach((s) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = s;
    b.addEventListener('click', () => submit(s));
    chips.append(b);
  });

  // ---- open / close ----
  const setOpen = (open) => {
    hint.hidden = true;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open);
    if (open) {
      input.focus({ preventScroll: true });
      if (!greeted) { greeted = true; busy = true; reply(ask.greeting).then(() => (busy = false)); }
    }
  };
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  panel.querySelector('.ask-close').addEventListener('click', () => { setOpen(false); toggle.focus(); });
  hint.addEventListener('click', () => setOpen(true));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); } });
  addEventListener('pointerdown', (e) => { if (!panel.hidden && !panel.contains(e.target) && !toggle.contains(e.target)) setOpen(false); });

  // ---- arrival popup: points at the nav button, then gets out of the way ----
  return function announce() {
    setTimeout(() => {
      if (!panel.hidden) return;
      hint.hidden = false;
      const b = toggle.getBoundingClientRect(), h = hint.getBoundingClientRect();
      hint.style.setProperty('--arrow', `${b.left + b.width / 2 - h.left - 6}px`);
      setTimeout(() => (hint.hidden = true), 8000);
    }, 900);
  };
}
