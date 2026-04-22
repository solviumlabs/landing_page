// src/components/common/SectionWrapper.jsx

/**
 * Wrapper semántico de sección con padding y max-width estándar.
 * @param {string} id - ID HTML de la sección
 * @param {string} className - clases adicionales para el fondo/decoración
 */
export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
