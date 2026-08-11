export type Service = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Rotinas administrativas",
    summary:
      "A base da operação em ordem: documentos onde deveriam estar e informação pronta para decidir.",
    items: [
      "Organização e digitalização de documentos",
      "Planilhas de controle e relatórios periódicos",
      "Cadastros, contratos e arquivos de clientes",
      "Padronização de processos e checklists",
      "Compras e pedidos recorrentes",
    ],
  },
  {
    number: "02",
    title: "Agenda e atendimento",
    summary:
      "Ninguém fica sem resposta e sua agenda deixa de ser um campo minado de conflitos.",
    items: [
      "Gestão de agenda e confirmação de compromissos",
      "Triagem de e-mails e caixa de entrada organizada",
      "Atendimento por WhatsApp e retorno de contatos",
      "Agendamento e remarcação de clientes",
      "Lembretes e follow-up de retornos",
    ],
  },
  {
    number: "03",
    title: "Financeiro de apoio",
    summary:
      "Controle das entradas e saídas com acompanhamento próximo, sem substituir sua contabilidade.",
    items: [
      "Emissão de notas fiscais de serviço",
      "Contas a pagar e a receber",
      "Conciliação bancária simples",
      "Cobrança e envio de boletos",
      "Relatório mensal de movimentação",
    ],
  },
  {
    number: "04",
    title: "Apoio comercial e mídias",
    summary:
      "Propostas que não esfriam e presença digital ativa, com registro de cada oportunidade.",
    items: [
      "Organização e atualização do CRM",
      "Follow-up de propostas e orçamentos",
      "Elaboração e envio de propostas comerciais",
      "Agendamento de posts e resposta a comentários",
      "Listas de contatos e campanhas simples",
    ],
  },
];
