export const ptBr = {
  locale: 'pt-BR' as string,
  lang: 'PT',

  // ═══ Navbar ═══
  nav: {
    values: 'Valores',
    features: 'Funcionalidades',
    infrastructure: 'Infraestrutura',
    publications: 'Publicações',
    about: 'Sobre',
    cta: 'Testar App'
  },

  // ═══ Hero ═══
  hero: {
    badge: 'Monitoramento em Tempo Real',
    titleLight: 'O Futuro é',
    titleGreen: 'Verde',
    titleEnd: 'e Conectado',
    subtitle: 'Inteligência artificial via WhatsApp para monitorar a saúde do seu pasto com dados de satélite e conhecimento de campo. Ciência aberta, gratuita e feita no Brasil.',
    cta: 'Testar o Pasto Legal',
    ctaSecondary: 'Como funciona'
  },

  // ═══ Stats Bar ═══
  stats: {
    producers: 'Produtores Conectados',
    hectares: 'Hectares Monitorados',
    analyses: 'Análises Realizadas',
    openSource: 'Código Aberto'
  },

  // ═══ Value Section ═══
  value: {
    tag: 'Ciência e Simplicidade',
    title: 'Tecnologia que',
    titleHighlight: 'fala a sua língua',
    subtitle: 'Traduzimos dados complexos de satélite e conhecimento de pastagens em informações práticas para o dia a dia da sua fazenda. Sem complicação, direto no WhatsApp.',
    cards: [
      {
        title: 'Dados de Satélite',
        desc: 'Múltiplas Bases de Dados Integramos dados do Mapbiomas, Global Pasture Watch e Global Methane Hub, entre outros, para monitorar a saúde do pasto.',
        reveal: '→ NDVI, EVI e índices de biomassa processados automaticamente.'
      },
      {
        title: 'Ciência Aberta',
        desc: 'Pesquisa da UFG acessível a todos. Código aberto e metodologia transparente.',
        reveal: '→ Publicações revisadas por pares e datasets públicos.'
      },
      {
        title: 'Pecuária Regenerativa',
        desc: 'Práticas que recuperam o solo e aumentam a produtividade de forma sustentável.',
        reveal: '→ Recomendações personalizadas por bioma e tipo de solo.'
      },
      {
        title: 'WhatsApp Nativo',
        desc: 'Sem app para instalar. A inteligência chega no mensageiro que você já usa todo dia.',
        reveal: '→ Texto, voz e imagens. A IA entende tudo.'
      }
    ]
  },

  // ═══ Features Section ═══
  features: {
    tag: 'A Experiência',
    title: 'Três formas de',
    titleHighlight: 'conversar com o campo',
    items: [
      {
        number: '01 — LOCALIZAÇÃO',
        title: 'Envie sua Localização',
        description: 'Compartilhe a localização pelo WhatsApp e receba instantaneamente relatório de qualidade das pastagens, cálculo de biomassa e sugestões de melhoria, entre outros.'
      },
      {
        number: '02 — ANÁLISE DE FOTO',
        title: 'Fotografe o Pasto',
        description: 'Tire uma foto do seu campo e a IA analisa a cobertura vegetal, identifica sinais de degradação e sugere ações de manejo.'
      },
      {
        number: '03 — COMANDO DE VOZ',
        title: 'Fale com a IA',
        description: 'Envie um áudio perguntando sobre o seu pasto. O Pasto Legal processa a fala e responde com inteligência.'
      }
    ],
    phoneMockup: {
      chat: {
        msg1: 'Localização enviada: Fazenda São Jorge, GO',
        msg2: 'Localização recebida! Analisando dados Sentinel-2 da sua área...',
        msg3: 'Relatório de Biomassa — Últimos 30 dias:',
        msg4: 'Biomassa em alta: +22% no último mês. Seu pasto está saudável!',
        msg5: 'E a degradação na área norte?'
      },
      location: {
        bubble: 'Fazenda São Jorge'
      },
      scanner: {
        label: 'ANALISANDO COBERTURA...'
      },
      voice: {
        label: 'PROCESSANDO ÁUDIO',
        text: 'Biomassa: +22% ✓'
      }
    }
  },

  // ═══ Infrastructure Section ═══
  infra: {
    tag: 'Infraestrutura',
    title: 'Arquitetura Geral',
    titleHighlight: 'do serviço',
    subtitle: 'Sistema multi-agentes de IA integrando dados geoespaciais, climáticos e práticas agropecuárias em tempo real.',
    entryLabels: {
      textLocation: 'Localização',
      audio: 'Áudio',
      textMap: 'Voz'
    },
    agents: [
      { name: 'SICAR', desc: 'Cadastro Ambiental Rural — Limites da propriedade' },
      { name: 'Mapbiomas', desc: 'Mapa de pastagens' },
      { name: 'Monitoramento Global de pastagens / Centro Global do Metano', desc: 'Biomassa e vigor' },
      { name: 'Embrapa', desc: 'Práticas de Manejo' },
      { name: 'INPE / CEMPA-Cerrado', desc: 'Dados agrometeorológicos, alertas climáticos' }
    ],
    motors: [
      { name: 'Gemini 2.5 Flash', desc: 'Motor de processamento IA' },
      { name: 'Motor geográfico', desc: 'Motor de processamento geográfico' },
      { name: 'Banco de dados', desc: 'Banco de dados de usuários' }
    ],
    agentsLabel: 'Sistema multi-agentes IA'
  },

  // ═══ Partners Section ═══
  partners: {
    tag: 'Realização e Apoio',
    realizacao: 'Realização',
    apoio: 'Apoio'
  },

  // ═══ Footer ═══
  footer: {
    tagline: 'Inteligência artificial para pecuária sustentável. Um projeto de ciência aberta do LAPIG/UFG e da Solved, com apoio do Instituto Clima e Sociedade.',
    columns: {
      platform: {
        title: 'Plataforma',
        whatsapp: 'WhatsApp Bot',
        docs: 'Documentação',
        api: 'API',
        status: 'Status'
      },
      community: {
        title: 'Comunidade',
        github: 'GitHub',
        discord: 'Discord',
        blog: 'Blog',
        publications: 'Publicações'
      },
      institutional: {
        title: 'Institucional',
        ufg: 'UFG',
        about: 'Sobre',
        terms: 'Termos de Uso',
        privacy: 'Privacidade'
      }
    },
    license: 'Licença MIT',
    copyright: '© 2026 Pasto Legal — Universidade Federal de Goiás.'
  },

  // ═══ Cookie Consent ═══
  cookie: {
    message: 'Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para melhorar sua experiência. Ao clicar em "Aceitar", você concorda com o uso de todos os cookies. Consulte nossa',
    privacyLink: 'Política de Privacidade',
    messageEnd: 'para mais informações.',
    reject: 'Apenas essenciais',
    accept: 'Aceitar todos'
  },

  // ═══ Legal pages shared ═══
  legal: {
    backHome: 'Voltar ao início',
    lastUpdated: 'Última atualização: 8 de março de 2026',
    seeAlsoTerms: 'Consulte também nossos',
    termsLink: 'Termos de Uso',
    seeAlsoPrivacy: 'Consulte também nossa',
    privacyLink: 'Política de Privacidade'
  },

  // ═══ Terms Page ═══
  terms: {
    title: 'Termos de Uso',
    sections: [
      {
        title: '1. Aceitação dos Termos',
        paragraphs: ['Ao acessar ou utilizar a plataforma Pasto Legal, incluindo o bot via WhatsApp e o portal web, o usuário declara que leu, compreendeu e concorda integralmente com estes Termos de Uso. Caso não concorde com quaisquer disposições, o usuário deverá cessar imediatamente a utilização dos serviços.']
      },
      {
        title: '2. Descrição do Serviço',
        paragraphs: ['O Pasto Legal é uma plataforma de ciência aberta desenvolvida pelo Laboratório de Processamento de Imagens e Geoprocessamento (LAPIG) da Universidade Federal de Goiás (UFG), com apoio do iCS e da Solved. O serviço oferece:'],
        list: [
          'Monitoramento da saúde de pastagens por meio de dados de satélite (Sentinel-2);',
          'Análise de vigor vegetativo e sazonalidade via índices espectrais (NDVI, EVI);',
          'Interação por inteligência artificial via WhatsApp, utilizando modelos de linguagem (Google Gemini);',
          'Acesso gratuito a dados e relatórios geoespaciais.'
        ]
      },
      {
        title: '3. Cadastro e Acesso',
        paragraphs: ['O acesso ao serviço é realizado por meio do número de WhatsApp do usuário. Ao iniciar uma conversa com o bot, o usuário consente com o processamento de seu número de telefone para fins de identificação e prestação do serviço, nos termos da Lei Geral de Proteção de Dados (Lei n.º 13.709/2018).']
      },
      {
        title: '4. Obrigações do Usuário',
        paragraphs: ['O usuário compromete-se a:'],
        list: [
          'Fornecer informações verdadeiras e atualizadas;',
          'Utilizar o serviço exclusivamente para finalidades lícitas;',
          'Não realizar engenharia reversa, raspagem automatizada de dados ou tentativas de sobrecarregar a infraestrutura;',
          'Respeitar os limites de uso razoável da plataforma;',
          'Não utilizar os dados fornecidos para fins de desmatamento ilegal ou qualquer atividade contrária à legislação ambiental vigente.'
        ]
      },
      {
        title: '5. Propriedade Intelectual',
        paragraphs: [
          'O código-fonte do Pasto Legal é distribuído sob licença MIT, conforme disponibilizado em repositório público. Contudo, a marca "Pasto Legal", seus elementos visuais, logotipos e identidade visual são de titularidade da UFG e do LAPIG, sendo vedada sua reprodução sem autorização prévia.',
          'Os dados geoespaciais utilizados são provenientes de fontes públicas (Programa Copernicus/ESA) e estão sujeitos às respectivas licenças de uso.'
        ]
      },
      {
        title: '6. Limitação de Responsabilidade',
        paragraphs: ['O Pasto Legal é oferecido "no estado em que se encontra" (as is). A UFG, o LAPIG e os parceiros institucionais:'],
        list: [
          'Não garantem a disponibilidade ininterrupta ou livre de erros do serviço;',
          'Não se responsabilizam por decisões tomadas com base exclusiva nos dados fornecidos pela plataforma;',
          'Não garantem a precisão absoluta dos dados de satélite, que estão sujeitos a condições atmosféricas, resolução espacial e temporal;',
          'Recomendam que os dados sejam utilizados como apoio à tomada de decisão, não como única fonte de informação.'
        ]
      },
      {
        title: '7. Disponibilidade e Modificações',
        paragraphs: ['O serviço poderá ser suspenso, modificado ou descontinuado a qualquer momento, sem aviso prévio, em razão de manutenção, atualização ou decisão institucional. Os presentes Termos poderão ser alterados periodicamente, sendo a versão vigente sempre disponibilizada nesta página.']
      },
      {
        title: '8. Lei Aplicável e Foro',
        paragraphs: ['Estes Termos são regidos pela legislação da República Federativa do Brasil, em especial:'],
        list: [
          'Lei n.º 13.709/2018 — Lei Geral de Proteção de Dados (LGPD);',
          'Lei n.º 12.965/2014 — Marco Civil da Internet;',
          'Lei n.º 8.078/1990 — Código de Defesa do Consumidor, quando aplicável.'
        ],
        paragraphsAfterList: ['Fica eleito o foro da Comarca de Goiânia, Estado de Goiás, para dirimir quaisquer controvérsias decorrentes destes Termos.']
      },
      {
        title: '9. Contato',
        paragraphs: ['Para dúvidas, solicitações ou exercício de direitos relacionados a estes Termos, o usuário poderá entrar em contato pelo e-mail:'],
        contactEmail: 'lapig.ufg@gmail.com'
      }
    ]
  },

  // ═══ Privacy Page ═══
  privacy: {
    title: 'Política de Privacidade',
    sections: [
      {
        title: '1. Controlador dos Dados',
        paragraphs: [
          'O controlador dos dados pessoais tratados pela plataforma Pasto Legal é o Laboratório de Processamento de Imagens e Geoprocessamento (LAPIG), vinculado ao Instituto de Estudos Socioambientais (IESA) da Universidade Federal de Goiás (UFG), inscrita no CNPJ sob o n.º 01.567.601/0001-43, com sede em Goiânia, Estado de Goiás.',
          'E-mail de contato para assuntos de privacidade:'
        ],
        contactEmail: 'lapig.ufg@gmail.com'
      },
      {
        title: '2. Dados Pessoais Coletados',
        paragraphs: ['A plataforma Pasto Legal coleta e trata os seguintes dados pessoais:'],
        list: [
          'Número de telefone (WhatsApp): utilizado para identificação do usuário e prestação do serviço de consultoria via chatbot;',
          'Mensagens enviadas ao bot: conteúdo textual e coordenadas geográficas fornecidas pelo usuário durante a interação;',
          'Dados de navegação no portal web: endereço IP, tipo de navegador, sistema operacional, páginas acessadas e tempo de permanência;',
          'Cookies e tecnologias similares: conforme detalhado na seção 7 desta Política.'
        ],
        paragraphsAfterList: ['A plataforma não coleta dados sensíveis, tais como origem racial ou étnica, convicção religiosa, opinião política, dados de saúde ou dados biométricos.']
      },
      {
        title: '3. Finalidades do Tratamento',
        paragraphs: ['Os dados pessoais são tratados para as seguintes finalidades:'],
        list: [
          'Prestação do serviço de monitoramento de pastagens via WhatsApp e portal web;',
          'Geração de relatórios geoespaciais personalizados com base nas coordenadas fornecidas;',
          'Melhoria contínua da plataforma, incluindo análise de uso e desempenho;',
          'Pesquisa científica e produção acadêmica, sempre com anonimização dos dados;',
          'Comunicação com o usuário sobre atualizações relevantes do serviço;',
          'Cumprimento de obrigações legais e regulatórias.'
        ]
      },
      {
        title: '4. Base Legal do Tratamento',
        paragraphs: ['O tratamento dos dados pessoais fundamenta-se nas seguintes bases legais previstas na Lei n.º 13.709/2018 (LGPD):'],
        list: [
          'Consentimento (art. 7.º, I): ao iniciar a interação com o bot via WhatsApp ou aceitar os cookies no portal;',
          'Execução de contrato (art. 7.º, V): para a prestação do serviço solicitado pelo usuário;',
          'Legítimo interesse (art. 7.º, IX): para melhoria do serviço e análises estatísticas agregadas;',
          'Pesquisa (art. 7.º, IV): para fins de pesquisa científica, garantida a anonimização sempre que possível.'
        ]
      },
      {
        title: '5. Compartilhamento de Dados',
        paragraphs: ['Os dados pessoais poderão ser compartilhados com:'],
        list: [
          'Google (Gemini API): as mensagens enviadas ao bot são processadas pela API do Google Gemini para geração de respostas. O Google atua como operador de dados, sujeito aos seus próprios termos de privacidade;',
          'Provedores de infraestrutura: serviços de hospedagem e armazenamento em nuvem necessários à operação da plataforma;',
          'Parceiros institucionais (iCS, Solved): dados agregados e anonimizados para fins de relatórios de impacto.'
        ],
        paragraphsAfterList: ['A plataforma não comercializa dados pessoais com terceiros para fins de marketing ou publicidade.']
      },
      {
        title: '6. Retenção e Eliminação',
        paragraphs: ['Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram coletados, observando os seguintes critérios:'],
        list: [
          'Histórico de conversas: mantido por até 12 meses para continuidade do serviço, sendo anonimizado após esse período;',
          'Dados de navegação: mantidos por até 6 meses;',
          'Dados para pesquisa científica: mantidos de forma anonimizada por tempo indeterminado;',
          'Dados para cumprimento legal: mantidos pelo prazo exigido pela legislação aplicável.'
        ],
        paragraphsAfterList: ['Após o término do período de retenção, os dados serão eliminados ou anonimizados de forma irreversível.']
      },
      {
        title: '7. Cookies e Tecnologias Similares',
        paragraphs: ['O portal web do Pasto Legal utiliza cookies para:'],
        list: [
          'Cookies essenciais: necessários ao funcionamento básico do site, como preferência de tema (claro/escuro) e consentimento de cookies. Não requerem consentimento.',
          'Cookies de análise: utilizados para compreender como os visitantes interagem com o portal, por meio de ferramentas de análise com dados anonimizados. Requerem consentimento prévio.'
        ],
        paragraphsAfterList: ['O usuário pode gerenciar suas preferências de cookies a qualquer momento por meio do banner de consentimento ou das configurações do navegador. A recusa dos cookies de análise não afeta o funcionamento do serviço.']
      },
      {
        title: '8. Direitos do Titular',
        paragraphs: ['Nos termos do art. 18 da LGPD, o titular dos dados pessoais tem direito a:'],
        list: [
          'Confirmação da existência de tratamento;',
          'Acesso aos dados pessoais;',
          'Correção de dados incompletos, inexatos ou desatualizados;',
          'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;',
          'Portabilidade dos dados a outro fornecedor de serviço;',
          'Eliminação dos dados tratados com consentimento;',
          'Informação sobre entidades com as quais os dados foram compartilhados;',
          'Informação sobre a possibilidade de não fornecer consentimento e suas consequências;',
          'Revogação do consentimento a qualquer momento.'
        ],
        paragraphsAfterList: ['Para exercer seus direitos, o titular deverá encaminhar solicitação ao e-mail:'],
        contactEmail: 'lapig.ufg@gmail.com',
        contactNote: 'A resposta será fornecida no prazo de até 15 dias úteis.'
      },
      {
        title: '9. Segurança dos Dados',
        paragraphs: ['A plataforma adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação, incluindo:'],
        list: [
          'Criptografia de dados em trânsito (TLS/HTTPS);',
          'Controle de acesso baseado em função;',
          'Monitoramento e registro de acessos;',
          'Revisão periódica de vulnerabilidades.'
        ]
      },
      {
        title: '10. Transferência Internacional',
        paragraphs: ['Os dados pessoais poderão ser transferidos para servidores localizados fora do Brasil, em conformidade com o art. 33 da LGPD, especialmente para processamento pela API do Google Gemini. Nesses casos, são adotadas salvaguardas contratuais e técnicas para garantir nível de proteção compatível com a legislação brasileira.']
      },
      {
        title: '11. Menores de Idade',
        paragraphs: ['A plataforma Pasto Legal não é direcionada a menores de 18 anos. Caso seja identificado o tratamento de dados de menores sem o devido consentimento parental, tais dados serão imediatamente eliminados.']
      },
      {
        title: '12. Alterações nesta Política',
        paragraphs: ['Esta Política de Privacidade poderá ser atualizada periodicamente. A versão vigente será sempre disponibilizada nesta página, com indicação da data da última atualização. Alterações substanciais serão comunicadas aos usuários por meio dos canais disponíveis.']
      },
      {
        title: '13. Contato e Encarregado (DPO)',
        paragraphs: [
          'Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais, o usuário poderá entrar em contato com o encarregado pelo tratamento de dados pessoais (DPO) por meio do e-mail:',
        ],
        contactEmail: 'lapig.ufg@gmail.com',
        contactNote: 'Caso a resposta não seja satisfatória, o titular poderá apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).'
      }
    ]
  },

  // ═══ Publications Page ═══
  publications: {
    title: 'Publicações',
    subtitle: 'Artigos, teses e trabalhos científicos que fundamentam as metodologias e algoritmos do Pasto Legal. Toda a ciência por trás da tecnologia.',
    statsLabel: 'publicações',
    filterType: 'Tipo',
    filterYear: 'Ano',
    filterAll: 'Todos',
    showing: 'Exibindo',
    of: 'de',
    noResults: 'Nenhuma publicação encontrada para os filtros selecionados.',
    clearFilters: 'Limpar filtros',
    abstract: 'Resumo',
    access: 'Acessar',
    types: {
      article: 'Artigo',
      articles: 'Artigos',
      chapter: 'Capítulo',
      chapters: 'Capítulos',
      thesis: 'Tese',
      theses: 'Teses',
      conference: 'Conferência',
      conferences: 'Conferências'
    }
  },

  // ═══ About Page ═══
  about: {
    title: 'Sobre o Pasto Legal',
    subtitle: 'Uma plataforma de ciência aberta que conecta pesquisa, inteligência artificial e sensoriamento remoto para transformar a pecuária brasileira.',
    mission: {
      tag: 'Missão',
      title: 'Levar conhecimento técnico em linguagem acessível para o pecuarista',
      p1: 'Há um enorme potencial para melhorar a eficiência da pecuária brasileira. O conhecimento existe, mas não chega na ponta ao produtor rural. O Pasto Legal nasce da vontade de sanar essa lacuna. Ele integra dados existentes para gerar informações acionáveis, entregues diretamente no WhatsApp do produtor rural — sem necessidade de instalar aplicativos, adquirir equipamentos ou possuir conhecimento técnico.',
      p2: 'Acreditamos que a pecuária sustentável começa com informação de qualidade. Quando o produtor entende a saúde do seu pasto, toma decisões melhores para o rebanho, para o solo e para o planeta.'
    },
    howItWorks: {
      tag: 'Como Funciona',
      title: 'Do satélite ao WhatsApp',
      steps: [
        { number: '01', title: 'Envio da localização', desc: 'O usuário envia a localização ou CAR da propriedade.' },
        { number: '02', title: 'Recuperação dos limites', desc: 'O Pasto Legal busca e recupera os limites da propriedade na base do Cadastro Ambiental Rural.' },
        { number: '03', title: 'Análise de Pastagem', desc: 'Com base nos dados do Mapa de Pastagens do Mapbiomas e nos dados do Global Pasture Watch, é gerada uma análise inicial de vigor.' },
        { number: '04', title: 'Inteligência', desc: 'A partir de perguntas e interação com o usuário, novas análises são geradas.' },
        { number: '05', title: 'Entrega', desc: 'Em áudio ou texto, sempre em linguagem acessível, o Pasto Legal propõe formas de melhorar a qualidade de pastagem.' }
      ]
    },
    team: {
      tag: 'Equipe',
      title: 'Quem faz o Pasto Legal',
      p1: 'O projeto é desenvolvido e mantido pelo Laboratório de Sensoriamento Remoto e Geoprocessamento (LAPIG), vinculado ao Instituto de Estudos Socioambientais (IESA) da Universidade Federal de Goiás (UFG) e pela Solved - Soluções em Geoinformação.',
      p2: 'Nossa equipe multidisciplinar reúne pesquisadores, engenheiros e estudantes das áreas de sensoriamento remoto, ciências ambientais, ciência da computação, agronomia, zootecnia, inteligência artificial e ciências ambientais.',
      groups: [
        {
          title: 'Coordenação Geral',
          members: ['Laerte Guimarães Ferreira Júnior']
        },
        {
          title: 'Coordenação Técnica',
          members: ['Leandro Parente']
        },
        {
          title: 'Desenvolvimento Tecnológico',
          members: [
            'Tiago Gonçalves Maia',
            'Bernard Silva',
            'Luiz Cortinhas Ferreira Neto'
          ]
        },
        {
          title: 'Equipe Técnica',
          members: [
            'Alessandro Azevedo',
            'Igor Souza Perin',
            'Ana Paula Mattos e Silva',
            'Geovani Mallmann',
            'Mário Barroso',
            'Pedro da Costa Novaes',
            'Victor Alves',
            'Wilton Ladeira',
            'Mariana Gomes',
            'Nathalia Telles'
          ]
        }
      ]
    },
    partners: {
      tag: 'Parceiros',
      title: 'Apoio institucional',
      desc: 'O Pasto Legal é viabilizado pela colaboração entre instituições comprometidas com a sustentabilidade e a inovação no uso da terra.',
      items: [
        { name: 'Universidade Federal de Goiás (UFG)', desc: 'Instituição sede do LAPIG, responsável pela pesquisa, desenvolvimento e governança do projeto.' },
        { name: 'Instituto Clima e Sociedade (iCS)', desc: 'Apoio institucional e financeiro para projetos que conectam clima, uso da terra e desenvolvimento sustentável.' },
        { name: 'Solved — Sustainability Agency', desc: 'Parceiro estratégico em design de soluções sustentáveis e conexão com ecossistemas de impacto.' }
      ]
    },
    tech: {
      tag: 'Tecnologia',
      title: 'Ciência aberta e reproduzível',
      desc: 'Todo o código do Pasto Legal é distribuído sob licença MIT. Transparência e reprodutibilidade são pilares do projeto.'
    },
    contact: {
      tag: 'Contato',
      title: 'Fale conosco',
      desc: 'Para parcerias, dúvidas acadêmicas ou sugestões, entre em contato pelo e-mail',
      addressLabel: 'Endereço',
      address: 'LAPIG — Instituto de Estudos Socioambientais (IESA)\nUniversidade Federal de Goiás\nCampus Samambaia, Goiânia — GO',
      linksLabel: 'Links'
    }
  }
};

export type Translations = typeof ptBr;
