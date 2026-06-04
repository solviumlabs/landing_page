import React from 'react';
import { CLIENTS, CLIENTS_SECTION } from '@data/clients';
import { useLang } from '@utils/LangContext';

export default function Clients() {
  const { t } = useLang();
  // Duplicamos para el efecto de marquee infinito
  const doubledClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-theme border-y border-theme relative overflow-hidden reveal-fade">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold tracking-widest text-theme-muted uppercase">
          {t(CLIENTS_SECTION.label)}
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Fades laterales para disimular la entrada/salida */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }} />

        <div className="flex animate-marquee whitespace-nowrap items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {doubledClients.map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`} 
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-xl md:text-2xl font-black tracking-tighter text-theme-muted">
                  {client.name.toUpperCase()}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
