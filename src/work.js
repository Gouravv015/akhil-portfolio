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

function drawCardTexture(p, i) {
  const c = document.createElement('canvas');
  c.width = 1280;
  c.height = 800;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 800);
  grd.addColorStop(0, p.color);
  grd.addColorStop(1, '#ffffff');
  g.fillStyle = grd;
  g.fillRect(0, 0, 1280, 800);
  g.fillStyle = '#fff';
  g.font = '110px Silkscreen';
  g.fillText(p.title, 64, 180, 1150);
  g.font = '28px "Space Mono"';
  g.fillText(`[0${i + 1}]  ${p.tag}`, 64, 250);
  g.fillStyle = 'rgba(0,0,0,.55)';
  g.fillText('VIEW CASE  ->', 64, 740);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function initWork(section, { reduced, scrollTo, lenis }) {
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
    return; // no WebGL: list still works as plain navigation
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

  const geo = new THREE.PlaneGeometry(CARD_W, CARD_H, 40, 24);
  const loader = new THREE.TextureLoader();
  const cards = projects.map((p, i) => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: cardVert,
      fragmentShader: cardFrag,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: { uTex: { value: drawCardTexture(p, i) }, uBend: { value: 1 }, uOpacity: { value: 1 }, uTime: { value: 0 } },
    });
    if (p.image) loader.load(p.image, (t) => { t.colorSpace = THREE.SRGBColorSpace; mat.uniforms.uTex.value.dispose(); mat.uniforms.uTex.value = t; });
    const m = new THREE.Mesh(geo, mat);
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
    camera.position.z = camera.aspect < 1 ? 3 : 0; // pull back so the card fits portrait screens
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
      active = a;
      buttons.forEach((b, i) => b.setAttribute('aria-current', String(i === a)));
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
