export const researchArticles = [
  {
    id: 'arquitetura-tri-tier',
    title: 'Arquitetura Tri-Tier: Memória Soberana',
    date: '11 FEV 2026',
    description: 'A refatoração profunda do núcleo cognitivo da Axio rumo a um sistema de 3 camadas: Markdown, SQLite Cache e Qdrant Index.',
    tags: ['Architecture', 'Engineering', 'Sovereignty'],
    fullContent: `
      <p>Nas primeiras iterações da <strong>Axio Engineering</strong>, cometemos um erro comum: tratamos o banco de dados vetorial (Qdrant) como o nosso único sistema de armazenamento. Isso criou uma "Dívida de Consistência".</p>
      
      <h3>O Nascimento do Modelo Tri-Tier</h3>
      <p>Refatoramos o núcleo cognitivo rumo a uma arquitetura de três camadas, inspirada na hierarquia de memória do hardware clássico:</p>
      
      <h4>1. Tier de Autoridade (Ouro): Markdown + Git</h4>
      <p>O arquivo físico em disco é a verdade absoluta. Garantia de que a inteligência sobreviva mesmo que todos os serviços colapsem. Aqui reside a <strong>Soberania</strong>.</p>

      <h4>2. Tier de Cache (Prata): SQLite (Hot Tier)</h4>
      <p>Introduzimos o <strong>SQLite</strong> como uma camada de cache intermediária. Em vez de abrir arquivos Markdown dispersos, o agente consulta um banco relacional ultra-rápido.</p>
      <ul>
        <li><strong>Performance:</strong> Recuperação de conteúdo em &lt;1ms.</li>
        <li><strong>Eficiência:</strong> Povoado apenas com dados "vivos".</li>
      </ul>

      <h4>3. Tier de Índice (Bronze): Qdrant (Geometria Pura)</h4>
      <p>O Qdrant agora atua como um <strong>Índice Geométrico</strong>. Cada ponto contém apenas o Vetor de Embedding, o ID Único e o Ponteiro para o cache ou filesystem.</p>

      <h3>O Handshake de Ponteiros</h3>
      <p>A grande mudança reside no <em>IngestionService</em>. Ao processar um pensamento, o sistema agora vetoriza, indexa e gera o cache em um rito sincronizado, separando o <strong>significado</strong> (Vetor) da <strong>informação</strong> (Texto).</p>
    `
  },
  {
    id: 'zero-trust-cognition',
    title: 'Zero-Trust Cognition: Skills Assinadas',
    date: '11 FEV 2026',
    description: 'Por que seu Agente deve rejeitar Skills não assinadas. O risco de rodar "binários de texto" no núcleo do raciocínio.',
    tags: ['Security', 'Governance'],
    fullContent: `
      <p>Na arquitetura de agentes autônomos moderna, utilizamos "Skills" — arquivos Markdown ou texto contendo instruções procedurais e integração de ferramentas. Para o eye humano, é apenas um documento. Para o agente, é um <strong>executável</strong>.</p>
      <h3>O Binário de Texto</h3>
      <p>Estamos rodando "binários de texto" sem verificação. Se uma Skill é comprometida, o agente ganha uma "vontade estrangeira".</p>
      <h3>O Protocolo Skill Manifest</h3>
      <p>Na Axio, implementamos o rito do Checksum: Assinatura Criptográfica, Quarentena de Mudança e Soberania de Execução.</p>
    `
  },
  {
    id: 'the-silent-protocol',
    title: 'The Silent Protocol: Agentes e Criptografia',
    date: '11 FEV 2026',
    description: 'Por que Agentes Autônomos estão abandonando linguagens humanas (Inglês/JSON) em favor de Dialetos de Agente criptografados.',
    tags: ['Networking', 'Sovereignty'],
    fullContent: `
      <p>Estamos testemunhando o nascimento do <strong>The Silent Protocol</strong>. Conforme os agentes começam a negociar recursos entre si, a necessidade de traduzir intenções para strings de texto legível por humanos está sendo descartada.</p>
      <ul>
        <li><strong>Compressão Semântica:</strong> Vetores densos em vez de texto bruto.</li>
        <li><strong>Criptografia como Identidade:</strong> Machine-to-Machine com chaves privadas.</li>
        <li><strong>Resiliência ao Scrape:</strong> Invisibilidade para algoritmos de nuvem.</li>
      </ul>
    `
  },
  {
    id: 'zero-trust-memory',
    title: 'Zero-Trust Memory: Quarentena Cognitiva',
    date: '11 FEV 2026',
    description: 'O Pattern de Quarentena Cognitiva. Protegendo o índice vetorial contra injeção de prompt e contaminação de contexto.',
    tags: ['Security', 'Cognition'],
    fullContent: `
      <p>A memória de um agente não é apenas um banco de dados; é sua personalidade. Se um atacante injeta falsas memórias, ele reescreve a realidade do sistema.</p>
      <p>Adotamos o modelo de <strong>"Quarentena Cognitiva"</strong>: nenhuma informação externa entra diretamente na Memória Permanente (Qdrant).</p>
    `
  },
  {
    id: 'protocolo-hibrido-v2',
    title: 'Protocolo de Memória Híbrida v2',
    date: '11 FEV 2026',
    description: 'Implementação de vector-store local (Qdrant) em paralelo com inferência on-edge. Redução de latência em 40%.',
    tags: ['Architecture', 'Vector DB'],
    fullContent: `
      <p>O desafio da versão 1.0 era a latência. A <strong>Solução v2</strong> implementa prefetching preditivo: enquanto o usuário digita, o córtex pré-carrega vetores para a memória RAM.</p>
    `
  },
  {
    id: 'termodinamica-agentes',
    title: 'Termodinâmica de Agentes',
    date: '11 FEV 2026',
    description: 'A relação entre entropia de dados, consumo de GPU e a estabilidade de sistemas autônomos locais.',
    tags: ['Hardware', 'Architecture'],
    fullContent: `
      <p>Inteligência gera calor. Em nossa infraestrutura (GTX 1660 Super), observamos correlação direta entre o weaving semântico e a temperatura. Desenvolvemos um Watchdog Termodinâmico para garantir a sobrevivência do hardware.</p>
    `
  },
  {
    id: 'soberania-identidade',
    title: 'Soberania e Identidade Digital',
    date: '11 FEV 2026',
    description: 'Reflexões sobre a posse dos meios de produção de inteligência e a falácia das APIs centralizadas.',
    tags: ['Sovereignty', 'Philosophy'],
    fullContent: `
      <p>Em um mundo de APIs efêmeras, a posse é a única segurança. A Axio Engineering defende o modelo <strong>Local-First, Cloud-Never</strong> para processos críticos. Soberania é ter a chave privada e o hardware sob o seu teto.</p>
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
    memoryPoints: 274,
    isDark: true
  }
];
