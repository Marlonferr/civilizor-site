/*
  =========================================================
  CIVILIZOR — PRODUCTS.JS
  Aqui ficam os dados das soluções.

  Vantagem para quem está começando:
  você pode alterar textos, categorias e detalhes
  sem precisar mexer no HTML principal.
  =========================================================
*/

const products = {
  "c-ia": {
    name: "C-I.A",
    category: "IA / ENERGIA",
    short: "Correção automática de fator de potência e dimensionamento para gerar valor na indústria.",
    problem: "Corrige fator de potência de maneira automática e realiza dimensionamento, gerando valor para a indústria.",
    color: "#0AFFC2",
    details: [
      ["01", "Monitoramento", "Acompanhar variáveis elétricas que influenciam a operação."],
      ["02", "Inteligência", "Usar regras e modelos para apoiar a tomada de decisão."],
      ["03", "Dimensionamento", "Transformar a análise em uma resposta técnica dimensionada."]
    ]
  },

  "c-iot": {
    name: "C-IOT",
    category: "IOT / AUTOMAÇÃO / VPP",
    short: "Monitoramento em tempo real e resposta automática para situações de sobrecarga.",
    problem: "Monitora o sistema em tempo real e, caso haja sobrecarga, aciona um subsistema para atender à carga automaticamente até que o problema principal seja solucionado.",
    color: "#0AD6FF",
    details: [
      ["01", "Tempo real", "Leitura contínua do sistema para identificar mudanças e eventos."],
      ["02", "Contingência", "Subsistemas entram em vigor para apoiar a carga durante a ocorrência."],
      ["03", "VPP", "Arquitetura preparada para integrar microgeração, baterias, previsão de injeção, gestão e matching."]
    ]
  },

  "c-data": {
    name: "C-Data",
    category: "DADOS / PREVISÃO",
    short: "Transforma muitos dados em padrões, previsões e abordagens mais eficientes.",
    problem: "Muitos dados podem gerar interpretações erradas. A ideia é encontrar padrões para automatizar e prever com mais eficiência as abordagens dadas pelos dados.",
    color: "#1A79FF",
    details: [
      ["01", "Organizar", "Estruturar dados para que diferentes fontes possam ser analisadas."],
      ["02", "Encontrar", "Identificar padrões, relações e sinais relevantes."],
      ["03", "Prever", "Usar os padrões encontrados para apoiar decisões e antecipar cenários."]
    ]
  },

  "c-cel": {
    name: "C-cel",
    category: "GESTÃO DE OBRAS",
    short: "Conecta realizado x planejado para aumentar a previsibilidade de recursos.",
    problem: "Realizado x Feito: muitos problemas aparecem na gestão de recursos de obras e existe pouca previsibilidade sobre o que será necessário.",
    color: "#3B29FF",
    details: [
      ["01", "Planejado", "Registrar o que deveria acontecer e quais recursos foram previstos."],
      ["02", "Realizado", "Comparar o planejamento com o que efetivamente foi feito."],
      ["03", "Previsão", "Dar visibilidade aos desvios e apoiar a próxima decisão de recurso."]
    ]
  },

  "c-volt": {
    name: "C-volt",
    category: "ELÉTRICA / PREDIAL",
    short: "Instalações elétricas e prediais, incluindo adequação, manutenção e segurança.",
    problem: "Instalações elétricas e prediais, abrangendo elétrica e computação elétrica para residências, comércios, clínicas e pequenas indústrias.",
    color: "#FFD91A",
    details: [
      ["01", "Instalações", "Execução e adequação de sistemas elétricos e prediais."],
      ["02", "Manutenção", "Ações preventivas e corretivas para manter o sistema operando."],
      ["03", "Segurança", "Inspeção, organização e medidas para reduzir riscos elétricos."]
    ]
  },

  "c-curity": {
    name: "C-curity",
    category: "CYBERSEGURANÇA / CPS",
    short: "Protege a parte digital, elétrica, física e cyberfísica de uma empresa.",
    problem: "Cuida da parte de cybersecurity e cyberfísicos de uma empresa, considerando sistemas elétricos e físicos.",
    color: "#9429FF",
    details: [
      ["01", "Digital", "Proteção dos sistemas e informações que sustentam a operação."],
      ["02", "Físico", "Consideração dos ativos físicos conectados à operação."],
      ["03", "Cyberfísico", "Conectar segurança digital, automação e infraestrutura crítica."]
    ]
  },

  "c-sric": {
    name: "C-SRIC",
    category: "EFICIÊNCIA / REUSO",
    short: "Reuso do condensado de ar-condicionado para gerar benefícios à empresa.",
    problem: "Resolve o problema de reuso do condensado produzido por sistemas de ar-condicionado, transformando um recurso normalmente descartado em oportunidade de benefício.",
    color: "#0AFFC2",
    details: [
      ["01", "Captar", "Estruturar o aproveitamento do condensado produzido pelo sistema."],
      ["02", "Reusar", "Direcionar a água para usos compatíveis com o projeto."],
      ["03", "Beneficiar", "Gerar eficiência e reduzir desperdícios associados ao descarte."]
    ]
  },

  "c-key": {
    name: "C-key",
    category: "TI / CONTINUIDADE / SEGURANÇA",
    short: "Backup testado, recuperação rápida, controle de acesso e proteção contra ransomware.",
    problem: "Empresas podem ter backup, mas nunca ter testado a recuperação. Também podem enfrentar ransomware, phishing, acessos compartilhados, ausência de MFA, falta de padrão para restauração e dependência de um técnico que resolve tudo no improviso.",
    color: "#0AD6FF",
    pain: [
      "Backup “existente”, mas nunca testado.",
      "Ransomware e phishing.",
      "Acesso compartilhado ou sem MFA.",
      "Falta de padrão para restaurar.",
      "Dependência de um técnico que resolve no improviso."
    ],
    details: [
      ["01", "Backup testado", "Validar se a cópia realmente pode ser recuperada."],
      ["02", "Recuperação rápida", "Definir procedimentos para reduzir o tempo de indisponibilidade."],
      ["03", "Controle", "Organizar acesso, proteção contra ransomware e relatório simples de risco e status."]
    ],
    note: "O problema não é faltar backup; é descobrir no pior momento que ele não funciona."
  },

  "c-dev": {
    name: "C-dev",
    category: "SOFTWARE / NEGÓCIO LOCAL",
    short: "Presença digital, sistemas próprios e automações para pequenos negócios.",
    problem: "Pequenos negócios locais podem não ter presença digital profissional nem sistemas próprios de gestão, dependendo de planilhas, papel ou processos manuais — o que gera perda de tempo, desorganização e vendas perdidas.",
    color: "#3B29FF",
    details: [
      ["01", "Presença", "Criar um site profissional para negócios que perdem clientes por não estarem bem apresentados digitalmente."],
      ["02", "Gestão", "Trocar processos em papel ou planilhas por sistemas próprios para estoque, pedidos e agendamentos."],
      ["03", "Automação", "Reduzir mensagens repetitivas e organizar vendas e clientes para decisões baseadas em dados."]
    ]
  }
};
