import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ControlGapSection } from "@/components/sections/home/ControlGapSection";
import { SolutionIntroSection } from "@/components/sections/home/SolutionIntroSection";
import { HomeTabsSection } from "@/components/sections/home/HomeTabsSection";
import { LogoMarquee } from "@/components/sections/home/LogoMarquee";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { ResultsSection } from "@/components/sections/home/ResultsSection";
import { CtaSection } from "@/components/sections/home/CtaSection";
import { ResourcesPreview } from "@/components/sections/home/ResourcesPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ControlGapSection />
      <SolutionIntroSection />
      <HomeTabsSection />
      <LogoMarquee />
      <HowItWorksSection />
      <ResultsSection />
      <CtaSection />
      <ResourcesPreview />
    </>
  );
}
