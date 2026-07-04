import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "tech" | "neutral" | "success";
  withDot?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  tech: "bg-accent-tech/10 border-accent-tech/30 text-accent-tech",
  neutral: "bg-surface-2 border-border-subdued text-text-secondary",
  success: "bg-success/10 border-success/30 text-success",
};

export function Badge({
  className,
  variant = "neutral",
  withDot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-caption uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {withDot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 animate-pulse-dot rounded-full",
            variant === "tech" && "bg-accent-tech",
            variant === "success" && "bg-success",
            variant === "neutral" && "bg-text-secondary"
          )}
        />
      )}
      {children}
    </span>
  );
}
