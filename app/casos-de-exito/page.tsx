import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CASE_STUDIES, SITE } from "@/lib/constants";
import { tieneFotoReal } from "@/lib/assets.server";
import { breadcrumbSchema } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Negocios paraguayos reales operando con el Cerebro IA de Speranza: salones de eventos en Capiatá y el Área Metropolitana de Asunción.",
  alternates: { canonical: "/casos-de-exito" },
};

export default function CasosDeExitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: SITE.url },
              { name: "Casos de Éxito", url: `${SITE.url}/casos-de-exito` },
            ])
          ),
        }}
      />

      <section className="section-y border-b border-border-subdued">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <Reveal>
            <p className="text-label uppercase text-accent-tech">Mercado local</p>
            <h1 className="mt-4 max-w-2xl text-display-2 text-text-primary">
              Esto no son maquetas. Es infraestructura operando hoy.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl space-y-px px-5 md:px-12">
          {CASE_STUDIES.map((caso, i) => {
            const conFoto = tieneFotoReal(caso.imagen);
            const invertido = i % 2 === 1;
            return (
              <Reveal key={caso.slug} delay={i * 0.05}>
                <article
                  className={`grid items-center gap-8 border-t border-border-subdued py-16 md:grid-cols-2 ${
                    invertido ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-64 overflow-hidden rounded-card border border-border-subdued md:h-80">
                    {conFoto ? (
                      <Image
                        src={caso.imagen}
                        alt={`${caso.empresa}, ${caso.ubicacion}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover contrast-125 grayscale"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="h-full w-full bg-gradient-to-br from-surface-2 via-bg-base to-surface-2"
                      />
                    )}
                  </div>

                  <div>
                    <Badge variant="tech">{caso.badge}</Badge>
                    <h2 className="mt-4 text-display-2 leading-tight text-text-primary">
                      {caso.empresa}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-caption text-text-secondary">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                      {caso.ubicacion}
                    </p>
                    <h3 className="mt-6 text-heading-1 text-text-primary">{caso.titular}</h3>
                    <p className="mt-2 text-body-base text-text-secondary">{caso.resumen}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-y border-t border-border-subdued bg-surface-1 text-center">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <Reveal>
            <h2 className="text-display-2 text-text-primary">¿Tu negocio es el próximo caso?</h2>
            <p className="mx-auto mt-4 max-w-xl text-body-base text-text-secondary">
              Solo tomamos 8 proyectos por mes. Hablemos en{" "}
              <Link
                href="/"
                className="underline decoration-border-highlight hover:text-text-primary"
              >
                la página principal
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
