"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef, useEffect, useMemo, useState } from "react";
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

function Knot({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  const colorA = useMemo(() => new THREE.Color("#B8C08A"), []);
  const colorB = useMemo(() => new THREE.Color("#D4DCA6"), []);
  const tmp = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const s = scroll.current;

    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.15 + s * Math.PI * 0.6;
      group.current.position.y = -s * 2.2 + Math.sin(t * 0.4) * 0.08;
      group.current.position.z = -s * 1.4;
      const scale = 1 + s * 0.6;
      group.current.scale.setScalar(scale);
    }

    if (inner.current) {
      inner.current.rotation.z += delta * 0.15;
    }
    if (wire.current) {
      wire.current.rotation.z -= delta * 0.25;
      wire.current.rotation.x += delta * 0.05;
    }
    if (glow.current) {
      glow.current.rotation.y -= delta * 0.3;
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      tmp.copy(colorA).lerp(colorB, (Math.sin(t * 0.3) + 1) / 2);
      mat.color.copy(tmp);
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#1F1A15"
            metalness={0.35}
            roughness={0.55}
            flatShading
          />
        </mesh>

        <mesh ref={wire} scale={1.35}>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshBasicMaterial color="#B8C08A" wireframe transparent opacity={0.35} />
        </mesh>

        <mesh ref={glow} scale={1.9}>
          <torusKnotGeometry args={[1.1, 0.04, 200, 16, 2, 3]} />
          <meshBasicMaterial color="#B8C08A" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ count = 140 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#F2EDE4"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.55}
      />
    </points>
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
      style={{
        background:
          "radial-gradient(1200px 700px at 70% 20%, rgba(184,192,138,0.12), transparent 60%), radial-gradient(900px 700px at 10% 90%, rgba(212,220,166,0.08), transparent 60%), #0A0908",
      }}
    >
      {mounted && <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[4, 5, 5]} intensity={1.1} color="#F2EDE4" />
          <directionalLight position={[-5, -3, -2]} intensity={0.5} color="#B8C08A" />
          <Knot scroll={scroll} />
          <Particles />
          <fog attach="fog" args={["#0A0908", 6, 14]} />
        </Suspense>
      </Canvas>}
    </div>
  );
}
