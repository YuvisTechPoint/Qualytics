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
  return generateArticleStaticParams(["customer-story"]);
}

export default function CustomerStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <ArticlePage
      params={params}
      backHref="/resources/customer-stories"
      allowedTypes={["customer-story"]}
    />
  );
}
