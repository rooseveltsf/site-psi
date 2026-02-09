import Link from "next/link";

const WHATSAPP_PHONE = "55SEUNUMEROAQUI";
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
  { label: "Avaliações", href: "/avaliacoes" },
];

const LEGAL = [
  { label: "Políticas", href: "/politicas" },
  { label: "Termos", href: "/termos" }, // opcional (crie se quiser)
];

function buildWhatsAppLink(phone: string, text: string) {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  const whatsappHref = buildWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_TEXT);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-semibold text-white">
                Psi
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-zinc-900">
                  Psicóloga • Nome Sobrenome
                </div>
                <div className="text-xs text-zinc-500">CRP 00/00000</div>
              </div>
            </div>

            <p className="max-w-sm text-sm text-zinc-600">
              Atendimento psicológico com acolhimento, ética e compromisso com
              seu processo. Sessões online e/ou presenciais.
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                Falar no WhatsApp
              </a>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                Contato
              </Link>
            </div>

            <p className="text-xs text-zinc-500">
              Se você estiver em situação de emergência, procure ajuda imediata
              (ex.: SAMU 192 / CVV 188).
            </p>
          </div>

          {/* Navegação */}
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Páginas</h3>
              <ul className="mt-3 space-y-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 transition hover:text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Informações</h3>
              <ul className="mt-3 space-y-2">
                {LEGAL.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 transition hover:text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Links opcionais (ajuste conforme necessidade) */}
                <li>
                  <a
                    href="mailto:contato@seudominio.com"
                    className="text-sm text-zinc-600 transition hover:text-zinc-900"
                  >
                    contato@seudominio.com
                  </a>
                </li>
                <li>
                  <span className="text-sm text-zinc-600">
                    Recife/PE • Atendimento online
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-zinc-500">
            © {year} Psicóloga • Nome Sobrenome. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/search?q=google+reviews"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              Avaliações no Google
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}