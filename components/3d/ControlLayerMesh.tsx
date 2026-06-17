"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const layers = [
  { y: 1.2, color: "#38ABF0", opacity: 0.3, label: "Data Sources" },
  { y: 0, color: "#FF6B35", opacity: 0.5, label: "Control Layer" },
  { y: -1.2, color: "#22C55E", opacity: 0.3, label: "Outputs" },
];

export function ControlLayerMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 0.26;
    }
    pulseRef.current += delta;
  });

  return (
    <group ref={groupRef}>
      {layers.map((layer, i) => (
        <mesh key={layer.label} position={[0, layer.y, 0]}>
          <planeGeometry args={[4, 2.5]} />
          <meshStandardMaterial
            color={layer.color}
            transparent
            opacity={layer.opacity + (i === 1 ? Math.sin(pulseRef.current * 2) * 0.1 : 0)}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      {[0.6, -0.6].map((y, i) => (
        <mesh key={`arrow-${i}`} position={[0, y, 0.1]}>
          <coneGeometry args={[0.08, 0.2, 8]} />
          <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}
