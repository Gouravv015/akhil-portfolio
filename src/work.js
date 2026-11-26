import * as THREE from 'three';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './content.js';

// Cards line the inside of a drum that spins on a tilted horizontal axis just behind the camera:
// the focused card faces you, the passed one tips up into a steep sliver at the top-left,
// the next one waits as a sliver at the bottom-right. A fisheye lens over the whole frame
// bends every straight edge, which is what gives the "printed on a ball" feel.
const N = projects.length;
const FOCUS = 6.6; // camera -> focused card
const DRUM_Z = 1; // drum axis sits just behind the camera
const DRUM_R = FOCUS + DRUM_Z;
const STEP = 0.3; // angle between cards on the drum (rad)
const SKEW = 0.45; // tilts the drum axis: top cards drift left, bottom cards right
const CARD_W = 3.9;
const CARD_H = 2.45;
const LENS = 0.22; // fisheye strength of the post pass

// ---------- card shader: CRT-curved plane ----------
const cardVert = /* glsl */ `
  uniform float uBend;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z -= (p.x * p.x * 0.12 + p.y * p.y * 0.16) * uBend; // tube-screen bulge
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;
const cardFrag = /* glsl */ `
  uniform sampler2D uTex;
  uniform float uOpacity;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    vec3 c = texture2D(uTex, uv).rgb;
    c *= 0.93 + 0.07 * sin(uv.y * 900.0 - uTime * 6.0); // scanlines
    vec2 e = smoothstep(0.0, 0.03, uv) * smoothstep(0.0, 0.03, 1.0 - uv);
    c *= mix(0.7, 1.0, e.x * e.y); // dark tube edges
    gl_FragColor = vec4(c, uOpacity);
  }
`;

// ---------- post pass: fisheye lens, chromatic split, glitch bands, grain ----------
const postVert = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const postFrag = /* glsl */ `
  uniform sampler2D tScene;
  uniform float uTime;
  uniform float uGlitch;
  uniform float uAspect;
  uniform vec3 uBg;
  varying vec2 vUv;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec2 lens(vec2 uv) {
    vec2 c = uv - 0.5;
    vec2 a = c * vec2(uAspect, 1.0);
    return 0.5 + c * (1.0 + ${LENS.toFixed(3)} * dot(a, a)) / (1.0 + ${(LENS * 0.25).toFixed(3)}); // barrel
  }
  vec3 tap(vec2 uv) {
    vec2 q = lens(uv);
    vec2 inside = step(0.0, q) * step(q, vec2(1.0));
    return mix(uBg, texture2D(tScene, q).rgb, inside.x * inside.y);
  }
  void main() {
    vec2 uv = vUv;
    float band = floor(uv.y * 28.0 + floor(uTime * 14.0) * 3.0);
    float n = hash(vec2(band, floor(uTime * 20.0)));
    uv.x += (n - 0.5) * step(0.82, n) * uGlitch * 0.12; // tearing bands while moving
    float s = 0.0015 + uGlitch * 0.012;
    vec3 c = vec3(tap(uv + vec2(s, 0.0)).r, tap(uv).g, tap(uv - vec2(s, 0.0)).b);
    c += (hash(vUv * 900.0 + uTime) - 0.5) * 0.035; // grain
    c += 0.012 - 0.024 * step(0.5, fract(vUv.y * 320.0)); // fine scanlines, zero-mean so bg matches the page
    gl_FragColor = vec4(c, 1.0);
    #include <colorspace_fragment>
  }
