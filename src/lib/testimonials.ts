export type Testimonial = {
  quote: { pt: string; en: string };
  name: string;
  role: { pt: string; en: string };
};

// Placeholder content: swap every quote/name/role for real client testimonials
// before shipping. Never publish these as-is, they are not real quotes.
export const testimonials: Testimonial[] = [
  {
    quote: {
      pt: "[Substitua por um depoimento real: o que o cliente disse sobre o processo de trabalho.]",
      en: "[Replace with a real testimonial: what the client said about the process.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
  {
    quote: {
      pt: "[Substitua por um depoimento real: o que mudou depois do projeto entregue.]",
      en: "[Replace with a real testimonial: what changed after the project shipped.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
  {
    quote: {
      pt: "[Substitua por um depoimento real: como foi colaborar no dia a dia.]",
      en: "[Replace with a real testimonial: what day-to-day collaboration felt like.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
  {
    quote: {
      pt: "[Substitua por um depoimento real: um resultado específico e mensurável.]",
      en: "[Replace with a real testimonial: a specific, measurable result.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
  {
    quote: {
      pt: "[Substitua por um depoimento real: por que recontrataria para o próximo projeto.]",
      en: "[Replace with a real testimonial: why they'd hire again for the next project.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
  {
    quote: {
      pt: "[Substitua por um depoimento real: a primeira impressão sobre o trabalho.]",
      en: "[Replace with a real testimonial: the first impression of the work.]",
    },
    name: "Nome do cliente",
    role: { pt: "Cargo, Empresa", en: "Role, Company" },
  },
];
