"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === category
              ? "bg-brand-400 text-white"
              : "bg-base-elevated text-neutral-400 hover:text-neutral-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
