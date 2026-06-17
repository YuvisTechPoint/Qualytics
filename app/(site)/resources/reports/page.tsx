import type { Metadata } from "next";
import Link from "next/link";
import { getAllResources } from "@/lib/content";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Reports",
  description: "Research reports and industry analysis from Qualytics.",
};

export default async function ReportsPage() {
  const reports = (await getAllResources()).filter((r) => r.category === "Report");

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Reports</h1>
          <p className="mt-4 text-body-lg text-neutral-500">
            Research reports and industry analysis on data quality and AI governance.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((item) => (
            <ResourceCard key={item.slug} {...item} />
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
