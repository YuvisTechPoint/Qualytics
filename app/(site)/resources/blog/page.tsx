import type { Metadata } from "next";
import Link from "next/link";
import { getResourcesByType } from "@/lib/content";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and best practices from the Qualytics team.",
};

export default async function BlogPage() {
  const blogPosts = await getResourcesByType("blog");
  const inlinePosts = (await getResourcesByType("inline")).filter(
    (r) => r.category !== "Company News"
  );

  return (
    <section className="section-padding bg-base-bg">
      <div className="mx-auto max-w-wide container-padding">
        <ScrollReveal>
          <h1 className="font-display text-display-xl text-neutral-50">Blog</h1>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...inlinePosts, ...blogPosts].map((post) => (
            <ResourceCard key={post.slug} {...post} />
          ))}
        </div>
        <Link href="/resources" className="mt-8 inline-block text-sm text-electric-400 hover:text-electric-300">
          ← All resources
        </Link>
      </div>
    </section>
  );
}
