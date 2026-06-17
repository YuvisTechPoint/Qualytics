import type { Metadata } from "next";
import Link from "next/link";
import { getAllResources } from "@/lib/content";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Company News",
  description: "Latest news and announcements from Qualytics.",
};

export default async function CompanyNewsPage() {
  const news = (await getAllResources()).filter((r) => r.category === "Company News");

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Company News</h1>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
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
