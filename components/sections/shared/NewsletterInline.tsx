import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterInline() {
  return (
    <div className="rounded-xl border border-base-border bg-base-surface p-8">
      <h3 className="font-display text-lg font-semibold text-neutral-50">
        Stay ahead on data quality & AI governance
      </h3>
      <p className="mt-2 text-body-sm text-neutral-500">
        Get insights from the Qualytics team delivered to your inbox.
      </p>
      <div className="mt-4">
        <NewsletterForm source="article_cta" />
      </div>
    </div>
  );
}
