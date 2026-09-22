export type Testimonial = {
  quote: { pt: string; en: string };
  name: string;
  role: { pt: string; en: string };
};

// Illustrative placeholder content — fictional clients/companies written to
// show how the section reads with real copy. Swap for real testimonials
// before treating these as genuine quotes.
export const testimonials: Testimonial[] = [
  {
    quote: {
      pt: "Cara, o Dylan pegou uma bagunça de ideias soltas e transformou num produto que a equipe usa todo dia sem reclamar, o que já é uma vitória enorme sabe. Ele pergunta muito antes de desenhar qualquer tela, isso fez toda diferença pra gente.",
      en: "Dylan took a pile of scattered ideas and turned it into a product our whole team actually uses every day without complaining, which honestly is already a win. He asks a ton of questions before drawing a single screen, and that made all the difference for us.",
    },
    name: "Rafael Monteiro",
    role: { pt: "CEO, Órbita SaaS", en: "CEO, Orbita SaaS" },
  },
  {
    quote: {
      pt: "Contratei achando que ia ser só um \"deixa bonito\", mas o processo de pesquisa que ele conduziu mudou completamente como a gente pensava o fluxo do app. Entregou no prazo, comunicou cada etapa, e ainda segurou nossa mão nos ajustes finais. Recomendo de olhos fechados.",
      en: "I hired him thinking it'd be a quick 'make it pretty' job, but the research process he ran completely changed how we thought about the app's flow. Delivered on time, kept us in the loop every step, and stuck around for the final tweaks. Recommend with my eyes closed.",
    },
    name: "Camila Duarte",
    role: { pt: "Fundadora, Nortea", en: "Founder, Nortea" },
  },
  {
    quote: {
      pt: "O que mais me marcou foi a paciência pra entender o que a gente realmente precisava antes de sair desenhando. Resultado: site novo trouxe muito mais gente pra comunidade e a taxa de conversão da landing quase dobrou.",
      en: "What stuck with me most was the patience to actually understand what we needed before jumping into screens. Result: the new site brought way more people into the community and our landing page conversion nearly doubled.",
    },
    name: "Thiago Ferraz",
    role: { pt: "Head de Marketing, Coletivo Lunar", en: "Head of Marketing, Coletivo Lunar" },
  },
  {
    quote: {
      pt: "Trabalhar com o Dylan foi tranquilo do início ao fim, ele entende de negócio e não só de tela bonita. O sistema que ele desenhou pra gestão da nossa operação ficou tão intuitivo que reduzimos o tempo de treinamento de time novo em mais da metade.",
      en: "Working with Dylan was smooth start to finish, he gets the business side, not just pretty screens. The system he designed for our operation turned out so intuitive we cut new hire training time by more than half.",
    },
    name: "Patrícia Nascimento",
    role: { pt: "Diretora de Operações, Vitta Resorts", en: "Operations Director, Vitta Resorts" },
  },
  {
    quote: {
      pt: "Sinceramente não esperava tanto cuidado com detalhe assim. Cada discovery trazia uma descoberta nova e ele sempre voltava com uma proposta certeira. O produto ficou mais fácil de usar e a gente sentiu isso direto no suporte, caiu muito o número de chamados.",
      en: "Honestly wasn't expecting that level of attention to detail. Every discovery session surfaced something new, and he always came back with the right call. The product got easier to use and we felt it directly in support, ticket volume dropped a lot.",
    },
    name: "Bruno Salgado",
    role: { pt: "Head de Produto, StudioClass", en: "Head of Product, StudioClass" },
  },
  {
    quote: {
      pt: "Confesso que no começo achei que ia ser mais um design system genérico, mas ele criou uma identidade que realmente parece nossa. Ficou fácil pra qualquer designer novo do time pegar o sistema e sair produzindo sem perder a consistência.",
      en: "I'll admit I thought it'd be another generic design system, but he built an identity that actually feels like ours. Now any new designer on the team can pick up the system and start shipping without breaking consistency.",
    },
    name: "Larissa Prado",
    role: { pt: "Fundadora, Marca Norte", en: "Founder, Marca Norte" },
  },
];
