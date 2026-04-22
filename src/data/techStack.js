// src/data/techStack.js — Stack tecnológico bilingüe (SSOT)

export const TECH_STACK = [
  { name: 'React',          category: 'frontend' },
  { name: 'Next.js',        category: 'frontend' },
  { name: 'TypeScript',     category: 'frontend' },
  { name: 'Node.js',        category: 'backend' },
  { name: 'Python',         category: 'backend' },
  { name: 'FastAPI',        category: 'backend' },
  { name: 'Express',        category: 'backend' },
  { name: 'PostgreSQL',     category: 'data' },
  { name: 'MongoDB',        category: 'data' },
  { name: 'Redis',          category: 'data' },
  { name: 'AWS',            category: 'cloud' },
  { name: 'Docker',         category: 'cloud' },
  { name: 'Kubernetes',     category: 'cloud' },
  { name: 'GitHub Actions', category: 'cloud' },
];

export const TECH_SECTION = {
  badge:     { es: 'Nuestro arsenal',    en: 'Our arsenal' },
  title:     { es: 'Stack',              en: 'Tech' },
  highlight: { es: 'Tecnológico',        en: 'Stack' },
  subtitle:  {
    es: 'Trabajamos con las tecnologías más demandadas del mercado para construir soluciones robustas',
    en: 'We work with the most in-demand technologies on the market to build robust solutions',
  },
};

export const TECH_CATEGORIES = {
  frontend: { es: 'Frontend',        en: 'Frontend' },
  backend:  { es: 'Backend',         en: 'Backend' },
  data:     { es: 'Datos',           en: 'Data' },
  cloud:    { es: 'Cloud & DevOps',  en: 'Cloud & DevOps' },
};
