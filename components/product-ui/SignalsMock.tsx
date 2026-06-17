export function SignalsMock() {
  const signals = [
    { label: "Freshness", status: "pass", value: "98%" },
    { label: "Completeness", status: "warn", value: "87%" },
    { label: "Validity", status: "pass", value: "99%" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4">
      <div className="mb-3 text-sm font-medium text-neutral-50">Real-Time Quality Signals</div>
      <div className="space-y-2">
        {signals.map((s) => (
          <div key={s.label} className="flex items-center justify-between rounded-lg bg-base-surface px-3 py-2">
            <span className="text-body-sm text-neutral-400">{s.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-body-sm font-medium text-neutral-50">{s.value}</span>
              <span
                className={`h-2 w-2 rounded-full ${
                  s.status === "pass" ? "bg-success" : "bg-warning"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-success/20 bg-success/5 px-3 py-2 text-body-xs text-success">
        Control layer active — validating at point of use
      </div>
    </div>
  );
}
