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
              Sou assistente administrativa remota com 14 anos de experiência em rotinas
              administrativas, atendimento ao cliente e organização documental.
            </p>
            <p>
              Apoio profissionais e pequenos negócios que precisam de ordem no dia a dia: documentos
              espalhados, agenda cheia de conflitos, cobranças atrasadas e propostas sem resposta —
              é aí que eu entro.
            </p>
            <p>
              Minha função não é apenas executar tarefas, é criar processo — e te ajudar a ter mais
              tempo para o que importa: fazer sua empresa crescer.
            </p>
            <p>
              Uso um sistema próprio de organização pra colocar ordem na rotina de cada cliente: cada
              nota fiscal, cada cobrança, cada prazo com um lugar certo — sem depender da minha memória,
              e sem você precisar aprender uma ferramenta nova. Eu acompanho, organizo e aviso antes
              de virar problema.
            </p>
            <p>
              Isso não substitui a conversa. Gosto de entender o negócio de quem atendo: ouço antes de
              agir, pergunto quando tenho dúvida, aviso quando algo muda. É esse cuidado — não só o
              sistema — que faz um cliente confiar a papelada da empresa dele pra mim.
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
          O que você deixou de vender, atender ou produzir essa semana por causa da papelada? E pensar que dava pra ter resolvido isso terceirizando — sem CLT, sem encargo, e ainda mais barato.
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
