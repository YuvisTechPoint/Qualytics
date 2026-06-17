import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export function PlatformStats({ stats }: { stats: Stat[] }) {
  return (
    <section className="section-padding bg-base-surface">
      <div className="mx-auto grid max-w-wide gap-8 sm:grid-cols-3 container-padding">
        {stats.map((stat) => (
          <ScrollReveal key={stat.label} className="text-center">
            <CountUp
              to={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="text-display-md text-neutral-50"
            />
            <p className="mt-2 text-body-md text-neutral-500">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
