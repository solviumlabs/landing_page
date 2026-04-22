// src/App.jsx — Composición de secciones + Providers
import { ThemeProvider } from '@utils/ThemeContext';
import { LangProvider }  from '@utils/LangContext';
import Navbar    from '@components/layout/Navbar';
import Footer    from '@components/layout/Footer';
import Hero      from '@components/sections/Hero';
import Services  from '@components/sections/Services';
import Process   from '@components/sections/Process';
import TechStack from '@components/sections/TechStack';
import CTA       from '@components/sections/CTA';

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="min-h-screen bg-theme text-theme">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Process />
            <TechStack />
            <CTA />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}