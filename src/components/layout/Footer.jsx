import { Mail, Phone, Github, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { COMPANY } from '@data/meta';
import { FOOTER_COLUMNS, FOOTER_COPY } from '@data/navigation';
import { EXTERNAL_LINKS } from '@utils/constants';
import { useLang } from '@utils/LangContext';

const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.74-3.94-1.69-.15-.12-.29-.25-.43-.38v7.35c.03 2-.65 4.07-2.12 5.42-1.48 1.35-3.56 1.95-5.55 1.72-2.03-.24-3.92-1.45-4.99-3.2-1.07-1.74-1.28-3.96-.61-5.9 1.15-2.73 4.41-4.14 7.14-3.16.14.05.27.11.4.18v-4.12c-1.3-.39-2.72-.44-4-.14-1.28.3-2.48.97-3.41 1.91-1.01 1.02-1.69 2.37-1.93 3.79-.24 1.42-.05 2.91.56 4.2 1.25 2.65 4.15 4.3 7.09 4.06 2.94-.24 5.39-2.58 5.61-5.52.01-.12.01-.24.01-.36v-14.54z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { Icon: Instagram, href: EXTERNAL_LINKS.instagram, label: 'Instagram' },
  { Icon: Facebook,  href: EXTERNAL_LINKS.facebook,  label: 'Facebook' },
  { Icon: Github,    href: EXTERNAL_LINKS.github,    label: 'GitHub' },
  { Icon: TikTokIcon, href: EXTERNAL_LINKS.tiktok,   label: 'TikTok' },
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
