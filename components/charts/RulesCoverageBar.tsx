"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface RulesCoverageBarProps {
  percentage: number;
  label?: string;
  className?: string;
}

export function RulesCoverageBar({
  percentage,
  label = "Rules Coverage",
  className,
}: RulesCoverageBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="mb-2 flex justify-between text-body-sm">
        <span className="text-neutral-400">{label}</span>
        <span className="font-medium text-neutral-50">{percentage}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-base-elevated">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-brand-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
