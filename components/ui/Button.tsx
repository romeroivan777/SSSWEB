import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-button font-label transition-all duration-base ease-base disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-tech focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-action-primary text-action-text hover:bg-zinc-100 hover:scale-[0.98] shadow-glow-accent",
  secondary:
    "bg-transparent text-text-primary border border-border-highlight hover:bg-surface-2 hover:border-zinc-500",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-12 px-6 text-label",
  lg: "h-14 px-8 text-label",
};

/**
 * El Gatillo (Primary), Exploración (Secondary) y Navegación (Ghost).
 * Regla del Único Color de Acción: solo "primary" usa el blanco puro de fondo.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
