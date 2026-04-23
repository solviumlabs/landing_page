// src/data/projects.js

export const PROJECTS_SECTION = {
  badge:     { es: 'Casos de Éxito',                 en: 'Success Stories' },
  title:     { es: 'Nuestros',                       en: 'Our' },
  highlight: { es: 'Proyectos',                      en: 'Projects' },
  subtitle:  {
    es: 'Explora algunas de las soluciones tecnológicas de alto impacto que hemos desarrollado.',
    en: 'Explore some of the high-impact technological solutions we have developed.',
  },
  visitBtn:  { es: 'Visitar Proyecto',               en: 'Visit Project' }
};

export const PROJECTS = [
  {
    id: 'landing-plasmac',
    title: 'Plasmac Landing Page',
    shortDesc: {
      es: 'Diseño web premium e industrial para Plasmac.',
      en: 'Premium and industrial web design for Plasmac.',
    },
    longDesc: {
      es: 'Transformación digital para fabricante industrial. Plataforma diseñada para captar clientes finales, expandir la red de distribuidores y centralizar la gestión de vacantes y proveedores.',
      en: 'Digital transformation for an industrial manufacturer. Platform designed to attract end customers, expand the distribution network, and centralize vacancy and supplier management.',
    },
    image: '/public/projects/plasmac.png',
    stats: [
      { value: 'B2B/B2C', label: { es: 'Estrategia', en: 'Strategy' } },
      { value: 'Portal', label: { es: 'Distribuidores', en: 'Distributors' } },
      { value: 'RRHH', label: { es: 'Talento', en: 'Talent' } }
    ],
    link: 'https://plasmac.com.mx'
  },
  {
    id: 'landing-insiic',
    title: 'INSIIC Landing Page',
    shortDesc: {
      es: 'Landing page para empresa de ingeniería industrial.',
      en: 'Landing page for an industrial engineering company.',
    },
    longDesc: {
      es: 'Plataforma digital especializada en sistemas de aire, contra incendio y soldadura. Diseñada para mostrar evidencia de obra y facilitar el cierre de contratos de alta ingeniería.',
      en: 'Digital platform specialized in air systems, fire protection, and welding. Designed to showcase work evidence and facilitate closing high-engineering contracts.',
    },
    image: '/public/projects/insiic.png',
    stats: [
      { value: '3', label: { es: 'Líneas de Negocio', en: 'Business Lines' } },
      { value: 'SEO', label: { es: 'Posicionado', en: 'Ranked' } },
      { value: '+20', label: { es: 'Casos de Obra', en: 'Work Cases' } }
    ],
    link: 'https://insiic.com'
  },
  {
    id: 'erp-logistica',
    title: 'Logistics Core ERP',
    shortDesc: {
      es: 'Sistema de gestión para flotillas y logística.',
      en: 'Management system for fleets and logistics.',
    },
    longDesc: {
      es: 'Desarrollo a medida de un ERP para el control de flotillas, rastreo en tiempo real, gestión de inventario y facturación automatizada.',
      en: 'Custom ERP development for fleet control, real-time tracking, inventory management, and automated invoicing.',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '24/7', label: { es: 'Monitoreo', en: 'Monitoring' } },
      { value: '10k+', label: { es: 'Envíos al mes', en: 'Shipments/mo' } },
      { value: 'AWS', label: { es: 'Infraestructura', en: 'Infrastructure' } }
    ]
  },
  {
    id: 'saas-analytics',
    title: 'DataSight SaaS',
    shortDesc: {
      es: 'Plataforma SaaS de analítica en tiempo real.',
      en: 'Real-time analytics SaaS platform.',
    },
    longDesc: {
      es: 'Aplicación en la nube para análisis de grandes volúmenes de datos mediante dashboards en tiempo real utilizando WebSockets y bases de datos NoSQL.',
      en: 'Cloud application for large volume data analysis through real-time dashboards using WebSockets and NoSQL databases.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '99.9%', label: { es: 'Uptime', en: 'Uptime' } },
      { value: '5ms', label: { es: 'Latencia', en: 'Latency' } }
    ]
  }
];
