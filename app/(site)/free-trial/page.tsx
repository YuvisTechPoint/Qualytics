import type { Metadata } from "next";
import { FreeTrialForm } from "@/components/forms/FreeTrialForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Trial",
  description: "Start your free trial of Qualytics and experience AI-augmented data quality.",
};

export default function FreeTrialPage() {
  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-2 container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Start your free trial</h1>
          <p className="mt-4 text-body-lg text-neutral-500">
            Experience the data control layer firsthand. Connect your data sources and see
            AI-augmented rule inference in action.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-xl border border-base-border bg-base-surface p-8">
            <FreeTrialForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
