"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

function useScrollProgress() {
  const ref = useRef(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return ref;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uRes;

  // --- hash / noise ---
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // aspect-correct centered uv
    vec2 uv = vUv;
    vec2 p = (uv - 0.5);
    p.x *= uRes.x / uRes.y;
    p *= 1.6;

    float t = uTime * 0.06;
    float s = uScroll;

    // scroll warps the field: shifts position & rotates slightly
    float ang = s * 0.8;
    float ca = cos(ang), sa = sin(ang);
    p = mat2(ca, -sa, sa, ca) * p;
    p += vec2(s * 0.4, -s * 0.6);

    // Domain warping for silky smoke
    vec2 q = vec2(
      fbm(p + vec2(0.0, t)),
      fbm(p + vec2(5.2, 1.3) + t * 0.8)
    );
    vec2 r = vec2(
      fbm(p + 3.5 * q + vec2(1.7 + t * 0.15, 9.2)),
      fbm(p + 3.5 * q + vec2(8.3, 2.8 + t * 0.126))
    );
    float f = fbm(p + 3.0 * r);

    // Shape into flowing wisps
    float w = smoothstep(0.28, 0.82, f);
    w = pow(w, 1.15);

    // Base dark + wisp greyscale
    vec3 base = vec3(0.032, 0.030, 0.028);
    vec3 wisp = mix(vec3(0.62, 0.62, 0.60), vec3(0.92, 0.92, 0.90), w);
    vec3 col = mix(base, wisp, w);

    // Subtle moss-green tint in the brightest highlights to tie with accent
    float hi = smoothstep(0.75, 1.0, f);
    col = mix(col, vec3(0.72, 0.75, 0.54), hi * 0.18);

    // Gentle vignette
    float vig = smoothstep(1.1, 0.35, length((uv - 0.5) * vec2(uRes.x / uRes.y, 1.0)));
    col *= mix(0.55, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Smoke({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const scrollLerp = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!matRef.current) return;
    scrollLerp.current += (scroll.current - scrollLerp.current) * Math.min(1, delta * 4);
    matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    matRef.current.uniforms.uScroll.value = scrollLerp.current;
    matRef.current.uniforms.uRes.value.set(state.size.width, state.size.height);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function BackgroundScene() {
  const scroll = useScrollProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ backgroundColor: "#07070A" }}
    >
      {mounted && (
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
          orthographic
          camera={{ zoom: 1, position: [0, 0, 1] }}
        >
          <Smoke scroll={scroll} />
        </Canvas>
      )}
    </div>
  );
}
