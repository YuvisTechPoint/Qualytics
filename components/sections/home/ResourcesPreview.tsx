import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { HomeResourceCard } from "@/components/resources/HomeResourceCard";
import { SiteButton } from "@/components/ui/SiteButton";
import { getHomepageResources } from "@/lib/content";

export async function ResourcesPreview() {
  const resources = await getHomepageResources();

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[90rem] border-x border-white/10 px-4 sm:px-6 lg:px-8">
          <div aria-hidden className="py-16 lg:py-24" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <FadeUp>
              <h2 className="max-w-[20ch] font-sans text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-[1.15] text-[#ffffff]">
                Discover more insights from the Qualytics team
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SiteButton href="/resources" variant="text" size="sm" className="shrink-0">
                View All
              </SiteButton>
            </FadeUp>
          </div>

          <div aria-hidden className="py-4" />
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[90rem] border-x border-white/10 px-4 sm:px-6 lg:px-8">
          <div aria-hidden className="py-10 lg:py-12" />

          <StaggerChildren className="grid gap-8 md:grid-cols-3 md:gap-6">
            {resources.map((resource) => (
              <FadeUp key={resource.slug}>
                <HomeResourceCard {...resource} />
              </FadeUp>
            ))}
          </StaggerChildren>

          <div aria-hidden className="py-16 lg:py-24" />
        </div>
      </section>
    </>
  );
}
