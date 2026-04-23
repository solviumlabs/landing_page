// src/data/techStack.js — Stack tecnológico bilingüe (SSOT)

export const TECH_STACK = [
  // Frontend
  { name: 'React',          category: 'frontend', slug: 'react' },
  { name: 'Next.js',        category: 'frontend', slug: 'nextdotjs' },
  { name: 'Angular',        category: 'frontend', slug: 'angular' },
  { name: 'Vue',            category: 'frontend', slug: 'vuedotjs' },
  { name: 'Astro',          category: 'frontend', slug: 'astro' },
  { name: 'TypeScript',     category: 'frontend', slug: 'typescript' },
  { name: 'Tailwind CSS',   category: 'frontend', slug: 'tailwindcss' },

  // Backend
  { name: 'Node.js',        category: 'backend', slug: 'nodedotjs' },
  { name: 'NestJS',         category: 'backend', slug: 'nestjs' },
  { name: 'Spring Boot',    category: 'backend', slug: 'springboot' },
  { name: 'FastAPI',        category: 'backend', slug: 'fastapi' },
  { name: 'Flask',          category: 'backend', slug: 'flask' },
  { name: 'Express',        category: 'backend', slug: 'express' },
  { name: 'Python',         category: 'backend', slug: 'python' },

  // Data
  { name: 'PostgreSQL',     category: 'data', slug: 'postgresql' },
  { name: 'MongoDB',        category: 'data', slug: 'mongodb' },
  { name: 'Redis',          category: 'data', slug: 'redis' },
  { name: 'InfluxDB',       category: 'data', slug: 'influxdb' },
  { name: 'MySQL',          category: 'data', slug: 'mysql' },
  { name: 'Elasticsearch',  category: 'data', slug: 'elasticsearch' },

  // IoT & Hardware
  { name: 'ESP32 / C++',    category: 'iot', slug: 'espressif' },
  { name: 'MQTT',           category: 'iot', slug: 'mqtt' },
  { name: 'WebSockets',     category: 'iot', slug: 'socketdotio' },
  { name: 'Arduino',        category: 'iot', slug: 'arduino' },
  { name: 'Raspberry Pi',   category: 'iot', slug: 'raspberrypi' },
  { name: 'Bluetooth LE',   category: 'iot', slug: 'bluetooth' },

  // Enterprise & Integrations
  { name: 'Odoo',           category: 'enterprise', slug: 'odoo' },
  { name: 'SAP',            category: 'enterprise', slug: 'sap' },
  { name: 'GraphQL',        category: 'enterprise', slug: 'graphql' },
  { name: 'RabbitMQ',       category: 'enterprise', slug: 'rabbitmq' },
  { name: 'Apache Kafka',   category: 'enterprise', slug: 'apachekafka' },
  { name: 'Salesforce',     category: 'enterprise', slug: 'salesforce' },

  // Cloud & DevOps
  { name: 'AWS',            category: 'cloud', slug: 'amazonaws' },
  { name: 'Docker',         category: 'cloud', slug: 'docker' },
  { name: 'Kubernetes',     category: 'cloud', slug: 'kubernetes' },
  { name: 'Terraform',      category: 'cloud', slug: 'terraform' },
  { name: 'Vercel',         category: 'cloud', slug: 'vercel' },
  { name: 'GitHub Actions', category: 'cloud', slug: 'githubactions' },
];

export const TECH_SECTION = {
  badge:     { es: 'Nuestro arsenal',    en: 'Our arsenal' },
  title:     { es: 'Stack',              en: 'Tech' },
  highlight: { es: 'Tecnológico',        en: 'Stack' },
  subtitle:  {
    es: 'Ingeniería de software robusta diseñada para resolver desafíos industriales y empresariales complejos.',
    en: 'Robust software engineering designed to solve complex industrial and business challenges.',
  },
};

export const TECH_CATEGORIES = {
  frontend:   { es: 'Frontend',        en: 'Frontend' },
  backend:    { es: 'Backend',         en: 'Backend' },
  iot:        { es: 'IoT & Hardware',  en: 'IoT & Hardware' },
  enterprise: { es: 'Enterprise',      en: 'Enterprise' },
  data:       { es: 'Datos',           en: 'Data' },
  cloud:      { es: 'Cloud & DevOps',  en: 'Cloud & DevOps' },
};
