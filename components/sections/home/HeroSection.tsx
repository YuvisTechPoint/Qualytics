"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { SiteButton } from "@/components/ui/SiteButton";
import { WistiaHeroVideo } from "@/components/sections/home/WistiaHeroVideo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="hero-side-glow pointer-events-none absolute inset-0" />

      <div className="relative z-[2] mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-8 md:pt-12 md:pb-10" />

        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <h1 className="heading-hero mx-auto max-w-[25ch] text-center">
              <span className="block text-[#ffffff]">Control the context</span>
              <span className="block text-brand-highlight md:hidden">behind every decision.</span>
              <span className="hidden text-brand-highlight md:block">behind every</span>
              <span className="hidden text-brand-highlight md:block">decision.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-hero-body mx-auto mt-6 max-w-[80ch]">
              Qualytics validates data at the moment it&apos;s used, applying data quality as a
              shared control layer where AI maintains coverage and your teams govern what trusted
              means.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <SiteButton href="/demo" variant="primary" size="lg">
                Get a demo
              </SiteButton>
              <SiteButton href="/free-trial" variant="secondary" size="lg">
                Free trial
              </SiteButton>
            </div>
          </FadeUp>
        </div>

        <div className="hidden h-12 md:block lg:h-16" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl"
        >
          <WistiaHeroVideo />
        </motion.div>

        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
}
