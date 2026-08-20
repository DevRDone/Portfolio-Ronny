import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const duration = 19.5; // Ajustado para remover o "tempo morto" final sem acelerar a física dos efeitos

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cards: Ficam menos tempo parados no meio, saem mais suaves, não encavalam com o gráfico
  const times = [0, 0.059, 0.089, 0.120, 0.220, 0.280, 0.283, 0.95, 1];
  const spread = isMobile ? "-70%" : "-120%";
  const spreadFront = isMobile ? "70%" : "120%";

  const backAnim = {
    x: ["100vw", "0vw", "0vw", spread, spread, spread, spread, spread, spread],
    y: [0, -80, -80, -80, -80, -1500, -1500, -1500, -1500],
    rotateY: [-75, 0, 0, 0, 0, 0, 0, 0, 0],
    scale: [0.3, 0.85, 0.85, 0.85, 0.85, 0.85, 0, 0, 0],
    opacity: [0, 0.3, 0.3, 0.6, 0.6, 0, 0, 0, 0],
  };

  const middleAnim = {
    x: ["100vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"],
    y: [0, -40, -40, -40, -40, 1500, 1500, 1500, 1500],
    rotateY: [-75, 0, 0, 0, 0, 0, 0, 0, 0],
    scale: [0.4, 0.95, 0.95, 0.95, 0.95, 0.95, 0, 0, 0],
    opacity: [0, 0.4, 0.4, 0.6, 0.6, 0, 0, 0, 0],
  };

  const frontAnim = {
    x: ["100vw", "0vw", "0vw", spreadFront, spreadFront, spreadFront, spreadFront, spreadFront, spreadFront],
    y: [0, 0, 0, 0, 0, -1500, -1500, -1500, -1500],
    rotateY: [-75, 0, 0, 0, 0, 0, 0, 0, 0],
    scale: [0.5, 1.05, 1.05, 1.05, 1.05, 1.05, 0, 0, 0],
    opacity: [0, 0.5, 0.5, 0.6, 0.6, 0, 0, 0, 0],
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden bg-background"
      style={{ perspective: "1200px" }}
    >

      {/* Background Wireframe Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mt-20" style={{ transformStyle: "preserve-3d" }}>

        {/* 1. Graph Animation (Stock Chart Style) */}
        {/* Background Volume Bars */}
        <motion.div
          className="absolute inset-0 z-0 flex items-end justify-between px-4 sm:px-10 opacity-30 gap-1 sm:gap-2 pb-10"
          animate={{ opacity: [0, 0, 0.2, 0.2, 0, 0] }}
          transition={{ duration, repeat: Infinity, repeatDelay: 3, times: [0, 0.237, 0.291, 0.657, 0.711, 1], ease: "easeInOut" }}
        >
          {[30, 50, 20, 70, 40, 80, 30, 90, 60, 100, 70, 110, 80, 120].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-[#60A5FA]/20 to-transparent" style={{ height: `${h}%` }} />
          ))}
        </motion.div>

        {/* Jagged Line com a Setinha */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
            {/* O Caminho do Gráfico */}
            <motion.path
              d="M -50 850 L 50 750 L 150 750 L 300 550 L 400 600 L 600 350 L 700 400 L 950 150 L 1050 200 L 1300 -50"
              fill="transparent"
              stroke="url(#graphGradient)"
              strokeWidth="6"
              style={{ filter: "drop-shadow(0 0 20px rgba(96, 165, 250, 0.8))" }}
              animate={{
                pathLength: [0, 0, 1, 1, 1, 1],
                opacity: [0, 0, 1, 1, 0, 0]
              }}
              transition={{
                duration,
                repeat: Infinity, repeatDelay: 3,
                times: [0, 0.291, 0.506, 0.625, 0.711, 1],
                ease: "linear"
              }}
            />

            {/* A Seta Mágica (Matematicamente ligada aos mesmos pontos do gráfico) */}
            <motion.g
              animate={{
                x: [-50, -50, 50, 150, 300, 400, 600, 700, 950, 1050, 1300, 1300, 1300, 1300],
                y: [850, 850, 750, 750, 550, 600, 350, 400, 150, 200, -50, -50, -50, -50],
                rotate: [-45, -45, -45, 0, -53, 26, -51, 26, -45, 26, -45, -45, -45, -45],
                opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
              }}
              transition={{
                duration,
                repeat: Infinity, repeatDelay: 3,
                times: [0, 0.291, 0.307, 0.319, 0.348, 0.361, 0.398, 0.411, 0.452, 0.465, 0.506, 0.625, 0.711, 1],
                ease: "linear"
              }}
            >
              {/* Ponta da Seta */}
              <path d="M -20,-10 L 0,0 L -20,10 L -15,0 Z" fill="#ffffff" style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,1))" }} />
              <circle cx="0" cy="0" r="4" fill="#60A5FA" style={{ filter: "drop-shadow(0 0 8px #60A5FA)" }} />
            </motion.g>

            <defs>
              <linearGradient id="graphGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 2. Water Drop & Ripple Animation */}
        {/* Drop falling */}
        <motion.div
          animate={{
            y: ["-100vh", "-100vh", "0vh", "0vh", "0vh", "0vh"],
            scale: [1, 1, 1, 0.5, 0, 0],
            opacity: [0, 0, 1, 0, 0, 0]
          }}
          transition={{
            duration,
            repeat: Infinity, repeatDelay: 3,
            times: [0, 0.657, 0.711, 0.722, 0.732, 1],
            ease: "easeIn"
          }}
          className="absolute z-10 -mt-20"
        >
          {/* Teardrop shape */}
          <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-white/80 to-[#93C5FD] -rotate-45 rounded-full rounded-tr-none shadow-[0_0_40px_rgba(147,197,253,0.8)] blur-[1px]" />
        </motion.div>

        {/* Giant Ripples */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`ripple-${i}`}
            animate={{
              scale: [0, 0, 0.1, 15, 15],
              opacity: [0, 0, 1, 0, 0],
              borderWidth: ["0px", "0px", "10px", "1px", "0px"]
            }}
            transition={{
              duration,
              repeat: Infinity, repeatDelay: 3,
              times: [0, 0.689, 0.711 + (i * 0.032), 0.950 + (i * 0.012), 1],
              ease: "easeOut"
            }}
            className="absolute w-40 h-40 md:w-80 md:h-80 border-[#93C5FD] rounded-full shadow-[0_0_80px_rgba(147,197,253,0.6)] -mt-20"
          />
        ))}

        {/* Back Phone (Becomes Left) */}
        <motion.div
          animate={backAnim}
          transition={{ duration, repeat: Infinity, repeatDelay: 3, times, ease: "easeInOut" }}
          className="absolute w-[260px] md:w-[380px] h-[550px] md:h-[650px] border-[2px] border-[#93C5FD]/50 rounded-[3rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm flex flex-col overflow-hidden shadow-[0_0_40px_rgba(147,197,253,0.15)]"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Wireframe UI */}
          <div className="w-full px-8 py-6 flex justify-between items-center opacity-70">
            <div className="w-8 h-8 rounded-full border-2 border-white/50" />
            <div className="w-6 h-6 border-2 border-white/50 rounded-sm" />
          </div>
          <div className="flex-1 w-full px-8 flex flex-col gap-5 opacity-70 mt-4">
            <div className="w-1/2 h-5 bg-white/50 rounded-md" />
            <div className="w-3/4 h-3 bg-white/30 rounded-md" />
            <div className="w-full h-32 border-2 border-white/40 rounded-2xl mt-4" />
            <div className="flex gap-4 mt-2">
              <div className="w-1/2 h-24 bg-white/20 rounded-2xl" />
              <div className="w-1/2 h-24 bg-white/20 rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Middle Phone (Stays Center) */}
        <motion.div
          animate={middleAnim}
          transition={{ duration, repeat: Infinity, repeatDelay: 3, times, ease: "easeInOut" }}
          className="absolute w-[260px] md:w-[380px] h-[550px] md:h-[650px] border-[2px] border-[#93C5FD]/50 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm flex flex-col overflow-hidden shadow-[0_0_40px_rgba(147,197,253,0.15)]"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Wireframe UI */}
          <div className="w-full px-8 py-6 flex justify-center opacity-70">
            <div className="w-12 h-3 bg-white/50 rounded-full" />
          </div>
          <div className="flex-1 w-full px-8 flex flex-col items-center gap-4 opacity-70 mt-6">
            <div className="w-20 h-20 rounded-full border-4 border-white/50" />
            <div className="w-2/3 h-5 bg-white/50 rounded-md mt-2" />
            <div className="w-1/2 h-3 bg-white/30 rounded-md" />
            <div className="w-full h-12 border-2 border-white/50 rounded-full mt-6 flex items-center justify-center">
              <div className="w-1/3 h-2 bg-white/50 rounded-sm" />
            </div>
            <div className="w-full space-y-4 mt-8">
              <div className="w-full h-14 bg-white/10 border border-white/30 rounded-2xl" />
              <div className="w-full h-14 bg-white/10 border border-white/30 rounded-2xl" />
              <div className="w-full h-14 bg-white/10 border border-white/30 rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Front Phone (Becomes Right) */}
        <motion.div
          animate={frontAnim}
          transition={{ duration, repeat: Infinity, repeatDelay: 3, times, ease: "easeInOut" }}
          className="absolute w-[260px] md:w-[380px] h-[550px] md:h-[650px] border-[2px] border-[#93C5FD]/50 rounded-[3rem] bg-gradient-to-b from-white/10 to-background flex flex-col backdrop-blur-md shadow-[0_0_40px_rgba(147,197,253,0.15)] overflow-hidden"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Mockup Status Bar */}
          <div className="w-full px-8 py-6 flex justify-between items-center opacity-70">
            <div className="flex items-end gap-1">
              <div className="w-1.5 h-2 bg-white rounded-sm" />
              <div className="w-1.5 h-3 bg-white rounded-sm" />
              <div className="w-1.5 h-4 bg-white rounded-sm" />
              <div className="w-1.5 h-5 bg-white rounded-sm opacity-50" />
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" x2="12.01" y1="20" y2="20" /></svg>
              <div className="w-8 h-4 border-2 border-white rounded-sm p-[1px] flex justify-start items-center relative">
                <div className="w-5 h-full bg-white" />
                <div className="w-[2px] h-2 bg-white absolute -right-[4px] rounded-r-sm" />
              </div>
            </div>
          </div>
          {/* Wireframe UI */}
          <div className="flex-1 w-full px-8 flex flex-col gap-6 opacity-70 mt-2">
            <div className="w-full h-44 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/40" />
            <div className="w-1/3 h-4 bg-white/50 rounded-md" />
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-full h-4 bg-white/40 rounded-md" />
                <div className="w-2/3 h-3 bg-white/20 rounded-md" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-full h-4 bg-white/40 rounded-md" />
                <div className="w-2/3 h-3 bg-white/20 rounded-md" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-[6.5rem] font-bold tracking-tighter uppercase leading-[0.9] text-white flex flex-col items-center font-['Orbitron']"
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
        >
          <span className="tracking-[0.1em] font-black">Lkz</span>
          <span className="text-2xl md:text-5xl tracking-[0.2em] font-medium lowercase mt-2 font-sans">studio</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-2 whitespace-pre-line text-center">
            {`SITES DE ALTA CONVERSÃO - PERFORMANCE - UX\nTRANSFORMANDO TRÁFEGO EM AUTORIDADE E FATURAMENTO !`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contato"
            className="w-full sm:w-48 h-14 flex justify-center items-center bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 blur-md group-hover:scale-150 transition-transform duration-500"></span>
            ESCALAR
          </a>
          <a
            href="#projetos"
            className="w-full sm:w-48 h-14 flex justify-center items-center border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            VER CASES
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-4 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/60 to-white/40 animate-pulse"></div>
        <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">Scroll para explorar</span>
      </motion.div>
    </section>
  );
}
