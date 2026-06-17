import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";

const testimonials = [
  {
    quote:
      "Qualytics helped us automate over 20K data quality rules in year one, delivering 20x ROI.",
    author: "VP Data Governance",
    company: "AES",
  },
  {
    quote:
      "The augmented approach let our business SMEs actively participate in governance without writing SQL.",
    author: "Chief Data Officer",
    company: "Brookfield",
  },
  {
    quote:
      "We reclaimed thousands of engineering hours by shifting from manual rule authoring to AI inference.",
    author: "Director of Data Engineering",
    company: "MAPFRE",
  },
  {
    quote:
      "AgentQ made data quality accessible to our entire organization, not just the data team.",
    author: "Head of Analytics",
    company: "Octus",
  },
  {
    quote:
      "The data control layer caught issues before they reached our AI copilots. That alone was worth the investment.",
    author: "AI Platform Lead",
    company: "Revantage",
  },
  {
    quote:
      "Running a global DQ program with 1.5 FTEs seemed impossible until Qualytics.",
    author: "Data Quality Manager",
    company: "Wellstar Health System",
  },
];

export const metadata: Metadata = {
  title: "Customer Love",
  description: "Real stories from teams using Qualytics to operationalize trusted data.",
};

export default function CustomerLovePage() {
  return (
    <>
      <section className="section-padding bg-base-bg">
        <div className="mx-auto max-w-wide container-padding">
          <ScrollReveal>
            <h1 className="font-display text-display-xl text-neutral-50">Customer Love</h1>
            <p className="mt-4 max-w-2xl text-body-lg text-neutral-500">
              Real stories from teams using Qualytics to operationalize trusted data at scale.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <ScrollReveal key={t.company}>
                <Card className="h-full p-6 transition-all hover:border-brand-400/20 hover:shadow-glow-orange">
                  <p className="text-body-md text-neutral-400">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6">
                    <div className="text-sm font-medium text-neutral-50">{t.author}</div>
                    <div className="text-body-sm text-brand-400">{t.company}</div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <DemoCTA />
    </>
  );
}
