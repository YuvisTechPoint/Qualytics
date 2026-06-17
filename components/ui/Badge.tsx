import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "electric" | "neutral" | "success" | "warning" | "purple";
}

const variantStyles = {
  brand: "bg-brand-400/15 text-brand-400 border-brand-400/30",
  electric: "bg-electric-500/15 text-electric-400 border-electric-500/30",
  neutral: "bg-neutral-800/50 text-neutral-400 border-base-border",
  success: "bg-success/15 text-success border-success/30",
  warning: "bg-warning/15 text-warning border-warning/30",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

export function Badge({ className, variant = "brand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-label uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
