// src/data/services.js — Servicios bilingüe (SSOT)

export const SERVICES = [
  {
    id: 'saas',
    icon: 'Cloud',
    title: { es: 'SaaS & Plataformas Digitales', en: 'SaaS & Digital Platforms' },
    description: {
      es: 'Plataformas preparadas para operar múltiples clientes, usuarios concurrentes y crecimiento continuo bajo arquitecturas cloud-native (AWS).',
      en: 'Platforms prepared to operate multiple clients, concurrent users, and continuous growth under cloud-native architectures (AWS).',
    },
    features: [
      { es: 'Arquitecturas multi-tenant escalables', en: 'Scalable multi-tenant architectures' },
      { es: 'Infraestructura Cloud-native (AWS)',   en: 'Cloud-native infrastructure (AWS)' },
      { es: 'Sistemas de alta concurrencia',         en: 'High-concurrency systems' },
      { es: 'Dashboards y analítica operativa',      en: 'Dashboards and operational analytics' },
    ],
  },
  {
    id: 'erp',
    icon: 'Layout',
    title: { es: 'Sistemas Empresariales & ERP', en: 'Business Systems & ERP' },
    description: {
      es: 'Digitalizamos operaciones críticas (inventario, logística, finanzas) mediante ERP/CRM personalizados que optimizan procesos administrativos.',
      en: 'We digitize critical operations (inventory, logistics, finance) through custom ERP/CRM systems that optimize administrative processes.',
    },
    features: [
      { es: 'Desarrollo de ERP/CRM a medida',       en: 'Custom ERP/CRM development' },
      { es: 'Sistemas financieros y control interno', en: 'Financial and internal control systems' },
      { es: 'Digitalización de logística avanzada',   en: 'Advanced logistics digitalization' },
      { es: 'Optimización de procesos operativos',    en: 'Operational process optimization' },
    ],
  },
  {
    id: 'integrations',
    icon: 'Zap',
    title: { es: 'Integraciones & Automatización', en: 'Integrations & Automation' },
    description: {
      es: 'Conectamos sucursales y servicios externos (Odoo, SAP) para eliminar procesos manuales y garantizar la sincronización total de datos.',
      en: 'We connect branches and external services (Odoo, SAP) to eliminate manual processes and ensure total data synchronization.',
    },
    features: [
      { es: 'Integración con ERPs externos',         en: 'Integration with external ERPs' },
      { es: 'Automatización de flujos de trabajo',    en: 'Workflow automation' },
      { es: 'Sincronización de datos multicanal',     en: 'Multi-channel data synchronization' },
      { es: 'Eliminación de tareas manuales',         en: 'Manual task elimination' },
    ],
  },
  {
    id: 'apis',
    icon: 'Code2',
    title: { es: 'APIs & Backend Engineering', en: 'APIs & Backend Engineering' },
    description: {
      es: 'Diseño de APIs REST/GraphQL escalables con autenticación segura (OAuth) y documentación profesional de grado empresarial.',
      en: 'Design of scalable REST/GraphQL APIs with secure authentication (OAuth) and professional enterprise-grade documentation.',
    },
    features: [
      { es: 'Backend escalable REST / GraphQL',      en: 'Scalable REST / GraphQL backend' },
      { es: 'Autenticación segura (JWT, OAuth)',     en: 'Secure authentication (JWT, OAuth)' },
      { es: 'Versionado y gobierno de APIs',         en: 'API versioning and governance' },
      { es: 'Documentación OpenAPI profesional',     en: 'Professional OpenAPI documentation' },
    ],
  },
  {
    id: 'cloud',
    icon: 'Layers',
    title: { es: 'Cloud, DevOps & Arquitectura', en: 'Cloud, DevOps & Architecture' },
    description: {
      es: 'Implementación de arquitecturas de microservicios contenerizadas y automatización de despliegue en AWS con alta disponibilidad.',
      en: 'Implementation of containerized microservices architectures and AWS deployment automation with high availability.',
    },
    features: [
      { es: 'Despliegue en AWS (ECS, Lambda, RDS)',  en: 'AWS deployment (ECS, Lambda, RDS)' },
      { es: 'Contenerización con Docker',             en: 'Containerization with Docker' },
      { es: 'Arquitecturas de microservicios',       en: 'Microservices architectures' },
      { es: 'Observabilidad y logging centralizado', en: 'Centralized observability and logging' },
    ],
  },
  {
    id: 'iot',
    icon: 'Cpu',
    title: { es: 'Soluciones IoT & Tiempo Real', en: 'IoT & Real-Time Solutions' },
    description: {
      es: 'Integración profunda con dispositivos y sensores para monitoreo en tiempo real, telemetría y alertas mediante WebSockets.',
      en: 'Deep integration with devices and sensors for real-time monitoring, telemetry, and alerts via WebSockets.',
    },
    features: [
      { es: 'Integración con hardware (ESP32)',      en: 'Hardware integration (ESP32)' },
      { es: 'Sistemas tiempo real (WebSockets)',     en: 'Real-time systems (WebSockets)' },
      { es: 'Monitoreo y alertas automatizadas',     en: 'Automated monitoring and alerts' },
      { es: 'Dashboards de telemetría avanzada',      en: 'Advanced telemetry dashboards' },
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
