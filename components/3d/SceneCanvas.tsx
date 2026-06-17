"use client";

import { Suspense, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface SceneCanvasProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
}

export function SceneCanvas({
  children,
  className,
  camera = { position: [0, 0, 8], fov: 45 },
}: SceneCanvasProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop || reducedMotion) return null;

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <Canvas
        camera={{ position: camera.position, fov: camera.fov }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#FF6B35" />
        <pointLight position={[-2, -1, -2]} intensity={0.5} color="#38ABF0" />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
