# Solvium Landing Page

Landing page corporativa de **Solvium** — empresa de desarrollo de software.  
Stack: **React 19 + Vite + Tailwind CSS v3 + Lucide React**

---

## Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| React | ^19 | UI framework |
| Vite | ^7 | Bundler + dev server |
| Tailwind CSS | ^3 | Estilos utilitarios |
| Lucide React | ^0.545 | Iconografía |

---

## Comandos

```bash
npm run dev      # Servidor local → http://localhost:5173
npm run build    # Build de producción → /dist
npm run preview  # Preview del build de producción
npm run lint     # Verificar errores ESLint
```

---

## Estructura del Proyecto

```
solvium_landing/
├── public/                     # Archivos estáticos (favicon, OG image, etc.)
├── src/
│   ├── components/
│   │   ├── common/             # Componentes atómicos reutilizables
│   │   │   ├── Button.jsx      # Botón polimórfico (primary, secondary, ghost)
│   │   │   ├── Badge.jsx       # Etiquetas de estado / categorías
│   │   │   └── SectionWrapper.jsx  # Wrapper semántico con padding estándar
│   │   ├── layout/             # Estructura de página
│   │   │   ├── Navbar.jsx      # Navegación sticky + menú móvil
│   │   │   └── Footer.jsx      # Footer con columnas y copyright
│   │   └── sections/           # Secciones de la landing (una por archivo)
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       ├── Process.jsx
│   │       ├── TechStack.jsx
│   │       ├── CTA.jsx
│   │       └── (más secciones...)
│   ├── data/                   # ⭐ FUENTE DE VERDAD — todos los textos y datos
│   │   ├── navigation.js       # Links del navbar y footer
│   │   ├── services.js         # Servicios que ofrece Solvium
│   │   ├── process.js          # Pasos del proceso de trabajo
│   │   ├── techStack.js        # Tecnologías del stack
│   │   └── meta.js             # Nombre empresa, tagline, redes sociales
│   ├── styles/
│   │   └── tokens.css          # ⭐ DESIGN TOKENS — colores, tipografía, sombras
│   ├── utils/
│   │   └── constants.js        # URLs, rutas, links externos
│   ├── App.jsx                 # Composición de todas las secciones
│   ├── index.css               # Importa tokens.css + estilos base globales
│   └── main.jsx                # Entry point React
├── tailwind.config.js          # ⭐ PALETA DE COLORES GLOBAL
├── vite.config.js              # Aliases de importación (@components, @data, etc.)
├── index.html                  # HTML base con meta tags SEO
└── README.md
```

---

## ⭐ Filosofía: Archivos de Configuración Global

Este proyecto sigue el principio de **Single Source of Truth (SSOT)**: todo lo que
puede cambiar (colores, textos, datos) vive en UN SOLO lugar. Para modificar
algo visual o de contenido, solo toca estos archivos:

### 1. `tailwind.config.js` — Paleta de colores global

