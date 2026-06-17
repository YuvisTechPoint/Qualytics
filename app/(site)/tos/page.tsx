import type { Metadata } from "next";
import { ArticleHeader } from "@/components/resources/ArticleHeader";
import { ArticleBody } from "@/components/resources/ArticleBody";
import { getPolicyContent } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default async function TermsPage() {
  const content = await getPolicyContent("tos");

  return (
    <>
      <ArticleHeader title="Terms of Service" category="Legal" date="2026-01-01" backHref="/" />
      <ArticleBody content={content} />
    </>
  );
}
