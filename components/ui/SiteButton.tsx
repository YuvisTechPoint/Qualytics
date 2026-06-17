import Link from "next/link";
import { cn } from "@/lib/utils";

function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4 shrink-0", className)}
    >
      <path
        d="M15.6531 12.875H5V11.125H15.6531L10.7531 6.225L12 5L19 12L12 19L10.7531 17.775L15.6531 12.875Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface SiteButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SiteButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: SiteButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 font-mono text-sm font-medium transition-colors",
        size === "sm" && "h-9 px-4",
        size === "md" && "h-11 px-5",
        size === "lg" && "h-12 px-6 text-base",
        variant === "primary" &&
          "bg-brand-400 text-black hover:bg-brand-300",
        variant === "secondary" &&
          "border border-[#ffffff]/40 bg-transparent text-[#ffffff] hover:border-[#ffffff] hover:bg-white/5",
        variant === "text" &&
          "h-auto bg-transparent px-0 text-inherit hover:text-brand-400",
        className
      )}
    >
      <span>{children}</span>
      <ButtonArrow
        className={cn(
          "transition-transform group-hover:translate-x-0.5",
          variant === "primary" ? "text-black" : "text-white"
        )}
      />
    </Link>
  );
}
