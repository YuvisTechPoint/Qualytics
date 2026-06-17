import {
  ArticlePage,
  generateArticleMetadata,
  generateArticleStaticParams,
} from "@/components/resources/ArticlePage";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateArticleMetadata(params);
}

export async function generateStaticParams() {
  return generateArticleStaticParams(["webinar"]);
}

export default function WebinarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <ArticlePage
      params={params}
      backHref="/resources/webinars-and-events"
      allowedTypes={["webinar"]}
    />
  );
}
