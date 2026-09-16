export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const dictionaries = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      menu: "Menu",
      close: "Fechar",
    },
    hero: {
      eyebrow: "Product & UX/UI Designer",
      headlineA: "Design que resolve",
      headlineEmphasis: "problemas reais",
      subtext:
        "Curitiba, Brasil. Há 6 anos transformo pesquisa e dados em produtos digitais que as pessoas realmente usam.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
    },
    stats: [
      { value: "6+", label: "anos de experiência" },
      { value: "114+", label: "clientes atendidos" },
      { value: "448+", label: "projetos entregues" },
      { value: "10.000+", label: "horas de produção" },
    ],
    about: {
      eyebrow: "Sobre mim",
      headline: "Design bom é aquele que cumpre seu objetivo estratégico.",
      body: "Sou Dylan Xavier, **Product Designer** focado em UX/UI para produtos SaaS e mobile. Trabalho da pesquisa ao protótipo de alta fidelidade, sempre **validando decisões com quem vai usar o produto** no fim do processo.",
      ctaLabel: "Conheça minha história",
    },
    services: {
      headline: "Como eu posso ajudar",
      items: [
        {
          title: "Pesquisa & estratégia",
          body: "Entrevistas, personas e mapas de empatia para embasar cada decisão de design em dado real.",
        },
        {
          title: "UI & prototipação",
          body: "Interfaces de alta fidelidade e protótipos navegáveis, prontos para teste com usuário.",
        },
        {
          title: "Design systems",
          body: "Bibliotecas de componentes consistentes, documentadas e prontas para escalar com o produto.",
        },
      ],
    },
    process: {
      eyebrow: "Como eu trabalho",
      headline: "Um processo, não uma fórmula",
      steps: [
        {
          number: "01",
          title: "Empatia",
          body: "Pesquisa com usuários reais e análise de contexto para entender a dor antes de desenhar qualquer tela.",
        },
        {
          number: "02",
          title: "Definição",
          body: "Cruzo os dados da pesquisa para isolar um único problema central, claro o suficiente para guiar todas as decisões seguintes.",
        },
        {
          number: "03",
          title: "Ideação",
          body: "Exploro múltiplas soluções antes de escolher uma, priorizando pelo impacto no usuário e na estratégia do negócio.",
        },
        {
          number: "04",
          title: "Prototipação",
          body: "Wireframes, telas de alta fidelidade e protótipos navegáveis, testados e ajustados em ciclos curtos.",
        },
        {
          number: "05",
          title: "Testes e entrega",
          body: "Validação com usuários reais antes do handoff, com documentação clara para o time de desenvolvimento.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Trabalhos selecionados",
      headline: "Projetos recentes",
      viewCase: "Ver case",
      viewAll: "Ver todos os projetos",
      comingSoon: "Case em breve",
    },
    skills: {
      headline: "Ferramentas do dia a dia",
    },
    contactCta: {
      headline: "Tem um projeto em mente?",
      body: "Estou com espaço na agenda para novos projetos de UX/UI. Me conta o que você está construindo.",
      ctaLabel: "Falar comigo",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },
    aboutPage: {
      eyebrow: "Sobre e contato",
      headline: "Product Designer com sotaque de pesquisa",
      intro:
        "Sou Dylan Xavier, designer de produto em Curitiba. Nos últimos 6 anos, ajudei mais de 100 clientes a transformar problemas confusos em interfaces claras, testadas com quem realmente ia usá-las.",
      bioTitle: "Um pouco da minha trajetória",
      bio: [
        "Comecei como designer gráfico, o que me deu uma base sólida de tipografia, hierarquia visual e composição que carrego até hoje em cada tela que desenho.",
        "Migrei para UX/UI ao perceber que o design mais bonito do mundo não vale nada se não resolve o problema certo. Desde então, meu processo sempre começa pela pesquisa, nunca pela interface.",
        "Hoje trabalho principalmente com produtos SaaS B2B e aplicativos mobile, ajudando times a transformar fluxos complexos em experiências que fazem sentido no primeiro uso.",
      ],
      valuesTitle: "Como eu penso design",
      values: [
        {
          title: "Dado antes de opinião",
          body: "Toda decisão visual precisa responder a uma pergunta de pesquisa, não a uma preferência pessoal.",
        },
        {
          title: "Simplicidade é trabalho, não sorte",
          body: "Uma tela simples geralmente passou por várias versões complicadas antes de chegar ali.",
        },
        {
          title: "Testar cedo, testar sempre",
          body: "Prefiro errar num rabisco de papel do que num produto em produção.",
        },
      ],
      toolsTitle: "Ferramentas e stack",
      contactTitle: "Vamos conversar",
      contactBody:
        "Respondo rápido por e-mail ou WhatsApp. Me conta um pouco do seu projeto e do prazo que você tem em mente.",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      socialTitle: "Redes",
      availability: "Disponível para novos projetos",
    },
    projectsPage: {
      eyebrow: "Portfólio",
      headline: "Projetos",
      intro:
        "Uma seleção de trabalhos de UX/UI e produto, do processo de pesquisa à interface final.",
      viewCase: "Ver case",
      comingSoon: "Case em breve",
      role: "Papel",
      year: "Ano",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Product & UX/UI Designer",
      headlineA: "Design that solves",
      headlineEmphasis: "real problems",
      subtext:
        "Curitiba, Brazil. For 6 years I've turned research and data into digital products people actually use.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    stats: [
      { value: "6+", label: "years of experience" },
      { value: "114+", label: "clients served" },
      { value: "448+", label: "projects delivered" },
      { value: "10,000+", label: "production hours" },
    ],
    about: {
      eyebrow: "About me",
      headline: "Good design is design that fulfills its strategic purpose.",
      body: "I'm Dylan Xavier, a **Product Designer** focused on UX/UI for SaaS and mobile products. I work from research to high-fidelity prototypes, always **validating decisions with the people who will use it**.",
      ctaLabel: "Read my story",
    },
    services: {
      headline: "How I can help",
      items: [
        {
          title: "Research & strategy",
          body: "Interviews, personas and empathy maps to ground every design decision in real data.",
        },
        {
          title: "UI & prototyping",
          body: "High-fidelity interfaces and clickable prototypes, ready for user testing.",
        },
        {
          title: "Design systems",
          body: "Consistent, documented component libraries ready to scale with the product.",
        },
      ],
    },
    process: {
      eyebrow: "How I work",
      headline: "A process, not a formula",
      steps: [
        {
          number: "01",
          title: "Empathy",
          body: "Research with real users and context analysis to understand the pain before designing a single screen.",
        },
        {
          number: "02",
          title: "Definition",
          body: "I cross-reference research data to isolate one central problem, clear enough to guide every decision that follows.",
        },
        {
          number: "03",
          title: "Ideation",
          body: "I explore multiple solutions before picking one, prioritizing by impact on the user and on business strategy.",
        },
        {
          number: "04",
          title: "Prototyping",
          body: "Wireframes, high-fidelity screens and clickable prototypes, tested and refined in short cycles.",
        },
        {
          number: "05",
          title: "Testing and handoff",
          body: "Validation with real users before handoff, with clear documentation for the development team.",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Selected work",
      headline: "Recent projects",
      viewCase: "View case",
      viewAll: "View all projects",
      comingSoon: "Case coming soon",
    },
    skills: {
      headline: "Everyday tools",
    },
    contactCta: {
      headline: "Have a project in mind?",
      body: "I have room on my calendar for new UX/UI projects. Tell me what you're building.",
      ctaLabel: "Get in touch",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
    aboutPage: {
      eyebrow: "About and contact",
      headline: "Product Designer with a research accent",
      intro:
        "I'm Dylan Xavier, a product designer based in Curitiba, Brazil. Over the past 6 years I've helped more than 100 clients turn confusing problems into clear interfaces, tested with the people who'd actually use them.",
      bioTitle: "A bit of my background",
      bio: [
        "I started as a graphic designer, which gave me a solid foundation in typography, visual hierarchy and composition that still shapes every screen I design today.",
        "I moved into UX/UI once I realized the most beautiful design in the world is worthless if it solves the wrong problem. Since then my process always starts with research, never with the interface.",
        "Today I work mostly with B2B SaaS products and mobile apps, helping teams turn complex flows into experiences that make sense on the first use.",
      ],
      valuesTitle: "How I think about design",
      values: [
        {
          title: "Data before opinion",
          body: "Every visual decision needs to answer a research question, not a personal preference.",
        },
        {
          title: "Simplicity is work, not luck",
          body: "A simple screen usually went through several complicated versions before getting there.",
        },
        {
          title: "Test early, test often",
          body: "I'd rather be wrong on a paper sketch than on a product already in production.",
        },
      ],
      toolsTitle: "Tools and stack",
      contactTitle: "Let's talk",
      contactBody:
        "I reply quickly by email or WhatsApp. Tell me a bit about your project and the timeline you have in mind.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      socialTitle: "Social",
      availability: "Available for new projects",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      headline: "Projects",
      intro:
        "A selection of UX/UI and product work, from the research process to the final interface.",
      viewCase: "View case",
      comingSoon: "Case coming soon",
      role: "Role",
      year: "Year",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
