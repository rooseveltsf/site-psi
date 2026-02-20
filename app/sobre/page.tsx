// app/sobre/page.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_PHONE = "5583998523094";
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

function waLink(phone: string, text: string) {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

const CRP = '13/13819'

export default function SobrePage() {
  const whatsappHref = waLink(WHATSAPP_PHONE, WHATSAPP_TEXT);

  return (
    <main className="bg-white">
      {/* HERO / INTRO */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
              Sobre • Psicóloga • CRP {CRP}
            </p>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Olá, eu sou <span className="text-emerald-800">Tifany Karen</span>.
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              Meu trabalho é oferecer um espaço de escuta e acolhimento para que você
              possa compreender suas emoções, fortalecer sua autonomia e construir
              mudanças possíveis no seu ritmo.
            </p>

            <div className="mt-6 grid gap-3">
              <Highlight
                title="Atendimento humanizado"
                desc="Um ambiente seguro, com respeito, sigilo e ausência de julgamentos."
              />
              <Highlight
                title="Clareza e direção"
                desc="Definimos juntos objetivos terapêuticos e acompanhamos o processo com constância."
              />
              <Highlight
                title="Abordagem"
                desc="TCC / Humanista / Psicanálise (ajuste aqui conforme a abordagem dela)."
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          {/* Foto */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-emerald-200/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                {/* Coloque a foto em /public/foto.jpg */}
                <Image
                  src="/foto.jpeg"
                  alt="Foto profissional da psicóloga"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Tifany Karen • CRP {CRP}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Atendimento online e/ou presencial • João Pessoa/PB
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <InfoPill title="Sessão" value="50 min" />
                  <InfoPill title="Contato" value="WhatsApp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO / FORMAÇÃO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Minha trajetória
              </h2>
              <p className="mt-2 text-zinc-600">
                Um pouco sobre formação, valores e como conduzo o processo terapêutico.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-3xl border border-black/10 bg-zinc-50 p-6 shadow-sm">
                <div className="prose prose-zinc max-w-none">
                  <p className="text-zinc-700">
                    Sou formada em Psicologia pela <strong>Centro Universitário de João pessoa (UNIPE)</strong> e atuo
                    com foco em <strong>[público alvo]</strong>, com atendimentos
                    <strong> online e/ou presenciais</strong>.
                  </p>
                  <p className="text-zinc-700">
                    Acredito em um processo terapêutico baseado em escuta ativa, respeito
                    e construção conjunta de caminhos. Durante as sessões, trabalhamos
                    para compreender padrões, lidar com emoções e desenvolver recursos
                    práticos para o dia a dia.
                  </p>
                  <p className="text-zinc-700">
                    Se fizer sentido para você, será um prazer te acompanhar nesse
                    processo.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MiniCard
                    title="Formação"
                    items={[
                      "Centro universitário de João pessoa (UNIPE)",
                      "Curso/Capacitação — Tema Y",
                      "Curso/Capacitação — Tema Z",
                    ]}
                  />
                  <MiniCard
                    title="Atuação"
                    items={[
                      "Adultos (exemplo)",
                      "Ansiedade, autoestima, relacionamentos (exemplo)",
                      "Atendimento online/presencial (exemplo)",
                    ]}
                  />
                </div>
              </div>

              {/* Bloco valores */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <ValueCard
                  title="Sigilo"
                  desc="Seu processo é confidencial e respeitado."
                />
                <ValueCard
                  title="Acolhimento"
                  desc="Escuta cuidadosa e sem julgamentos."
                />
                <ValueCard
                  title="Compromisso"
                  desc="Constância e responsabilidade no acompanhamento."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  Quer conversar?
                </h2>
                <p className="mt-2 text-zinc-600">
                  Me chame no WhatsApp para tirar dúvidas e entender se o atendimento
                  faz sentido para você.
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
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Contato
                </Link>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Em caso de urgência/emergência, procure ajuda imediata (SAMU 192 / CVV 188).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Components ------------------ */

function Highlight({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-1 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function InfoPill({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3">
      <p className="text-xs font-semibold text-zinc-700">{title}</p>
      <p className="text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="text-sm text-zinc-600">
            • {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-emerald-800">{title}</p>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}
