"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useCountUp(to, { start: from, duration, decimals, enabled: inView });

  return (
    <span ref={ref} className={cn("font-display font-bold", className)}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : value}
      {suffix}
    </span>
  );
}
