// src/data/meta.js — Datos globales de la empresa (SSOT + bilingüe)

export const COMPANY = {
  name: 'Solvium Labs',
  subtitle: {
    es: 'Desarrollo de Software Profesional',
    en: 'Professional Software Development',
  },
  tagline: {
    es: 'Soluciones de software de otro nivel',
    en: 'Next-level software solutions',
  },
  description: {
    es: 'SaaS, APIs y sistemas personalizados diseñados para escalar. Tu visión, nuestra ingeniería.',
    en: 'SaaS, APIs, and custom systems built to scale. Your vision, our engineering.',
  },
  email: 'solvium.lab@gmail.com',
  phone: '+52 449 428 0598',
  location: 'México',
  social: {
    github:   'https://github.com/solviumlabs',
    instagram: 'https://www.instagram.com/solvium.labs',
    facebook: 'https://www.facebook.com/profile.php?id=61588709455833&locale=es_LA',
    tiktok:   'https://www.tiktok.com/@solviumlabs',
  },
};

export const STATS = [
  { value: '15+',  label: { es: 'Proyectos',    en: 'Projects' } },
  { value: '100%', label: { es: 'Satisfacción', en: 'Satisfaction' } },
  { value: '24/7', label: { es: 'Soporte',       en: 'Support' } },
];

export const HERO_CTAS = {
  primary:   {
    label: { es: 'Iniciar Proyecto',     en: 'Start a Project' },
    href: '#contacto',
  },
  secondary: {
    label: { es: 'Ver Casos de Éxito',   en: 'View Case Studies' },
    href: '#proyectos',
  },
};
