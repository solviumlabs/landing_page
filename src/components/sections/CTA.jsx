// src/components/sections/CTA.jsx
import { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@data/meta';
import { useLang } from '@utils/LangContext';
import SectionWrapper from '@components/common/SectionWrapper';
import { CTA_COPY } from '@data/cta';

const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function CTA() {
  const { t, lang } = useLang();
  const titleLines = t(CTA_COPY.title).split('\n');
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const lastContact = localStorage.getItem('solvium_last_contact');
    if (lastContact) {
      const timePassed = Math.floor((Date.now() - parseInt(lastContact)) / 1000);
      if (timePassed < 300) { // 5 minutos = 300 segundos
        setCooldown(300 - timePassed);
      } else {
        localStorage.removeItem('solvium_last_contact');
      }
    }
  }, []);

  useEffect(() => {
    let timer = null;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            localStorage.removeItem('solvium_last_contact');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getWhatsAppLink = () => {
    const phone = COMPANY.phone.replace(/\D/g, '');
    const message = t(CTA_COPY.whatsappMsg);
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Obtener los datos del formulario
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrervvgk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset(); // Limpiar el formulario
        localStorage.setItem('solvium_last_contact', Date.now().toString());
        setCooldown(300); // Iniciar cooldown de 5 minutos
      } else {
        // Si hay error, regresamos al estado inicial
        console.error("Error al enviar el formulario");
        setFormStatus('idle');
        alert("Hubo un problema enviando tu mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error de red", error);
      setFormStatus('idle');
      alert("Error de red. Revisa tu conexión e intenta nuevamente.");
    }
  };

  return (
    <SectionWrapper id="contacto" className="py-12">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl reveal-up">
        
        {/* Fondo principal morado oscuro para todo el contenedor */}
        <div className="absolute inset-0 bg-[#1A0B2E]" />
        
        {/* Gradientes decorativos y grid sutil */}
        <div className="absolute inset-0 gradient-brand-wide opacity-80 mix-blend-multiply" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-0 h-full">
          
          {/* Columna Izquierda: Copy & WhatsApp (Morado oscuro text-white) */}
          <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-md">
              {t(CTA_COPY.subtitle)}
            </p>

            <div>
              <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-3">
                {t(CTA_COPY.contactDirect)}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t(CTA_COPY.whatsapp)}
              </a>
              
              <div className="mt-6 flex flex-col gap-1.5 text-sm">
                <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <Send className="w-4 h-4 opacity-50" /> {COMPANY.email}
                </a>
                <span className="text-white/70 font-medium flex items-center gap-2">
                   {COMPANY.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario (Fondo morado translúcido) */}
          <div className="p-8 lg:p-12 bg-black/20 backdrop-blur-md">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up py-10">
                <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t(CTA_COPY.form.success)}</h3>
                <p className="text-white/70">{t(CTA_COPY.form.successSub)}</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 px-6 py-2 text-brand-300 font-bold hover:text-white transition-colors"
                >
                  {t(CTA_COPY.form.sendAnother)}
                </button>
              </div>
            ) : cooldown > 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up py-10">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-2 border border-white/10 shadow-inner">
                  <span className="text-3xl font-mono font-bold text-brand-300">{formatTime(cooldown)}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{t(CTA_COPY.form.cooldownMsg)}</h3>
                <p className="text-white/70">{t(CTA_COPY.form.waitText)}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  {t(CTA_COPY.form.title)}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1 space-y-1.5">
                      <label className="text-xs font-semibold text-white/70">{t(CTA_COPY.form.name)}</label>
                      <input 
                        required 
                        type="text"
                        name="name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-400 focus:bg-white/10 outline-none transition-all text-white placeholder-white/30"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-1.5">
                      <label className="text-xs font-semibold text-white/70">{t(CTA_COPY.form.company)}</label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-400 focus:bg-white/10 outline-none transition-all text-white placeholder-white/30"
                        placeholder="Ej. Industrias Acme"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">{t(CTA_COPY.form.email)}</label>
                    <input 
                      required 
                      type="email"
                      name="email"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-400 focus:bg-white/10 outline-none transition-all text-white placeholder-white/30"
                      placeholder="correo@empresa.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">{t(CTA_COPY.form.message)}</label>
                    <textarea 
                      required 
                      rows="3"
                      name="message"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-400 focus:bg-white/10 outline-none transition-all resize-none text-white placeholder-white/30"
                      placeholder="Cuéntanos brevemente tu necesidad..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 mt-2
                      ${formStatus === 'submitting' 
                        ? 'bg-white/20 text-white/50 cursor-not-allowed' 
                        : 'bg-white text-brand-900 hover:bg-brand-50 hover:shadow-lg hover:shadow-white/10'}`}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="animate-pulse">{t(CTA_COPY.form.sending)}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t(CTA_COPY.form.submit)}
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
