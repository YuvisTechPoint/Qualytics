import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import type { ResourceItem } from "@/lib/content";

export function RelatedResources({ resources }: { resources: ResourceItem[] }) {
  if (resources.length === 0) return null;

  return (
    <section className="border-t border-base-border bg-base-surface section-padding">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h2 className="font-display text-display-md text-neutral-50">Related Resources</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
