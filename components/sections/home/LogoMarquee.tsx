import { CUSTOMER_LOGOS } from "@/lib/constants";

export function LogoMarquee() {
  const logos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section className="border-y border-base-border/50 py-10">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="mx-8 flex h-6 items-center text-body-sm font-medium text-neutral-600 grayscale transition-all hover:grayscale-0 hover:text-neutral-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
