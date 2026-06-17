import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getRelatedResources, extractHeadings } from "@/lib/content";
import { ArticleHeader } from "@/components/resources/ArticleHeader";
import { ArticleBody } from "@/components/resources/ArticleBody";
import { TableOfContents } from "@/components/resources/TableOfContents";
import { RelatedResources } from "@/components/resources/RelatedResources";
import { NewsletterInline } from "@/components/sections/shared/NewsletterInline";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
  backHref: string;
  allowedTypes?: string[];
}

export async function generateArticleMetadata(
  params: Promise<{ slug: string }>
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Not Found" };
  return { title: article.title, description: article.excerpt };
}

export async function ArticlePage({
  params,
  backHref,
  allowedTypes,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article || (allowedTypes && !allowedTypes.includes(article.type))) {
    notFound();
  }

  const headings = extractHeadings(article.body);
  const related = await getRelatedResources(slug);

  return (
    <>
      <ArticleHeader
        title={article.title}
        category={article.category}
        date={article.date}
        backHref={backHref}
      />
      <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-[1fr_240px] container-padding pb-16">
        <ArticleBody content={article.body} />
        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
        </aside>
      </div>
      <div className="mx-auto max-w-narrow container-padding pb-16">
        <NewsletterInline />
      </div>
      <RelatedResources resources={related} />
      <DemoCTA />
    </>
  );
}

export async function generateArticleStaticParams(types: string[]) {
  const { getAllResources } = await import("@/lib/content");
  const resources = await getAllResources();
  return resources.filter((r) => types.includes(r.type)).map((r) => ({ slug: r.slug }));
}
