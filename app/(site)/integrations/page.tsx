import type { Metadata } from "next";
import { getIntegrations } from "@/lib/integrations.server";
import { IntegrationGrid } from "@/components/integrations/IntegrationGrid";
import { PartnerBadgesSection } from "@/components/integrations/PartnerBadgesSection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Qualytics across your data stack with native integrations.",
};

export default async function IntegrationsPage() {
  const integrations = await getIntegrations();

  return (
    <>
      <section className="section-padding bg-base-bg">
        <div className="mx-auto max-w-wide container-padding">
          <ScrollReveal>
            <h1 className="font-display text-display-xl text-neutral-50">Integrations</h1>
            <p className="mt-4 max-w-2xl text-body-lg text-neutral-500">
              Connect Qualytics across your data stack. Native integrations with leading data
              warehouses, streaming platforms, and workflow tools.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <PartnerBadgesSection />
          </div>

          <div className="mt-16">
            <IntegrationGrid integrations={integrations} />
          </div>
        </div>
      </section>
      <DemoCTA />
    </>
  );
}
