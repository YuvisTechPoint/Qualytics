"use client";

import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function SlideIn({
  children,
  className,
  direction = "left",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={direction === "left" ? slideFromLeft : slideFromRight}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
