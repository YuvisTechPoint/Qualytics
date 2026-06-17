"use client";

import ScrollStack, { ScrollStackItem } from "@/components/animations/ScrollStack";
import { DotEyebrow } from "@/components/ui/DotEyebrow";
import { ResultCard } from "@/components/sections/home/ResultCard";

const stats = [
  {
    metric: "20x ROI",
    label: "Higher ROI",
    description: "in year one, by automating over 20K data-quality rules",
  },
  {
    metric: "$3.67M",
    label: "Lower Costs",
    description: "projected savings, reclaiming thousands of engineering hours",
  },
  {
    metric: "4x faster remediation",
    label: "Quicker Wins",
    description: "with 50+ business users resolving anomalies alongside data teams",
  },
  {
    metric: "1.5 FTEs",
    label: "Resources Saved",
    description: "running a global DQ program, estimated 5x team efficiency",
  },
];

export function ResultsSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[90rem] border-x border-black/5">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2">
            <div className="px-4 sm:px-6 lg:sticky lg:top-28 lg:self-start lg:px-8 lg:py-8">
              <DotEyebrow align="left">The Results</DotEyebrow>
              <h2 className="mt-6 max-w-[20ch] font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] text-black">
                Enterprises use Qualytics to operationalize trusted data at scale.
              </h2>
            </div>

            <div className="relative mt-10 min-h-[28rem] overflow-hidden lg:mt-0 lg:min-h-[40rem]">
              <div
                className="absolute inset-0 bg-[#120806]"
                style={{
                  backgroundImage:
                    "linear-gradient(125deg, rgba(255,140,66,0.95) 0%, rgba(255,107,53,0.85) 35%, rgba(40,18,8,0.9) 70%, rgba(8,4,2,1) 100%)",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-60 mix-blend-screen"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, transparent 0, transparent 40px, rgba(255,200,120,0.35) 40px, rgba(255,200,120,0.15) 80px)",
                }}
                aria-hidden
              />

              <div className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
                <ScrollStack
                  useWindowScroll
                  className="scroll-stack-scroller--window"
                  innerClassName="scroll-stack-inner--results"
                  itemDistance={140}
                  itemStackDistance={36}
                  stackPosition="22%"
                  scaleEndPosition="12%"
                  baseScale={0.9}
                  itemScale={0.025}
                  blurAmount={1.5}
                >
                  {stats.map((stat) => (
                    <ScrollStackItem key={stat.label}>
                      <ResultCard {...stat} />
                    </ScrollStackItem>
                  ))}
                </ScrollStack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
