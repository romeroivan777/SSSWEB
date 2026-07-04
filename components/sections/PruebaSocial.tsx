import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/lib/constants";
import { tieneFotoReal } from "@/lib/assets.server";

export function PruebaSocial() {
  return (
    <section id="casos" className="section-y border-t border-border-subdued">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <Reveal>
          <p className="text-label uppercase text-accent-tech">Mercado local</p>
          <h2 className="mt-4 max-w-2xl text-display-2 text-text-primary">
            Negocios paraguayos reales, no estudios de caso de stock.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((caso, i) => {
            const conFoto = tieneFotoReal(caso.imagen);
            return (
              <Reveal key={caso.slug} delay={i * 0.1}>
                <Card>
                  <div className="relative -mx-8 -mt-8 mb-6 h-44 overflow-hidden">
                    {conFoto ? (
                      <Image
                        src={caso.imagen}
                        alt={`${caso.empresa}, ${caso.ubicacion}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover contrast-125 grayscale"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="h-full w-full bg-gradient-to-br from-surface-2 via-bg-base to-surface-2"
                      />
                    )}
                  </div>

                  <Badge variant="tech">{caso.badge}</Badge>

                  <h3 className="mt-4 text-heading-1 text-text-primary">{caso.titular}</h3>
                  <p className="mt-2 text-body-base text-text-secondary">{caso.resumen}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border-subdued pt-4">
                    <span className="flex items-center gap-1.5 text-caption text-text-secondary">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                      {caso.empresa} · {caso.ubicacion}
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
