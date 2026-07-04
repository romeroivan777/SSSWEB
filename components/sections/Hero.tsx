"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CerebroIA } from "@/components/sections/CerebroIA";
import { useQualificationModal } from "@/hooks/useQualificationModal";

export function Hero() {
  const open = useQualificationModal((s) => s.open);

  return (
    <section className="bg-grain relative flex min-h-[92vh] items-center overflow-hidden pt-16">
      <CerebroIA />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <Badge variant="tech" withDot>
              Sistema en línea 24/7
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[40px] leading-[1.1] tracking-tight text-text-primary md:text-display-1">
              La velocidad de respuesta es la nueva moneda de cierre.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-body-base text-text-secondary md:text-body-lg">
              Automatizamos el filtrado y cierre de ventas por WhatsApp para negocios high-ticket en
              Paraguay. Tu sistema atiende, califica y cierra en segundos — vos dirigís, el sistema
              ejecuta.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" onClick={open} className="w-full sm:w-auto">
                Ver el Caballo de Troya en acción
              </Button>
              <p className="flex items-center gap-2 text-caption text-text-secondary">
                <ShieldCheck
                  className="h-4 w-4 flex-shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Implementación en 48hs. Único pago.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
