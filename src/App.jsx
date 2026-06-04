// src/App.jsx — Composición de secciones + Providers
import { ThemeProvider, useTheme } from '@utils/ThemeContext';
import { LangProvider, useLang }  from '@utils/LangContext';
import Navbar    from '@components/layout/Navbar';
import Footer    from '@components/layout/Footer';
import Hero      from '@components/sections/Hero';
import Clients   from '@components/sections/Clients';
import Services  from '@components/sections/Services';
import Projects  from '@components/sections/Projects';
import Process   from '@components/sections/Process';
import TechStack from '@components/sections/TechStack';
import About     from '@components/sections/About';
import FAQ       from '@components/sections/FAQ';
import CTA       from '@components/sections/CTA';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { lang } = useLang();
  const { theme } = useTheme();

  useEffect(() => {
    // 1. Inicialización de Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sincronizar ScrollTrigger con Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Conectar GSAP Ticker con el frame loop de Lenis
    const updatePhysics = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0);

    // Interceptar clicks globales en enlaces de tipo ancla (#)
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -80, // Compensar la altura del Navbar fijo
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // 2. Animaciones GSAP ScrollTrigger Premium
    
    // Revelado hacia arriba y fade (para títulos o secciones completas)
    const revealUp = gsap.utils.toArray('.reveal-up');
    revealUp.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Fade suave (para imágenes, fondos o elementos decorativos)
    const revealFade = gsap.utils.toArray('.reveal-fade');
    revealFade.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Revelado escalonado (para grids de tarjetas, logos de clientes, etc.)
    const revealStagger = gsap.utils.toArray('.reveal-stagger');
    revealStagger.forEach((container) => {
      const items = container.querySelectorAll('.reveal-item');
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // Limpieza al desmontar o cambiar de idioma
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updatePhysics);
      document.removeEventListener('click', handleAnchorClick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [lang, theme]); // Se reinicia si cambia idioma o tema para recalcular dimensiones

  return (
    <div className="min-h-screen bg-theme text-theme">
      {/* Navbar fijo por fuera para evitar problemas de contexto de apilamiento */}
      <Navbar />
      
      {/* 
        Usamos un motion.div que reacciona a los cambios sin desmontar todo el árbol.
        Esto soluciona el problema del Navbar "no fijo" y hace que el cambio de texto
        sea parte de la animación de desenfoque.
      */}
      <motion.div
        key={`${lang}-${theme}`}
        initial={{ filter: "blur(12px)", opacity: 0.8 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <main>
          <Hero />
          <Clients />
          <Services />
          <Projects />
          <Process />
          <TechStack />
          <About />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}