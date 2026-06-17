import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { ResourceItem } from "@/lib/content";

const categoryVariant: Record<string, "brand" | "electric" | "neutral" | "purple" | "success"> = {
  "Best Practices": "brand",
  "AI Readiness": "electric",
  "Company News": "neutral",
  Guide: "purple",
  "Customer Story": "success",
};

export function ResourceCard({
  title,
  excerpt,
  category,
  date,
  href,
}: Pick<ResourceItem, "title" | "excerpt" | "category" | "date" | "href">) {
  return (
    <Link href={href}>
      <Card interactive className="flex h-full flex-col p-6">
        <Badge variant={categoryVariant[category] ?? "neutral"}>{category}</Badge>
        <time className="mt-4 font-mono text-body-xs text-neutral-600">{formatDate(date)}</time>
        <h3 className="mt-2 font-semibold text-neutral-50 transition-colors group-hover:text-brand-400">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-body-sm text-neutral-500">{excerpt}</p>
        <div className="mt-4 flex items-center gap-1 text-body-sm text-brand-400">
          Read <ArrowRight className="h-4 w-4" />
        </div>
      </Card>
    </Link>
  );
}
