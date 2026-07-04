import type { Metadata } from "next";
import { Globe, Brain, Database, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "El sistema completo: Landing Premium, Cerebro IA conectado a OpenAI y n8n, y base de datos en Supabase. Infraestructura, no plantillas.",
  alternates: { canonical: "/soluciones" },
};

const COMPONENTES = [
  {
    icon: Globe,
    titulo: "Landing Premium",
    detalle:
      "Next.js con Core Web Vitals optimizados. La primera impresión que hace que tu negocio se vea inalcanzable, no otra plantilla genérica.",
  },
  {
    icon: Brain,
    titulo: "Cerebro IA (n8n + OpenAI)",
    detalle:
      "Function Calling que entiende contexto real: tipo de evento, fecha, presupuesto. Filtra mirones antes de que lleguen a vos.",
  },
  {
    icon: Database,
    titulo: "Base de Datos (Supabase + Prisma)",
    detalle:
      "Disponibilidad, precios y reglas de tu negocio en una fuente de verdad. El sistema nunca improvisa una respuesta.",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: SITE.url },
              { name: "Soluciones", url: `${SITE.url}/soluciones` },
            ])
          ),
        }}
      />

      <section className="section-y border-b border-border-subdued">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <Reveal>
            <p className="text-label uppercase text-accent-tech">Core productizado</p>
            <h1 className="mt-4 max-w-2xl text-display-2 text-text-primary">
              Un sistema, tres componentes. Cero piezas sueltas.
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
              No vendemos posteos ni branding abstracto. Construimos la infraestructura que filtra,
              califica y cierra por vos, 24 horas al día.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {COMPONENTES.map((comp, i) => {
              const Icon = comp.icon;
              return (
                <Reveal key={comp.titulo} delay={i * 0.1}>
                  <Card>
                    <div className="flex h-12 w-12 items-center justify-center rounded-button border border-border-highlight">
                      <Icon
                        className="h-5 w-5 text-text-primary"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="mt-6 text-heading-1 text-text-primary">{comp.titulo}</h2>
                    <p className="mt-2 text-body-base text-text-secondary">{comp.detalle}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border-subdued bg-surface-1">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="tech" withDot>
                Implementación 48hs
              </Badge>
              <h2 className="mt-4 text-display-2 text-text-primary">Pago único de referencia</h2>
              <p className="mt-2 max-w-xl text-body-base text-text-secondary">
                3.000.000 ₲ por implementación completa. El alcance exacto se confirma en la
                conversación de calificación, según la complejidad de tu negocio.
              </p>
            </div>
            <p className="flex items-center gap-2 whitespace-nowrap text-caption text-text-secondary">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Sin mensualidades ocultas
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
