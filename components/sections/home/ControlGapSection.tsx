"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/FadeUp";
import { CONTROL_GAP_IMAGES } from "@/lib/assets";

export function ControlGapSection() {
  return (
    <section className="bg-[#F9F7F4] text-black">
      <div className="border-b border-black/5">
        <div className="mx-auto max-w-[90rem] border-x border-black/5 px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-20 lg:py-24">
            <FadeUp>
              <h2 className="text-center font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-normal text-black">
                The Control Gap
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mx-auto mt-10 max-w-6xl md:mt-12">
                {/* Desktop / tablet landscape */}
                <div className="relative hidden aspect-[1280/720] w-full overflow-hidden md:block">
                  <Image
                    src={CONTROL_GAP_IMAGES.desktop}
                    alt="Diagram showing data flowing from sources through traditional data quality to consumption, with missed and unknown anomalies"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 90vw, 0px"
                    priority={false}
                  />
                </div>

                {/* Mobile portrait */}
                <div className="relative aspect-[354/706] w-full overflow-hidden md:hidden">
                  <Image
                    src={CONTROL_GAP_IMAGES.mobile}
                    alt="Diagram showing the control gap between data sources and consumption"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={false}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
