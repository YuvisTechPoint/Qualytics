export function AgentQMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4">
      <div className="mb-4 flex items-center gap-2 border-b border-base-border pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-400/20 text-sm text-brand-400">
          Q
        </div>
        <div>
          <div className="text-sm font-medium text-neutral-50">AgentQ</div>
          <div className="text-body-xs text-neutral-500">AI Data Quality Assistant</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg bg-base-surface p-3">
          <p className="text-body-sm text-neutral-400">
            Assess data quality for the customer_orders dataset
          </p>
        </div>
        <div className="rounded-lg border border-brand-400/20 bg-brand-400/5 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-50">Quality Score</span>
            <span className="font-display text-2xl font-bold text-brand-400">69/100</span>
          </div>
          <p className="mt-2 text-body-sm text-neutral-500">Not ready for AI consumption</p>
        </div>
      </div>
    </div>
  );
}
