import type { Metadata } from "next";
import { IndustriesTabSection } from "@/components/sections/shared/IndustriesTabSection";
import { ResultsStats } from "@/components/sections/shared/ResultsStats";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";

export const metadata: Metadata = {
  title: "Why Qualytics",
  description: "What sets Qualytics apart from traditional data quality tools.",
};

export default function WhyQualyticsPage() {
  return (
    <>
      <PlatformHero
        title="What sets Qualytics apart"
        description="Qualytics is the only platform that validates data at the moment it's used, combining AI-augmented rule inference with human governance to create a data control layer."
      />
      <IndustriesTabSection />
      <ResultsStats />
      <DemoCTA />
    </>
  );
}
