"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { SiteButton } from "@/components/ui/SiteButton";

export function CtaSection() {
  return (
    <>
      <div aria-hidden className="bg-black py-16 lg:py-24" />

      <section className="bg-black">
        <div className="mx-auto max-w-narrow px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-[50ch]">
              <h2 className="font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] text-[#ffffff]">
                Act on trusted data, every time.
              </h2>
              <p className="mt-4 font-sans text-base leading-[1.65] text-neutral-400 md:text-lg">
                Control the context powering your analytics, AI, and operations.
              </p>
              <div className="mt-8">
                <SiteButton href="/demo" variant="primary" size="md">
                  Schedule a demo
                </SiteButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div aria-hidden className="bg-black py-16 lg:py-24" />
    </>
  );
}
