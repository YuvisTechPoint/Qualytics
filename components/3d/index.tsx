"use client";

import dynamic from "next/dynamic";
import { SceneCanvas } from "./SceneCanvas";

export const DynamicDataFlowNetwork = dynamic(
  () => import("./DataFlowNetwork").then((m) => m.DataFlowNetwork),
  { ssr: false }
);

export const DynamicDataParticleField = dynamic(
  () => import("./DataParticleField").then((m) => m.DataParticleField),
  { ssr: false }
);

export const DynamicControlLayerMesh = dynamic(
  () => import("./ControlLayerMesh").then((m) => m.ControlLayerMesh),
  { ssr: false }
);

export const DynamicDataGlobe = dynamic(
  () => import("./DataGlobe").then((m) => m.DataGlobe),
  { ssr: false }
);

export function Hero3DScene() {
  return (
    <SceneCanvas className="opacity-40 md:left-1/2">
      <DynamicDataParticleField />
      <DynamicDataFlowNetwork />
    </SceneCanvas>
  );
}

export function CTA3DScene() {
  return (
    <SceneCanvas className="opacity-30">
      <DynamicControlLayerMesh />
    </SceneCanvas>
  );
}
