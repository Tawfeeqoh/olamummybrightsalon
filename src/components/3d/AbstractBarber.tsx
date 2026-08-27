"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StylizedModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 4) * 0.5;
      groupRef.current.rotation.x = Math.cos(t / 3) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.5;
      ringRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Geometry representing precision (sharp edges) vs organic form (sphere) */}
        
        {/* The organic form (hair/head) */}
        <mesh position={[0, 0, 0]} scale={1.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#111111" 
            envMapIntensity={2} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.9} 
            roughness={0.2}
            distort={0.2}
            speed={1.5}
          />
        </mesh>

        {/* The precision tool (sharp metallic shard) */}
        <mesh position={[1.5, 1, 1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <boxGeometry args={[0.1, 3, 0.4]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
        </mesh>

        <mesh position={[-1.2, -1, 1.2]} rotation={[-Math.PI / 6, Math.PI / 3, 0]}>
          <boxGeometry args={[0.05, 2, 0.2]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
        </mesh>

        {/* Orbiting Ring (perfection) */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.02, 32, 100]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
        </mesh>
      </Float>
    </group>
  );
};

export const CustomHero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full pointer-events-none">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />
      <Environment preset="studio" />
      <StylizedModel />
    </Canvas>
  );
};
