"use client";

import { useState, useMemo } from "react";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { CategoryFilter } from "@/components/resources/CategoryFilter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { ResourceItem } from "@/lib/content";
import { RESOURCE_CATEGORIES } from "@/lib/content";

export function ResourcesHubClient({ resources }: { resources: ResourceItem[] }) {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return resources;
    return resources.filter((r) => r.category === category);
  }, [category, resources]);

  const featured = resources[0];

  return (
    <>
      <ScrollReveal>
        {featured && (
          <div className="mb-12">
            <ResourceCard {...featured} />
          </div>
        )}
      </ScrollReveal>

      <CategoryFilter
        categories={RESOURCE_CATEGORIES}
        active={category}
        onChange={setCategory}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <ResourceCard key={resource.slug} {...resource} />
        ))}
      </div>
    </>
  );
}
