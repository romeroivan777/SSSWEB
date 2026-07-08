/**
 * Tipos de la base de datos Supabase para la tabla `leads`.
 *
 * Para regenerar automáticamente desde el schema real de tu proyecto:
 *   npx supabase gen types typescript --project-id <your-project-id> > types/supabase.ts
 *
 * El schema SQL para crear la tabla está en DEPLOYMENT.md → Sección Supabase.
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          tipo_negocio: string;
          volumen_mensual: string;
          urgencia: string;
          created_at: string;
          wa_redirect_at: string | null;
          source: string;
          ip_country: string | null;
        };
        Insert: {
          id?: string;
          tipo_negocio: string;
          volumen_mensual: string;
          urgencia: string;
          created_at?: string;
          wa_redirect_at?: string | null;
          source?: string;
          ip_country?: string | null;
        };
        Update: {
          id?: string;
          tipo_negocio?: string;
          volumen_mensual?: string;
          urgencia?: string;
          created_at?: string;
          wa_redirect_at?: string | null;
          source?: string;
          ip_country?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

/** Tipo convenience para una fila de lead ya insertada. */
export type Lead = Database["public"]["Tables"]["leads"]["Row"];
/** Tipo convenience para insertar un lead nuevo. */
export type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
