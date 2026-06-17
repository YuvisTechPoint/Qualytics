import type { Metadata } from "next";
import { ArticleHeader } from "@/components/resources/ArticleHeader";
import { ArticleBody } from "@/components/resources/ArticleBody";
import { getPolicyContent } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default async function PrivacyPage() {
  const content = await getPolicyContent("privacy");

  return (
    <>
      <ArticleHeader title="Privacy Policy" category="Legal" date="2026-01-01" backHref="/" />
      <ArticleBody content={content} />
    </>
  );
}
