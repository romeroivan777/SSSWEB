import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** compact: solo el ícono + "SPERANZA" (para navbar).
   *  full: ícono + wordmark completo con "SOFTWARE SOLUTIONS" (para footer/hero). */
  variant?: "compact" | "full";
}

/**
 * Logo oficial de Speranza Software Solutions.
 * Triskelion en plata con acento naranja #E8890C.
 * "SPERANZA" en blanco, tracking ejecutivo.
 * "SOFTWARE SOLUTIONS" en naranja de marca (solo variante full).
 */
export function Logo({ className, variant = "compact" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <TriskelionIcon />
      <span className="flex flex-col leading-none">
        <span
          className="font-sans text-[13px] font-semibold tracking-[0.22em] text-text-primary"
          style={{ letterSpacing: "0.22em" }}
        >
          SPERANZA
        </span>
        {variant === "full" && (
          <span
            className="font-sans text-[8.5px] font-medium tracking-[0.28em] text-brand-orange"
            style={{ letterSpacing: "0.28em", marginTop: "3px" }}
          >
            SOFTWARE SOLUTIONS
          </span>
        )}
      </span>
    </span>
  );
}

/** Triskelion SVG — triple espiral con acento naranja central.
 *  Diseñado para funcionar a 28x28px (navbar) y 36x36px (footer).
 */
function TriskelionIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* Brazo 1 — hacia arriba-derecha */}
      <path
        d="M16 16 C18 13, 22 11, 21 8 C20 5, 16 4, 13 6 C11 8, 12 12, 14 14"
        stroke="#C8C8C8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Brazo 2 — rotado 120° (hacia abajo-derecha) */}
      <path
        d="M16 16 C18 13, 22 11, 21 8 C20 5, 16 4, 13 6 C11 8, 12 12, 14 14"
        stroke="#C8C8C8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="rotate(120 16 16)"
      />
      {/* Brazo 3 — rotado 240° (hacia abajo-izquierda) */}
      <path
        d="M16 16 C18 13, 22 11, 21 8 C20 5, 16 4, 13 6 C11 8, 12 12, 14 14"
        stroke="#C8C8C8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="rotate(240 16 16)"
      />
      {/* Acento naranja central — triángulo apuntando abajo, como en el logo */}
      <polygon points="16,13.5 13.8,17.5 18.2,17.5" fill="#E8890C" opacity="0.95" />
    </svg>
  );
}
