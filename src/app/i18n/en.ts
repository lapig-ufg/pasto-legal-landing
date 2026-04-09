import type { Translations } from './pt-br';

export const en: Translations = {
  locale: 'en',
  lang: 'EN',

  nav: {
    values: 'Values',
    features: 'Features',
    infrastructure: 'Infrastructure',
    publications: 'Publications',
    about: 'About',
    cta: 'Try App'
  },

  hero: {
    badge: 'Real-Time Monitoring',
    titleLight: 'The Future is',
    titleGreen: 'Green',
    titleEnd: 'and Connected',
    subtitle: 'AI-powered WhatsApp assistant to monitor your pasture health with satellite data. Open science, free, and made in Brazil.',
    cta: 'Try Pasto Legal',
    ctaSecondary: 'How it works'
  },

  stats: {
    producers: 'Connected Farmers',
    hectares: 'Hectares Monitored',
    analyses: 'Analyses Performed',
    openSource: 'Open Source'
  },

  value: {
    tag: 'Science & Simplicity',
    title: 'Technology that',
    titleHighlight: 'speaks your language',
    subtitle: 'We translate complex satellite data into actionable insights for your daily farm management. No hassle, straight to WhatsApp.',
    cards: [
      {
        title: 'Satellite Data',
        desc: 'Multiple Data Sources — We integrate data from Mapbiomas, Global Pasture Watch, and the Global Methane Hub, among others, to monitor pasture health.',
        reveal: '→ NDVI, EVI, and biomass indices processed automatically.'
      },
      {
        title: 'Open Science',
        desc: 'UFG research accessible to all. Open source code and transparent methodology.',
        reveal: '→ Peer-reviewed publications and public datasets.'
      },
      {
        title: 'Regenerative Ranching',
        desc: 'Practices that restore soil and increase productivity sustainably.',
        reveal: '→ Personalized recommendations by biome and soil type.'
      },
      {
        title: 'Native WhatsApp',
        desc: 'No app to install. Intelligence delivered through the messenger you already use.',
        reveal: '→ Text, voice, and images. The AI understands it all.'
      }
    ]
  },

  features: {
    tag: 'The Experience',
    title: 'Three ways to',
    titleHighlight: 'talk to the field',
    items: [
      {
        number: '01 — LOCATION',
        title: 'Send Your Location',
        description: 'Share your location via WhatsApp and instantly receive a biomass report for your area, powered by Sentinel-2 satellite data.'
      },
      {
        number: '02 — PHOTO ANALYSIS',
        title: 'Photograph the Pasture',
        description: 'Take a photo of your field and the AI analyzes vegetation cover, identifies degradation signs, and suggests management actions.'
      },
      {
        number: '03 — VOICE COMMAND',
        title: 'Talk to the AI',
        description: 'Send a voice message asking about your pasture. Google Gemini processes speech and responds with intelligence.'
      }
    ],
    phoneMockup: {
      chat: {
        msg1: 'Location sent: Fazenda São Jorge, GO',
        msg2: 'Location received! Analyzing Sentinel-2 data for your area...',
        msg3: 'Biomass Report — Last 30 days:',
        msg4: 'Biomass rising: +22% last month. Your pasture is healthy!',
        msg5: 'What about degradation in the north area?'
      },
      location: {
        bubble: 'Fazenda São Jorge'
      },
      scanner: {
        label: 'ANALYZING COVERAGE...'
      },
      voice: {
        label: 'PROCESSING AUDIO',
        text: 'Biomass: +22% ✓'
      }
    }
  },

  infra: {
    tag: 'Architecture',
    title: 'General Service',
    titleHighlight: 'Architecture',
    subtitle: 'Multi-agent AI system integrating geospatial, climate, and agropastoral data in real time.',
    entryLabels: {
      textLocation: 'Location',
      audio: 'Audio',
      textMap: 'Voice'
    },
    agents: [
      { name: 'SICAR', desc: 'Rural Environmental Registry — Query via location' },
      { name: 'IBGE', desc: 'Territorial & climate intelligence — Land use, coverage, precipitation, etc.' },
      { name: 'LAPIG / Embrapa', desc: 'Degraded pasture recovery support' },
      { name: 'LAPIG / Embrapa', desc: 'Pasture management support' },
      { name: 'Agno', desc: 'Climate and pasture management alerts in real time' }
    ],
    motors: [
      { name: 'Gemini 2.5 Flash', desc: 'AI processing engine' },
      { name: 'Geo engine', desc: 'Geographic processing engine' },
      { name: 'Database', desc: 'User database' }
    ],
    agentsLabel: 'Multi-agent AI System'
  },

  partners: {
    tag: 'Partners & Supporters',
    realizacao: 'Partners',
    apoio: 'Supporters'
  },

  footer: {
    tagline: 'Artificial intelligence for sustainable livestock. An open science project from the Federal University of Goiás.',
    columns: {
      platform: {
        title: 'Platform',
        whatsapp: 'WhatsApp Bot',
        docs: 'Documentation',
        api: 'API',
        status: 'Status'
      },
      community: {
        title: 'Community',
        github: 'GitHub',
        discord: 'Discord',
        blog: 'Blog',
        publications: 'Publications'
      },
      institutional: {
        title: 'Institutional',
        ufg: 'UFG',
        about: 'About',
        terms: 'Terms of Use',
        privacy: 'Privacy'
      }
    },
    license: 'MIT License',
    copyright: '© 2026 Pasto Legal — Federal University of Goiás.'
  },

  cookie: {
    message: 'We use essential cookies for site functionality and analytics cookies to improve your experience. By clicking "Accept", you agree to the use of all cookies. See our',
    privacyLink: 'Privacy Policy',
    messageEnd: 'for more information.',
    reject: 'Essential only',
    accept: 'Accept all'
  },

  legal: {
    backHome: 'Back to home',
    lastUpdated: 'Last updated: March 8, 2026',
    seeAlsoTerms: 'See also our',
    termsLink: 'Terms of Use',
    seeAlsoPrivacy: 'See also our',
    privacyLink: 'Privacy Policy'
  },

  terms: {
    title: 'Terms of Use',
    sections: [
      {
        title: '1. Acceptance of Terms',
        paragraphs: ['By accessing or using the Pasto Legal platform, including the WhatsApp bot and web portal, the user declares that they have read, understood, and fully agree to these Terms of Use. If you do not agree with any provisions, you must immediately cease using the services.']
      },
      {
        title: '2. Service Description',
        paragraphs: ['Pasto Legal is an open science platform developed by the Image Processing and GIS Laboratory (LAPIG) at the Federal University of Goiás (UFG), with support from iCS and Solved. The service offers:'],
        list: [
          'Pasture health monitoring through satellite data (Sentinel-2);',
          'Vegetative vigor and seasonality analysis via spectral indices (NDVI, EVI);',
          'AI-powered interaction via WhatsApp, using language models (Google Gemini);',
          'Free access to geospatial data and reports.'
        ]
      },
      {
        title: '3. Registration and Access',
        paragraphs: ['Access to the service is made through the user\'s WhatsApp number. By starting a conversation with the bot, the user consents to the processing of their phone number for identification and service provision purposes, under Brazilian General Data Protection Law (Law No. 13,709/2018).']
      },
      {
        title: '4. User Obligations',
        paragraphs: ['The user agrees to:'],
        list: [
          'Provide truthful and up-to-date information;',
          'Use the service exclusively for lawful purposes;',
          'Not engage in reverse engineering, automated data scraping, or attempts to overload the infrastructure;',
          'Respect the platform\'s fair use limits;',
          'Not use provided data for illegal deforestation or any activity contrary to current environmental legislation.'
        ]
      },
      {
        title: '5. Intellectual Property',
        paragraphs: [
          'Pasto Legal\'s source code is distributed under the MIT license, as available in the public repository. However, the "Pasto Legal" brand, its visual elements, logos, and visual identity are owned by UFG and LAPIG, and their reproduction without prior authorization is prohibited.',
          'The geospatial data used comes from public sources (Copernicus/ESA Programme) and is subject to their respective usage licenses.'
        ]
      },
      {
        title: '6. Limitation of Liability',
        paragraphs: ['Pasto Legal is offered "as is". UFG, LAPIG, and institutional partners:'],
        list: [
          'Do not guarantee uninterrupted or error-free service availability;',
          'Are not responsible for decisions made solely based on data provided by the platform;',
          'Do not guarantee absolute accuracy of satellite data, which is subject to atmospheric conditions, spatial and temporal resolution;',
          'Recommend that data be used as decision-support, not as the sole source of information.'
        ]
      },
      {
        title: '7. Availability and Modifications',
        paragraphs: ['The service may be suspended, modified, or discontinued at any time without prior notice, due to maintenance, updates, or institutional decisions. These Terms may be amended periodically, with the current version always available on this page.']
      },
      {
        title: '8. Applicable Law and Jurisdiction',
        paragraphs: ['These Terms are governed by the laws of the Federative Republic of Brazil, in particular:'],
        list: [
          'Law No. 13,709/2018 — General Data Protection Law (LGPD);',
          'Law No. 12,965/2014 — Brazilian Internet Civil Framework;',
          'Law No. 8,078/1990 — Consumer Defense Code, when applicable.'
        ],
        paragraphsAfterList: ['The jurisdiction of Goiânia, State of Goiás, is elected to resolve any disputes arising from these Terms.']
      },
      {
        title: '9. Contact',
        paragraphs: ['For questions, requests, or to exercise rights related to these Terms, the user may contact us via email:'],
        contactEmail: 'lapig.ufg@gmail.com'
      }
    ]
  },

  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Data Controller',
        paragraphs: [
          'The data controller for personal data processed by the Pasto Legal platform is the Image Processing and GIS Laboratory (LAPIG), affiliated with the Institute of Socio-Environmental Studies (IESA) at the Federal University of Goiás (UFG), registered under CNPJ 01.567.601/0001-43, headquartered in Goiânia, State of Goiás.',
          'Contact email for privacy matters:'
        ],
        contactEmail: 'lapig.ufg@gmail.com'
      },
      {
        title: '2. Personal Data Collected',
        paragraphs: ['The Pasto Legal platform collects and processes the following personal data:'],
        list: [
          'Phone number (WhatsApp): used for user identification and chatbot service provision;',
          'Messages sent to the bot: textual content and geographic coordinates provided by the user during interaction;',
          'Web portal browsing data: IP address, browser type, operating system, pages accessed, and time spent;',
          'Cookies and similar technologies: as detailed in section 7 of this Policy.'
        ],
        paragraphsAfterList: ['The platform does not collect sensitive data, such as racial or ethnic origin, religious beliefs, political opinion, health data, or biometric data.']
      },
      {
        title: '3. Processing Purposes',
        paragraphs: ['Personal data is processed for the following purposes:'],
        list: [
          'Provision of pasture monitoring services via WhatsApp and web portal;',
          'Generation of personalized geospatial reports based on provided coordinates;',
          'Continuous platform improvement, including usage and performance analysis;',
          'Scientific research and academic production, always with data anonymization;',
          'Communication with users about relevant service updates;',
          'Compliance with legal and regulatory obligations.'
        ]
      },
      {
        title: '4. Legal Basis for Processing',
        paragraphs: ['Personal data processing is based on the following legal bases provided by Law No. 13,709/2018 (LGPD):'],
        list: [
          'Consent (art. 7, I): upon initiating interaction with the WhatsApp bot or accepting cookies on the portal;',
          'Contract execution (art. 7, V): for providing the service requested by the user;',
          'Legitimate interest (art. 7, IX): for service improvement and aggregated statistical analyses;',
          'Research (art. 7, IV): for scientific research purposes, ensuring anonymization whenever possible.'
        ]
      },
      {
        title: '5. Data Sharing',
        paragraphs: ['Personal data may be shared with:'],
        list: [
          'Google (Gemini API): messages sent to the bot are processed by the Google Gemini API for response generation. Google acts as a data processor, subject to its own privacy terms;',
          'Infrastructure providers: hosting and cloud storage services necessary for platform operation;',
          'Institutional partners (iCS, Solved): aggregated and anonymized data for impact reporting purposes.'
        ],
        paragraphsAfterList: ['The platform does not sell personal data to third parties for marketing or advertising purposes.']
      },
      {
        title: '6. Retention and Deletion',
        paragraphs: ['Personal data will be kept for the period necessary to fulfill the purposes for which it was collected, observing the following criteria:'],
        list: [
          'Conversation history: kept for up to 12 months for service continuity, anonymized thereafter;',
          'Browsing data: kept for up to 6 months;',
          'Scientific research data: kept in anonymized form indefinitely;',
          'Legal compliance data: kept for the period required by applicable legislation.'
        ],
        paragraphsAfterList: ['After the retention period ends, data will be deleted or irreversibly anonymized.']
      },
      {
        title: '7. Cookies and Similar Technologies',
        paragraphs: ['The Pasto Legal web portal uses cookies for:'],
        list: [
          'Essential cookies: necessary for basic site functionality, such as theme preference (light/dark) and cookie consent. Do not require consent.',
          'Analytics cookies: used to understand how visitors interact with the portal, through analytics tools with anonymized data. Require prior consent.'
        ],
        paragraphsAfterList: ['Users can manage their cookie preferences at any time through the consent banner or browser settings. Refusing analytics cookies does not affect service functionality.']
      },
      {
        title: '8. Data Subject Rights',
        paragraphs: ['Under article 18 of the LGPD, personal data subjects have the right to:'],
        list: [
          'Confirmation of processing existence;',
          'Access to personal data;',
          'Correction of incomplete, inaccurate, or outdated data;',
          'Anonymization, blocking, or deletion of unnecessary or excessive data;',
          'Data portability to another service provider;',
          'Deletion of data processed with consent;',
          'Information about entities with which data has been shared;',
          'Information about the possibility of not providing consent and its consequences;',
          'Revocation of consent at any time.'
        ],
        paragraphsAfterList: ['To exercise your rights, please send a request to:'],
        contactEmail: 'lapig.ufg@gmail.com',
        contactNote: 'A response will be provided within 15 business days.'
      },
      {
        title: '9. Data Security',
        paragraphs: ['The platform adopts appropriate technical and organizational measures to protect personal data against unauthorized access, accidental or unlawful destruction, loss, alteration, or communication, including:'],
        list: [
          'Data encryption in transit (TLS/HTTPS);',
          'Role-based access control;',
          'Access monitoring and logging;',
          'Periodic vulnerability assessments.'
        ]
      },
      {
        title: '10. International Transfer',
        paragraphs: ['Personal data may be transferred to servers located outside Brazil, in compliance with article 33 of the LGPD, especially for processing by the Google Gemini API. In such cases, contractual and technical safeguards are adopted to ensure a level of protection compatible with Brazilian legislation.']
      },
      {
        title: '11. Minors',
        paragraphs: ['The Pasto Legal platform is not intended for minors under 18 years of age. If data processing of minors without proper parental consent is identified, such data will be immediately deleted.']
      },
      {
        title: '12. Changes to this Policy',
        paragraphs: ['This Privacy Policy may be updated periodically. The current version will always be available on this page, with the date of the last update indicated. Substantial changes will be communicated to users through available channels.']
      },
      {
        title: '13. Contact and Data Protection Officer (DPO)',
        paragraphs: [
          'For questions, requests, or complaints related to personal data processing, the user may contact the Data Protection Officer (DPO) via email:',
        ],
        contactEmail: 'lapig.ufg@gmail.com',
        contactNote: 'If the response is not satisfactory, the data subject may file a complaint with the National Data Protection Authority (ANPD).'
      }
    ]
  },

  publications: {
    title: 'Publications',
    subtitle: 'Articles, theses, and scientific papers that underpin the methodologies and algorithms of Pasto Legal. All the science behind the technology.',
    statsLabel: 'publications',
    filterType: 'Type',
    filterYear: 'Year',
    filterAll: 'All',
    showing: 'Showing',
    of: 'of',
    noResults: 'No publications found for the selected filters.',
    clearFilters: 'Clear filters',
    abstract: 'Abstract',
    access: 'Access',
    types: {
      article: 'Article',
      articles: 'Articles',
      chapter: 'Chapter',
      chapters: 'Chapters',
      thesis: 'Thesis',
      theses: 'Theses',
      conference: 'Conference',
      conferences: 'Conferences'
    }
  },

  about: {
    title: 'About Pasto Legal',
    subtitle: 'An open science platform connecting academic research, artificial intelligence, and remote sensing to transform Brazilian livestock farming.',
    mission: {
      tag: 'Mission',
      title: 'Democratizing access to geospatial information',
      p1: 'There is significant untapped potential to improve the efficiency of Brazilian livestock production. The knowledge already exists, but it often fails to reach farmers at the operational level. Pasto Legal was created to bridge this gap by integrating existing data sources and transforming them into actionable insights. These insights are delivered directly to farmers via WhatsApp—eliminating the need for app installations, additional hardware, or specialized technical knowledge.',
      p2: 'We believe that sustainable livestock production begins with access to high-quality information. When farmers understand the condition and health of their pastures, they are empowered to make better decisions for their herds, the soil, and the environment.'
    },
    howItWorks: {
      tag: 'How It Works',
      title: 'From satellite to WhatsApp',
      steps: [
        { number: '01', title: 'Send Location', desc: 'The user sends the property location or CAR registration number.' },
        { number: '02', title: 'Boundary Retrieval', desc: 'Pasto Legal fetches and retrieves the property boundaries from the Rural Environmental Registry (CAR) database.' },
        { number: '03', title: 'Pasture Analysis', desc: 'Based on Mapbiomas Pasture Map and Global Pasture Watch data, an initial vigor analysis is generated.' },
        { number: '04', title: 'Intelligence', desc: 'Through questions and interaction with the user, new analyses are generated.' },
        { number: '05', title: 'Delivery', desc: 'In audio or text, always in accessible language, Pasto Legal proposes ways to improve pasture quality.' }
      ]
    },
    team: {
      tag: 'Team',
      title: 'Who builds Pasto Legal',
      p1: 'The project is developed and maintained by the Image Processing and GIS Laboratory (LAPIG), affiliated with the Institute of Socio-Environmental Studies (IESA) at the Federal University of Goiás (UFG) and by Solved - Geoinformation Solutions.',
      p2: 'Our multidisciplinary team brings together researchers, engineers, and students from remote sensing, environmental sciences, computer science, agronomy, animal science, artificial intelligence, and environmental sciences.',
      groups: [
        {
          title: 'General Coordination',
          members: ['Laerte Guimarães Ferreira Júnior']
        },
        {
          title: 'Technical Coordination',
          members: ['Leandro Parente']
        },
        {
          title: 'Technological Development',
          members: [
            'Tiago Gonçalves Maia',
            'Bernard Silva',
            'Luiz Cortinhas Ferreira Neto'
          ]
        },
        {
          title: 'Technical Team',
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
      tag: 'Partners',
      title: 'Institutional support',
      desc: 'Pasto Legal is made possible through collaboration between institutions committed to sustainability and innovation in land use.',
      items: [
        { name: 'Federal University of Goiás (UFG)', desc: 'LAPIG\'s host institution, responsible for research, development, and project governance.' },
        { name: 'Institute for Climate and Society (iCS)', desc: 'Institutional and financial support for projects connecting climate, land use, and sustainable development.' },
        { name: 'Solved — Sustainability Agency', desc: 'Strategic partner in sustainable solution design and connection with impact ecosystems.' }
      ]
    },
    tech: {
      tag: 'Technology',
      title: 'Open and reproducible science',
      desc: 'All Pasto Legal code is distributed under the MIT license. Transparency and reproducibility are project pillars.'
    },
    contact: {
      tag: 'Contact',
      title: 'Get in touch',
      desc: 'For partnerships, academic questions, or suggestions, contact us via email',
      addressLabel: 'Address',
      address: 'LAPIG — Institute of Socio-Environmental Studies (IESA)\nFederal University of Goiás\nCampus Samambaia, Goiânia — GO, Brazil',
      linksLabel: 'Links'
    }
  }
};
