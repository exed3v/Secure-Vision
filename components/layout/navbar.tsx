"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Cómo trabajamos" },
    { href: "#beneficios", label: "Por qué elegirnos" },
    { href: "#cobertura", label: "Cobertura" },
    { href: "#faq", label: "Preguntas" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 md:grid-cols-3 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-border">
              <img
                src="/logo.png"
                alt="Secure Vision"
                className="h-9 w-9 object-contain"
              />
            </span>

            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
                SECURE VISION
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Seguridad privada
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition hover:bg-primary-soft hover:text-primary-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2">
            <a
              href="#contacto"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-deep transition hover:bg-primary-soft md:inline-flex"
            >
              Contacto
            </a>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-xl bg-bordeaux px-4 py-2.5 text-sm font-semibold text-bordeaux-foreground shadow-soft transition hover:bg-bordeaux-hover hover:shadow-glow-bordeaux"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>

            {/* Mobile button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-1 grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground md:hidden"
              aria-label="Abrir menú"
            >
              <div className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-current" />
                <span className="h-0.5 w-4 bg-current" />
                <span className="h-0.5 w-4 bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card p-2 shadow-elevated md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
