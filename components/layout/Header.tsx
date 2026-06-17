"use client";

import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { QualyticsLogo } from "@/components/brand/QualyticsLogo";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteButton } from "@/components/ui/SiteButton";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-10 z-50 w-full border-b border-white/5 bg-black">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
          <QualyticsLogo />

          <NavigationMenu.Root className="relative hidden lg:block" delayDuration={0}>
            <NavigationMenu.List className="flex items-center gap-0.5">
              <NavDropdown config={NAV_LINKS.platform} />
              <NavDropdown config={NAV_LINKS.whyUs} />
              <NavDropdown config={NAV_LINKS.company} />
              <NavDropdown config={NAV_LINKS.resources} />
            </NavigationMenu.List>
            <div className="absolute left-0 right-0 top-full flex justify-center">
              <NavigationMenu.Viewport className="relative w-full origin-top overflow-hidden bg-black transition-all duration-300 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            </div>
          </NavigationMenu.Root>

          <div className="hidden items-center gap-3 lg:flex">
            <SiteButton href="/demo" variant="primary" size="sm">
              Schedule a demo
            </SiteButton>
            <SiteButton href="/free-trial" variant="secondary" size="sm">
              Free trial
            </SiteButton>
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu button, click to open menu"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
