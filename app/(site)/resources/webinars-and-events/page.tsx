import type { Metadata } from "next";
import Link from "next/link";
import { getResourcesByType } from "@/lib/content";
import { WebinarCard } from "@/components/resources/WebinarCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Webinars & Events",
  description: "Live and on-demand webinars from the Qualytics team.",
};

export default async function WebinarsPage() {
  const webinars = await getResourcesByType("webinar");

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Webinars & Events</h1>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {webinars.map((w) => (
            <WebinarCard
              key={w.slug}
              title={w.title}
              date={w.date}
              duration="45 min"
              slug={w.slug}
              description={w.excerpt}
            />
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400 hover:text-electric-300">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
