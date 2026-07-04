import { FAQ_ITEMS, SITE } from "@/lib/constants";

/**
 * Generadores de JSON-LD. Cada función devuelve un objeto plano listo para
 * serializar dentro de un <script type="application/ld+json">.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icons/logo.svg`,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luque",
      addressRegion: "Central",
      addressCountry: "PY",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/icons/og-cover.jpg`,
    url: SITE.url,
    priceRange: "₲₲₲",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luque",
      addressRegion: "Central",
      addressCountry: "PY",
    },
    areaServed: {
      "@type": "Country",
      name: "Paraguay",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE.shortName} — Cerebro IA`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      priceCurrency: "PYG",
      price: "3000000",
    },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
