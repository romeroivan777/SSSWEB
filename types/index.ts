/**
 * Tipos de dominio compartidos por todo el proyecto.
 * Mantener este archivo como única fuente de verdad para shapes de datos.
 */

export type BusinessVertical =
  | "salon-eventos"
  | "clinica-estetica"
  | "inmobiliaria"
  | "turismo"
  | "gastronomia"
  | "otro";

export interface CaseStudy {
  slug: string;
  empresa: string;
  ubicacion: string;
  vertical: BusinessVertical;
  badge: string;
  titular: string;
  resumen: string;
  metricaClave: string;
  metricaLabel: string;
  /** Ruta relativa en /public/images/casos. Si no existe el archivo, el componente cae a un fondo abstracto. */
  imagen: string;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Los 3 pasos del Motor de Calificación ("El Caballo de Troya"). */
export type QualificationStep = 1 | 2 | 3;

export interface QualificationData {
  tipoNegocio: BusinessVertical | null;
  volumenMensual: string | null;
  urgencia: string | null;
}

export interface PainMetric {
  valor: string;
  label: string;
  detalle: string;
}
