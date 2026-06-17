import type { Metadata } from "next";
import Link from "next/link";
import { getResourcesByType } from "@/lib/content";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Customer Stories",
  description: "Success stories from Qualytics customers.",
};

export default async function CustomerStoriesPage() {
  const stories = await getResourcesByType("customer-story");

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Customer Stories</h1>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <ResourceCard key={story.slug} {...story} />
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
