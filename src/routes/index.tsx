import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroOffice from "../assets/hero-office.jpg";
import portraitWork from "../assets/portrait-work.jpg";
import { services } from "../content/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francieli Campos | Assistente Administrativa Remota" },
      {
        name: "description",
        content:
          "Assistência administrativa remota para pequenos negócios: rotinas, agenda, atendimento, financeiro de apoio e suporte comercial. Solicite um orçamento.",
      },
      {
        property: "og:title",
        content: "Francieli Campos | Assistente Administrativa Remota",
      },
      {
        property: "og:description",
        content:
          "Tire a operação administrativa das suas costas. Apoio remoto, organizado e discreto para o seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: "https://francielicamposassistentevirtual.lovable.app/",
      },
    ],
    links: [
      { rel: "canonical", href: "https://francielicamposassistentevirtual.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Francieli Campos - Assistente Administrativa Remota",
          url: "https://francielicamposassistentevirtual.lovable.app/",
          telephone: "+5514988294067",
          areaServed: "Brasil",
          availableLanguage: "pt-BR",
        }),
      },
    ],
  }),
  component: Home,
});

const numbers = [
  { value: "100%", label: "Atendimento remoto" },
  { value: "14 anos de experiência", label: "Sigilo e confiança para o seu negócio" },
  { value: "4", label: "Frentes de apoio" },

];

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="eyebrow">Assistência administrativa remota</p>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            <span className="block font-bold">Suporte administrativo</span>
            <span className="block text-[0.9em] font-bold leading-[1.1]">
              sem precisar contratar um funcionário CLT.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Cuido dos processos que consomem seu dia — documentos, agenda, cobranças, atendimento
            e follow-up — para que você se dedique ao que faz seu negócio crescer.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Pedir orçamento <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/servicos"
              className="text-sm text-muted-foreground underline decoration-clay decoration-2 underline-offset-4 hover:text-foreground"
            >
              Ver como funciona
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroOffice}
            alt="Mesa de trabalho organizada com notebook, pasta de documentos e caderno"
            width={1408}
            height={1104}
            className="w-full object-cover"
          />
          <div className="absolute -bottom-6 left-6 hidden bg-background px-6 py-4 shadow-soft sm:block">
            <p className="font-display text-lg">Menos burocracia</p>
            <p className="text-xs text-muted-foreground">mais tempo para crescer</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-center sm:grid-cols-3">

          {numbers.map((n) => (
            <div key={n.label}>
              <p className="font-display text-3xl">{n.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">O que eu faço</p>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          Quatro frentes de apoio, combinadas do jeito que o seu negócio precisa.
        </h2>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 sm:grid-rows-2">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col bg-background p-8">

              <p className="font-display text-2xl text-primary">{s.number}</p>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {s.items.slice(0, 4).map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 bg-clay" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <img
          src={portraitWork}
          alt="Mãos organizando documentos e planner sobre mesa de linho"
          width={1008}
          height={1200}
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <p className="eyebrow">Como trabalhamos juntos</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Simples desde o primeiro contato.</h2>
          <ol className="mt-10 space-y-8">
            {[
              {
                t: "Conversa inicial",
                d: "Entendo sua rotina, seus gargalos e o volume real de trabalho.",
              },
              {
                t: "Proposta sob medida",
                d: "Escolhemos as frentes de apoio e o formato: pontual, semanal ou mensal.",
              },
              {
                t: "Organização e entrega",
                d: "Alinhamos ferramentas e acessos, e a operação começa a rodar com relatórios.",
              },
            ].map((step, idx) => (
              <li key={step.t} className="flex gap-5">
                <span className="font-display text-2xl text-clay">0{idx + 1}</span>
                <div>
                  <h3 className="text-lg">{step.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="border border-border bg-secondary/60 px-8 py-14 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
            Vamos tirar a parte administrativa da sua lista de preocupações?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Conte o que está travando a sua rotina e eu respondo com uma proposta objetiva.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground"
          >
            Falar com a Francieli <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
