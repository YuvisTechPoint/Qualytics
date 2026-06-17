import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { IntegrationItem } from "@/lib/integrations-data";

export function IntegrationCard({ name, featured, docUrl }: IntegrationItem) {
  const inner = (
    <Card
      interactive={!!docUrl}
      className={cn(
        "flex h-24 items-center justify-center gap-2 p-4 transition-all",
        featured && "border-brand-400/30 bg-brand-400/5"
      )}
    >
      <span className="text-sm font-medium text-neutral-300">{name}</span>
      {docUrl && <ExternalLink className="h-3 w-3 text-neutral-600" />}
    </Card>
  );

  if (docUrl) {
    return (
      <Link href={docUrl} target="_blank" rel="noopener noreferrer">
        {inner}
      </Link>
    );
  }

  return inner;
}
