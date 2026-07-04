"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Tarjeta base de Casos de Éxito / Soluciones.
 * El borde se ilumina siguiendo la posición del mouse (radial-gradient atado a --x/--y).
 * En touch (sin mouse), simplemente no se activa: no hay penalización funcional.
 */
export function Card({ children, className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-card border border-border-subdued bg-surface-1 p-8",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.06), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
