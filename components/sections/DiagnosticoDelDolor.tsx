import { Reveal } from "@/components/ui/Reveal";
import { PAIN_METRICS } from "@/lib/constants";

export function DiagnosticoDelDolor() {
  return (
    <section className="section-y border-t border-border-subdued">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <Reveal>
          <p className="text-label uppercase text-accent-tech">El costo oculto</p>
          <h2 className="mt-4 max-w-2xl text-display-2 text-text-primary">
            Tu competencia tarda 3 horas en presupuestar un evento. Ya perdiste ventas esta semana
            sin enterarte.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-border-subdued bg-border-subdued md:grid-cols-3">
          {PAIN_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.1} className="bg-surface-1 p-8">
              <p className="font-mono text-display-2 text-text-primary">{metric.valor}</p>
              <p className="mt-3 text-heading-1 text-text-primary">{metric.label}</p>
              <p className="mt-2 text-body-base text-text-secondary">{metric.detalle}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
