import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { FeatureSection } from "@/components/sections/platform/FeatureSection";
import { CustomerQuotes } from "@/components/sections/platform/CustomerQuotes";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";
import { ResultsStats } from "@/components/sections/shared/ResultsStats";
import { platformFeatures, platformFaqs } from "@/lib/platform-data";

const DataGlobeScene = dynamic(
  () => import("@/components/3d/DataGlobeScene").then((m) => m.DataGlobeScene),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Built for Humans & AI",
  description:
    "One governed foundation for business teams, data teams, and AI systems to collaborate on data quality.",
};

export default function BuiltForHumansAndAIPage() {
  return (
    <>
      <div className="relative">
        <PlatformHero
          title={"One foundation for humans\nand AI to trust data"}
          description="Business teams, data teams, and AI systems work on the same governed foundation for data quality. AgentQ makes governance accessible through natural language."
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <DataGlobeScene />
        </div>
      </div>
      {platformFeatures.humans.map((feature) => (
        <FeatureSection key={feature.title} {...feature} />
      ))}
      <ResultsStats title="Shared Governance Results" />
      <CustomerQuotes />
      <FAQAccordion faqs={platformFaqs} />
      <DemoCTA />
    </>
  );
}
