import fs from "node:fs";
import path from "node:path";

/**
 * SOLO para Server Components. Si la foto real todavía no fue provista en
 * /public, devuelve false y el componente que lo use cae a una superficie
 * abstracta — nunca a un ícono roto. Apenas se agregue el archivo, aparece sola.
 *
 * Importar este módulo desde un "use client" rompe el build (node:fs no existe
 * en el bundle de browser) — por eso vive separado de lib/utils.ts.
 */
export function tieneFotoReal(rutaPublica: string): boolean {
  try {
    const rutaAbsoluta = path.join(process.cwd(), "public", rutaPublica);
    return fs.existsSync(rutaAbsoluta);
  } catch {
    return false;
  }
}
