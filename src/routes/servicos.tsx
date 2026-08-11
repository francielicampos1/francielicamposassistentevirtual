import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "../content/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de assistência administrativa remota | Francieli Campos" },
      {
        name: "description",
        content:
          "Rotinas administrativas, agenda e atendimento, financeiro de apoio e suporte comercial: veja tudo que posso assumir na sua operação.",
      },
      { property: "og:title", content: "Serviços | Francieli Campos" },
      {
        property: "og:description",
        content:
          "Escopo completo de apoio administrativo remoto, com pacotes de horas ou mensalidade.",
      },
    ],
  }),
  component: Servicos;
});

function Servicos() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Serviços</p>
      <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Escolha as frentes de apoio e eu assumo a execução.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground">
        Todo o trabalho é remoto, com ferramentas que você já usa. Você pode contratar uma frente
        isolada ou combinar várias em um pacote mensal.
      </p>

      <div className="mt-16 space-y-16">
        {services.map((s) => (
          <article key={s.title} className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-display text-3xl text-clay">{s.number}</p>
              <h2 className="mt-3 text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 bg-secondary/60 px-4 py-3 text-sm">
                  <span className="mt-2 size-1.5 shrink-0 bg-clay" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-px bg-border sm:grid-cols-3">
        {[
          {
            t: "Pacote de horas",
            d: "Ideal para demandas pontuais. Horas contratadas e usadas conforme a necessidade.",
          },
          {
            t: "Mensalidade",
            d: "Rotina recorrente com escopo fixo, relatórios e disponibilidade combinada.",
          },
          {
            t: "Projeto",
            d: "Organização de um gargalo específico, com começo, meio e entrega definidos.",
          },
        ].map((p) => (
          <div key={p.t} className="bg-background p-8">
            <h3 className="text-xl">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>

      <Link
        to="/contato"
        className="mt-12 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground"
      >
        Solicitar proposta <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
