import type { Metadata } from "next";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TrustLogos } from "@/components/sections/shared/TrustLogos";
import { ROICounter } from "@/components/charts/ROICounter";

export const metadata: Metadata = {
  title: "Schedule a Demo",
  description: "Schedule a demo to see how Qualytics can help your team operationalize trusted data.",
};

export default function DemoPage() {
  return (
    <>
      <section className="section-padding bg-base-bg">
        <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-2 container-padding">
          <ScrollReveal>
            <h1 className="font-display text-display-xl text-neutral-50">Schedule a demo</h1>
            <p className="mt-4 text-body-lg text-neutral-500">
              See how Qualytics can help your team take control of data quality with AI-augmented
              governance and real-time controls.
            </p>
            <div className="mt-8 rounded-xl border border-base-border bg-base-surface p-6">
              <p className="text-body-sm text-neutral-500">Average customer ROI</p>
              <ROICounter className="font-display text-display-lg text-brand-400" />
              <p className="mt-2 text-body-sm text-neutral-600">in year one</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-xl border border-base-border bg-base-surface p-8">
              <DemoRequestForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <TrustLogos />
    </>
  );
}
