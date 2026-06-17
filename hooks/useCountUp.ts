"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function useCountUp(
  end: number,
  options?: {
    start?: number;
    duration?: number;
    decimals?: number;
    enabled?: boolean;
  }
) {
  const { start = 0, duration = 1.8, decimals = 0, enabled = true } = options ?? {};
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    const controls = animate(start, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
    });

    return () => controls.stop();
  }, [start, end, duration, decimals, enabled]);

  return value;
}
