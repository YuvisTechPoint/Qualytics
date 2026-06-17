import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface DemoCTAProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function DemoCTA({
  headline = "Ready to take control of your data?",
  subtext = "Schedule a demo to see how Qualytics can help your team operationalize trusted data.",
  ctaText = "Schedule a demo",
  ctaHref = "/demo",
}: DemoCTAProps) {
  return (
    <section className="relative overflow-hidden section-padding bg-base-bg">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-cta-bg)" }}
      />
      <div className="relative mx-auto max-w-2xl text-center container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">{headline}</h2>
          <p className="mt-4 text-body-lg text-neutral-500">{subtext}</p>
          <Button size="lg" className="mt-8" asChild>
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
