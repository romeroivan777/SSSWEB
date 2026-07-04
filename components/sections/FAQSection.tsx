import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section className="section-y border-t border-border-subdued bg-surface-1">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <Reveal>
          <p className="text-label uppercase text-accent-tech">Preguntas frecuentes</p>
          <h2 className="mt-4 max-w-2xl text-display-2 text-text-primary">
            Antes de que lo preguntes.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
