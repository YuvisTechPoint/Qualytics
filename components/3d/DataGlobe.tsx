"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ArcLine({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const curve = new THREE.QuadraticBezierCurve3(
    start,
    new THREE.Vector3(0, 0, 2.5),
    end
  );
  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial attach="material" color="#0E8DD6" transparent opacity={0.6} />
    </line>
  );
}

export function DataGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  const arcs = [
    [new THREE.Vector3(1.5, 0.5, 1), new THREE.Vector3(-1, 0.8, 0.5)],
    [new THREE.Vector3(-1.2, -0.3, 1), new THREE.Vector3(0.8, -0.6, -1)],
    [new THREE.Vector3(0.5, 1.2, 0), new THREE.Vector3(-0.5, -1, 0.8)],
  ];

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#0E8DD6" wireframe transparent opacity={0.3} />
      </mesh>
      {arcs.map(([start, end], i) => (
        <ArcLine key={i} start={start} end={end} />
      ))}
    </>
  );
}
