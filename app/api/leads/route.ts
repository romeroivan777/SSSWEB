import { NextRequest, NextResponse } from "next/server";
import type { LeadInsert } from "@/types/supabase";

/**
 * POST /api/leads
 *
 * Persiste un lead calificado en Supabase antes de que el cliente redirija a WhatsApp.
 * Si Supabase no está configurado o falla, retorna 200 de todas formas —
 * el redirect a WhatsApp del usuario NUNCA se bloquea por un error de backend.
 */
export async function POST(request: NextRequest) {
  let body: { tipoNegocio?: string; volumenMensual?: string; urgencia?: string };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const { tipoNegocio, volumenMensual, urgencia } = body;

  if (!tipoNegocio || !volumenMensual || !urgencia) {
    return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Supabase no configurado — log + continuar sin bloquear al usuario.
  if (!supabaseUrl || !supabaseKey) {
    console.warn("[SSS Leads] Supabase no configurado — lead no persistido:", {
      tipoNegocio,
      volumenMensual,
      urgencia,
    });
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const { createClient } = await import("@supabase/supabase-js");
    const db = createClient(supabaseUrl, supabaseKey);

    const lead: LeadInsert = {
      tipo_negocio: tipoNegocio,
      volumen_mensual: volumenMensual,
      urgencia: urgencia,
      source: "website",
      // Vercel inyecta el país del visitante en este header automáticamente.
      ip_country: request.headers.get("x-vercel-ip-country") ?? null,
      wa_redirect_at: new Date().toISOString(),
    };

    const { error } = await db.from("leads").insert(lead);

    if (error) {
      console.error("[SSS Leads] Error Supabase:", error.message);
      return NextResponse.json({ ok: true, stored: false });
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[SSS Leads] Error inesperado:", err);
    return NextResponse.json({ ok: true, stored: false });
  }
}
