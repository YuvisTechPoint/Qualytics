import type { Metadata } from "next";
import Link from "next/link";
import { getResourcesByType } from "@/lib/content";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Guides",
  description: "In-depth guides and playbooks for data quality practitioners.",
};

export default async function GuidesPage() {
  const guides = await getResourcesByType("guide");

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Guides</h1>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <ResourceCard key={guide.slug} {...guide} />
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
