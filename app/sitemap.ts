import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/soluciones", "/casos-de-exito", "/politicas"];

  return rutas.map((ruta) => ({
    url: `${SITE.url}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: ruta === "" ? 1 : 0.7,
  }));
}
