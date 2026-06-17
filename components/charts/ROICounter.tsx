"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export function ROICounter({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, 20, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}x`;
      },
    });
    return () => controls.stop();
  }, [inView]);

  return <span ref={ref} className={className}>0x</span>;
}
