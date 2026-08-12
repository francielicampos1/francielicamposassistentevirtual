import { createFileRoute, Link } from "@tanstack/react-router";
import portraitWork from "../assets/portrait-work.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Francieli Campos | Assistente Administrativa Remota" },
      {
        name: "description",
        content:
          "Conheça a forma de trabalho por trás do apoio administrativo remoto: método, discrição e proximidade com cada cliente.",
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
              Trabalho como assistente administrativa remota apoiando profissionais e pequenas
              empresas que cresceram mais rápido do que a própria estrutura. Documentos espalhados,
              agenda cheia de conflitos, cobranças atrasadas e propostas sem resposta: é aí que eu
              entro.
            </p>
            <p>
              Minha função não é apenas executar tarefas, é criar processo. Cada rotina que assumo
              passa a ter um lugar definido, um responsável e um registro — para que a operação
              continue funcionando mesmo quando o dia foge do controle.
            </p>
            <p>
              O atendimento é próximo e limitado a poucos clientes por vez, justamente para manter a
              qualidade e o cuidado com cada negócio.
            </p>
          </div>
        </div>
        <img
          src={portraitWork}
          alt="Mãos organizando documentos sobre uma mesa clara"
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
          “Delegar bem começa com organização. É isso que eu entrego antes de qualquer tarefa.”
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
