import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { FeatureSection } from "@/components/sections/platform/FeatureSection";
import { CustomerQuotes } from "@/components/sections/platform/CustomerQuotes";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";
import { platformFeatures, platformFaqs } from "@/lib/platform-data";

export const metadata: Metadata = {
  title: "Trusted Context at Use",
  description:
    "Quality signals delivered as real-time controls wherever your data is used across analytics, applications, and AI workflows.",
};

export default function TrustedContextAtUsePage() {
  return (
    <>
      <PlatformHero
        title={"Trusted context,\ndelivered at the moment of use"}
        description="Data quality is applied as real-time controls across analytics, applications, agents, and AI workflows. Copilots and agents access quality signals through MCP, API, and real-time interfaces."
      />
      {platformFeatures.trusted.map((feature) => (
        <FeatureSection key={feature.title} {...feature} />
      ))}
      <CustomerQuotes />
      <FAQAccordion faqs={platformFaqs} />
      <DemoCTA />
    </>
  );
}
