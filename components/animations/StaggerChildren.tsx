"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function StaggerChildren({
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
      viewport={{ once: true, margin: "-50px" }}
      variants={stagger}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
