import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface ArticleHeaderProps {
  title: string;
  category: string;
  date: string;
  backHref?: string;
}

export function ArticleHeader({ title, category, date, backHref = "/resources" }: ArticleHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-base-bg section-padding">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero-glow)" }}
      />
      <div className="relative mx-auto max-w-narrow container-padding">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-neutral-300"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resources
        </Link>
        <Badge className="mt-6">{category}</Badge>
        <h1 className="mt-4 font-display text-display-lg text-neutral-50">{title}</h1>
        <time className="mt-4 block font-mono text-body-sm text-neutral-600">{formatDate(date)}</time>
      </div>
    </header>
  );
}
