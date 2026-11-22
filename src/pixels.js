// Single-pass pixel sweep from the top-right corner to the bottom-left.
// Built as a series of crisp SVG mask frames that step from "no cells" to "all cells".

const FRAMES = 22;

function maskFrames(show) {
  const w = innerWidth, h = innerHeight;
  const size = Math.max(16, Math.round(Math.min(w, h) / 26));
  const cols = Math.ceil(w / size), rows = Math.ceil(h / size);
  const span = cols + rows - 2 || 1;
  // each cell's start 0..1: distance from the top-right corner plus jitter for a ragged pixel edge
  const start = (c, r) => (((cols - 1 - c) + r) / span) * 0.75 + Math.random() * 0.25;
  const starts = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) starts.push(start(c, r));

  const frames = [];
  for (let f = 0; f < FRAMES; f++) {
    const p = f / (FRAMES - 1);
    let rects = '';
    for (let r = 0; r < rows; r++) {
      // merge runs of visible cells in a row into one rect to keep the SVG small
      let run = -1;
      for (let c = 0; c <= cols; c++) {
        const on = c < cols && (starts[r * cols + c] <= p) === show;
        if (on && run < 0) run = c;
        if (!on && run >= 0) { rects += `<rect x='${run}' y='${r}' width='${c - run}' height='1'/>`; run = -1; }
      }
    }
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${cols} ${rows}' width='${cols * size}' height='${rows * size}' shape-rendering='crispEdges'>${rects}</svg>`;
    frames.push(`url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
  }
  return { frames, size: `${cols * size}px ${rows * size}px` };
}

function animateMask(el, pseudoElement, show, duration) {
  const { frames, size } = maskFrames(show);
  const kf = frames.map((m) => ({ maskImage: m, webkitMaskImage: m, maskSize: size, webkitMaskSize: size, maskRepeat: 'no-repeat', webkitMaskRepeat: 'no-repeat' }));
  return el.animate(kf, { duration, easing: 'linear', fill: 'forwards', pseudoElement }).finished;
}

// Theme change: the new theme spreads over the old one, cell by cell. Falls back to an instant swap.
export function pixelSwap(apply, duration = 900) {
  if (!document.startViewTransition) return apply();
  const vt = document.startViewTransition(apply);
  vt.ready.then(() => animateMask(document.documentElement, '::view-transition-new(root)', true, duration)).catch(() => {});
  return vt.finished;
}

// Remove an element (the preloader) by erasing it cell by cell.
export function pixelOut(el, duration = 900) {
  return animateMask(el, undefined, false, duration).then(() => el.remove());
}
