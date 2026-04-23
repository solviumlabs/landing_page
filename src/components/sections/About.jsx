import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import { ABOUT_SECTION } from '@data/about';
import { useLang } from '@utils/LangContext';

export default function About() {
  const { t } = useLang();

  return (
    <SectionWrapper id="nosotros" className="bg-section-alt overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Col: Text */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <Badge icon={Users}>{t(ABOUT_SECTION.badge)}</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-theme leading-tight">
              {t(ABOUT_SECTION.title)} <br/>
              <span className="gradient-text">{t(ABOUT_SECTION.highlight)}</span>
            </h2>
          </div>
          
          <p className="text-lg text-theme-secondary leading-relaxed">
            {t(ABOUT_SECTION.description)}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-theme">
            {ABOUT_SECTION.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-black text-brand-500 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Visual/Image Placeholder */}
        <div className="relative z-10 lg:h-[500px] flex items-center justify-center">
          {/* Main glass card acting as an image placeholder or abstract visual */}
          <div className="relative w-full max-w-md aspect-square rounded-3xl glass-card overflow-hidden border-2 border-brand-500/20 shadow-2xl flex items-center justify-center bg-gradient-to-br from-brand-500/10 to-transparent">
            {/* Inner decorative elements */}
            <div className="absolute inset-0 grid-bg opacity-20" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-brand-500 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-500/40 animate-float">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-theme">Engineering <br/> Excellence</h3>
            </div>
            
            {/* Orbiting element */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-accent-300 rounded-full blur-xl animate-ping opacity-50" />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
