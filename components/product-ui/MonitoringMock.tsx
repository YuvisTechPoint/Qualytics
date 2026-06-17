"use client";

import { AnomalyTimeline } from "@/components/charts/AnomalyTimeline";

export function MonitoringMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-50">Anomaly Trends</span>
        <span className="text-body-xs text-brand-400">+12% this week</span>
      </div>
      <AnomalyTimeline className="w-full" />
      <div className="mt-4 space-y-2">
        {["Volume spike in orders", "Schema drift detected"].map((alert) => (
          <div key={alert} className="rounded-lg bg-base-surface px-3 py-2 text-body-xs text-neutral-400">
            {alert}
          </div>
        ))}
      </div>
    </div>
  );
}
