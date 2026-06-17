"use client";

import { SceneCanvas } from "@/components/3d/SceneCanvas";
import { DataGlobe } from "@/components/3d/DataGlobe";

export function DataGlobeScene() {
  return (
    <SceneCanvas className="opacity-50">
      <DataGlobe />
    </SceneCanvas>
  );
}
