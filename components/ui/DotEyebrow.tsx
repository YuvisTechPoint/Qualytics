import { cn } from "@/lib/utils";

export function DotEyebrow({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      <span className="h-2 w-2 shrink-0 bg-brand-400" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black">
        {children}
      </span>
    </div>
  );
}
