import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const defaultStats = [
  { value: 20, suffix: "x", label: "Higher ROI", description: "in year one" },
  { value: 3.67, prefix: "$", suffix: "M", decimals: 2, label: "Lower Costs", description: "projected savings" },
  { value: 4, suffix: "x", label: "Quicker Wins", description: "faster remediation" },
  { value: 1.5, suffix: " FTEs", decimals: 1, label: "Resources Saved", description: "team efficiency" },
];

export function ResultsStats({
  stats = defaultStats,
  title = "The Results",
  subtitle = "Enterprises use Qualytics to operationalize trusted data at scale.",
}: {
  stats?: typeof defaultStats;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-padding bg-base-surface">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">{title}</h2>
          <p className="mt-4 text-body-lg text-neutral-500">{subtitle}</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <CountUp
                to={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
                className="text-display-sm text-neutral-50"
              />
              <div className="mt-2 text-label uppercase text-brand-400">{stat.label}</div>
              <p className="mt-2 text-body-sm text-neutral-500">{stat.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
