import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Políticas & Legal",
  description: `Política de privacidad, términos de uso y tratamiento de datos de ${SITE.name}.`,
  alternates: { canonical: "/politicas" },
  robots: { index: true, follow: true },
};

export default function PoliticasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: SITE.url },
              { name: "Políticas & Legal", url: `${SITE.url}/politicas` },
            ])
          ),
        }}
      />

      <section className="section-y">
        <div className="mx-auto max-w-3xl px-5 md:px-12">
          <Reveal>
            <Badge variant="neutral">Última actualización: junio 2026</Badge>
            <h1 className="mt-4 text-display-2 text-text-primary">Políticas &amp; Legal</h1>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-6 rounded-card border border-border-subdued bg-surface-1 p-6"
          >
            <p className="text-body-base text-text-secondary">
              <strong className="text-text-primary">Nota de implementación:</strong> el texto de
              esta página es un borrador base con estructura legal estándar para empresas de
              tecnología en Paraguay. Antes de publicar el sitio, recomendamos que un abogado local
              lo revise y lo ajuste a la actividad específica de {SITE.name} y a la Ley N.º
              6.534/2020 de Protección de Datos Personales.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 space-y-12 text-body-base text-text-secondary">
            <div>
              <h2 className="text-heading-1 text-text-primary">1. Quiénes somos</h2>
              <p className="mt-3">
                {SITE.name} es una empresa de infraestructura tecnológica con sede operativa en{" "}
                {SITE.locationLabel}, dedicada a la automatización de procesos de atención y
                calificación comercial para negocios high-ticket en Paraguay.
              </p>
            </div>

            <div>
              <h2 className="text-heading-1 text-text-primary">2. Datos que recolectamos</h2>
              <p className="mt-3">
                A través del Motor de Calificación recolectamos: tipo de negocio, volumen estimado
                de consultas y nivel de urgencia declarado. Esta información se utiliza
                exclusivamente para evaluar el alcance de una posible implementación y se comparte
                con nuestro equipo a través de WhatsApp Business.
              </p>
            </div>

            <div>
              <h2 className="text-heading-1 text-text-primary">3. Uso de la información</h2>
              <p className="mt-3">
                No vendemos ni cedemos datos personales a terceros con fines publicitarios. La
                información se conserva únicamente mientras dure la relación comercial o evaluación
                de propuesta.
              </p>
            </div>

            <div>
              <h2 className="text-heading-1 text-text-primary">4. Cookies y analítica</h2>
              <p className="mt-3">
                Este sitio puede utilizar herramientas de analítica estándar de la industria para
                medir rendimiento y comportamiento agregado de navegación. No utilizamos cookies de
                seguimiento publicitario de terceros.
              </p>
            </div>

            <div>
              <h2 className="text-heading-1 text-text-primary">5. Tus derechos</h2>
              <p className="mt-3">
                Podés solicitar acceso, corrección o eliminación de tus datos personales escribiendo
                directamente a nuestro canal de WhatsApp oficial.
              </p>
            </div>

            <div>
              <h2 className="text-heading-1 text-text-primary">6. Contacto</h2>
              <p className="mt-3">
                Para consultas sobre esta política, contactanos a través del Motor de Calificación
                disponible en la página de inicio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
