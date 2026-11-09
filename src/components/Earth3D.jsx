import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useEcoScore } from '../context/EcoScoreContext';

function Earth({ scrollProgress }) {
  const meshRef = useRef();
  const { avgScore } = useEcoScore();

  // Create two colors to interpolate between
  const lowScoreColor = new THREE.Color("#a52a2a"); // Brownish
  const highScoreColor = new THREE.Color("#228b22"); // Forest Green

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.y += 0.001;
      
      // Interpolate scale based on scroll progress
      const targetScale = 2.5 * (1 - scrollProgress * 0.7);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

      // Interpolate color based on average eco score
      const scoreFraction = avgScore / 100;
      meshRef.current.material.color.lerpColors(lowScoreColor, highScoreColor, scoreFraction);

      // Make it glow more with a higher score
      meshRef.current.material.emissive.set(highScoreColor);
      meshRef.current.material.emissiveIntensity = scoreFraction * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        metalness={0.3}
        roughness={0.7}
      />
    </mesh>
  );
}

function Lights() {
  const { avgScore } = useEcoScore();
  const lightIntensity = 100 + (avgScore / 100) * 150;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={lightIntensity} color="#4ade80" />
      <pointLight position={[-5, -5, -5]} intensity={lightIntensity} color="#16a34a" />
    </>
  );
}

export default function Earth3D({ scrollProgress }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Lights />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Earth scrollProgress={scrollProgress} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
