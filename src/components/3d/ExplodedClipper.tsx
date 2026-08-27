"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useProgress } from '@react-three/drei';

import * as THREE from 'three';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-center">
        <p className="text-xs uppercase tracking-widest">{Math.round(progress)}% Loading</p>
      </div>
    </Html>
  );
}

// Procedural Exploded Clipper Placeholder
function ClipperModel({ isExploded }: { isExploded: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animate explosion based on state
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Interpolate children positions
      const children = groupRef.current.children;
      // Body stays at 0
      // Blade moves out
      children[1].position.z += ( (isExploded ? 1.5 : 0.6) - children[1].position.z ) * delta * 5;
      // Guard moves out further
      children[2].position.z += ( (isExploded ? 3.0 : 0.7) - children[2].position.z ) * delta * 5;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 4, 0]}>
      {/* 0: Motor Housing / Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.6, 2.5]} />
        <meshStandardMaterial color="#8B0000" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* 1: Blade Assembly */}
      <mesh position={[0, -0.1, 0.6]}>
        <boxGeometry args={[0.7, 0.1, 0.5]} />
        <meshStandardMaterial color="#ccc" metalness={1} roughness={0.2} />
      </mesh>

      {/* 2: Guard */}
      <mesh position={[0, -0.15, 0.7]}>
        <boxGeometry args={[0.75, 0.2, 0.4]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
}

export const ExplodedClipper = ({ isExploded }: { isExploded: boolean }) => {
  return (
    <Canvas shadows camera={{ position: [4, 3, 4], fov: 40 }}>
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      
      <React.Suspense fallback={<Loader />}>
        <Environment preset="city" />
        <ClipperModel isExploded={isExploded} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={!isExploded} />
      </React.Suspense>
    </Canvas>
  );
};
