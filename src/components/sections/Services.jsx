// src/components/sections/Services.jsx
import { useState } from 'react';
import { Cloud, Cpu, Database, Code2, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import { SERVICES, SERVICES_SECTION } from '@data/services';
import { useLang } from '@utils/LangContext';

const ICON_MAP = { Cloud, Cpu, Database, Code2 };

export default function Services() {
  const [active, setActive] = useState(0);
  const { t } = useLang();

  return (
    <SectionWrapper id="servicios">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <Badge icon={Layers}>{t(SERVICES_SECTION.badge)}</Badge>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(SERVICES_SECTION.title)}{' '}
          <span className="gradient-text">{t(SERVICES_SECTION.highlight)}</span>
        </h2>
        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(SERVICES_SECTION.subtitle)}
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, idx) => {
          const Icon = ICON_MAP[service.icon] ?? Code2;
          const isActive = active === idx;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActive(idx)}
              className={`group relative rounded-2xl p-8 transition-all duration-300 cursor-default glass-card
                ${isActive ? 'glass-card-active scale-[1.02]' : ''}`}
            >
              {/* Ícono */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                  transition-all duration-300
                  ${isActive
                    ? 'gradient-brand shadow-xl shadow-brand-500/35'
                    : 'bg-brand-500/10 group-hover:bg-brand-500/15'
                  }`}
              >
                <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-brand-400'}`} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-theme">{t(service.title)}</h3>
              <p className="text-theme-secondary text-sm leading-relaxed mb-6">
                {t(service.description)}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    <span className="text-theme-secondary">{t(feat)}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div
                className={`mt-6 flex items-center gap-1 text-sm font-semibold
                  transition-all duration-200
                  ${isActive ? 'text-brand-400' : 'text-theme-muted group-hover:text-brand-400'}`}
              >
                {t(SERVICES_SECTION.more)}
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'translate-x-1' : ''}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
