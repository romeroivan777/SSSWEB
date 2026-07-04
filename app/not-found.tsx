import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-highlight">
        <Compass className="h-7 w-7 text-text-secondary" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <p className="font-mono text-caption text-text-secondary">Error 404</p>
        <h1 className="mt-2 text-heading-1 text-text-primary">Esta ruta no existe</h1>
        <p className="mt-2 max-w-md text-body-base text-text-secondary">
          El sistema no encontró esta página. Volvé al inicio para continuar.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-button bg-action-primary px-6 text-label text-action-text shadow-glow-accent transition-transform duration-base ease-base hover:scale-[0.98] active:scale-[0.97]"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
