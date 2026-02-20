// app/contato/page.tsx
import Link from "next/link";

const WHATSAPP_PHONE = "5583998523094";
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

const EMAIL = "contato@seudominio.com";
const CITY = "Recife/PE";

function waLink(phone: string, text: string) {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function ContatoPage() {
  const whatsappHref = waLink(WHATSAPP_PHONE, WHATSAPP_TEXT);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
            Contato
          </p>

          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Vamos conversar?
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
            Se fizer sentido para você, me chame no WhatsApp para tirar dúvidas e
            entender o melhor caminho. Respondo em horário comercial (ou conforme
            disponibilidade).
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Falar no WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      {/* CARDS DE CONTATO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            <ContactCard
              title="WhatsApp"
              desc="Canal principal para dúvidas e agendamento."
              value="+55 (83) 99852-3094"
              href={whatsappHref}
              cta="Abrir WhatsApp"
              accent
            />

            <ContactCard
              title="E-mail"
              desc="Para questões administrativas e encaminhamentos."
              value={EMAIL}
              href={`mailto:${EMAIL}`}
              cta="Enviar e-mail"
            />

            {/* <ContactCard
              title="Localização"
              desc="Atendimento online e/ou presencial (ajuste conforme necessário)."
              value={CITY}
              href="#"
              cta="Ver detalhes"
              disabled
            /> */}
          </div>

          {/* Horários / Observações */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900">
                Horário de resposta
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Em geral, respondo de <strong>segunda a sexta</strong>, em horário
                comercial. Se eu estiver em sessão, posso demorar um pouquinho —
                retorno assim que possível.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900">
                Importante (urgência/emergência)
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Em caso de urgência/emergência, procure ajuda imediata:{" "}
                <strong>SAMU 192</strong> ou <strong>CVV 188</strong>.
              </p>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Pronto para dar o primeiro passo?
                </h2>
                <p className="mt-2 text-zinc-600">
                  Clique no botão abaixo e me chame no WhatsApp. Você pode contar,
                  com calma, o que está buscando.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Falar no WhatsApp
                </a>
                <Link
                  href="/sobre"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Conhecer a psicóloga
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  title,
  desc,
  value,
  href,
  cta,
  accent,
  disabled,
}: {
  title: string;
  desc: string;
  value: string;
  href: string;
  cta: string;
  accent?: boolean;
  disabled?: boolean;
}) {
  const Wrapper = disabled ? "div" : "a";

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <p className={accent ? "text-sm font-semibold text-emerald-800" : "text-sm font-semibold text-zinc-900"}>
        {title}
      </p>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>

      <p className="mt-4 text-sm font-semibold text-zinc-900">{value}</p>

      <div className="mt-5">
        <Wrapper
          {...(!disabled
            ? { href, target: "_blank", rel: "noreferrer" }
            : {})}
          className={
            disabled
              ? "inline-flex cursor-not-allowed items-center justify-center rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-500"
              : "inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold !text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
          }
        >
          {cta}
        </Wrapper>
      </div>
    </div>
  );
}
