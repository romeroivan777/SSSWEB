"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { useQualificationModal } from "@/hooks/useQualificationModal";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const open = useQualificationModal((s) => s.open);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 16);
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Evita un flash de estado incorrecto antes de la primera medición en mobile.
  useEffect(() => {
    setScrolled(window.scrollY > 16);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border-subdued/0 transition-colors duration-base"
      data-scrolled={scrolled}
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottomColor: scrolled ? "#1F1F1F" : "transparent",
      }}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12"
      >
        <Link href="/" aria-label="Ir al inicio de Speranza">
          <Logo />
        </Link>
        <Button size="default" onClick={open} className="hidden sm:inline-flex">
          Agendar Demo Interactiva
        </Button>
        <Button size="default" onClick={open} className="sm:hidden">
          Demo
        </Button>
      </nav>
    </motion.header>
  );
}
