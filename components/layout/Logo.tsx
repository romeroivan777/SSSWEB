import { cn } from "@/lib/utils";

/**
 * Wordmark provisional en SVG puro (sin dependencias de imagen).
 * Reemplazar por el logo final en /public/icons/logo.svg cuando esté disponible;
 * este componente ya respeta el espacio y la tipografía definidos para esa pieza.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-sans text-text-primary", className)}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect
          x="0.75"
          y="0.75"
          width="18.5"
          height="18.5"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6 13L10 6L14 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-label font-semibold tracking-tight">SPERANZA</span>
    </span>
  );
}
