// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
//   { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
  { label: "Avaliações", href: "/avaliacoes" },
];

// Coloque seu número no formato DDI+DDD+NUMERO (somente dígitos).
// Ex.: 5581999999999
const WHATSAPP_PHONE = "55SEUNUMEROAQUI";

// Mensagem inicial opcional (vai URL-encoded automaticamente)
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(WHATSAPP_TEXT);
    const phone = WHATSAPP_PHONE.replace(/\D/g, "");
    return `https://wa.me/${phone}?text=${text}`;
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // trava scroll do body quando menu mobile abre (opcional, mas fica bom)
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-sm font-semibold text-white">
            Psi
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-900">
              Psicóloga • Tifany Karen
            </div>
            <div className="text-xs text-zinc-500">CRP 13/13819</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-emerald-50 text-emerald-900"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold shadow-sm !text-white transition hover:bg-emerald-800 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-black/5 bg-white">
            <nav className="mx-auto max-w-6xl px-4 py-3">
              <div className="grid gap-1">
                {NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cx(
                        "rounded-xl px-4 py-3 text-sm font-medium transition",
                        active
                          ? "bg-emerald-50 text-emerald-900"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Falar no WhatsApp
                </a>
                <p className="mt-2 text-xs text-zinc-500">
                  Resposta em horário comercial (ou conforme disponibilidade).
                </p>
              </div>
            </nav>
          </div>

          {/* backdrop pra fechar ao clicar fora */}
          <button
            aria-label="Fechar menu"
            className="fixed inset-0 -z-10 cursor-default bg-black/20"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}