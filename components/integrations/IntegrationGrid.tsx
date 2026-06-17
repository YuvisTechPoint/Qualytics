"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { INTEGRATION_CATEGORIES, CATEGORY_LABELS, type IntegrationItem } from "@/lib/integrations-data";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function IntegrationGrid({ integrations }: { integrations: IntegrationItem[] }) {
  const [filter, setFilter] = useState<string>("ALL");
  const filtered =
    filter === "ALL" ? integrations : integrations.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {INTEGRATION_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === cat
                ? "bg-brand-400 text-white"
                : "bg-base-elevated text-neutral-400 hover:text-neutral-200"
            )}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((integration) => (
          <ScrollReveal key={integration.slug}>
            <IntegrationCard {...integration} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
