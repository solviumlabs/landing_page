// src/data/navigation.js — Links de navegación bilingüe (SSOT)

export const NAV_LINKS = [
  { label: { es: 'Servicios',   en: 'Services' },     href: '#servicios' },
  { label: { es: 'Proyectos',   en: 'Projects' },     href: '#proyectos' },
  { label: { es: 'Proceso',     en: 'Process' },      href: '#proceso' },
  { label: { es: 'Tecnologías', en: 'Technologies' }, href: '#tecnologias' },
  { label: { es: 'Nosotros',    en: 'About' },        href: '#nosotros' },
  { label: { es: 'FAQ',         en: 'FAQ' },          href: '#faq' },
];

export const NAVBAR_CTA = {
  label: { es: 'Comenzar Proyecto', en: 'Start Project' },
  href: '#contacto',
};

export const FOOTER_COLUMNS = [
  {
    title: { es: 'Servicios',  en: 'Services' },
    items: [
      { label: { es: 'Desarrollo SaaS',        en: 'SaaS Development' },      href: '#servicios' },
      { label: { es: 'Sistemas Personalizados', en: 'Custom Systems' },        href: '#servicios' },
      { label: { es: 'APIs Públicas',           en: 'Public APIs' },           href: '#servicios' },
      { label: { es: 'Componentes & Librerías', en: 'Components & Libraries'}, href: '#servicios' },
    ],
  },
  {
    title: { es: 'Empresa',  en: 'Company' },
    items: [
      { label: { es: 'Sobre Nosotros', en: 'About Us' }, href: '#nosotros' },
      { label: { es: 'Proyectos',      en: 'Projects' }, href: '#proyectos' },
      { label: { es: 'Proceso',        en: 'Process' },  href: '#proceso' },
    ],
  },
  {
    title: { es: 'Soporte', en: 'Support' },
    items: [
      { label: { es: 'Preguntas Frecuentes', en: 'FAQ' }, href: '#faq' },
      { label: { es: 'Contacto',             en: 'Contact' }, href: '#contacto' },
    ],
  },
];

export const FOOTER_COPY = {
  tagline:   { es: 'Transformando ideas en realidad digital', en: 'Transforming ideas into digital reality' },
  copyright: { es: 'Todos los derechos reservados. Hecho en México.', en: 'All rights reserved. Made in Mexico.' },
};
