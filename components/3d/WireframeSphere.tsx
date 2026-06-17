"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export function WireframeSphere() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#38ABF0" wireframe transparent opacity={0.4} />
    </mesh>
  );
}
