import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { services } from "../content/services";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e orçamento | Francieli Campos Assistente Administrativa" },
      {
        name: "description",
        content:
          "Solicite um orçamento de assistência administrativa remota. Conte sua necessidade e receba uma proposta objetiva.",
      },
      { property: "og:title", content: "Contato | Francieli Campos" },
      {
        property: "og:description",
        content: "Envie sua necessidade e receba uma proposta de apoio administrativo remoto.",
      },
    ],
  }),
  component: Contato,
});

const CONTACT_EMAIL = "contato@francielicampos.com.br";
const WHATSAPP_NUMBER = "5500000000000";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome." })
    .max(100, { message: "Nome muito longo." }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido." })
    .max(255, { message: "E-mail muito longo." }),
  company: z.string().trim().max(120, { message: "Texto muito longo." }).optional(),
  service: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Conte um pouco mais sobre a sua necessidade." })
    .max(1000, { message: "Máximo de 1000 caracteres." }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contato() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      service: form.get("service"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const d = parsed.data;
    const text = [
      `Olá, Francieli! Meu nome é ${d.name}.`,
      d.company ? `Empresa: ${d.company}` : null,
      d.service ? `Serviço de interesse: ${d.service}` : null,
      `E-mail: ${d.email}`,
      "",
      d.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Contato</p>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Conte o que precisa organizar.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Responda o formulário e sua mensagem já sai pronta no WhatsApp. Retorno em até 24 horas
            em dias úteis com uma proposta objetiva.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 text-clay" />
              <span className="text-muted-foreground">
                WhatsApp para dúvidas rápidas e alinhamentos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 text-clay" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-foreground">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 text-clay" />
              <span className="text-muted-foreground">
                Atendimento remoto, segunda a sexta, 9h às 18h
              </span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-secondary/50 p-8">
          <div className="grid gap-5">
            <Field label="Nome" error={errors.name}>
              <input name="name" maxLength={100} className={inputClass} placeholder="Seu nome" />
            </Field>
            <Field label="E-mail" error={errors.email}>
              <input
                name="email"
                type="email"
                maxLength={255}
                className={inputClass}
                placeholder="voce@empresa.com"
              />
            </Field>
            <Field label="Empresa (opcional)" error={errors.company}>
              <input name="company" maxLength={120} className={inputClass} placeholder="Nome da empresa" />
            </Field>
            <Field label="Serviço de interesse" error={errors.service}>
              <select name="service" className={inputClass} defaultValue="">
                <option value="">Ainda não sei / combinar</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Como posso ajudar?" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className={inputClass}
                placeholder="Descreva a rotina que está travando o seu dia."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-7 w-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enviar mensagem
          </button>

          {sent && (
            <p className="mt-4 text-sm text-primary">
              Mensagem preparada no WhatsApp. Se a janela não abriu, envie um e-mail para{" "}
              {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-clay";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
