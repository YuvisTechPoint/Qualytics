"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 30;
const EDGE_COUNT = 50;

function createNetwork() {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3
      )
    );
  }

  const edges: [number, number][] = [];
  for (let i = 0; i < EDGE_COUNT; i++) {
    const a = Math.floor(Math.random() * NODE_COUNT);
    let b = Math.floor(Math.random() * NODE_COUNT);
    while (b === a) b = Math.floor(Math.random() * NODE_COUNT);
    edges.push([a, b]);
  }

  return { nodes, edges };
}

export function DataFlowNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, edges } = useMemo(() => createNetwork(), []);
  const pulseRefs = useRef<number[]>(edges.map(() => Math.random()));

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
    }
    pulseRefs.current = pulseRefs.current.map((p) => {
      let next = p + delta * 0.4;
      if (next > 1) next = 0;
      return next;
    });
  });

  const nodeColors = useMemo(() => {
    return nodes.map((_, i) => {
      if (i % 3 === 0) return "#38ABF0";
      if (i % 3 === 1) return "#FF6B35";
      return "#22C55E";
    });
  }, [nodes]);

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => {
        const start = nodes[a];
        const end = nodes[b];
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={`edge-${i}`}>
            <bufferGeometry attach="geometry" {...geometry} />
            <lineBasicMaterial attach="material" color="#1E1E35" transparent opacity={0.6} />
          </line>
        );
      })}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.05 + Math.random() * 0.1, 16, 16]} />
          <meshStandardMaterial
            color={nodeColors[i]}
            emissive={nodeColors[i]}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}
