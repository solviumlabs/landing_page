// src/components/sections/CTA.jsx
import { Rocket, Calendar, ExternalLink } from 'lucide-react';
import { COMPANY } from '@data/meta';
import { EXTERNAL_LINKS } from '@utils/constants';
import { useLang } from '@utils/LangContext';

const CTA_COPY = {
  title:    { es: '¿Listo para impulsar\ntu negocio?',              en: 'Ready to accelerate\nyour business?' },
  subtitle: {
    es: 'Conversemos sobre tu proyecto y descubre cómo podemos transformar tu idea en una solución escalable.',
    en: "Let's talk about your project and discover how we can transform your idea into a scalable solution.",
  },
  primary:  { es: 'Agendar Consulta Gratuita', en: 'Schedule a Free Consultation' },
  secondary:{ es: 'Ver Portafolio',            en: 'View Portfolio' },
  contact:  { es: 'O escríbenos directamente:', en: 'Or write to us directly:' },
};

export default function CTA() {
  const { t } = useLang();
  const titleLines = t(CTA_COPY.title).split('\n');

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">

          {/* Fondo gradiente morado */}
          <div className="absolute inset-0 gradient-brand-wide opacity-95" />

          {/* Patrón de puntos decorativo */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Orbes de luz */}
          <div className="absolute -top-20 -right-20 w-80 h-80
                          bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60
                          bg-white/5 rounded-full blur-[60px] pointer-events-none" />

          {/* Contenido */}
          <div className="relative z-10 text-center px-8 py-20 space-y-6">
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl
                            flex items-center justify-center backdrop-blur-sm
                            shadow-2xl shadow-brand-950/20">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              {t(CTA_COPY.subtitle)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href={EXTERNAL_LINKS.email}
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                           bg-white text-brand-600 font-bold rounded-xl
                           hover:shadow-2xl hover:shadow-brand-950/40 hover:scale-105
                           transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                {t(CTA_COPY.primary)}
              </a>
              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4
                           border-2 border-white/40 text-white font-bold rounded-xl
                           hover:bg-white/10 hover:border-white/70
                           transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                {t(CTA_COPY.secondary)}
              </a>
            </div>

            <p className="text-white/50 text-sm pt-2">
              {t(CTA_COPY.contact)}{' '}
              <a
                href={EXTERNAL_LINKS.email}
                className="text-white/80 hover:text-white underline underline-offset-2"
              >
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
