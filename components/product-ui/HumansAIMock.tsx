export function HumansAIMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-border bg-base-elevated p-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-base-surface p-3">
          <div className="text-body-xs uppercase text-electric-400">Business Team</div>
          <div className="mt-2 text-sm text-neutral-50">Rule Authoring</div>
          <div className="mt-1 text-body-xs text-neutral-500">Low-code interface</div>
        </div>
        <div className="rounded-lg bg-base-surface p-3">
          <div className="text-body-xs uppercase text-brand-400">AI Systems</div>
          <div className="mt-2 text-sm text-neutral-50">MCP Integration</div>
          <div className="mt-1 text-body-xs text-neutral-500">Natural language governance</div>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-base-border bg-base-surface p-3">
        <div className="text-body-xs text-neutral-500">Shared governed foundation</div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-base-bg">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-electric-500 to-brand-400" />
        </div>
      </div>
    </div>
  );
}
