import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@components/common/SectionWrapper';
import Badge from '@components/common/Badge';
import { FAQ_SECTION, FAQS } from '@data/faq';
import { useLang } from '@utils/LangContext';

export default function FAQ() {
  const { t } = useLang();
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className="bg-theme">
      {/* Header */}
      <div className="text-center mb-16 space-y-4 reveal-up">
        <Badge icon={HelpCircle}>{t(FAQ_SECTION.badge)}</Badge>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-theme">
          {t(FAQ_SECTION.title)}{' '}
          <span className="gradient-text">{t(FAQ_SECTION.highlight)}</span>
        </h2>
        <p className="text-lg text-theme-secondary max-w-xl mx-auto">
          {t(FAQ_SECTION.subtitle)}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4 reveal-stagger">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div 
              key={faq.id} 
              className={`reveal-item glass-card rounded-2xl border transition-all duration-300 overflow-hidden
                ${isOpen ? 'border-brand-500 shadow-md shadow-brand-500/10' : 'border-theme hover:border-brand-500/30'}`}
            >
              <button
                onClick={() => toggleOpen(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-brand-500' : 'text-theme'}`}>
                  {t(faq.question)}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-500/10 text-brand-500' : 'bg-theme-muted text-theme-secondary'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-theme-secondary leading-relaxed border-t border-theme pt-4 mt-2">
                      {t(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
