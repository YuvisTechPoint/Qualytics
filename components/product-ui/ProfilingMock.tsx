export function ProfilingMock() {
  const fields = [
    { name: "customer_id", type: "STRING", nulls: "0.01%" },
    { name: "order_total", type: "DECIMAL", nulls: "0.12%" },
    { name: "region_code", type: "STRING", nulls: "0.00%" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4">
      <div className="mb-3 text-sm font-medium text-neutral-50">Field Profiles</div>
      <div className="space-y-2">
        {fields.map((f) => (
          <div key={f.name} className="flex items-center justify-between rounded-lg bg-base-surface px-3 py-2 text-body-xs">
            <span className="font-mono text-electric-400">{f.name}</span>
            <span className="text-neutral-500">{f.type}</span>
            <span className="text-neutral-600">{f.nulls} nulls</span>
          </div>
        ))}
      </div>
    </div>
  );
}
