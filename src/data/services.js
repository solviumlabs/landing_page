// src/data/services.js — Servicios bilingüe (SSOT)

export const SERVICES = [
  {
    id: 'saas',
    icon: 'Cloud',
    title: { es: 'Desarrollo SaaS', en: 'SaaS Development' },
    description: {
      es: 'Creamos plataformas escalables en la nube con arquitecturas modernas y tecnologías de vanguardia. Diseñadas para crecer contigo.',
      en: 'We build scalable cloud platforms with modern architectures and cutting-edge technologies. Designed to grow with you.',
    },
    features: [
      { es: 'Arquitectura multi-tenant',         en: 'Multi-tenant architecture' },
      { es: 'Escalabilidad automática',           en: 'Automatic scalability' },
      { es: 'APIs RESTful & GraphQL',             en: 'RESTful & GraphQL APIs' },
      { es: 'Dashboard analytics integrado',      en: 'Integrated analytics dashboard' },
    ],
  },
  {
    id: 'sistemas',
    icon: 'Cpu',
    title: { es: 'Sistemas Personalizados', en: 'Custom Systems' },
    description: {
      es: 'Soluciones a medida para PyMEs y microempresas. Automatizamos flujos, digitalizamos procesos y mejoramos la eficiencia operativa.',
      en: 'Tailored solutions for SMEs and micro-businesses. We automate workflows, digitize processes, and improve operational efficiency.',
    },
    features: [
      { es: 'ERP / CRM a medida',                 en: 'Custom ERP / CRM' },
      { es: 'Automatización de procesos',          en: 'Process automation' },
      { es: 'Integraciones con terceros',          en: 'Third-party integrations' },
      { es: 'Soporte y mantenimiento continuo',    en: 'Continuous support & maintenance' },
    ],
  },
  {
    id: 'apis',
    icon: 'Database',
    title: { es: 'APIs Públicas', en: 'Public APIs' },
    description: {
      es: 'Diseñamos APIs robustas, documentadas y fáciles de integrar. Perfectas como producto independiente o backbone de tu plataforma.',
      en: 'We design robust, documented, and easy-to-integrate APIs. Perfect as a standalone product or as the backbone of your platform.',
    },
    features: [
      { es: 'RESTful & GraphQL',                  en: 'RESTful & GraphQL' },
      { es: 'Documentación OpenAPI (Swagger)',     en: 'OpenAPI (Swagger) documentation' },
      { es: 'Rate limiting y autenticación',       en: 'Rate limiting & authentication' },
      { es: 'Versionado semántico',                en: 'Semantic versioning' },
    ],
  },
  {
    id: 'componentes',
    icon: 'Code2',
    title: { es: 'Componentes & Librerías', en: 'Components & Libraries' },
    description: {
      es: 'Construimos componentes reutilizables y librerías que aceleran el desarrollo de tu equipo y estandarizan la calidad del código.',
      en: 'We build reusable components and libraries that speed up your team\'s development and standardize code quality.',
    },
    features: [
      { es: 'React / Vue / Angular',              en: 'React / Vue / Angular' },
      { es: 'TypeScript estricto',                 en: 'Strict TypeScript' },
      { es: 'Documentación Storybook',             en: 'Storybook documentation' },
      { es: 'Publicación en NPM',                  en: 'NPM publishing' },
    ],
  },
];

export const SERVICES_SECTION = {
  badge:     { es: 'Lo que construimos',              en: 'What we build' },
  title:     { es: 'Nuestros',                         en: 'Our' },
  highlight: { es: 'Servicios',                        en: 'Services' },
  subtitle:  {
    es: 'Soluciones tecnológicas completas para cada etapa de tu negocio',
    en: 'Complete technological solutions for every stage of your business',
  },
  more:      { es: 'Más información',                  en: 'Learn more' },
};
