import { motion } from 'framer-motion';

export default function AnimatedLogo({ className = "", delay = 0 }) {
  // El rayo buscador que cae del cielo
  const skyPath = "M 120,-800 L 180,-600 L 20,-450 L 240,-250 L 80,-100 L 170,30";
  // Path de rayo picudo (S)
  const lightningPath = "M 170,30 L 50,90 L 150,110 L 30,170";

  // Tiempos coreografiados
  const skyDuration = 0.8; // Más lento
  const t_hitS = delay + skyDuration;
  const sDuration = 0.5;
  const t_hitGround = t_hitS + sDuration;

  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full drop-shadow-[0_0_12px_rgba(160,64,216,0.9)] z-10 relative overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c882ff" /> {/* accent-300 */}
            <stop offset="1" stopColor="#610f8f" /> {/* brand-500 */}
          </linearGradient>
          
          <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 0. Rayo Buscador (Sky Bolt) */}
        <motion.path
          d={skyPath}
          stroke="#fff"
          strokeWidth="12"
          strokeLinecap="square"
          strokeLinejoin="miter"
          filter="url(#lightning-glow)"
          initial={{ pathLength: 0.2, pathOffset: -0.2, opacity: 0 }}
          animate={{ pathOffset: [-0.2, 1], opacity: [0, 1, 1, 0] }}
          transition={{ duration: skyDuration, delay: delay, ease: "easeIn" }}
        />

        {/* Destello de Impacto Inicial (cuando el rayo buscador toca la S) */}
        <motion.circle
          r="15"
          fill="#fff"
          cx="170"
          cy="30"
          className="blur-sm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
          transition={{ duration: 0.3, delay: t_hitS, ease: "easeOut", times: [0, 0.01, 1] }}
        />

        {/* 1. Trazo base de la S (permanente) */}
        <motion.path
          d={lightningPath}
          stroke="url(#logo-gradient)"
          strokeWidth="16"
          strokeLinecap="square"
          strokeLinejoin="miter"
          initial={{ pathLength: 0, opacity: 0, display: 'none' }}
          animate={{ pathLength: 1, opacity: 1, display: 'block' }}
          transition={{ 
            pathLength: { type: "tween", ease: "easeOut", duration: sDuration, delay: t_hitS },
            opacity: { duration: 0.1, delay: t_hitS }
          }}
        />

        {/* 2. Resplandor interno recurrente (el "pulso" de energía) */}
        <motion.path
          d={lightningPath}
          stroke="#fff"
          strokeWidth="18"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="blur-sm"
          initial={{ pathLength: 0.15, pathOffset: -0.15, opacity: 0, display: 'none' }}
          animate={{ 
            pathOffset: [0, 1.1],
            opacity: [0, 1, 1, 0],
            display: 'block'
          }}
          transition={{ 
            duration: 1.2,
            delay: t_hitGround + 0.4, // Inicia después de toda la secuencia
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* 3. El rayo principal picudo de la S */}
        <motion.path
          d={lightningPath}
          stroke="url(#logo-gradient)"
          strokeWidth="8"
          strokeLinecap="square"
          strokeLinejoin="miter"
          filter="url(#lightning-glow)"
          initial={{ pathLength: 0, opacity: 0, display: 'none' }}
          animate={{ pathLength: 1, opacity: 1, display: 'block' }}
          transition={{ 
            type: "tween", 
            ease: "easeOut", 
            duration: sDuration,
            delay: t_hitS
          }}
        />
        
        {/* 4. Chispa en la punta mientras se arma la S */}
        <motion.circle
          r="6"
          fill="#fff"
          className="drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
          initial={{ opacity: 0, display: 'none' }}
          animate={{ opacity: [0, 1, 0], display: 'block' }}
          transition={{ duration: sDuration, ease: "easeOut", delay: t_hitS, times: [0, 0.01, 1] }}
        >
          <animateMotion 
            dur={`${sDuration}s`}
            begin={`${t_hitS}s`}
            path={lightningPath}
            fill="freeze"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          />
        </motion.circle>

        {/* 5. Destello de Impacto (aterrizaje final) */}
        <motion.circle
          fill="#c882ff"
          cx="30"
          cy="170"
          className="blur-md"
          initial={{ opacity: 0, r: 0, display: 'none' }}
          animate={{ opacity: [0, 0.8, 0], r: [0, 30, 40], display: 'block' }}
          transition={{ duration: 0.5, delay: t_hitGround, ease: "easeOut", times: [0, 0.01, 1] }}
        />

        {/* 6. Chispas dispersándose */}
        {[
          { x: -30, y: -40 }, { x: -50, y: -10 }, { x: -20, y: 30 },
          { x: 20, y: 40 }, { x: 50, y: 10 }, { x: 30, y: -30 },
          { x: 0, y: -50 }, { x: -40, y: 20 }
        ].map((spark, i) => (
          <motion.circle
            key={`spark-${i}`}
            r={Math.random() * 2 + 2}
            fill="#fff"
            cx="30"
            cy="170"
            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0, display: 'none' }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: spark.x, 
              y: spark.y, 
              scale: [0, 1, 0],
              display: 'block'
            }}
            transition={{ 
              duration: 0.4 + Math.random() * 0.2, 
              delay: t_hitGround, 
              ease: "easeOut",
              times: [0, 0.01, 1]
            }}
          />
        ))}
      </svg>
    </span>
  );
}
