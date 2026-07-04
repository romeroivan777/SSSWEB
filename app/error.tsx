"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Punto de integración para reporting (Sentry, etc.) cuando se incorpore.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-danger/10">
        <AlertTriangle className="h-7 w-7 text-danger" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <h1 className="text-heading-1 text-text-primary">El sistema encontró un error</h1>
        <p className="mt-2 max-w-md text-body-base text-text-secondary">
          No se pudo completar la operación. Reintentá; si el problema persiste, contactanos
          directamente por WhatsApp.
        </p>
      </div>
      <Button onClick={reset}>Reintentar</Button>
    </div>
  );
}
