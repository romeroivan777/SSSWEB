import { MessageSquare, Brain, Database, UserCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const PASOS = [
  {
    icon: MessageSquare,
    titulo: "Un prospecto escribe a tu WhatsApp",
    detalle: "A cualquier hora, como ya recibís consultas hoy. Nada cambia para él.",
  },
  {
    icon: Brain,
    titulo: "El Cerebro IA entiende y pregunta lo justo",
    detalle: "Function Calling de OpenAI: identifica tipo de evento, fecha y presupuesto real.",
  },
  {
    icon: Database,
    titulo: "Consulta tu disponibilidad real",
    detalle: "Conectado a tu base de datos: nunca ofrece una fecha que ya está tomada.",
  },
  {
    icon: UserCheck,
    titulo: "Te deriva solo cuando ya está listo para cerrar",
    detalle: "Vos recibís el prospecto calificado, no cincuenta mirones preguntando precio.",
  },
];

export function MecanismoUnico() {
  return (
    <section className="section-y border-t border-border-subdued bg-surface-1">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <Reveal>
          <p className="text-label uppercase text-accent-tech">El mecanismo</p>
          <h2 className="mt-4 max-w-2xl text-display-2 text-text-primary">
            No es un chatbot. Es un sistema que piensa, consulta y filtra.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {PASOS.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <Reveal key={paso.titulo} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-button border border-border-highlight">
                    <Icon
                      className="h-5 w-5 text-text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-mono text-caption text-text-secondary">
                    Paso {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-heading-1 text-text-primary">{paso.titulo}</h3>
                  <p className="text-body-base text-text-secondary">{paso.detalle}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
