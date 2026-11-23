// Tiny Web Audio synth shared by the chat and the UI. No files; one global on/off, remembered per visitor.
let ctx;
let on = true;
try { on = localStorage.getItem('sound') !== 'off'; } catch {}

export const soundOn = () => on;
export function setSound(v) {
  on = v;
  try { localStorage.setItem('sound', v ? 'on' : 'off'); } catch {}
}

export function blip(freq, dur = 0.03, vol = 0.03, type = 'square') {
  // browsers refuse audio before the first click/key; skip instead of logging warnings
  if (!on || (navigator.userActivation && !navigator.userActivation.hasBeenActive)) return;
  try {
    ctx ||= new AudioContext();
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t);
    o.stop(t + dur);
  } catch {} // no audio support: stay silent
}
