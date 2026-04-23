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

import { motion, AnimatePresence } from 'framer-motion';

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