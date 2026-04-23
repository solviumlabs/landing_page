// src/components/sections/TechStack.jsx
import { Cpu } from 'lucide-react';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import { TECH_STACK, TECH_SECTION, TECH_CATEGORIES } from '@data/techStack';
import { useLang } from '@utils/LangContext';

/* Estilo de pill por categoría */
const CATEGORY_STYLE = {
  frontend:   'bg-brand-500/8 border-brand-400/20 hover:border-brand-400/50',
  backend:    'bg-accent-400/8 border-brand-300/20 hover:border-brand-300/50',
  iot:        'bg-orange-500/8 border-orange-400/20 hover:border-orange-400/50',
  enterprise: 'bg-blue-500/8 border-blue-400/20 hover:border-blue-400/50',
  data:       'bg-brand-300/8 border-accent-300/20 hover:border-accent-300/50',
  cloud:      'bg-brand-600/8 border-brand-500/20 hover:border-brand-500/50',
};

export default function TechStack() {
  const { t } = useLang();
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <SectionWrapper id="tecnologias">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <Badge icon={Cpu}>{t(TECH_SECTION.badge)}</Badge>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(TECH_SECTION.title)}{' '}
          <span className="gradient-text">{t(TECH_SECTION.highlight)}</span>
        </h2>
        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(TECH_SECTION.subtitle)}
        </p>
      </div>

      {/* Marquee infinito */}
      <div className="relative overflow-hidden mb-12">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10
                        pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
        />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10
                        pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
        />

        <div className="flex gap-4 animate-marquee whitespace-nowrap py-2">
          {doubled.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border
                ${CATEGORY_STYLE[tech.category] ?? CATEGORY_STYLE.backend}
                hover:scale-105 hover:shadow-md hover:shadow-brand-500/10
                transition-all duration-200 cursor-default flex-shrink-0 glass-card`}
            >
              <img 
                src={`https://cdn.simpleicons.org/${tech.slug}/6366f1`} 
                alt="" 
                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100"
              />
              <span className="font-semibold text-sm text-theme">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid por categorías */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {Object.keys(TECH_CATEGORIES).map((cat) => (
          <div key={cat} className="glass-card rounded-2xl p-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
              {t(TECH_CATEGORIES[cat])}
            </h4>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.filter((tech) => tech.category === cat).map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500/8 border border-brand-500/15
                             text-xs text-theme-secondary hover:text-brand-500 hover:bg-brand-500/15
                             transition-all duration-200 cursor-default group/item"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}/6366f1`} 
                    alt="" 
                    className="w-3.5 h-3.5 grayscale group-hover/item:grayscale-0 transition-all opacity-70 group-hover/item:opacity-100"
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
