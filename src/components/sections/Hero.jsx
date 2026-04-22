// src/components/sections/Hero.jsx
import { ChevronRight, Zap } from 'lucide-react';
import Button from '@components/common/Button';
import Badge  from '@components/common/Badge';
import { COMPANY, STATS, HERO_CTAS } from '@data/meta';
import { useLang } from '@utils/LangContext';

/* Tarjetas flotantes decorativas — no traducibles, son iconográficas */
const FLOAT_CARDS = [
  { label: { es: 'SaaS en producción',     en: 'SaaS in production'   }, sub: { es: 'Arquitectura multi-tenant', en: 'Multi-tenant architecture' }, color: 'from-brand-500 to-brand-400' },
  { label: { es: 'API documentada',        en: 'Documented API'       }, sub: { es: 'OpenAPI + rate limiting',   en: 'OpenAPI + rate limiting'   }, color: 'from-accent-400 to-brand-300' },
  { label: { es: 'Sistema personalizado',  en: 'Custom system'        }, sub: { es: 'ERP / CRM a medida',        en: 'Custom ERP / CRM'          }, color: 'from-brand-400 to-accent-400' },
];

export default function Hero() {
  const { t } = useLang();

  /* Partir el tagline en torno a "software" / "software" */
  const taglineRaw = t(COMPANY.tagline);
  const keyWord    = 'software';
  const parts      = taglineRaw.split(keyWord);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
    >
      {/* ── Fondos decorativos ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px]
                        bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px]
                        bg-brand-300/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-100" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Columna izquierda: Copy ── */}
          <div className="space-y-8">
            <Badge icon={Zap}>{t(COMPANY.subtitle)}</Badge>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-theme">
              {parts[0]}
              <span className="gradient-text">{keyWord}</span>
              {parts[1]}
            </h1>

            <p className="text-lg text-theme-secondary leading-relaxed max-w-lg">
              {t(COMPANY.description)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href={HERO_CTAS.primary.href} size="lg">
                {t(HERO_CTAS.primary.label)}
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button href={HERO_CTAS.secondary.href} variant="secondary" size="lg">
                {t(HERO_CTAS.secondary.label)}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4 border-t border-theme">
              {STATS.map((stat) => (
                <div key={stat.value}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-theme-muted mt-0.5">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha: Tarjetas flotantes ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-brand-500/15 rounded-full blur-[80px] animate-pulse" />
            </div>

            <div className="relative w-full max-w-md space-y-4">
              {FLOAT_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4
                             hover:border-theme-active transition-all duration-300 animate-float"
                  style={{ animationDelay: `${idx * 0.8}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.color}
                                   rounded-xl flex items-center justify-center
                                   shadow-lg shadow-brand-500/25 flex-shrink-0`}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-theme text-sm">{t(card.label)}</div>
                    <div className="text-xs text-theme-muted mt-0.5">{t(card.sub)}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-theme-muted">Live</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
