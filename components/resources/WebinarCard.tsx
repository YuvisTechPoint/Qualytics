import Link from "next/link";
import { Card } from "@/components/ui/Card";

interface WebinarItem {
  title: string;
  date: string;
  duration: string;
  slug: string;
  description?: string;
}

export function WebinarCard({ title, date, duration, slug, description }: WebinarItem) {
  return (
    <Link href={`/resources/webinars-and-events/${slug}`}>
      <Card interactive className="h-full p-6">
        <div className="text-label uppercase text-electric-400">Webinar</div>
        <h3 className="mt-3 font-display text-lg font-semibold text-neutral-50">{title}</h3>
        {description && <p className="mt-2 line-clamp-2 text-body-sm text-neutral-500">{description}</p>}
        <p className="mt-4 text-body-xs text-neutral-600">
          {date} · {duration}
        </p>
      </Card>
    </Link>
  );
}
