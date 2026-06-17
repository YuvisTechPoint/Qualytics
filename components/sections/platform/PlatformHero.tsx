import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

interface PlatformHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function PlatformHero({ title, description, className }: PlatformHeroProps) {
  return (
    <section className={cn("relative overflow-hidden section-padding bg-base-bg", className)}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero-glow)" }}
      />
      <div className="relative mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="max-w-3xl whitespace-pre-line font-display text-display-xl text-neutral-50">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-neutral-500">{description}</p>
          <Button className="mt-8" asChild>
            <Link href="/demo">Schedule a demo</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
