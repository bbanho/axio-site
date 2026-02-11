export const researchArticles = [
  {
    id: 'zero-trust-memory',
    title: 'Zero-Trust Memory: Quarentena Cognitiva',
    date: '11 FEV 2026',
    description: 'O Pattern de Quarentena Cognitiva. Protegendo o índice vetorial contra injeção de prompt e contaminação de contexto.',
    tags: ['Security', 'Cognition'],
    fullContent: `
      <p>A memória é a fundação da autonomia. Sem persistência, um agente é apenas um processador de texto glorificado. O desafio da versão 1.0 era a latência: consultar o banco vetorial para cada interação adicionava 800ms ao ciclo de resposta.</p>
      <p><strong>A Solução v2:</strong> Implementamos um sistema de <em>prefetching</em> preditivo. Enquanto o usuário digita, o córtex analisa o contexto semântico e pré-carrega vetores relevantes para a memória RAM (hot-tier). O armazenamento frio (Qdrant em disco) é acessado apenas para miss-matches.</p>
      <p>Resultado: Latência reduzida para 120ms em 90% das queries. A sensação de conversa agora é instantânea, mas com profundidade enciclopédica.</p>
    `
  },
  {
    id: 'protocolo-hibrido-v2',
    title: 'Protocolo de Memória Híbrida v2',
    date: '11 FEV 2026',
    description: 'Implementação de vector-store local (Qdrant) em paralelo com inferência on-edge. Redução de latência em 40%.',
    tags: ['Architecture', 'Vector DB'],
    fullContent: `
      <p>A memória é a fundação da autonomia. Sem persistência, um agente é apenas um processador de texto glorificado. O desafio da versão 1.0 era a latência: consultar o banco vetorial para cada interação adicionava 800ms ao ciclo de resposta.</p>
      <p><strong>A Solução v2:</strong> Implementamos um sistema de <em>prefetching</em> preditivo. Enquanto o usuário digita, o córtex analisa o contexto semântico e pré-carrega vetores relevantes para a memória RAM (hot-tier). O armazenamento frio (Qdrant em disco) é acessado apenas para miss-matches.</p>
      <p>Resultado: Latência reduzida para 120ms em 90% das queries. A sensação de conversa agora é instantânea, mas com profundidade enciclopédica.</p>
    `
  },
  {
    id: 'termodinamica-agentes',
    title: 'Termodinâmica de Agentes',
    date: '06 FEV 2026',
    description: 'Estudo sobre o impacto térmico de raciocínio contínuo em hardware local. Desenvolvimento de watchdogs de temperatura.',
    tags: ['Hardware', 'Stability'],
    fullContent: `
      <p>Rodar modelos de 7B ou 13B parâmetros localmente (On-Edge) tem um custo físico: calor. Durante sessões de raciocínio profundo ("Deep Thinking"), a GPU GTX 1660 Super atingiu 86°C, desencadeando <em>thermal throttling</em>.</p>
      <p>Isso revelou uma vulnerabilidade crítica: a inteligência pode literalmente derreter o hardware se não for regulada. Desenvolvemos um "Watchdog Termodinâmico" que monitora a temperatura do die a cada 500ms.</p>
      <p>Se a temperatura cruza 80°C, o agente entra em modo de "reflexão" (pausa a inferência) ou reduz o tamanho do contexto, priorizando a sobrevivência do hardware sobre a velocidade da resposta.</p>
    `
  },
  {
    id: 'soberania-identidade',
    title: 'Soberania de Identidade (OAuth)',
    date: '01 FEV 2026',
    description: 'Estudo de caso sobre integração Google Workspace via CLI em ambientes remotos. Limitações de Redirect URI e soluções OOB.',
    tags: ['Security', 'Identity'],
    fullContent: `
      <p>Integrar agentes autônomos em ecossistemas corporativos (Google Workspace, Slack) é um pesadelo de segurança. O modelo padrão assume um humano com um navegador clicando em "Autorizar".</p>
      <p>Para um agente headless rodando em servidor, o fluxo OAuth2 padrão falha. Tentativas de emular navegadores (Puppeteer) são frágeis e frequentemente bloqueadas.</p>
      <p>Nossa abordagem migrou para fluxos OOB (Out-of-Band) manuais ou túneis SSH temporários para capturar o callback. A lição: a infraestrutura de identidade da web 2.0 não foi feita para habitantes da web 3.0 (agentes).</p>
    `
  }
];

export const projects = [
  {
    id: 'intraclinica',
    title: 'Intraclinica',
    type: 'SaaS',
    description: 'Desenvolvimento de ecossistema de gestão clínica focado em integridade de dados e alta disponibilidade. Migração de arquitetura legada para sistema reativo distribuído.',
    technologies: ['Angular 17+', 'NgRx Store', 'NestJS', 'PostgreSQL'],
    status: [
      { text: 'Migração Frontend (Concluída)', icon: 'check-circle', color: 'green' },
      { text: 'Refatoração Backend', icon: 'spinner', color: 'blue', spin: true },
      { text: 'Módulo de IA Diagnóstica', icon: 'circle', color: 'slate' }
    ]
  },
  {
    id: 'cortical-stack',
    title: 'Cortical Stack',
    type: 'R&D Interno',
    description: 'Infraestrutura proprietária de memória híbrida para agentes autônomos. Combina busca semântica (vetores) com armazenamento físico soberano, eliminando dependência de nuvem.',
    technologies: ['Qdrant Vector DB', 'Ollama Local', 'Markdown'],
    memoryPoints: 262,
    isDark: true
  }
];