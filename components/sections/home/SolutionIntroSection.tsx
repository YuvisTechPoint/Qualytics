"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { DotEyebrow } from "@/components/ui/DotEyebrow";
import { SiteButton } from "@/components/ui/SiteButton";

export function SolutionIntroSection() {
  return (
    <section className="bg-white text-black">
      <div className="border-b border-black/5">
        <div className="mx-auto max-w-[90rem] border-x border-black/5 px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-24 lg:py-28">
            <FadeUp>
              <DotEyebrow align="left">The Solution</DotEyebrow>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="mt-6 max-w-[30ch] font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-normal text-black">
                The Data Control Layer for Trusted Context
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-6 max-w-[80ch] space-y-6 font-sans text-base leading-[1.65] text-neutral-700 md:text-lg">
                <p>
                  Qualytics enables validate-at-use, where data is evaluated before it drives
                  decisions and applied as a set of controls in real time.
                </p>
                <p>
                  By continuously evaluating data as it is used, Qualytics produces governed
                  signals that determine whether systems should proceed, flag issues, or prevent
                  actions entirely. This ensures the context behind every decision is trusted when
                  it matters.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-8">
                <SiteButton href="/why-qualytics" variant="primary" size="md">
                  Why Qualytics
                </SiteButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
