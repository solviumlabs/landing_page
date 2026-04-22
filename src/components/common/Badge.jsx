// src/components/common/Badge.jsx

/**
 * Etiqueta de estado / categoría.
 * Acepta un icono Lucide como prop (componente React).
 */
export default function Badge({ children, icon: Icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
        bg-brand-500/10 border border-brand-500/25 text-brand-500
        ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
