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
      "A base da operação em ordem: documentos organizados e informação pronta para decidir.",
    items: [
      "Organização e digitalização de documentos",
      "Planilhas de controle e relatórios periódicos",
      "Cadastros, contratos e arquivos de clientes",
      "Compras e pedidos recorrentes",
    ],
  },
  {
    number: "02",
    title: "Agenda e atendimento",
    summary:
      "Comunicação humanizada e assertiva:\nSua empresa bem representada em cada atendimento.",
    items: [
      "Gestão de agenda e compromissos ",
      "Triagem de e-mails e retorno ágil",
      "Atendimento por WhatsApp e retorno de contatos",
      "Agendamento e acompanhamento de solicitações",
      "Lembretes e follow-up de retornos",
    ],
  },
  {
    number: "03",
    title: "Financeiro de apoio",
    summary:
      "Controle das entradas e saídas com acompanhamento próximo, sem substituir sua contabilidade.",
    items: [
      "Emissão de notas fiscais e faturamento",
      "Contas a pagar e a receber",
      "Conciliação bancária simples",
      "Cobrança e envio de boletos",
      "Relatório mensal de movimentação",
    ],
  },
  {
    number: "04",
    title: "Apoio comercial e mídias",
    summary: "Presença digital ativa",
    items: [
      "Organização e atualização do CRM",
      "Follow-up de propostas e orçamentos",
      "Elaboração e envio de propostas comerciais",
      "Agendamento de posts e resposta a comentários",
      "Listas de contatos e campanhas simples",
    ],
  },
];
