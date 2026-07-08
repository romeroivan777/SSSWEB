"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { useQualificationModal } from "@/hooks/useQualificationModal";
import { buildWhatsAppUrl, cn } from "@/lib/utils";
import {
  QUALIFICATION_URGENCY_OPTIONS,
  QUALIFICATION_VERTICAL_OPTIONS,
  QUALIFICATION_VOLUME_OPTIONS,
} from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Persiste el lead en Supabase via API Route.
 * Fire-and-forget: nunca bloquea el flujo del usuario al WhatsApp.
 */
async function persistLead(data: {
  tipoNegocio: string;
  volumenMensual: string;
  urgencia: string;
}) {
  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // Silencioso — el redirect a WhatsApp ya ocurrió, esto es best-effort.
  }
}

export function QualificationModal() {
  const { isOpen, step, data, close, next, back, setTipoNegocio, setVolumenMensual, setUrgencia, reset } =
    useQualificationModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function handleClose() {
    close();
    setTimeout(() => {
      reset();
      setIsDone(false);
      setIsSubmitting(false);
    }, 300);
  }

  async function handleFinish() {
    if (!data.tipoNegocio || !data.volumenMensual || !data.urgencia) return;
    setIsSubmitting(true);

    // Construir URL de WhatsApp primero (operación síncrona, nunca falla).
    const waUrl = buildWhatsAppUrl(data);

    // Mostrar estado de éxito inmediatamente sin esperar a Supabase.
    setIsSubmitting(false);
    setIsDone(true);

    // Persistir lead y redirigir en paralelo.
    void persistLead({
      tipoNegocio: data.tipoNegocio,
      volumenMensual: data.volumenMensual,
      urgencia: data.urgencia,
    });

    // Pequeño delay para que el usuario vea el checkmark antes del redirect.
    setTimeout(() => {
      window.location.href = waUrl;
    }, 1400);
  }

  const canAdvance =
    (step === 1 && !!data.tipoNegocio) ||
    (step === 2 && !!data.volumenMensual) ||
    (step === 3 && !!data.urgencia);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Motor de Calificación"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="relative w-full max-w-md overflow-hidden rounded-card border border-border-subdued bg-surface-1 shadow-glow-accent"
          >
            {/* Línea de brillo superior */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"
            />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-subdued px-6 py-4">
              <Logo variant="compact" />
              <div className="flex items-center gap-4">
                {!isDone && (
                  <span className="font-mono text-caption text-text-secondary">
                    {step}/3
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Cerrar Motor de Calificación"
                  className="text-text-secondary transition-colors hover:text-text-primary"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Barra de progreso milimétrica */}
            {!isDone && (
              <div aria-hidden="true" className="h-px bg-border-subdued">
                <motion.div
                  className="h-full bg-brand-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </div>
            )}

            {/* Contenido del paso */}
            <div className="relative h-[340px] px-6 py-8">
              <AnimatePresence mode="wait">
                {isDone ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-full flex-col items-center justify-center gap-4 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 16 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10"
                    >
                      <Check className="h-7 w-7 text-success" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <p className="text-body-base text-text-primary">
                        Cargando entorno seguro de WhatsApp...
                      </p>
                      <p className="mt-1 text-caption text-text-secondary">
                        Tu consulta está siendo procesada.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="flex h-full flex-col gap-6"
                  >
                    {step === 1 && (
                      <>
                        <div>
                          <h2 className="text-heading-1 text-text-primary">
                            ¿Qué tipo de negocio dirigís?
                          </h2>
                          <p className="mt-1 text-body-base text-text-secondary">
                            Así calibramos el Cerebro IA a tu vertical.
                          </p>
                        </div>
                        <Select
                          label="Tipo de negocio"
                          options={QUALIFICATION_VERTICAL_OPTIONS}
                          value={data.tipoNegocio}
                          onChange={(v) => setTipoNegocio(v as typeof data.tipoNegocio)}
                        />
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <h2 className="text-heading-1 text-text-primary">
                            ¿Cuántas consultas recibís hoy?
                          </h2>
                          <p className="mt-1 text-body-base text-text-secondary">
                            Esto define cuánto tiempo te está costando responder a mano.
                          </p>
                        </div>
                        <Select
                          label="Volumen de consultas"
                          options={QUALIFICATION_VOLUME_OPTIONS.map((v) => ({
                            value: v,
                            label: v,
                          }))}
                          value={data.volumenMensual}
                          onChange={setVolumenMensual}
                        />
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <div>
                          <h2 className="text-heading-1 text-text-primary">
                            ¿Cuál es tu urgencia real?
                          </h2>
                          <p className="mt-1 text-body-base text-text-secondary">
                            Tomamos 8 proyectos por mes. Esto nos dice si hay lugar para vos
                            ahora.
                          </p>
                        </div>
                        <Select
                          label="Urgencia"
                          options={QUALIFICATION_URGENCY_OPTIONS.map((v) => ({
                            value: v,
                            label: v,
                          }))}
                          value={data.urgencia}
                          onChange={setUrgencia}
                        />
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer del modal */}
            {!isDone && (
              <div className="flex items-center justify-between border-t border-border-subdued px-6 py-4">
                <Button
                  variant="ghost"
                  onClick={back}
                  disabled={step === 1}
                  className={cn(step === 1 && "invisible")}
                >
                  Atrás
                </Button>
                {step < 3 ? (
                  <Button onClick={next} disabled={!canAdvance}>
                    Continuar
                  </Button>
                ) : (
                  <Button onClick={handleFinish} disabled={!canAdvance || isSubmitting}>
                    {isSubmitting ? "Procesando..." : "Abrir WhatsApp"}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