Aquí vive **toda** la paleta. Cambiar un color aquí lo propaga a toda la app.

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // ── Brand principal (azul Solvium)
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',   // ← Color principal del botón CTA
          600: '#2563eb',
          900: '#1e3a8a',
        },
        // ── Acento (cyan / turquesa)
        accent: {
          300: '#67e8f9',
          400: '#22d3ee',   // ← Highlights, gradientes
          500: '#06b6d4',
        },
        // ── Superficies (fondos dark)
        surface: {
          50:  '#f8fafc',
          900: '#0f172a',   // ← Fondo de secciones oscuras
          950: '#020617',   // ← Fondo base del body
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### 2. `src/styles/tokens.css` — Variables CSS y utilidades

Clases de utilidad globales que Tailwind no cubre por defecto.

```css
/* src/styles/tokens.css */

/* Gradiente de texto de marca */
.gradient-text {
  background: linear-gradient(135deg, #60a5fa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradiente de fondo de marca */
.gradient-brand {
  background: linear-gradient(135deg, #3b82f6, #22d3ee);
}

/* Glassmorphism estándar del proyecto */
.glass-card {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* Sombra glow de acento */
.glow-accent {
  box-shadow: 0 0 30px rgba(34, 211, 238, 0.3);
}
```

### 3. `src/data/` — Toda la información de negocio

Cada archivo es un array de objetos. Para actualizar texto/contenido, edita solo aquí.

```js
// src/data/meta.js — Datos globales de la empresa
export const COMPANY = {
  name: 'Solvium Labs',
  tagline: 'Innovación en software y automatización',
  description: 'Empresa de desarrollo de software especializada en SaaS, sistemas personalizados y APIs.',
  email: 'jalejandrogtzrdz@gmail.com',
  phone: '+52 449 428 0598',
  social: {
    linkedin: 'https://linkedin.com/company/solvium',
    github:   'https://github.com/solvium',
  },
};

// src/data/services.js — Servicios ofrecidos
export const SERVICES = [
  {
    id: 'saas',
    icon: 'Cloud',           // Nombre del icono de Lucide
    title: 'Desarrollo SaaS',
    description: 'Plataformas escalables en la nube con arquitecturas modernas.',
    features: ['Multi-tenant', 'Escalabilidad automática', 'APIs RESTful'],
  },
  // ...más servicios
];
```

---

## Patrones de Componentes

### Añadir una sección nueva

1. Crea `src/components/sections/MiSeccion.jsx`
2. Si tiene datos → agrégalos en `src/data/miSeccion.js`
3. Importa y coloca en `src/App.jsx`

```jsx
// src/components/sections/MiSeccion.jsx
import { COMPANY } from '@data/meta';

export default function MiSeccion() {
  return (
    <section id="mi-seccion" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">
          Título con <span className="gradient-text">acento</span>
        </h2>
      </div>
    </section>
  );
}
```

### Template de componente common/

```jsx
// src/components/common/Button.jsx
export default function Button({
  children,
  variant = 'primary',  // 'primary' | 'secondary' | 'ghost'
  size = 'md',          // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = '',
}) {
  const base = 'inline-flex items-center font-semibold rounded-lg transition-all duration-300';

  const variants = {
    primary:   'gradient-brand text-white hover:shadow-2xl hover:scale-105',
    secondary: 'border-2 border-brand-500/50 hover:bg-brand-500/10',
    ghost:     'text-accent-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button onClick={onClick} className={classes}>{children}</button>;
}
```

---

## Alias de Imports (`vite.config.js`)

Configura estos aliases para imports limpios sin `../../`:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@data':       path.resolve(__dirname, 'src/data'),
      '@styles':     path.resolve(__dirname, 'src/styles'),
      '@utils':      path.resolve(__dirname, 'src/utils'),
    },
  },
});
```

Uso:
```jsx
// ✅ Limpio
import Button from '@components/common/Button';
import { SERVICES } from '@data/services';

// ❌ Evitar
import Button from '../../components/common/Button';
```

---

## Convenciones de Código

| Aspecto | Convención |
|---|---|
| Archivos de componentes | `PascalCase.jsx` (ej: `HeroSection.jsx`) |
| Archivos de datos | `camelCase.js` (ej: `services.js`) |
| IDs de sección HTML | `kebab-case` (ej: `id="tech-stack"`) |
| Exports de datos | Named exports en UPPER_SNAKE_CASE |
| Props opcionales | Siempre con default value |
| Colores en JSX | Solo clases de Tailwind; NO inline styles de color |
| Textos hardcodeados | **Prohibido** — van en `src/data/` |

### Regla de oro: Sin hardcoding

```jsx
// ❌ MAL — texto hardcodeado en el componente
<h1>Construimos el futuro digital de tu negocio</h1>

// ✅ BIEN — datos desde src/data/
import { COMPANY } from '@data/meta';
<h1>{COMPANY.tagline}</h1>
```

---

## Secciones de la Landing

| Sección | Componente | Datos |
|---|---|---|
| Hero | `sections/Hero.jsx` | `data/meta.js` |
| Servicios | `sections/Services.jsx` | `data/services.js` |
| Proceso | `sections/Process.jsx` | `data/process.js` |
| Stack tecnológico | `sections/TechStack.jsx` | `data/techStack.js` |
| CTA | `sections/CTA.jsx` | `data/meta.js` |
| Footer | `layout/Footer.jsx` | `data/navigation.js` |

---

## SEO

Las meta tags viven en `index.html`. Edítalas para cada despliegue:

```html
<!-- index.html -->
<title>Solvium — Desarrollo de Software Profesional</title>
<meta name="description" content="Empresa especializada en SaaS, sistemas personalizados y APIs. Transformamos ideas en soluciones escalables." />
<meta property="og:title" content="Solvium" />
<meta property="og:image" content="/og-image.png" />
```

---

## Para la IA (Agent Context)

Este README es la referencia primaria para el agente de IA al trabajar en este proyecto.

- **Modificar contenido/textos** → editar `src/data/`
- **Modificar colores** → editar `tailwind.config.js` (colores brand/accent/surface)
- **Modificar utilidades CSS globales** → editar `src/styles/tokens.css`
- **Añadir sección** → crear en `src/components/sections/` + registrar en `App.jsx`
- **Añadir datos** → crear archivo en `src/data/` con named export
- **Iconos** → usar exclusivamente `lucide-react`
- **Stack fijo**: React + Vite + Tailwind v3. No agregar otras librerías de UI sin confirmar.
