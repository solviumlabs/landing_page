// src/components/sections/Projects.jsx

import { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  Layers,
  RotateCw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import Button from '@components/common/Button';

import { PROJECTS, PROJECTS_SECTION } from '@data/projects';
import { useLang } from '@utils/LangContext';

export default function Projects() {
  const { t, lang } = useLang();

  const [flippedCard, setFlippedCard] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();

    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 768;

    const cardDistance = isMobile
      ? window.innerWidth * 0.85 + 24
      : 424;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardDistance : cardDistance,
      behavior: 'smooth',
    });
  };

  const handleFlip = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="proyectos" className="bg-theme-muted/30">
      <div className="text-center mb-12 lg:mb-16 space-y-4 reveal-up">
        <Badge icon={Layers}>
          {t(PROJECTS_SECTION.badge)}
        </Badge>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(PROJECTS_SECTION.title)}{' '}
          <span className="gradient-text">
            {t(PROJECTS_SECTION.highlight)}
          </span>
        </h2>

        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(PROJECTS_SECTION.subtitle)}
        </p>
      </div>

      <div className="relative w-full overflow-hidden group/carousel">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-theme to-transparent z-10 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-theme to-transparent z-10 pointer-events-none" />

        {canScrollLeft && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              scroll('left');
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-theme border border-theme shadow-xl flex items-center justify-center text-theme-secondary hover:text-brand-500 hover:border-brand-500 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              scroll('right');
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-theme border border-theme shadow-xl flex items-center justify-center text-theme-secondary hover:text-brand-500 hover:border-brand-500 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-8 pt-4 no-scrollbar reveal-stagger"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFlipped={flippedCard === project.id}
              onFlip={handleFlip}
              lang={lang}
              t={t}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({
  project,
  isFlipped,
  onFlip,
  lang,
  t,
}) {
  const [imgIdx, setImgIdx] = useState(0);

  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [hasMultipleImages, images.length]);

  return (
    <div
      className="reveal-item relative flex-none w-[85vw] md:w-[400px] h-[420px] snap-center perspective-1000 group cursor-pointer"
      onClick={() => onFlip(project.id)}
    >
      <div
        className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl bg-theme border border-theme border-b-2 border-b-brand-500/40">
          <div className="absolute inset-0 bg-black">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                  idx === imgIdx
                    ? 'opacity-60 group-hover:opacity-40'
                    : 'opacity-0 pointer-events-none'
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {hasMultipleImages && (
              <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-1.5 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgIdx(idx);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === imgIdx
                        ? 'bg-brand-500 w-3'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
              {t(project.shortDesc)}
            </p>

            <div className="flex items-center gap-2 text-brand-400 font-medium text-sm">
              <RotateCw className="w-4 h-4" />
              <span>
                {lang === 'es'
                  ? 'Ver detalles'
                  : 'View details'}
              </span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 md:p-8 shadow-xl glass-card border border-theme border-b-2 border-b-brand-500/40 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/20 blur-[50px] rounded-full" />

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text inline-block">
              {project.title}
            </h3>

            <p className="text-theme-secondary text-xs md:text-sm leading-relaxed mb-6">
              {t(project.longDesc)}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-theme-muted/50 p-3 rounded-lg border border-theme"
                >
                  <div className="text-xl font-bold text-brand-500">
                    {stat.value}
                  </div>

                  <div className="text-xs text-theme-secondary uppercase tracking-wider font-semibold">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.link && project.link !== '#' && (
            <Button
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {t(PROJECTS_SECTION.visitBtn)}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}