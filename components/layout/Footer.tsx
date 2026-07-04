import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Badge } from "@/components/ui/Badge";
import { NAV_LINKS, SITE } from "@/lib/constants";

const STACK = ["Next.js", "Supabase", "Meta Cloud API", "n8n", "OpenAI"];

export function Footer() {
  return (
    <footer className="border-t border-border-subdued bg-bg-base">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Logo />
            <p className="max-w-sm text-body-base text-text-secondary">{SITE.description}</p>
            <Badge variant="success" withDot>
              Sistema en línea 24/7
            </Badge>
          </div>

          <div className="space-y-4">
            <h3 className="text-label uppercase text-text-secondary">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-base text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/politicas"
                  className="text-body-base text-text-secondary transition-colors hover:text-text-primary"
                >
                  Políticas &amp; Legal
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-label uppercase text-text-secondary">Infraestructura</h3>
            <ul className="space-y-2 font-mono text-caption text-text-secondary">
              {STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-subdued pt-8 text-caption text-text-secondary md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.locationLabel}.
          </p>
          <p className="font-mono">Status del sistema: operativo</p>
        </div>
      </div>
    </footer>
  );
}
