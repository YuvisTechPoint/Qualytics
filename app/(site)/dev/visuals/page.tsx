import { CircularProgress } from "@/components/charts/CircularProgress";
import { AnomalyTimeline } from "@/components/charts/AnomalyTimeline";
import { CountUp } from "@/components/animations/CountUp";
import { Hero3DScene, CTA3DScene } from "@/components/3d";
import dynamic from "next/dynamic";

const DynamicDataGlobe = dynamic(
  () => import("@/components/3d/DataGlobe").then((m) => m.DataGlobe),
  { ssr: false }
);

const DynamicSceneCanvas = dynamic(
  () => import("@/components/3d/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false }
);

export default function VisualsDevPage() {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="space-y-24 bg-base-bg py-24 container-padding">
      <section>
        <h2 className="mb-8 font-display text-display-md">3D Hero Scene</h2>
        <div className="relative h-96 overflow-hidden rounded-xl border border-base-border">
          <Hero3DScene />
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-display text-display-md">Control Layer Mesh</h2>
        <div className="relative h-96 overflow-hidden rounded-xl border border-base-border">
          <CTA3DScene />
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-display text-display-md">Data Globe</h2>
        <div className="relative h-96 overflow-hidden rounded-xl border border-base-border">
          <DynamicSceneCanvas>
            <DynamicDataGlobe />
          </DynamicSceneCanvas>
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-display text-display-md">Circular Progress</h2>
        <div className="flex flex-wrap gap-8">
          <CircularProgress percentage={68} label="risk stat" color="orange" />
          <CircularProgress percentage={76} label="AI challenge" color="blue" />
          <CircularProgress percentage={88} label="adoption" color="green" />
        </div>
      </section>

      <section>
        <h2 className="mb-8 font-display text-display-md">Anomaly Timeline</h2>
        <AnomalyTimeline className="w-full max-w-sm" />
      </section>

      <section>
        <h2 className="mb-8 font-display text-display-md">CountUp</h2>
        <CountUp to={20} suffix="x" className="text-display-xl text-brand-400" />
      </section>
    </div>
  );
}