`;

// card artwork, buttons included, so they bend, glitch and tilt with the card.
// `hot` / `focus` index the button under the pointer / with keyboard focus. Returns the buttons' rects.
function paintCard(g, p, i, actions, hot = -1, focus = -1) {
  const phone = innerWidth <= 800; // the card is small there: bigger type
  const grd = g.createLinearGradient(0, 0, 0, 800);
  grd.addColorStop(0, p.color);
  grd.addColorStop(0.25, p.color);
  grd.addColorStop(0.52, '#ffffff'); // description and buttons sit on the white half
  g.fillStyle = grd;
  g.fillRect(0, 0, 1280, 800);
  g.fillStyle = '#fff';
  g.font = '110px Silkscreen';
  g.fillText(p.title, 64, 180, 1150);
  g.font = '28px "Space Mono"';
  g.fillText(`[0${i + 1}]  ${p.tag}`, 64, 250);
  g.fillText(p.note, 64, 300);

  const size = phone ? 44 : 34;
  g.fillStyle = '#0d0d0d';
  g.font = `700 ${size}px "Space Mono"`;
  let line = '', y = phone ? 420 : 470;
  for (const word of p.blurb.split(' ')) {
    if (g.measureText(line + word).width > 1140) { g.fillText(line, 64, y); line = ''; y += size * 1.38; }
    line += word + ' ';
  }
  g.fillText(line, 64, y);

  // buttons along the bottom, shrunk to fit one row
  let font = phone ? 34 : 26, rects;
  do {
    g.font = `700 ${font}px "Space Mono"`;
    const h = font * 2.5, pad = font, gap = 16;
    let x = 64;
    rects = actions.map((a) => {
      const w = g.measureText(a.label).width + pad * 2, r = { x, y: 760 - h, w, h };
      x += w + gap;
      return r;
    });
    font -= 2;
  } while (rects.at(-1).x + rects.at(-1).w > 1216 && font > 16);
  rects.forEach((r, n) => {
    const filled = n === 0 || n === hot || n === focus;
    g.fillStyle = n === hot || n === focus ? p.color : '#0d0d0d';
    if (filled) g.fillRect(r.x, r.y, r.w, r.h);
    g.lineWidth = 3;
    g.strokeStyle = n === hot || n === focus ? p.color : '#0d0d0d';
    g.strokeRect(r.x + 1.5, r.y + 1.5, r.w - 3, r.h - 3);
    if (n === focus) { g.setLineDash([8, 6]); g.strokeStyle = '#0d0d0d'; g.strokeRect(r.x - 8, r.y - 8, r.w + 16, r.h + 16); g.setLineDash([]); }
    g.fillStyle = filled ? '#fff' : '#0d0d0d';
    g.textBaseline = 'middle';
    g.fillText(actions[n].label, r.x + (r.w - g.measureText(actions[n].label).width) / 2, r.y + r.h / 2 + 2);
    g.textBaseline = 'alphabetic';
  });
  return rects;
}

export function initWork(section, { reduced, scrollTo, lenis, openCase }) {
  const canvas = section.querySelector('.work-gl');
  const list = section.querySelector('.work-list');

  // ----- left list -----
  const buttons = projects.map((p, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.textContent = `[0${i + 1}] ${p.title}`;
    b.addEventListener('click', () => scrollTo(cardY(i)));
    li.append(b);
    list.append(li);
    return b;
  });

  // ----- three -----
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch {
    buttons.forEach((b, i) => b.addEventListener('click', () => openCase(i))); // no WebGL: the list opens the case studies
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

  const geo = new THREE.PlaneGeometry(CARD_W, CARD_H, 40, 24);
  const loader = new THREE.TextureLoader();
  const cards = projects.map((p, i) => {
    const art = document.createElement('canvas');
    art.width = 1280;
    art.height = 800;
    const tex = new THREE.CanvasTexture(art);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.ShaderMaterial({
      vertexShader: cardVert,
      fragmentShader: cardFrag,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: { uTex: { value: tex }, uBend: { value: 1 }, uOpacity: { value: 1 }, uTime: { value: 0 } },
    });
    if (p.image) loader.load(p.image, (t) => { t.colorSpace = THREE.SRGBColorSpace; mat.uniforms.uTex.value.dispose(); mat.uniforms.uTex.value = t; });
    const m = new THREE.Mesh(geo, mat);
    // what the card's buttons do: the case study, then each public link
    m.userData.actions = [{ label: 'CASE STUDY ->', cursor: 'OPEN', run: () => openCase(i) },
      ...p.links.map(([label, url]) => ({ label: `${label} ->`, cursor: 'VISIT', run: () => open(url, '_blank', 'noopener') }))];
    m.userData.paint = (hot, focus) => {
      if (p.image) return; // a supplied image replaces the drawn card
      m.userData.rects = paintCard(art.getContext('2d'), p, i, m.userData.actions, hot, focus);
      tex.needsUpdate = true;
    };
    m.userData.paint();
    scene.add(m);
    return m;
  });

  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType }); // linear colour, no banding
  const post = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      vertexShader: postVert,
      fragmentShader: postFrag,
      uniforms: { tScene: { value: rt.texture }, uTime: { value: 0 }, uGlitch: { value: 0 }, uAspect: { value: 1 }, uBg: { value: new THREE.Color() } },
      depthTest: false,
    })
  );
  const postScene = new THREE.Scene();
  postScene.add(post);
  const postCam = new THREE.OrthographicCamera();

  const syncTheme = () => {
    scene.background = new THREE.Color(css('--bg'));
    post.material.uniforms.uBg.value.copy(scene.background);
  };
  syncTheme();
  addEventListener('themechange', () => { syncTheme(); visible && renderOnce(); });

  let spread = 1; // narrower path on phones
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    rt.setSize(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    camera.aspect = w / h;
    post.material.uniforms.uAspect.value = camera.aspect;
    spread = Math.min(1, camera.aspect / 1.4);
    // pull back until the whole card fits the width (portrait screens)
    camera.position.z = Math.max(0, (CARD_W * 1.12) / (2 * Math.tan((camera.fov * Math.PI) / 360) * camera.aspect) - FOCUS);
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  // ----- scroll -----
  let target = 0, current = 0, active = -1, visible = false;
  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (st) => (target = st.progress * (N - 1)),
    onToggle: (st) => (visible = st.isActive),
  });
  // snap to the nearest card once scrolling settles; done through Lenis so the two never fight
  const cardY = (i) => trigger.start + (trigger.end - trigger.start) * (i / (N - 1));
  let snapTimer;
  lenis?.on('scroll', () => {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      if (!trigger.isActive) return;
      const y = cardY(Math.round(trigger.progress * (N - 1)));
      if (Math.abs(scrollY - y) > 2) lenis.scrollTo(y, { duration: 0.9 });
    }, 160);
  });
  // also render while the section scrolls into / out of view
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(section);

  // ----- layout: each card's place is a function of its distance d from focus -----
  function place(m, d) {
    const up = d > 0; // the upcoming card sits lower and further right than the passed one
    const a = -d * STEP * (up ? 1.07 : 1);
    const y = DRUM_R * Math.sin(a);
    m.position.set(-y * (up ? 0.75 : SKEW) * spread, y, DRUM_Z - DRUM_R * Math.cos(a));
    m.rotation.set(a * 4, a * 1.2, a * 0.3); // over-rotated so neighbours read as steep slivers
    const u = m.material.uniforms;
    u.uBend.value = 1 - Math.min(Math.abs(d), 1) * 0.85; // only the focused card bulges
    u.uOpacity.value = Math.min(1, Math.max(0, (2 - Math.abs(d)) * 2));
    m.visible = u.uOpacity.value > 0.001;
  }

  // the camera leans a touch toward the pointer, so the drum feels like a physical object
  const look = { x: 0, y: 0 };
  if (!reduced && matchMedia('(pointer: fine)').matches) {
    addEventListener('pointermove', (e) => {
      look.x = (e.clientX / innerWidth) * 2 - 1;
      look.y = (e.clientY / innerHeight) * 2 - 1;
    });
  }

  // ----- the focused card's buttons are drawn on it; clicks are traced back onto the bent card -----
  const info = section.querySelector('.work-info');
  const actions = info.querySelector('.work-actions');
  let hot = -1;
  const settled = () => visible && Math.abs(current - active) < 0.08;
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), inv = new THREE.Matrix4();
  // screen point -> which drawn button of the focused card is under it (-1 for none)
  const hit = (e) => {
    const m = cards[active];
    if (!settled() || !m.userData.rects) return -1;
    const r = canvas.getBoundingClientRect();
    // the post pass shows scene pixel lens(uv) at screen uv, so follow the same lens forward
    const cx = (e.clientX - r.left) / r.width - 0.5, cy = 0.5 - (e.clientY - r.top) / r.height;
    const k = (1 + LENS * ((cx * camera.aspect) ** 2 + cy * cy)) / (1 + LENS * 0.25);
    ndc.set(cx * k * 2, cy * k * 2);
    ray.setFromCamera(ndc, camera);
    inv.copy(m.matrixWorld).invert();
    const o = ray.ray.origin.clone().applyMatrix4(inv), d = ray.ray.direction.clone().transformDirection(inv);
    const bend = m.material.uniforms.uBend.value;
    let x = 0, y = 0, z = 0;
    for (let n = 0; n < 4; n++) { // the vertex shader bulges the card; walk the ray onto that surface
      const t = (z - o.z) / d.z;
      x = o.x + t * d.x;
      y = o.y + t * d.y;
      z = -(x * x * 0.12 + y * y * 0.16) * bend;
    }
    const px = (x / CARD_W + 0.5) * 1280, py = (0.5 - y / CARD_H) * 800;
    return m.userData.rects.findIndex((b) => px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h);
  };
  const setHot = (n) => {
    if (n === hot) return;
    hot = n;
    cards[active].userData.paint(hot);
    canvas.dataset.cursor = hot < 0 ? 'SCROLL' : cards[active].userData.actions[hot].cursor;
    canvas.dispatchEvent(new PointerEvent('pointerover', { bubbles: true })); // refresh the custom cursor's label
  };
  canvas.addEventListener('pointermove', (e) => e.pointerType === 'mouse' && setHot(hit(e)));
  canvas.addEventListener('pointerleave', () => setHot(-1));
  canvas.addEventListener('click', (e) => { const n = hit(e); if (n >= 0) cards[active].userData.actions[n].run(); });

  // real buttons for keyboard and screen readers, visually hidden: focusing one lights it up on the card
  const showInfo = (i) => {
    const p = projects[i];
    info.querySelector('h3').textContent = p.title;
    info.querySelector('p').textContent = p.blurb;
    actions.replaceChildren(...cards[i].userData.actions.map((a, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = a.label.replace(' ->', '');
      b.addEventListener('click', a.run);
      b.addEventListener('focus', () => cards[i].userData.paint(-1, n));
      b.addEventListener('blur', () => cards[i].userData.paint());
      return b;
    }));
  };

  const clock = new THREE.Clock();
  function frame() {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const dt = Math.min(clock.getDelta(), 0.1);
    const t = clock.elapsedTime;
    const prev = current;
    current += (target - current) * (reduced ? 1 : 1 - Math.exp(-dt * 5)); // same feel at any fps
    const vel = Math.abs(current - prev) / Math.max(dt, 1e-3) / 60;
    const ease = 1 - Math.exp(-dt * 3);
    camera.rotation.y += (-look.x * 0.045 - camera.rotation.y) * ease;
    camera.rotation.x += (-look.y * 0.03 - camera.rotation.x) * ease;

    cards.forEach((m, i) => {
      place(m, i - current);
      m.material.uniforms.uTime.value = t;
    });

    const pu = post.material.uniforms;
    pu.uTime.value = t;
    pu.uGlitch.value = reduced ? 0 : Math.min(vel * 6, 0.6);

    const a = Math.round(current);
    if (a !== active) {
      if (active >= 0) cards[active].userData.paint();
      hot = -1;
      active = a;
      buttons.forEach((b, i) => b.setAttribute('aria-current', String(i === a)));
      showInfo(a);
    }

    renderOnce();
  }
  function renderOnce() {
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(postScene, postCam);
  }
  frame();
}
