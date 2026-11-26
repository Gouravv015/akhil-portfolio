import gsap from 'gsap';
import { projects } from './content.js';
import { pixelSwap } from './pixels.js';

// Full-screen case study in a native <dialog> (focus trap, Esc and inert page come for free).
export function initCase({ reduced, lenis }) {
  const dlg = document.createElement('dialog');
  dlg.className = 'case';
  dlg.setAttribute('aria-labelledby', 'case-title');
  dlg.setAttribute('data-lenis-prevent', '');
  const body = document.createElement('div'); // re-rendered per case; the dialog itself also holds the custom cursor
  dlg.append(body);
  document.body.append(dlg);
  let busy = false;
  const swap = async (fn) => {
    if (busy) return;
    if (reduced) return fn();
    busy = true;
    try { await pixelSwap(fn, 700); } finally { busy = false; }
  };

  // sections glide up as they scroll into the dialog; impact numbers count and meters fill on arrival
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count]').forEach(countUp);
    e.target.querySelectorAll('.cells').forEach(fill);
  }), { root: dlg, rootMargin: '0px 0px 15% 0px' }); // fire just before a section arrives

  const countUp = (el) => {
    const to = +el.dataset.count, unit = el.dataset.unit ?? '';
    if (reduced) return void (el.textContent = to + unit);
    const o = { v: 0 };
    gsap.to(o, { v: to, duration: 1.4, ease: 'power3.out', delay: 0.2, onUpdate: () => (el.textContent = Math.round(o.v) + unit) });
  };
  const fill = (cells) => {
    const lit = [...cells.children].slice(0, Math.round(+cells.dataset.value / 2));
    if (reduced) return lit.forEach((c) => c.classList.add('on'));
    lit.forEach((c, n) => setTimeout(() => c.classList.add('on'), 250 + n * 22));
  };

  const meter = (name, value, now) => `
    <div class="meter${now ? ' now' : ''}"><span>${name}</span>
      <span class="cells" data-value="${value}" role="img" aria-label="${name}: ${value}%">${'<i></i>'.repeat(50)}</span>
      <b data-count="${value}" data-unit="%">0%</b></div>`;

  const impact = (p) => (p.impact ?? []).map((m) => `
    <div class="impact" data-in>
      <div class="impact-head">
        <p><small>BEFORE</small><span class="before">${m.before}${m.unit}</span></p>
        <span class="arrow" aria-hidden="true">-></span>
        <p><small>AFTER</small><span class="after" data-count="${m.after}" data-unit="${m.unit}">${m.after}${m.unit}</span></p>
        <span class="delta">+${m.after - m.before} PTS</span>
      </div>
      <p class="impact-name">${m.label}</p>
      <div class="meters">${meter('BEFORE', m.before)}${meter('AFTER', m.after, true)}</div>
    </div>`).join('');

  function render(i) {
    const p = projects[i], prev = (i + projects.length - 1) % projects.length, next = (i + 1) % projects.length;
    const n = String(i + 1).padStart(2, '0');
    body.style.setProperty('--c', p.color);
    body.innerHTML = `
      <header class="case-top">
        <span>[${n}/${String(projects.length).padStart(2, '0')}] CASE STUDY</span>
        <button type="button" data-go="${prev}" aria-label="Previous case: ${projects[prev].title}"><- PREV</button>
        <button type="button" class="case-close">[X] CLOSE</button>
        <i class="case-progress"></i>
      </header>
      <div class="case-wrap">
        <section class="case-hero">
          <p class="kicker">[${n}] ${p.tag}</p>
          <h2 id="case-title">${p.title}</h2>
          <p class="lead">${p.blurb}</p>
          <dl class="case-meta">
            <div><dt>ROLE</dt><dd>${p.role}</dd></div>
            <div><dt>WHERE</dt><dd>${p.note}</dd></div>
            <div><dt>STATUS</dt><dd>${p.ongoing ? 'IN PROGRESS' : 'SHIPPED'}</dd></div>
            <div><dt>STACK</dt><dd>${p.stack.length} TOOLS</dd></div>
          </dl>
        </section>

        <section class="case-impact">
          <p class="case-label">${p.impact ? 'BEFORE -> AFTER' : 'HIGHLIGHTS'}</p>
          ${impact(p)}
          ${p.stats ? `<dl class="case-stats" data-in>${p.stats.map(([v, k]) => `<div><dd>${v}</dd><dt>${k}</dt></div>`).join('')}</dl>` : ''}
          ${p.facts ? `<ul class="case-facts" data-in>${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>` : ''}
        </section>

        <section class="case-problem" data-in>
          <p class="case-label">THE PROBLEM</p>
          <p>${p.context}</p>
        </section>

        <section data-in>
          <p class="case-label">WHAT AKHIL ${p.ongoing ? 'IS BUILDING' : 'BUILT'}</p>
          <ol class="case-steps">${p.built.map((b) => `<li>${b}</li>`).join('')}</ol>
        </section>

        <section class="case-end" data-in>
          <div><p class="case-label">STACK</p><ul class="case-chips">${p.stack.map((s) => `<li>${s}</li>`).join('')}</ul></div>
          <div><p class="case-label">LINKS</p>
            ${p.links.length ? `<p class="case-links">${links(p)}</p>` : '<p class="case-private">No public repo or demo for this one.</p>'}
            ${p.linkNote ? `<p class="case-private">${p.linkNote}</p>` : ''}
          </div>
        </section>
      </div>
      <button type="button" class="case-next" data-go="${next}" style="--n:${projects[next].color}"><small>NEXT CASE [0${next + 1}]</small><strong>${projects[next].title} -></strong></button>`;
    dlg.scrollTop = 0;
    body.querySelector('.case-close').addEventListener('click', () => swap(() => dlg.close()));
    body.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => swap(() => {
      render(+b.dataset.go);
      body.querySelector('.case-close').focus();
    })));
    body.querySelectorAll('[data-in]').forEach((el) => io.observe(el));
  }

  const bar = () => body.querySelector('.case-progress')?.style.setProperty('transform', `scaleX(${dlg.scrollTop / Math.max(1, dlg.scrollHeight - dlg.clientHeight)})`);
  dlg.addEventListener('scroll', bar, { passive: true });

  // the custom cursor lives on <body>, which the dialog's top layer would cover
  const moveCursor = (to) => { const c = document.querySelector('.cursor'); if (c) to.append(c); };
  dlg.addEventListener('close', () => { moveCursor(document.body); lenis?.start(); });

  return (i) => swap(() => {
    render(i);
    dlg.showModal();
    moveCursor(dlg);
    lenis?.stop();
  });
}

export const links = (p) => p.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}<span aria-hidden="true">-></span></a>`).join('');
