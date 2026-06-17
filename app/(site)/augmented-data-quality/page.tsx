import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { FeatureSection } from "@/components/sections/platform/FeatureSection";
import { PlatformStats } from "@/components/sections/platform/PlatformStats";
import { CustomerQuotes } from "@/components/sections/platform/CustomerQuotes";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";
import { RulesCoverageBar } from "@/components/charts/RulesCoverageBar";
import { platformFeatures, platformFaqs } from "@/lib/platform-data";

export const metadata: Metadata = {
  title: "Augmented Data Quality",
  description:
    "Qualytics is the augmented data quality platform that automates 95% of checks, aligns business and data teams, and prevents bad data early.",
};

export default function AugmentedDataQualityPage() {
  return (
    <>
      <PlatformHero
        title={"Take control of data quality before it\ncontrols your business"}
        description="Qualytics infers 95% of your data quality rules from observed data behavior and continuously adapts as that behavior changes. Your teams guide governance with business context."
      />
      <section className="section-padding bg-base-surface">
        <div className="mx-auto max-w-narrow container-padding">
          <h2 className="font-display text-display-md text-neutral-50">Why augmented data quality?</h2>
          <p className="mt-4 text-body-lg text-neutral-500">
            Qualytics is augmented, not autonomous: AI infers and maintains the majority of your
            rules while your teams guide governance with business context.
          </p>
          <div className="mt-8">
            <RulesCoverageBar percentage={95} label="AI-automated rule coverage" />
          </div>
        </div>
      </section>
      {platformFeatures.augmented.map((feature) => (
        <FeatureSection key={feature.title} {...feature} />
      ))}
      <PlatformStats
        stats={[
          { value: 20, suffix: "K+", label: "rules in production per average customer" },
          { value: 95, suffix: "%+", label: "of rules automated through AI inference" },
          { value: 20, suffix: "+", label: "business SMEs actively engaged per customer" },
        ]}
      />
      <CustomerQuotes />
      <FAQAccordion faqs={platformFaqs} />
      <DemoCTA />
    </>
  );
}
