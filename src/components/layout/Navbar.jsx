import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@components/common/Button';
import { NAV_LINKS, NAVBAR_CTA } from '@data/navigation';
import { COMPANY } from '@data/meta';
import { useTheme } from '@utils/ThemeContext';
import { useLang }  from '@utils/LangContext';

// Iconos de Banderas en SVG de alta calidad y ligeros
const SpainFlag = ({ className = "w-5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
    <rect width="750" height="500" fill="#c60b1e" />
    <rect y="125" width="750" height="250" fill="#ffc400" />
    <g transform="translate(180, 250) scale(0.65)">
      <path d="M -50 -70 L 50 -70 L 50 10 A 50 50 0 0 1 -50 10 Z" fill="#c60b1e" stroke="#ffc400" strokeWidth="6" />
      <path d="M -40 -60 L 40 -60 L 40 10 A 40 40 0 0 1 -40 10 Z" fill="#ffc400" />
      <path d="M -30 -85 L -35 -70 L 35 -70 L 30 -85 L 12 -75 L 0 -95 L -12 -75 Z" fill="#c60b1e" stroke="#ffc400" strokeWidth="4" />
      <circle cx="0" cy="-95" r="4" fill="#ffc400" />
    </g>
  </svg>
);

const USFlag = ({ className = "w-5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg">
    <rect width="7410" height="3900" fill="#b22234"/>
    <path d="M0,300h7410M0,900h7410M0,1500h7410M0,2100h7410M0,2700h7410M0,3300h7410" stroke="#fff" strokeWidth="300"/>
    <rect width="2964" height="2100" fill="#3c3b6e"/>
    <g fill="#fff">
      <circle cx="296" cy="175" r="60" />
      <circle cx="888" cy="175" r="60" />
      <circle cx="1480" cy="175" r="60" />
      <circle cx="2072" cy="175" r="60" />
      <circle cx="2664" cy="175" r="60" />
      <circle cx="592" cy="350" r="60" />
      <circle cx="1184" cy="350" r="60" />
      <circle cx="1776" cy="350" r="60" />
      <circle cx="2368" cy="350" r="60" />
      <circle cx="296" cy="525" r="60" />
      <circle cx="888" cy="525" r="60" />
      <circle cx="1480" cy="525" r="60" />
      <circle cx="2072" cy="525" r="60" />
      <circle cx="2664" cy="525" r="60" />
      <circle cx="592" cy="700" r="60" />
      <circle cx="1184" cy="700" r="60" />
      <circle cx="1776" cy="700" r="60" />
      <circle cx="2368" cy="700" r="60" />
      <circle cx="296" cy="875" r="60" />
      <circle cx="888" cy="875" r="60" />
      <circle cx="1480" cy="875" r="60" />
      <circle cx="2072" cy="875" r="60" />
      <circle cx="2664" cy="875" r="60" />
      <circle cx="592" cy="1050" r="60" />
      <circle cx="1184" cy="1050" r="60" />
      <circle cx="1776" cy="1050" r="60" />
      <circle cx="2368" cy="1050" r="60" />
      <circle cx="296" cy="1225" r="60" />
      <circle cx="888" cy="1225" r="60" />
      <circle cx="1480" cy="1225" r="60" />
      <circle cx="2072" cy="1225" r="60" />
      <circle cx="2664" cy="1225" r="60" />
      <circle cx="592" cy="1400" r="60" />
      <circle cx="1184" cy="1400" r="60" />
      <circle cx="1776" cy="1400" r="60" />
      <circle cx="2368" cy="1400" r="60" />
      <circle cx="296" cy="1575" r="60" />
      <circle cx="888" cy="1575" r="60" />
      <circle cx="1480" cy="1575" r="60" />
      <circle cx="2072" cy="1575" r="60" />
      <circle cx="2664" cy="1575" r="60" />
      <circle cx="592" cy="1750" r="60" />
      <circle cx="1184" cy="1750" r="60" />
      <circle cx="1776" cy="1750" r="60" />
      <circle cx="2368" cy="1750" r="60" />
      <circle cx="296" cy="1925" r="60" />
      <circle cx="888" cy="1925" r="60" />
      <circle cx="1480" cy="1925" r="60" />
      <circle cx="2072" cy="1925" r="60" />
      <circle cx="2664" cy="1925" r="60" />
    </g>
  </svg>
);

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
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                           border border-theme hover:border-brand-400/50 bg-theme-muted/10
                           transition-all duration-200 cursor-pointer"
              >
                <SpainFlag className={`w-5 h-3.5 rounded-sm shadow-sm transition-all duration-200 ${lang === 'es' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-75 grayscale'}`} />
                <span className="text-[10px] text-theme-muted font-bold">/</span>
                <USFlag className={`w-5 h-3.5 rounded-sm shadow-sm transition-all duration-200 ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-75 grayscale'}`} />
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
                aria-label="Toggle language"
                className="w-8 h-8 rounded-lg border border-theme flex items-center justify-center
                           bg-theme-muted/10 transition-colors"
              >
                {lang === 'es' ? (
                  <SpainFlag className="w-5 h-3.5 rounded-sm shadow-sm" />
                ) : (
                  <USFlag className="w-5 h-3.5 rounded-sm shadow-sm" />
                )}
              </button>
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
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
