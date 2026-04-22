// src/data/process.js — Proceso de trabajo bilingüe (SSOT)

export const PROCESS_STEPS = [
  {
    step: '01',
    title:       { es: 'Descubrimiento',        en: 'Discovery' },
    description: {
      es: 'Entendemos tu visión, objetivos de negocio y contexto técnico. Definimos el alcance y los indicadores de éxito.',
      en: 'We understand your vision, business goals, and technical context. We define the scope and success metrics.',
    },
    icon: 'Search',
  },
  {
    step: '02',
    title:       { es: 'Diseño & Planificación', en: 'Design & Planning' },
    description: {
      es: 'Arquitectura técnica sólida, wireframes y un roadmap claro con hitos medibles. Sin sorpresas en el camino.',
      en: 'Solid technical architecture, wireframes, and a clear roadmap with measurable milestones. No surprises along the way.',
    },
    icon: 'Layout',
  },
  {
    step: '03',
    title:       { es: 'Desarrollo Ágil',        en: 'Agile Development' },
    description: {
      es: 'Sprints cortos de 2 semanas con entregas continuas. Puedes ver el avance y dar feedback en tiempo real.',
      en: '2-week sprints with continuous deliveries. You can track progress and give real-time feedback.',
    },
    icon: 'Code2',
  },
  {
    step: '04',
    title:       { es: 'Deploy & Soporte',       en: 'Deploy & Support' },
    description: {
      es: 'Lanzamos a producción con CI/CD automatizado y te acompañamos con monitoreo, mantenimiento y evolución.',
      en: 'We launch to production with automated CI/CD and support you with monitoring, maintenance, and evolution.',
    },
    icon: 'Rocket',
  },
];

export const PROCESS_SECTION = {
  badge:     { es: 'Cómo trabajamos',               en: 'How we work' },
  title:     { es: 'Nuestro',                        en: 'Our' },
  highlight: { es: 'Proceso',                        en: 'Process' },
  subtitle:  {
    es: 'De la idea al producto en producción, con metodología probada',
    en: 'From idea to production-ready product, with a proven methodology',
  },
};
