import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PartnerBadges } from "@/components/integrations/PartnerBadges";

export function PartnerBadgesSection() {
  return (
    <ScrollReveal>
      <h2 className="text-label uppercase text-neutral-400">Featured Partners</h2>
      <PartnerBadges />
    </ScrollReveal>
  );
}
