import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Qualytics and our mission to operationalize trusted data at scale.",
};

const values = [
  { title: "Technical Authority", description: "We build for enterprise data teams who demand rigor." },
  { title: "Human + AI", description: "AI augments governance; humans define what trusted means." },
  { title: "Validate at Use", description: "Quality signals where data is consumed, not downstream." },
];

const team = [
  { name: "Leadership Team", role: "Executive" },
  { name: "Engineering", role: "Platform" },
  { name: "Customer Success", role: "Enterprise" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="section-padding bg-base-bg">
        <div className="mx-auto max-w-wide container-padding">
          <ScrollReveal>
            <h1 className="font-display text-display-xl text-neutral-50">About Qualytics</h1>
            <p className="mt-6 max-w-2xl text-body-lg text-neutral-500">
              Qualytics is the AI-augmented data quality platform that validates data at the
              moment it&apos;s used. We help enterprise data teams operationalize trusted data
              at scale through the data control layer.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <ScrollReveal key={v.title}>
                <div className="rounded-xl border border-base-border bg-base-surface p-6">
                  <h3 className="font-display text-lg font-semibold text-neutral-50">{v.title}</h3>
                  <p className="mt-2 text-body-sm text-neutral-500">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16">
            <ScrollReveal>
              <h2 className="font-display text-display-md text-neutral-50">Our Team</h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {team.map((member) => (
                <ScrollReveal key={member.name}>
                  <div className="rounded-xl border border-base-border bg-base-elevated p-6 text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand-400/20 to-electric-500/20" />
                    <h3 className="mt-4 font-medium text-neutral-50">{member.name}</h3>
                    <p className="text-body-sm text-neutral-500">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DemoCTA />
    </>
  );
}
