"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subdued border-y border-border-subdued">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.pregunta}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-heading-1 text-text-primary">{item.pregunta}</span>
              <Plus
                aria-hidden="true"
                strokeWidth={1.5}
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-text-secondary transition-transform duration-300 ease-base",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-body-base text-text-secondary">{item.respuesta}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
