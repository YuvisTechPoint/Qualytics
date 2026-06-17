"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
