import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE } from "@/lib/constants";
import type { QualificationData } from "@/types";

/** Combina clases de Tailwind resolviendo conflictos (orden estable, sin duplicados). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Construye la URL de wa.me a partir de los datos calificados del Motor de 3 pasos.
 * Esto es la pieza central del "Caballo de Troya": nunca recarga la página,
 * solo arma un mensaje pre-rellenado y redirige.
 */
export function buildWhatsAppUrl(data: QualificationData): string {
  const lineas = [
    "Hola, vengo del sitio de Speranza Software Solutions.",
    data.tipoNegocio ? `Tipo de negocio: ${data.tipoNegocio}` : null,
    data.volumenMensual ? `Volumen de consultas: ${data.volumenMensual}` : null,
    data.urgencia ? `Urgencia: ${data.urgencia}` : null,
  ].filter(Boolean);

  const mensaje = encodeURIComponent(lineas.join("\n"));
  return `https://wa.me/${SITE.whatsappNumber}?text=${mensaje}`;
}

/** Formatea un número como guaraníes paraguayos. */
export function formatGuaranies(valor: number): string {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
    maximumFractionDigits: 0,
  }).format(valor);
}
