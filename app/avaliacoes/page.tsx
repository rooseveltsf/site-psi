// app/avaliacoes/page.tsx
import Link from "next/link";

const WHATSAPP_PHONE = "5583998523094";
const WHATSAPP_TEXT =
  "Olá! Vim pelo seu site e gostaria de informações sobre atendimento psicológico.";

// Troque pelo link real do perfil da sua irmã no Google (Google Business Profile / Maps)
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=google+reviews";

function waLink(phone: string, text: string) {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

type Review = {
  author: string;
  date: string; // ex: "Jan/2026"
  rating: number; // 1..5
  text: string;
};

const REVIEWS: Review[] = [
  {
    author: "Cliente",
    date: "Jan/2026",
    rating: 5,
    text: "Atendimento acolhedor e profissional. Me senti à vontade desde o início.",
  },
  {
    author: "Cliente",
    date: "Dez/2025",
    rating: 5,
    text: "Excelente escuta e condução das sessões. Processo muito respeitoso e humano.",
  },
  {
    author: "Cliente",
    date: "Nov/2025",
    rating: 5,
    text: "Me ajudou a ter mais clareza e recursos para lidar com ansiedade no dia a dia.",
  },
  {
    author: "Cliente",
    date: "Out/2025",
    rating: 5,
    text: "Profissional muito atenciosa. Recomendo para quem busca acolhimento e seriedade.",
  },
  {
    author: "Cliente",
    date: "Set/2025",
    rating: 5,
    text: "Sessões leves e profundas ao mesmo tempo. Me senti respeitado em todo o processo.",
  },
];

export default function AvaliacoesPage() {
  const whatsappHref = waLink(WHATSAPP_PHONE, WHATSAPP_TEXT);

  // Placeholder de média — quando você integrar API do Google, você substitui isso por dados reais
  const avgRating = 5.0;
  const total = 23;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
            Avaliações
          </p>

          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Avaliações no Google
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
            Aqui você encontra um resumo de avaliações públicas. Você também pode
            abrir diretamente no Google para ver todas.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard title="Nota média" value={`${avgRating.toFixed(1)}`} subtitle="Baseado em avaliações públicas" />
            <StatCard title="Total de avaliações" value={`${total}`} subtitle="No Google" />
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">Abrir no Google</p>
              <p className="mt-2 text-sm text-zinc-600">
                Veja a página completa com todas as avaliações e detalhes.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold !text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
              >
                Ver no Google
              </a>
            </div>
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
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>

      {/* LISTA DE AVALIAÇÕES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                Comentários (exemplos)
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-600">
                Por enquanto, estes cards são placeholders. Depois, você troca
                para integrar automaticamente com o Google (Places API) ou usar
                um widget.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-emerald-800 hover:text-emerald-900"
            >
              Ver todas no Google →
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {REVIEWS.map((r, idx) => (
              <ReviewCard key={idx} review={r} />
            ))}
          </div>

          {/* CTA FINAL */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-zinc-50 p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                  Quer tirar dúvidas antes de começar?
                </h3>
                <p className="mt-2 text-zinc-600">
                  Me chame no WhatsApp e me conte, com calma, o que você está buscando.
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
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  Abrir no Google
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Observação: avaliações são conteúdos públicos e podem variar conforme
            a experiência de cada pessoa.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Components ------------------ */

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-4xl font-semibold tracking-tight text-zinc-900">
          {value}
        </p>
        <Stars count={5} />
      </div>
      <p className="mt-2 text-sm text-zinc-600">{subtitle}</p>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">{review.author}</p>
          <p className="mt-1 text-xs text-zinc-500">{review.date}</p>
        </div>
        <Stars count={review.rating} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-700">
        {review.text}
      </p>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < count;
        return (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            className={filled ? "text-amber-500" : "text-zinc-300"}
            aria-hidden="true"
          >
            <path
              d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        );
      })}
    </div>
  );
}
