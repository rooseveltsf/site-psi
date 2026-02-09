// app/page.tsx
import Link from "next/link";

const WHATSAPP_PHONE = "55SEUNUMEROAQUI";
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

function waLink(phone: string, text: string) {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const whatsappHref = waLink(WHATSAPP_PHONE, WHATSAPP_TEXT);

  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
              Atendimento online e/ou presencial • CRP 13/13819
            </p>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Um espaço seguro para você se entender com mais clareza.
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              Psicoterapia com acolhimento, ética e compromisso com seu processo.
              Um atendimento humano, com foco em ampliar consciência, autonomia e
              bem-estar.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                Ver como funciona
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <InfoPill title="Sessões" value="50 min" />
              <InfoPill title="Modalidade" value="Online/Presencial" />
              <InfoPill title="Contato" value="WhatsApp" />
            </div>
          </div>

          {/* Card lateral (imagem/placeholder) */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-emerald-200/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-zinc-900">
                  Psicóloga • Nome Sobrenome
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Abordagem: TCC / Humanista / Psicanálise (ajuste aqui)
                </p>

                <div className="mt-6 grid gap-3">
                  <MiniCard
                    title="Acolhimento"
                    desc="Um espaço seguro, sem julgamentos e com escuta qualificada."
                  />
                  <MiniCard
                    title="Clareza e objetivos"
                    desc="Alinhamento do que você busca e acompanhamento do processo."
                  />
                  <MiniCard
                    title="Ética e sigilo"
                    desc="Atendimento com responsabilidade e respeito ao seu tempo."
                  />
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold !text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Agendar um primeiro contato
                </a>

                <p className="mt-3 text-center text-xs text-zinc-500">
                  Resposta em horário comercial (ou conforme disponibilidade).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                Para quem é o atendimento
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-600">
                Exemplos de temas comuns trabalhados em psicoterapia. Ajuste de
                acordo com o foco da sua irmã.
              </p>
            </div>
            <Link
              href="/servicos"
              className="text-sm font-semibold text-emerald-800 hover:text-emerald-900"
            >
              Ver detalhes → 
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TopicCard title="Ansiedade e estresse" desc="Manejo emocional e estratégias de enfrentamento." />
            <TopicCard title="Autoestima" desc="Construção de autoconfiança e autoaceitação." />
            <TopicCard title="Relacionamentos" desc="Limites, comunicação e vínculos mais saudáveis." />
            <TopicCard title="Autoconhecimento" desc="Entender padrões e escolhas com mais clareza." />
            <TopicCard title="Luto e perdas" desc="Acolhimento e elaboração do processo." />
            <TopicCard title="Transições de vida" desc="Mudanças, decisões e fases desafiadoras." />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Como funciona
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Um fluxo simples para você entender o processo desde o primeiro
            contato.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StepCard
              step="01"
              title="Primeiro contato"
              desc="Você chama no WhatsApp e alinhamos suas necessidades iniciais."
            />
            <StepCard
              step="02"
              title="Entrevista inicial"
              desc="Combinamos objetivo, frequência e formato do atendimento."
            />
            <StepCard
              step="03"
              title="Acompanhamento"
              desc="Sessões com constância e cuidado, respeitando seu ritmo."
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Quero conversar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Ver outras formas de contato
            </Link>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES (preview) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                Avaliações no Google
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-600">
                Depoimentos e experiências compartilhadas por quem já foi
                atendido.
              </p>
            </div>

            <Link
              href="/avaliacoes"
              className="text-sm font-semibold text-emerald-800 hover:text-emerald-900"
            >
              Ver todas → 
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Placeholder: depois você pode trocar pra puxar da API */}
            <ReviewCard
              name="Cliente"
              stars={5}
              text="Atendimento acolhedor e profissional. Me senti muito à vontade desde a primeira sessão."
            />
            <ReviewCard
              name="Cliente"
              stars={5}
              text="Um processo que me ajudou a ter clareza e melhorar minha autoestima. Recomendo!"
            />
            <ReviewCard
              name="Cliente"
              stars={5}
              text="Excelente escuta e condução das sessões. Senti evolução com constância e cuidado."
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/avaliacoes"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Ver avaliações no site
            </Link>

            {/* Troque esse href pelo link real do perfil Google */}
            <a
              href="https://www.google.com/search?q=google+reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Abrir no Google
            </a>
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
                  Vamos conversar?
                </h2>
                <p className="mt-2 text-zinc-600">
                  Se fizer sentido para você, me chame no WhatsApp para tirarmos
                  dúvidas e entender o melhor caminho.
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
              Em caso de urgência/emergência, procure ajuda imediata (SAMU 192 /
              CVV 188).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Components ------------------ */

function InfoPill({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-3">
      <p className="text-xs font-semibold text-zinc-700">{title}</p>
      <p className="text-sm font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-1 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function TopicCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold text-emerald-800">{step}</p>
      <p className="mt-2 text-lg font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function ReviewCard({
  name,
  stars,
  text,
}: {
  name: string;
  stars: number;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-zinc-50 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-zinc-900">{name}</p>
        <Stars count={stars} />
      </div>
      <p className="mt-3 text-sm text-zinc-700">{text}</p>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          className={i < count ? "text-amber-500" : "text-zinc-300"}
          aria-hidden="true"
        >
          <path
            d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}
