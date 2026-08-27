"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MinimalChair = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Very slow auto-rotation — stops when user grabs it (OrbitControls handles that)
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Base Disc */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.15, 64]} />
        <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Hydraulic Stem */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.22, 0.3, 1.55, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.15} />
      </mesh>

      {/* Seat Cushion */}
      <mesh position={[0, 1.65, 0]}>
        <boxGeometry args={[2.8, 0.28, 2.6]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Seat Rounding front edge */}
      <mesh position={[0, 1.65, 1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 2.8, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 3.1, -1.15]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[2.8, 2.8, 0.28]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Headrest */}
      <mesh position={[0, 4.6, -1.3]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.4, 0.7, 0.28]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Left Armrest */}
      <mesh position={[-1.4, 2.55, 0.1]}>
        <boxGeometry args={[0.18, 0.1, 2.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Left Armrest support */}
      <mesh position={[-1.4, 2.15, -0.8]}>
        <cylinderGeometry args={[0.05, 0.05, 0.85, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
      </mesh>

      {/* Right Armrest */}
      <mesh position={[1.4, 2.55, 0.1]}>
        <boxGeometry args={[0.18, 0.1, 2.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Right Armrest support */}
      <mesh position={[1.4, 2.15, -0.8]}>
        <cylinderGeometry args={[0.05, 0.05, 0.85, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
      </mesh>

      {/* Footrest bar */}
      <mesh position={[0, 1.1, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 2.6, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

export const CustomChair3D = () => {
  return (
    <Canvas
      camera={{ position: [4, 3, 8], fov: 42 }}
      className="w-full h-full"
      style={{ cursor: 'grab' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      <directionalLight position={[-8, 5, -8]} intensity={0.4} />
      <pointLight position={[0, 8, 0]} intensity={0.6} />
      <Environment preset="studio" />
      <MinimalChair />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.8}
        minDistance={5}
        maxDistance={14}
        autoRotate={false}
      />
    </Canvas>
  );
};
