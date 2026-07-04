"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { useQualificationModal } from "@/hooks/useQualificationModal";

export function CTAFinal() {
  const open = useQualificationModal((s) => s.open);

  return (
    <section className="section-y border-t border-border-subdued">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-12">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <Badge variant="tech" withDot>
            Capacidad máxima: Operación 8X
          </Badge>
          <h2 className="mt-6 text-display-2 text-text-primary">
            Solo tomamos 8 proyectos corporativos por mes.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            No por exclusividad de marketing — por calidad real de implementación. Aplicá ahora y te
            confirmamos disponibilidad en la misma conversación.
          </p>

          <Button size="lg" onClick={open} className="mt-10">
            Aplicar para implementar
          </Button>
          <p className="mt-4 flex items-center gap-2 text-caption text-text-secondary">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Implementación en 48hs. Único pago. Sin letra chica.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
