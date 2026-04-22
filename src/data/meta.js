// src/data/meta.js — Datos globales de la empresa (SSOT + bilingüe)

export const COMPANY = {
  name: 'Solvium',
  subtitle: {
    es: 'Desarrollo de Software Profesional',
    en: 'Professional Software Development',
  },
  tagline: {
    es: 'Transformamos ideas en software que escala',
    en: 'We transform ideas into software that scales',
  },
  description: {
    es: 'Empresa especializada en SaaS, sistemas personalizados y APIs. Construimos soluciones tecnológicas escalables con las mejores prácticas y tecnologías modernas.',
    en: 'Company specialized in SaaS, custom systems and APIs. We build scalable technological solutions using best practices and modern technologies.',
  },
  email: 'jalejandrogtzrdz@gmail.com',
  phone: '+52 449 428 0598',
  location: 'México',
  social: {
    linkedin: 'https://linkedin.com/company/solvium',
    github:   'https://github.com/solvium',
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
    href: '#servicios',
  },
};
