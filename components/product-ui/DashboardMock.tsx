export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4 shadow-card-hover">
      <div className="mb-4 flex items-center justify-between border-b border-base-border pb-3">
        <div className="text-sm font-medium text-neutral-50">Data Quality Overview</div>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-success" />
          <span className="text-body-xs text-neutral-500">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Anomalies", value: "70.37K", color: "text-brand-400" },
          { label: "Active Checks", value: "10.47K", color: "text-electric-400" },
          { label: "Coverage", value: "95.2%", color: "text-success" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg bg-base-surface p-3">
            <div className="text-body-xs text-neutral-500">{stat.label}</div>
            <div className={`mt-1 font-display text-lg font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-base-surface p-2">
            <div className="h-2 w-2 rounded-full bg-brand-400" />
            <div className="flex-1 text-body-xs text-neutral-400">
              Anomaly detected in dataset_{i}
            </div>
            <div className="text-body-xs text-neutral-600">2m ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}
