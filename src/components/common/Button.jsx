// src/components/common/Button.jsx

/**
 * Botón polimórfico de Solvium.
 * Renderiza <a> si se provee href, <button> en caso contrario.
 *
 * @param {'primary'|'secondary'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'gradient-brand text-white hover:shadow-2xl hover:shadow-brand-500/35 hover:scale-105 glow-accent',
    secondary:
      'border-2 border-theme-brand text-theme hover:bg-brand-500/8 hover:border-theme-active',
    ghost:
      'text-brand-400 hover:text-brand-500 hover:bg-brand-500/8',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
