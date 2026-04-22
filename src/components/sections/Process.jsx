// src/components/sections/Process.jsx
import { Search, Layout, Code2, Rocket, ArrowRight, GitBranch } from 'lucide-react';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import { PROCESS_STEPS, PROCESS_SECTION } from '@data/process';
import { useLang } from '@utils/LangContext';

const ICON_MAP = { Search, Layout, Code2, Rocket };

export default function Process() {
  const { t } = useLang();

  return (
    <SectionWrapper id="proceso" className="bg-section-alt">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <Badge icon={GitBranch}>{t(PROCESS_SECTION.badge)}</Badge>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(PROCESS_SECTION.title)}{' '}
          <span className="gradient-text">{t(PROCESS_SECTION.highlight)}</span>
        </h2>
        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(PROCESS_SECTION.subtitle)}
        </p>
      </div>

      {/* Pasos */}
      <div className="grid md:grid-cols-4 gap-6 relative">

        {/* Línea conectora de fondo (desktop) */}
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px
                        bg-gradient-to-r from-transparent via-brand-500/30 to-transparent z-0" />

        {PROCESS_STEPS.map((step, idx) => {
          const Icon = ICON_MAP[step.icon] ?? Code2;
          const isLast = idx === PROCESS_STEPS.length - 1;

          return (
            <div key={step.step} className="relative group">
              <div className="glass-card rounded-2xl p-7 h-full hover:glass-card-active
                              transition-all duration-300 relative z-10">

                {/* Número decorativo */}
                <div className="text-6xl font-black text-brand-500/10
                                group-hover:text-brand-500/20 transition-all duration-300 leading-none mb-4">
                  {step.step}
                </div>

                {/* Ícono */}
                <div className="w-11 h-11 gradient-brand rounded-xl
                                flex items-center justify-center mb-4
                                shadow-lg shadow-brand-500/25
                                group-hover:shadow-brand-400/40 transition-shadow duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-theme">{t(step.title)}</h3>
                <p className="text-sm text-theme-secondary leading-relaxed">{t(step.description)}</p>
              </div>

              {/* Flecha conectora */}
              {!isLast && (
                <div className="hidden md:flex absolute top-10 -right-3 z-20
                                items-center justify-center w-6 h-6
                                rounded-full bg-theme-surface border border-theme-brand">
                  <ArrowRight className="w-3 h-3 text-brand-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
