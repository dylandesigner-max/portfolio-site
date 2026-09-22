export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const dictionaries = {
  pt: {
    nav: {
      home: "Home",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
      menu: "Menu",
      close: "Fechar",
      talk: "Falar comigo",
    },
    hero: {
      titleA: "Olá, meu nome é Dylan e sou um Especialista em",
      titleEmphasis: "Product Design.",
      subtext: "Product & UX/UI Designer em Curitiba. Pesquisa, interface e prototipação para times que precisam decidir rápido.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
      hint: "Mova o mouse",
    },
    homeTeaser: {
      headline: "Sete anos de pesquisa, uma obsessão: interfaces que fazem sentido.",
      miniBio:
        "Trabalho entre a pesquisa e o pixel. Antes de desenhar qualquer tela, entendo o problema de negócio, entrevisto quem vai usar o produto e só então chego na interface.",
      stats: [
        { value: 7, suffix: "", label: "Anos de experiência" },
        { value: 32, suffix: "+", label: "Projetos executados" },
        { value: 114, suffix: "+", label: "Clientes satisfeitos" },
      ],
    },
    bento: {
      headline: "O que eu resolvo",
      items: [
        {
          title: "Pesquisa",
          body: "Entrevistas e testes que transformam achismo em decisão.",
        },
        {
          title: "UI de produto",
          body: "Interfaces de alta fidelidade, prontas para desenvolvimento.",
        },
        {
          title: "Design systems",
          body: "Componentes consistentes que escalam com o time.",
        },
        {
          title: "Mobile & web",
          body: "Experiências nativas e responsivas de ponta a ponta.",
        },
      ],
    },
    testimonials: {
      headline: "O que dizem sobre o trabalho",
      subtext: "Depoimentos de clientes e colegas de projeto.",
    },
    social: {
      headline: "Onde mais me encontrar",
      subtext: "Trabalhos, código e bastidores, fora do portfólio.",
    },
    projectsSection: {
      eyebrow: "Trabalhos selecionados",
      headline: "Projetos recentes",
      viewCase: "Ver case",
      viewAll: "Ver todos",
      comingSoon: "Em breve",
    },
    skills: {
      headline: "Ferramentas",
    },
    contactCta: {
      headline: "Tem um projeto em mente?",
      body: "Estou com espaço na agenda para novos projetos de UX/UI.",
      cta: "Falar comigo",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      backToTop: "Topo",
    },
    aboutPage: {
      eyebrow: "Sobre e contato",
      headline: "Fiz da pesquisa o meu jeito de desenhar interface.",
      intro: "Sou Dylan Xavier, designer de produto em Curitiba. Nos últimos 7 anos, ajudei times a transformar problemas confusos em interfaces claras, testadas com quem realmente ia usá-las.",
      bioTitle: "Trajetória",
      bio: [
        "Comecei como designer gráfico, o que me deu uma base sólida de tipografia, hierarquia visual e composição.",
        "Migrei para UX/UI ao perceber que o design mais bonito do mundo não vale nada se não resolve o problema certo.",
        "Hoje trabalho com produtos SaaS B2B e aplicativos mobile, transformando fluxos complexos em experiências claras.",
      ],
      valuesTitle: "Como penso design",
      values: [
        { title: "Dado antes de opinião", body: "Toda decisão visual responde a uma pergunta de pesquisa." },
        { title: "Simplicidade é trabalho", body: "Uma tela simples passou por várias versões complicadas." },
        { title: "Testar cedo, sempre", body: "Prefiro errar num rabisco do que num produto em produção." },
      ],
      toolsTitle: "Stack",
      contactTitle: "Vamos conversar",
      contactBody: "Respondo rápido por e-mail ou WhatsApp.",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      availability: "Disponível para novos projetos",
    },
    projectsPage: {
      eyebrow: "Portfólio",
      headline: "Projetos",
      intro: "Uma seleção de trabalhos de UX/UI e produto, do processo à interface final.",
      viewCase: "Ver case",
      comingSoon: "Em breve",
      role: "Papel",
      year: "Ano",
    },
    projectPage: {
      back: "Todos os projetos",
      overview: "Visão geral",
      gallery: "Galeria",
      downloadPdf: "Baixar case em PDF",
      nextTitle: "Quer ver mais?",
      nextBody: "Confira os outros projetos ou fale comigo sobre o seu.",
      viewAll: "Ver todos os projetos",
      notFoundTitle: "Case em breve",
      notFoundBody: "Este projeto ainda não tem uma página publicada.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      talk: "Get in touch",
    },
    hero: {
      titleA: "Hi, my name is Dylan and I'm a",
      titleEmphasis: "Product Design Specialist.",
      subtext: "Product & UX/UI Designer in Curitiba. Research, interface and prototyping for teams that need to decide fast.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      hint: "Move your mouse",
    },
    homeTeaser: {
      headline: "Seven years of research, one obsession: interfaces that make sense.",
      miniBio:
        "I work between research and pixels. Before drawing a single screen, I understand the business problem, interview the people who'll use the product, and only then get to the interface.",
      stats: [
        { value: 7, suffix: "", label: "Years of experience" },
        { value: 32, suffix: "+", label: "Projects delivered" },
        { value: 114, suffix: "+", label: "Happy clients" },
      ],
    },
    bento: {
      headline: "What I solve",
      items: [
        { title: "Research", body: "Interviews and tests that turn guesswork into decisions." },
        { title: "Product UI", body: "High-fidelity interfaces, ready for development." },
        { title: "Design systems", body: "Consistent components that scale with the team." },
        { title: "Mobile & web", body: "Native and responsive experiences end to end." },
      ],
    },
    testimonials: {
      headline: "What people say about the work",
      subtext: "Feedback from clients and project collaborators.",
    },
    social: {
      headline: "Find me elsewhere",
      subtext: "Work, code and behind the scenes, outside the portfolio.",
    },
    projectsSection: {
      eyebrow: "Selected work",
      headline: "Recent projects",
      viewCase: "View case",
      viewAll: "View all",
      comingSoon: "Coming soon",
    },
    skills: {
      headline: "Tools",
    },
    contactCta: {
      headline: "Have a project in mind?",
      body: "I have room on my calendar for new UX/UI projects.",
      cta: "Get in touch",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Top",
    },
    aboutPage: {
      eyebrow: "About and contact",
      headline: "I made research my way of designing interfaces.",
      intro: "I'm Dylan Xavier, a product designer based in Curitiba. Over the past 7 years I've helped teams turn confusing problems into clear interfaces, tested with the people who'd actually use them.",
      bioTitle: "Background",
      bio: [
        "I started as a graphic designer, which gave me a solid foundation in typography, visual hierarchy and composition.",
        "I moved into UX/UI once I realized the most beautiful design in the world is worthless if it solves the wrong problem.",
        "Today I work with B2B SaaS products and mobile apps, turning complex flows into clear experiences.",
      ],
      valuesTitle: "How I think about design",
      values: [
        { title: "Data before opinion", body: "Every visual decision answers a research question." },
        { title: "Simplicity is work", body: "A simple screen went through several complicated versions." },
        { title: "Test early, always", body: "I'd rather be wrong on a sketch than in production." },
      ],
      toolsTitle: "Stack",
      contactTitle: "Let's talk",
      contactBody: "I reply quickly by email or WhatsApp.",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      availability: "Available for new projects",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      headline: "Projects",
      intro: "A selection of UX/UI and product work, from process to final interface.",
      viewCase: "View case",
      comingSoon: "Coming soon",
      role: "Role",
      year: "Year",
    },
    projectPage: {
      back: "All projects",
      overview: "Overview",
      gallery: "Gallery",
      downloadPdf: "Download PDF case",
      nextTitle: "Want to see more?",
      nextBody: "Check out the other projects, or tell me about yours.",
      viewAll: "View all projects",
      notFoundTitle: "Case coming soon",
      notFoundBody: "This project doesn't have a published page yet.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
