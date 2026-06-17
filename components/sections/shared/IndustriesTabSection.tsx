"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgress } from "@/components/charts/CircularProgress";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { tabContent } from "@/lib/animations";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "financial",
    name: "Financial Services",
    stat: 68,
    label: "report data issues create business issues",
    caption: "68% of firms say data issues create business issues",
    color: "orange" as const,
    description:
      "Financial services organizations face increasing pressure to ensure data quality across complex regulatory environments.",
  },
  {
    id: "insurance",
    name: "Insurance",
    stat: 76,
    label: "say data quality is top AI challenge",
    caption: "76% of executives say data quality is the top AI challenge",
    color: "blue" as const,
    description:
      "Insurance companies need trusted data for underwriting, claims, and AI-driven risk assessment.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    stat: 220,
    label: "faster AI adoption",
    caption: "2.2x faster AI adoption vs broader economy",
    color: "green" as const,
    description:
      "Healthcare organizations require the highest standards of data quality for patient safety and AI diagnostics.",
  },
];

export function IndustriesTabSection() {
  const [active, setActive] = useState("financial");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="section-padding bg-base-surface">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">Industries We Serve</h2>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-2 border-b border-base-border pb-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActive(industry.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                active === industry.id ? "text-neutral-50" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              {active === industry.id && (
                <motion.div
                  layoutId="industry-tab"
                  className="absolute inset-x-0 -bottom-4 h-0.5 bg-brand-400"
                />
              )}
              {industry.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={tabContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-10 grid items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <h3 className="font-display text-display-sm text-neutral-50">{current.name}</h3>
              <p className="mt-4 text-body-lg text-neutral-500">{current.description}</p>
            </div>
            <div className="flex justify-center">
              <CircularProgress
                percentage={current.id === "healthcare" ? 88 : current.stat}
                label={current.label}
                caption={current.caption}
                color={current.color}
                size="lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
