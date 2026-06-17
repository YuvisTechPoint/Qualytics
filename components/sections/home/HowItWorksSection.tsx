"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cpu, Activity, Zap } from "lucide-react";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    step: 1,
    icon: Database,
    title: "Profile & Understand Your Data",
    description:
      "Qualytics connects to your data sources and learns how your data behaves by identifying patterns, relationships, and expected structures.",
  },
  {
    step: 2,
    icon: Cpu,
    title: "Generate & Maintain Coverage",
    description:
      "Qualytics AI automatically infers and maintains data quality rules as data evolves, while teams guide the system with business context.",
  },
  {
    step: 3,
    icon: Activity,
    title: "Continuously Monitor Quality",
    description:
      "Data is continuously evaluated against learned patterns and expectations, producing quality signals that determine whether data is fit for purpose.",
  },
  {
    step: 4,
    icon: Zap,
    title: "Act on Quality Signals",
    description:
      "Quality signals are applied as controls wherever data is used. Humans, copilots, and agents evaluate whether data is fit for purpose before generating insights or taking action.",
  },
];

export function HowItWorksSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true });

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <h2 className="font-display text-display-md text-neutral-50">How It Works</h2>
        <p className="mt-4 max-w-2xl text-body-lg text-neutral-500">
          Qualytics operates as a continuous data control layer across how data is
          created, transformed, and used.
        </p>

        <div ref={lineRef} className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-base-border lg:block">
            <motion.div
              className="h-full bg-brand-400"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <FadeUp key={item.step}>
                <Card
                  interactive
                  className="relative h-full p-6 transition-all hover:-translate-y-1 hover:border-brand-400/30"
                >
                  <div className="font-mono text-sm text-brand-400">Step {item.step}</div>
                  <item.icon className="mt-4 h-6 w-6 text-brand-400" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-neutral-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-neutral-500">{item.description}</p>
                </Card>
              </FadeUp>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
