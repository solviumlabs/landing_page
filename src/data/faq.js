// src/data/faq.js — Preguntas frecuentes B2B (SSOT)

export const FAQ_SECTION = {
  badge: { es: 'Dudas Comunes', en: 'Common Doubts' },
  title: { es: 'Preguntas', en: 'Frequently Asked' },
  highlight: { es: 'Frecuentes', en: 'Questions' },
  subtitle: {
    es: 'Resolvemos tus principales dudas operativas y legales antes de iniciar.',
    en: 'We resolve your main operational and legal doubts before starting.'
  }
};

export const FAQS = [
  {
    id: 'nda',
    question: { 
      es: '¿Firman acuerdos de confidencialidad (NDA)?', 
      en: 'Do you sign Non-Disclosure Agreements (NDA)?' 
    },
    answer: { 
      es: 'Sí, absolutamente. Entendemos el valor de la propiedad intelectual y los procesos industriales de nuestros clientes. Firmamos NDAs estrictos antes de conocer cualquier detalle de tu operación.', 
      en: 'Yes, absolutely. We understand the value of intellectual property and our clients\' industrial processes. We sign strict NDAs before learning any details of your operation.' 
    }
  },
  {
    id: 'ip',
    question: { 
      es: '¿De quién es la propiedad del código fuente?', 
      en: 'Who owns the source code?' 
    },
    answer: { 
      es: 'Una vez finalizado y liquidado el proyecto, el 100% de la propiedad intelectual y el código fuente te pertenece. No te atamos a licencias abusivas ni cobros ocultos por tu propia tecnología.', 
      en: 'Once the project is finished and paid for, 100% of the intellectual property and source code belongs to you. We do not tie you to abusive licenses or hidden charges for your own technology.' 
    }
  },
  {
    id: 'support',
    question: { 
      es: '¿Ofrecen mantenimiento post-lanzamiento?', 
      en: 'Do you offer post-launch maintenance?' 
    },
    answer: { 
      es: 'Sí. Ofrecemos pólizas de soporte técnico nivel 2 y 3, monitoreo 24/7 de infraestructura (AWS/GCP), y bolsas de horas para mejoras continuas. No te dejamos solo después del despliegue.', 
      en: 'Yes. We offer level 2 and 3 technical support policies, 24/7 infrastructure monitoring (AWS/GCP), and hour banks for continuous improvements. We don\'t leave you alone after deployment.' 
    }
  },
  {
    id: 'timeline',
    question: { 
      es: '¿Cuánto tiempo toma desarrollar un sistema a medida?', 
      en: 'How long does it take to develop a custom system?' 
    },
    answer: { 
      es: 'Depende de la complejidad. Una plataforma MVP operativa puede estar lista en 8 a 12 semanas. Para ERPs complejos o integraciones IoT, establecemos hitos de entrega continua para que veas valor desde el primer mes.', 
      en: 'It depends on the complexity. An operational MVP platform can be ready in 8 to 12 weeks. For complex ERPs or IoT integrations, we establish continuous delivery milestones so you see value from the first month.' 
    }
  }
];
