function ResultMarker() {
  return (
    <svg viewBox="0 0 12 8" fill="none" className="h-2 w-3 shrink-0 text-brand-400" aria-hidden>
      <rect
        width="7"
        height="7"
        transform="matrix(0.842566 0.538593 -0.842566 0.538593 5.89844 0)"
        fill="currentColor"
      />
    </svg>
  );
}

export interface ResultStat {
  metric: string;
  label: string;
  description: string;
}

export function ResultCard({ metric, label, description }: ResultStat) {
  return (
    <div className="flex min-h-[11rem] w-full flex-col justify-between border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] md:min-h-[12.5rem] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-none text-brand-400">
          {metric}
        </h3>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <ResultMarker />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black">{label}</span>
        </div>
      </div>
      <p className="mt-8 max-w-[35ch] font-sans text-sm leading-relaxed text-neutral-600 md:text-base">
        {description}
      </p>
    </div>
  );
}
