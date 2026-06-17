"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  percentage: number;
  label: string;
  caption?: string;
  color?: "orange" | "blue" | "green";
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: 160, md: 200, lg: 240 };
const colorMap = {
  orange: "#FF6B35",
  blue: "#0E8DD6",
  green: "#22C55E",
};

export function CircularProgress({
  percentage,
  label,
  caption,
  color = "orange",
  size = "md",
}: CircularProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const dim = sizeMap[size];
  const r = 45;
  const circumference = 2 * Math.PI * r;
  const strokeColor = colorMap[color];

  return (
    <div ref={ref} className="flex flex-col items-center" style={{ width: dim }}>
      <svg viewBox="0 0 100 100" width={dim} height={dim}>
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={0.15}
          strokeWidth={4}
        />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={strokeColor}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: inView
              ? circumference * (1 - percentage / 100)
              : circumference,
          }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="48"
          textAnchor="middle"
          className="fill-neutral-50 font-display text-xl font-bold"
          fontSize="18"
        >
          {percentage}%
        </text>
        <text
          x="50"
          y="62"
          textAnchor="middle"
          className="fill-neutral-500"
          fontSize="8"
        >
          {label}
        </text>
      </svg>
      {caption && (
        <p className={cn("mt-4 text-center text-body-sm text-neutral-500")}>{caption}</p>
      )}
    </div>
  );
}
