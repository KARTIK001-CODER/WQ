"use client";

import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import SceneErrorBoundary from "@/components/landing/ui/scene-error-boundary";
import AetheraFallback from "@/components/landing/aethera-fallback";

// ─────────────────────────────────────────────────────────────────
// THE AETHERA CORE — Realistic twisting botanical/organic structure
// ─────────────────────────────────────────────────────────────────
function InnerCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={ref} scale={0.75}>
      {/* Reduced geometry segments significantly for performance (was 300, 40) */}
      <torusKnotGeometry args={[0.7, 0.25, 128, 16, 3, 5]} />
      <meshStandardMaterial
        color="#3D8C6F"
        metalness={0.8}
        roughness={0.15}
        envMapIntensity={2}
      />
    </mesh>
  );
}

// ─────────────────────────────────────────────────────────────────
// THE GLASS TERRARIUM — Hyper-realistic refracting dome
// ─────────────────────────────────────────────────────────────────
function GlassOrb() {
  const [props] = useState({
    backside: true,
    backsideThickness: 1,
    thickness: 0.8,
    chromaticAberration: 0.06,
    anisotropy: 0.3,
    distortion: 0.2,
    distortionScale: 0.5,
    temporalDistortion: 0.1,
    ior: 1.5,
    color: "#E8F5EE",
    samples: 4, // Reduced from 8 for better performance
    resolution: 256, // Added resolution limit for the transmission buffer
    transmission: 1,
    roughness: 0.05,
  });

  return (
    <mesh>
      {/* Reduced sphere geometry segments (was 64x64) */}
      <sphereGeometry args={[1.4, 32, 32]} />
      <MeshTransmissionMaterial {...props} />
    </mesh>
  );
}

// ─────────────────────────────────────────────────────────────────
// DEEP MOSS PEDESTAL — Grounds the realistic object
// ─────────────────────────────────────────────────────────────────
function Pedestal() {
  return (
    <mesh position={[0, -1.5, 0]}>
      <cylinderGeometry args={[1.2, 1.3, 0.2, 32]} />
      <meshStandardMaterial
        color="#1E2D26"
        roughness={0.9}
        metalness={0.1}
      />
      <mesh position={[0, 0.11, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 32]} />
        <meshStandardMaterial color="#F2C94C" metalness={1} roughness={0.2} />
      </mesh>
    </mesh>
  );
}

// ─────────────────────────────────────────────────────────────────
// FLOATING RINGS — High-end jewelry aesthetic
// ─────────────────────────────────────────────────────────────────
function OrbitingRings() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (group1.current) {
      group1.current.rotation.x += delta * 0.1;
      group1.current.rotation.y += delta * 0.15;
    }
    if (group2.current) {
      group2.current.rotation.x -= delta * 0.12;
      group2.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <>
      <group ref={group1}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.9, 0.015, 8, 64]} />
          <meshStandardMaterial color="#F2C94C" metalness={1} roughness={0.1} />
        </mesh>
      </group>
      <group ref={group2}>
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 3]}>
          <torusGeometry args={[2.2, 0.01, 8, 64]} />
          <meshStandardMaterial color="#6BB5A1" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// SCENE ASSEMBLY
// ─────────────────────────────────────────────────────────────────
function SceneContents() {
  useFrame((state) => {
    const camera = state.camera;
    const t = state.clock.elapsedTime;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      Math.sin(t * 0.2) * 0.5 + (state.pointer.x * 1.5),
      0.05
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      1 + Math.cos(t * 0.2) * 0.2 + (state.pointer.y * 0.5),
      0.05
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#F6FAF8" castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#F2C94C" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <GlassOrb />
        <InnerCore />
        <OrbitingRings />
        <Sparkles
          count={80}
          scale={2.5}
          size={1.5}
          speed={0.4}
          opacity={0.8}
          color="#F2C94C"
        />
      </Float>

      <Pedestal />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.6}
        scale={10}
        blur={2.5}
        far={4}
        resolution={256}
        color="#1E2D26"
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// MAIN EXPORT — with error boundary and fallback
// ─────────────────────────────────────────────────────────────────
export default function AetheraScene() {
  return (
    <div className="w-full h-full">
      <SceneErrorBoundary fallback={<AetheraFallback />}>
        <Canvas
          camera={{ position: [0, 1, 6], fov: 40 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: false,
          }}
          style={{ background: "transparent" }}
          dpr={[1, 1.2]}
          onCreated={(state) => {
            state.gl.setClearColor(0x000000, 0);
          }}
        >
          <Suspense fallback={null}>
            <SceneContents />
          </Suspense>
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
