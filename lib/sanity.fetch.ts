import { sanityClient, projectId } from "@/lib/sanity";
import { HOMEPAGE_RESOURCES_QUERY } from "@/lib/sanity.queries";
import type { ResourceItem } from "@/lib/content";

export async function fetchHomepageResources(): Promise<ResourceItem[]> {
  if (!projectId) return [];

  const results = await sanityClient.fetch<
    Array<{
      title: string;
      slug: string;
      excerpt: string;
      publishedAt: string;
      _type: string;
      category?: { name: string };
    }>
  >(HOMEPAGE_RESOURCES_QUERY);

  return results.map((item) => ({
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    category: item.category?.name || "Blog",
    date: item.publishedAt,
    type: item._type === "inlineArticle" ? "inline" : "blog",
    href:
      item._type === "inlineArticle"
        ? `/resources/in/${item.slug}`
        : `/resources/blog/${item.slug}`,
  }));
}
