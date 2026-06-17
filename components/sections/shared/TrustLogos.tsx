import { CUSTOMER_LOGOS } from "@/lib/constants";

export function TrustLogos({ label = "Trusted by" }: { label?: string }) {
  return (
    <div className="py-8">
      <p className="mb-6 text-center text-label uppercase text-neutral-600">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {CUSTOMER_LOGOS.map((logo) => (
          <span
            key={logo}
            className="text-body-sm font-medium text-neutral-600 transition-colors hover:text-neutral-400"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
