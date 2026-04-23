// src/components/sections/Hero.jsx
import { ChevronRight, Zap } from 'lucide-react';
import Button from '@components/common/Button';
import Badge  from '@components/common/Badge';
import { COMPANY, STATS, HERO_CTAS } from '@data/meta';
import { useLang } from '@utils/LangContext';
import AnimatedLogo from '@components/common/AnimatedLogo';

import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLang();

  /* Partir el tagline en torno a "software" / "software" */
  const taglineRaw = t(COMPANY.tagline);
  const keyWord    = 'software';
  const parts      = taglineRaw.split(keyWord);

  // Variantes para animaciones premium
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[650px] flex items-center pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* ── Fondos decorativos ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px]
                        bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px]
                        bg-brand-300/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-100" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-10">

        <h1 className="mt-8 mb-10 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-theme">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {parts[0].trim()}
          </motion.span>
          <br />
          <div className="relative inline-block pl-[1.4em] md:pl-[1.7em] lg:pl-[2.2em]">
            {/* Logo absoluto, comienza primero (delay 0.2) */}
            <div className="absolute left-0 top-1/2 -translate-x-[15%] -translate-y-[52%] w-[1.8em] h-[1.8em] md:w-[2.2em] md:h-[2.2em] lg:w-[2.8em] lg:h-[2.8em] pointer-events-none">
              <AnimatedLogo delay={0.2} />
            </div>
            <motion.span 
              className="gradient-text inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              oftware
            </motion.span>
          </div>
          <motion.span
            className="inline-block ml-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {parts[1]}
          </motion.span>
        </h1>

        <motion.p 
          className="text-lg text-theme-secondary leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          {t(COMPANY.description)}
        </motion.p>
 
        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button href={HERO_CTAS.primary.href} size="md">
            {t(HERO_CTAS.primary.label)}
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button href={HERO_CTAS.secondary.href} variant="secondary" size="md">
            {t(HERO_CTAS.secondary.label)}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
