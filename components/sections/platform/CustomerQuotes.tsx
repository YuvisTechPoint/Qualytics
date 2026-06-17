import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const quotes = [
  {
    quote:
      "Qualytics transformed how we approach data quality. The AI-augmented approach let us scale coverage without scaling headcount.",
    author: "Data Governance Lead",
    company: "Fortune 500 Financial Services",
  },
  {
    quote:
      "Having business SMEs actively engaged in governance was a game changer. AgentQ made it accessible to everyone.",
    author: "Chief Data Officer",
    company: "Global Healthcare Organization",
  },
  {
    quote:
      "We went from reactive firefighting to proactive control. The data control layer catches issues before they reach our AI systems.",
    author: "VP of Data Engineering",
    company: "Enterprise Retail",
  },
];

export function CustomerQuotes() {
  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">Hear from Our Customers</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <ScrollReveal key={q.author}>
              <Card className="h-full p-6 transition-all hover:border-brand-400/20 hover:shadow-glow-orange">
                <p className="text-body-md text-neutral-400">&ldquo;{q.quote}&rdquo;</p>
                <div className="mt-6">
                  <div className="text-sm font-medium text-neutral-50">{q.author}</div>
                  <div className="text-body-sm text-neutral-600">{q.company}</div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
