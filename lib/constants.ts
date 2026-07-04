import type { CaseStudy, FaqItem, NavLink, PainMetric } from "@/types";

export const SITE = {
  name: "Speranza Software Solutions",
  shortName: "Speranza",
  tagline: "Escalá sin fricción. Operá sin límites.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://speranza.com.py",
  locationLabel: "Luque, Paraguay",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "595981000000",
  description:
    "Automatizamos el filtrado y cierre de ventas por WhatsApp para negocios high-ticket en Paraguay mediante asistentes de Inteligencia Artificial.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
];

export const PAIN_METRICS: PainMetric[] = [
  {
    valor: "3 hs",
    label: "Tiempo promedio de respuesta manual",
    detalle: "Lo que tarda un dueño de salón en cotizar un evento de 15 años por WhatsApp.",
  },
  {
    valor: "2 seg",
    label: "Tiempo de respuesta del sistema",
    detalle: "Tu Cerebro IA califica y responde antes de que el prospecto cierre la app.",
  },
  {
    valor: "8X",
    label: "Capacidad de implementación mensual",
    detalle: "Operación limitada a 8 proyectos corporativos por mes para garantizar calidad.",
  },
];

/**
 * MÉTRICAS ILUSTRATIVAS — esta sección expone números de negocios reales paraguayos.
 * Antes de publicar, reemplazar "metricaClave" y "resumen" por cifras auditadas
 * provistas por cada cliente. No publicar estimaciones como si fueran datos verificados.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "quinta-los-rubiales",
    empresa: "Quinta Los Rubiales",
    ubicacion: "Capiatá",
    vertical: "salon-eventos",
    badge: "Salón de Eventos",
    titular: "De agenda saturada a calificación automática 24/7",
    resumen:
      "El equipo de Quinta Los Rubiales dejó de perder horas filtrando consultas de WhatsApp. El sistema separa curiosos de prospectos reales antes de que lleguen al teléfono del dueño.",
    metricaClave: "—",
    metricaLabel: "Dato pendiente de auditoría del cliente",
    imagen: "/images/casos/quinta-los-rubiales.webp",
  },
  {
    slug: "terrazas-del-bosque",
    empresa: "Terrazas del Bosque",
    ubicacion: "Capiatá",
    vertical: "salon-eventos",
    badge: "Salón de Eventos",
    titular: "Presupuestos automáticos sin perder el toque personal",
    resumen:
      "Terrazas del Bosque mantiene su atención cercana, pero ahora el sistema hace el trabajo pesado de cotizar disponibilidad y capacidad antes de escalar a una persona.",
    metricaClave: "—",
    metricaLabel: "Dato pendiente de auditoría del cliente",
    imagen: "/images/casos/terrazas-del-bosque.webp",
  },
  {
    slug: "castello",
    empresa: "Castello",
    ubicacion: "Área Metropolitana de Asunción",
    vertical: "salon-eventos",
    badge: "Eventos Corporativos",
    titular: "Un recepcionista que nunca duerme ni se satura",
    resumen:
      "Castello reemplazó el cuello de botella de los lunes por la mañana con un sistema que ya viene calificando y agendando desde el domingo a la noche.",
    metricaClave: "—",
    metricaLabel: "Dato pendiente de auditoría del cliente",
    imagen: "/images/casos/castello.webp",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    pregunta: "¿Esto es un chatbot de los que ya conozco?",
    respuesta:
      "No. Un asistente de respuestas automáticas contesta lo mismo siempre. Tu sistema usa Function Calling de OpenAI conectado a una base de datos real: entiende contexto, filtra por presupuesto y fecha, y deriva a un humano solo cuando el lead ya está calificado.",
  },
  {
    pregunta: "¿Cuánto tarda la implementación?",
    respuesta:
      "48 horas desde que confirmamos el alcance. Trabajamos sobre Next.js, Supabase y Meta Cloud API: infraestructura estándar de la industria, no un experimento.",
  },
  {
    pregunta: "¿Qué pasa si mi negocio no es un salón de eventos?",
    respuesta:
      "El mecanismo es el mismo para inmobiliarias, clínicas estéticas y turismo: cualquier negocio high-ticket donde la velocidad de respuesta decide si cerrás la venta o se la lleva la competencia.",
  },
  {
    pregunta: "¿Necesito saber de tecnología para operarlo?",
    respuesta:
      "No. Vos seguís usando WhatsApp como siempre. El sistema trabaja detrás: filtra, califica y te entrega solamente los prospectos que ya están listos para cerrar.",
  },
  {
    pregunta: "¿Cuál es la inversión?",
    respuesta:
      "La implementación tiene un pago único de referencia de 3.000.000 ₲. Como tomamos un máximo de 8 proyectos por mes, te confirmamos el alcance exacto en la llamada de calificación.",
  },
];

export const QUALIFICATION_VERTICAL_OPTIONS: { value: CaseStudy["vertical"]; label: string }[] = [
  { value: "salon-eventos", label: "Salón de Eventos" },
  { value: "clinica-estetica", label: "Clínica Estética" },
  { value: "inmobiliaria", label: "Inmobiliaria" },
  { value: "turismo", label: "Turismo / Tours" },
  { value: "gastronomia", label: "Gastronomía" },
  { value: "otro", label: "Otro negocio high-ticket" },
];

export const QUALIFICATION_VOLUME_OPTIONS = [
  "1 a 5 consultas por semana",
  "6 a 15 consultas por semana",
  "Más de 15 consultas por semana",
];

export const QUALIFICATION_URGENCY_OPTIONS = [
  "Quiero implementar este mes",
  "Estoy evaluando para el próximo trimestre",
  "Solo quiero conocer el sistema",
];
