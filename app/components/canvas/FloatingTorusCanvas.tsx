"use client";
import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Torus = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial color={"#915EFF"} roughness={0.4} metalness={0.9} />
    </mesh>
  </Float>
);

const FloatingTorusCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Torus />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default FloatingTorusCanvas;
