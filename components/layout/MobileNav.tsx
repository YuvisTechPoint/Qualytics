"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { QualyticsLogo } from "@/components/brand/QualyticsLogo";
import { SiteButton } from "@/components/ui/SiteButton";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sections = [
  { key: "platform", ...NAV_LINKS.platform },
  { key: "whyUs", ...NAV_LINKS.whyUs },
  { key: "company", ...NAV_LINKS.company },
  { key: "resources", ...NAV_LINKS.resources },
];

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] flex flex-col bg-black lg:hidden"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <QualyticsLogo />
            <button onClick={onClose} aria-label="Close menu">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {sections.map((section) => (
              <div key={section.key} className="border-b border-white/10">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium text-white"
                  onClick={() =>
                    setExpanded(expanded === section.key ? null : section.key)
                  }
                >
                  {section.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expanded === section.key && "rotate-180"
                    )}
                  />
                </button>
                {expanded === section.key && (
                  <div className="space-y-2 pb-4 pl-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-neutral-400 hover:text-brand-400"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 p-6">
            <SiteButton href="/demo" variant="primary" className="w-full justify-center">
              Schedule a demo
            </SiteButton>
            <SiteButton href="/free-trial" variant="secondary" className="w-full justify-center">
              Free trial
            </SiteButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
