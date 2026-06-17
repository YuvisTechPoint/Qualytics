"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { DotEyebrow } from "@/components/ui/DotEyebrow";

export function ProblemSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[90rem] border-x border-black/5 px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <FadeUp>
              <DotEyebrow>The Problem</DotEyebrow>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="mx-auto mt-6 max-w-[30ch] font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] tracking-normal text-black">
                Context without control creates risk.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-[80ch] font-sans text-base leading-[1.65] text-neutral-600 md:text-lg">
                Every data leader knows the pattern: issues discovered downstream, teams
                scrambling to diagnose them, decisions already made on bad inputs. Now
                copilots and agents depend on that same data and context to reason and act,
                propagating errors at machine speed before anyone notices. Traditional data
                quality wasn&apos;t built to control context at the point of use.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
