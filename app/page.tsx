import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DiagnosticoDelDolor } from "@/components/sections/DiagnosticoDelDolor";
import { MecanismoUnico } from "@/components/sections/MecanismoUnico";
import { PruebaSocial } from "@/components/sections/PruebaSocial";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { FAQSection } from "@/components/sections/FAQSection";
import { faqPageSchema } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} — Automatización de Ventas por WhatsApp con IA`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema()) }}
      />
      <Hero />
      <DiagnosticoDelDolor />
      <MecanismoUnico />
      <PruebaSocial />
      <CTAFinal />
      <FAQSection />
    </>
  );
}
