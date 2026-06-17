import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Product News",
  description: "New features, enhancements, and releases from Qualytics.",
};

const productNews = [
  {
    title: "AgentQ: Natural Language Data Governance",
    date: "2026-05-01",
    excerpt: "Introducing AgentQ, a conversational interface for data quality governance.",
  },
  {
    title: "MCP Integration for AI Workflows",
    date: "2026-04-15",
    excerpt: "Quality signals now available through Model Context Protocol for AI agents.",
  },
];

export default function ProductNewsPage() {
  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Product News</h1>
        </ScrollReveal>
        <div className="mt-12 space-y-4">
          {productNews.map((item) => (
            <div key={item.title} className="rounded-xl border border-base-border bg-base-surface p-6">
              <h3 className="font-display text-lg font-semibold text-neutral-50">{item.title}</h3>
              <p className="mt-2 text-body-sm text-neutral-500">{item.excerpt}</p>
            </div>
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
