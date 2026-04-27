// src/components/sections/Projects.jsx
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Layers, ArrowRight, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import Button from '@components/common/Button';
import { PROJECTS, PROJECTS_SECTION } from '@data/projects';
import { useLang } from '@utils/LangContext';

export default function Projects() {
  const { t, lang } = useLang();
  const [flippedCard, setFlippedCard] = useState(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculamos la distancia exacta entre el centro de cada tarjeta (ancho + gap de 24px)
      const isMobile = window.innerWidth < 768;
      const cardDistance = isMobile ? (window.innerWidth * 0.85) + 24 : 424; // 400px + 24px gap
      
      const scrollAmount = direction === 'left' ? -cardDistance : cardDistance;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleFlip = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="proyectos" className="bg-theme-muted/30">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16 space-y-4">
        <Badge icon={Layers}>{t(PROJECTS_SECTION.badge)}</Badge>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(PROJECTS_SECTION.title)}{' '}
          <span className="gradient-text">{t(PROJECTS_SECTION.highlight)}</span>
        </h2>
        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(PROJECTS_SECTION.subtitle)}
        </p>
      </div>

      {/* Horizontal Scroll Container (Carousel) */}
      <div className="relative w-full overflow-hidden group/carousel">
        {/* Gradients to indicate scrollable area on desktop */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-theme to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-theme to-transparent z-10 pointer-events-none" />

        {/* Carousel Arrows */}
        {canScrollLeft && (
          <button 
            onClick={(e) => { e.stopPropagation(); scroll('left'); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-theme border border-theme shadow-xl flex items-center justify-center text-theme-secondary hover:text-brand-500 hover:border-brand-500 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        {canScrollRight && (
          <button 
            onClick={(e) => { e.stopPropagation(); scroll('right'); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-theme border border-theme shadow-xl flex items-center justify-center text-theme-secondary hover:text-brand-500 hover:border-brand-500 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-8 pt-4 no-scrollbar"
        >
          {PROJECTS.map((project) => {
            const isFlipped = flippedCard === project.id;
            
            return (
              <div 
                key={project.id}
                className="relative flex-none w-[85vw] md:w-[400px] h-[420px] snap-center perspective-1000 group cursor-pointer"
                onClick={() => handleFlip(project.id)}
              >
                {/* 3D Wrapper */}
                <div 
                  className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl bg-theme border border-theme border-b-2 border-b-brand-500/40">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                        {t(project.shortDesc)}
                      </p>
                      
                      {/* Flip indicator */}
                      <div className="flex items-center gap-2 text-brand-400 font-medium text-sm group-hover:text-brand-300 transition-colors">
                        <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                        <span>{lang === 'es' ? 'Ver detalles' : 'View details'}</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 md:p-8 shadow-xl glass-card border border-theme border-b-2 border-b-brand-500/40 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/20 blur-[50px] rounded-full pointer-events-none" />

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-theme gradient-text inline-block">{project.title}</h3>
                      <p className="text-theme-secondary text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                        {t(project.longDesc)}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="bg-theme-muted/50 p-2 md:p-3 rounded-lg border border-theme">
                            <div className="text-lg md:text-xl font-bold text-brand-500">{stat.value}</div>
                            <div className="text-[10px] md:text-xs text-theme-secondary uppercase tracking-wider font-semibold">
                              {t(stat.label)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visit Button (if link exists and isn't just '#') */}
                    {project.link && project.link !== '#' && (
                      <Button 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-auto z-10"
                        onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking button
                      >
                        {t(PROJECTS_SECTION.visitBtn)}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
