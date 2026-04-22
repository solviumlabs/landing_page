// src/components/layout/Footer.jsx
import { Mail, Phone, Linkedin, Github, ChevronRight } from 'lucide-react';
import { COMPANY } from '@data/meta';
import { FOOTER_COLUMNS, FOOTER_COPY } from '@data/navigation';
import { EXTERNAL_LINKS } from '@utils/constants';
import { useLang } from '@utils/LangContext';

const SOCIAL_LINKS = [
  { Icon: Linkedin, href: EXTERNAL_LINKS.linkedin, label: 'LinkedIn' },
  { Icon: Github,   href: EXTERNAL_LINKS.github,   label: 'GitHub' },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-theme bg-theme-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid principal */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Columna marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-brand-500/30">
                <img 
                  src="/logoS.jpeg" 
                  alt="Solvium Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="text-lg font-bold gradient-text">{COMPANY.name}</span>
            </div>
            <p className="text-sm text-theme-secondary leading-relaxed mb-6">
              {t(FOOTER_COPY.tagline)}
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center
                             text-theme-muted hover:text-brand-500 hover:border-brand-400
                             transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de links */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title.es}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
                {t(col.title)}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label.es}>
                    <a
                      href={item.href}
                      className="text-sm text-theme-secondary hover:text-brand-500 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-brand-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contacto rápido */}
        <div className="flex flex-wrap gap-6 py-8 border-t border-theme border-b mb-8">
          <a
            href={EXTERNAL_LINKS.email}
            className="flex items-center gap-2 text-sm text-theme-secondary hover:text-brand-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {COMPANY.email}
          </a>
          <a
            href={EXTERNAL_LINKS.phone}
            className="flex items-center gap-2 text-sm text-theme-secondary hover:text-brand-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-theme-muted">
          © {year} {COMPANY.name}. {t(FOOTER_COPY.copyright)}
        </div>
      </div>
    </footer>
  );
}
