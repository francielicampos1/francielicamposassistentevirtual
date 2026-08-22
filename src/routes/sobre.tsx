import { createFileRoute, Link } from "@tanstack/react-router";
import portraitWork from "../assets/portrait-work.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Francieli Campos | Assistente Administrativa Remota" },
      {
        name: "description",
        content:
          "14 anos de experiência em rotinas administrativas, atendimento ao cliente e organização documental. Conheça a forma de trabalho por trás do apoio administrativo remoto.",
      },
      { property: "og:title", content: "Sobre | Francieli Campos" },
      {
        property: "og:description",
        content: "Método, discrição e proximidade no apoio administrativo remoto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: "https://francielicamposassistentevirtual.lovable.app/sobre",
      },
    ],
    links: [
      { rel: "canonical", href: "https://francielicamposassistentevirtual.lovable.app/sobre" },
    ],
  }),
  component: Sobre,
});

const values = [
  {
    t: "Confidencialidade",
    d: "Acessos, dados financeiros e informações de clientes tratados com sigilo absoluto.",
  },
  {
    t: "Clareza",
    d: "Você sabe o que foi feito, quanto tempo levou e o que vem em seguida.",
  },
  {
    t: "Autonomia",
    d: "Depois do alinhamento inicial, a rotina anda sem precisar ser cobrada.",
  },
];

function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Sobre</p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Prazer, sou Francieli. Organizo o que trava o seu dia.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Entrei na área administrativa em 2006, no curso técnico de Rotinas Administrativas.
              Desde 2012, sou responsável pelo administrativo de uma indústria de EPIs, atuando
              diretamente com <strong>nota fiscal, boleto, cobrança, atendimento e documentação</strong>.
            </p>
            <p>
              Sou formada em Gestão de Turismo, mas foi na prática, dentro de uma indústria, que
              construí a experiência e a especialidade que ofereço hoje.
            </p>
            <p>
              Meu aperfeiçoamento continua: atualmente, faço <strong>pós-graduação em RH</strong> e
              desenvolvo experiência profissional na área de inteligência artificial, colaborando
              remotamente com uma empresa internacional.
            </p>
            <p>
              Para cada cliente, utilizo um <strong>painel próprio</strong>, desenvolvido
              especificamente para essa rotina. Nele, organizo cadastro de clientes, contas a pagar
              e a receber, agenda e documentos, mantendo o histórico de cada atendimento sempre
              acessível.
            </p>
            <p>
              O atendimento é próximo e limitado a poucos clientes por vez, com sigilo total sobre os
              dados financeiros e documentos de cada negócio.
            </p>
          </div>
        </div>
        <img
          src={portraitWork}
          alt="Planner 2026 aberto sobre a mesa, ao lado do notebook e uma xícara de café"
          width={1008}
          height={1200}
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-px bg-border sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.t} className="bg-background p-8">
            <h2 className="text-xl">{v.t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <p className="max-w-2xl font-display text-2xl leading-snug">
          O que você deixou de vender, atender ou produzir essa semana por causa da papelada? E pensar que dava pra ter resolvido isso terceirizando.
        </p>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center border border-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-primary-foreground"
        >
          Conversar comigo
        </Link>
      </div>
    </div>
  );
}
