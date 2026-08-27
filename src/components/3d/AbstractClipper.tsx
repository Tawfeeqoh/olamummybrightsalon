"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const StylizedClipper = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0.5, 0, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        
        {/* Main Body */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.4, 2.5, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Top Metallic Head */}
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
        </mesh>
        
        {/* Blades */}
        <mesh position={[0, 1.7, 0.1]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.7, 0.3, 0.05]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[0, 1.75, 0.15]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.6, 0.2, 0.05]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.2} />
        </mesh>

        {/* Switch / Details */}
        <mesh position={[0, 0.5, 0.45]}>
          <boxGeometry args={[0.2, 0.4, 0.1]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.4} />
        </mesh>

        {/* Cord Base */}
        <mesh position={[0, -1.3, 0]}>
          <cylinderGeometry args={[0.3, 0.2, 0.2, 32]} />
          <meshStandardMaterial color="#050505" metalness={0.5} roughness={0.8} />
        </mesh>

      </Float>
    </group>
  );
};

export const CustomClipper3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <directionalLight position={[-5, -10, -5]} intensity={0.5} />
      <Environment preset="studio" />
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1.2}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <StylizedClipper />
      </PresentationControls>
    </Canvas>
  );
};
