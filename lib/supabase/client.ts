import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

/**
 * Cliente Supabase para uso en Server Components y API Routes.
 * Usa la ANON key con Row Level Security (RLS) activo en la tabla `leads`.
 * La política RLS permite únicamente INSERT — nunca SELECT/UPDATE/DELETE
 * desde el browser. Los datos los leés directamente desde el dashboard de Supabase.
 *
 * Para activar el servicio, configurar en .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
 */
function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase no configurado. Agregar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local"
    );
  }

  return createClient<Database>(url, key);
}

export const supabase = createSupabaseClient();
