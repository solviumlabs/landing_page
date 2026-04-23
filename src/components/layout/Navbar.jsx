import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@components/common/Button';
import { NAV_LINKS, NAVBAR_CTA } from '@data/navigation';
import { COMPANY } from '@data/meta';
import { useTheme } from '@utils/ThemeContext';
import { useLang }  from '@utils/LangContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle: toggleTheme, isDark } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    
    // Observer para resaltar sección activa
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar secciones de navegación
    NAV_LINKS.forEach((link) => {
      const id = link.href.replace('#', '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Observar hero específicamente si existe
    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    // Cerrar menú al hacer click fuera
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      observer.disconnect();
    };
  }, [lang, theme]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'nav-bg-scrolled backdrop-blur-xl border-b border-theme shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <motion.div
        key={`${lang}-${theme}`}
        initial={{ filter: "blur(8px)", opacity: 0.9 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">

            {/* ── Logo ── */}
            <a href="#hero" className="flex items-center gap-3 group no-transition">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center
                              shadow-lg shadow-brand-500/30 group-hover:shadow-brand-400/50
                              transition-all duration-300 no-transition">
                <img 
                  src="/logoS.jpeg" 
                  alt="Solvium Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="text-xl font-bold tracking-tight gradient-text">
                {COMPANY.name}
              </span>
            </a>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group
                             ${activeSection === link.href.replace('#', '') 
                               ? 'text-brand-500' 
                               : 'text-nav hover:text-brand-500'}`}
                >
                  {t(link.label)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 gradient-brand
                                   transition-all duration-300 rounded-full
                                   ${activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              ))}
            </div>

            {/* ── Controles de tema, idioma y CTA ── */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Toggle idioma */}
              <button
                onClick={toggleLang}
                aria-label="Toggle language"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold
                           border border-theme hover:border-brand-400
                           text-theme-secondary hover:text-brand-500
                           transition-all duration-200"
              >
                <span className={lang === 'es' ? 'text-brand-500' : 'text-theme-muted'}>ES</span>
                <span className="text-theme-muted">/</span>
                <span className={lang === 'en' ? 'text-brand-500' : 'text-theme-muted'}>EN</span>
              </button>

              {/* Toggle tema */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9 rounded-lg border border-theme
                           flex items-center justify-center
                           text-theme-secondary hover:text-brand-500 hover:border-brand-400
                           transition-all duration-200"
              >
                {isDark
                  ? <Sun  className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />
                }
              </button>

              {/* CTA */}
              <Button href={NAVBAR_CTA.href} size="sm">
                {t(NAVBAR_CTA.label)}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* ── Mobile: tema + idioma + hamburger ── */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="px-2 py-1 rounded text-xs font-bold border border-theme
                           text-theme-secondary hover:text-brand-500 transition-colors"
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-lg border border-theme flex items-center justify-center
                           text-theme-secondary hover:text-brand-500 transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                className="text-theme hover:text-brand-500 transition-colors p-1"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300
            mobile-menu-bg backdrop-blur-xl border-t border-theme
            ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium py-1 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-brand-500'
                    : 'text-nav hover:text-brand-500'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t(link.label)}
              </a>
            ))}
            <div className="pt-2">
              <Button 
                href={NAVBAR_CTA.href} 
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {t(NAVBAR_CTA.label)}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
