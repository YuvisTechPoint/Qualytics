export function PartnerBadges() {
  const partners = ["Databricks", "Snowflake", "Cloudera"];

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {partners.map((partner) => (
        <div
          key={partner}
          className="rounded-xl border border-brand-400/30 bg-brand-400/5 px-6 py-3 text-sm font-medium text-neutral-50"
        >
          {partner}
        </div>
      ))}
    </div>
  );
}
