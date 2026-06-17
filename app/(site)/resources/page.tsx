import type { Metadata } from "next";
import { getAllResources } from "@/lib/content";
import { ResourcesHubClient } from "@/components/resources/ResourcesHubClient";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Resources",
  description: "Insights, guides, and stories from the Qualytics team.",
};

export const revalidate = 3600;

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Resources</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-neutral-500">
            Insights, guides, webinars, and customer stories from the Qualytics team.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <ResourcesHubClient resources={resources} />
        </div>
      </div>
    </section>
  );
}
