import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  Scale, 
  Dumbbell, 
  Scissors, 
  Stethoscope, 
  Cpu, 
  Search,
  BarChart3,
  Database,
  Terminal,
  Target,
  DollarSign,
  Award,
  Globe2,
  Lock,
  Star,
  Layers,
  MessageSquareText,
  Clock
} from "lucide-react";

export function Hero() {
  const [scene, setScene] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // "Video Loop" automático trocando de cena a cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setScene((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scenesMeta = [
    {
      glow: "from-blue-600/40 via-indigo-600/30 to-purple-600/40"
    },
    {
      glow: "from-purple-600/40 via-pink-600/30 to-blue-600/40"
    },
    {
      glow: "from-emerald-600/40 via-teal-600/30 to-blue-600/40"
    },
    {
      glow: "from-amber-500/40 via-orange-600/30 to-red-600/40"
    }
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden bg-background"
      style={{ perspective: "1200px" }}
    >

      {/* BACKGROUND GRAPHICS & MOTION SEQUENCE (Behind Hero Content) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        
        {/* Dynamic Background Aura Glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${scene}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.45, scale: 1.25 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-tr ${scenesMeta[scene].glow} blur-[150px]`}
          />
        </AnimatePresence>

        {/* Cybernetic Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/85 to-background z-0" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* SCENE ENRICHED MOTIONS & RICH HUD ELEMENTS */}
        <AnimatePresence mode="wait">
          
          {/* CENA 1: LANDING PAGES / PÁGINAS DE VENDAS (+ROI, ADS, COPYWRITING, PIXEL, VENDAS 24/7) */}
          {scene === 0 && (
            <motion.div
              key="scene-0"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Concentric Radar Waves */}
              {[0, 1, 2, 3].map((ring) => (
                <motion.div
                  key={`radar-${ring}`}
                  animate={{
                    scale: [0.6 + ring * 0.3, 1.8 + ring * 0.4],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: ring * 0.9,
                    ease: "easeOut"
                  }}
                  className="absolute w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] border border-blue-500/30 rounded-full"
                />
              ))}

              {/* 1. Elemento: +ROI Elevado (Top Left) */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "top-32 left-3 opacity-30" : "top-36 left-[10%] opacity-70"
                } flex items-center gap-3 px-4 py-2.5 bg-black/80 border border-blue-500/40 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]`}
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
                  <TrendingUp size={16} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-zinc-400">Retorno de Investimento</div>
                  <div className="text-xs font-bold text-green-400">+ROI Elevado (ADS)</div>
                </div>
              </motion.div>

              {/* 2. Elemento: Vendas 24/7 (Top Right) */}
              <motion.div
                animate={{ y: [8, -8, 8], x: [5, -5, 5] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "top-32 right-3 opacity-30" : "top-36 right-[10%] opacity-70"
                } flex items-center gap-3 px-4 py-2.5 bg-black/80 border border-purple-500/40 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Clock size={16} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-zinc-400">Funil Automático</div>
                  <div className="text-xs font-bold text-white">Vendas 24H Por Dia</div>
                </div>
              </motion.div>

              {/* 3. Elemento: Meta Ads & Google Ads Pixel Active (Bottom Left) */}
              <motion.div
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "bottom-32 left-3 opacity-30" : "bottom-36 left-[10%] opacity-70"
                } flex items-center gap-3 px-4 py-2.5 bg-black/80 border border-indigo-500/40 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.3)]`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <Target size={16} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-zinc-400">Pixel & Tracking Active</div>
                  <div className="text-xs font-bold text-indigo-300">Google & Meta Ads</div>
                </div>
              </motion.div>

              {/* 4. Elemento: Direct Checkout & Conversion (Bottom Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "bottom-32 right-3 opacity-30" : "bottom-36 right-[10%] opacity-70"
                } flex items-center gap-3 px-4 py-2.5 bg-black/80 border border-emerald-500/40 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.3)]`}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <DollarSign size={16} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-[10px] text-zinc-400">Alta Conversão</div>
                  <div className="text-xs font-bold text-green-400">R$ 497,00 Checkout Direct</div>
                </div>
              </motion.div>

              {/* Center Micro Floating Badge: Copywriting Magnético */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 font-mono text-[10px] text-blue-300 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-md"
              >
                ⚡ COPYWRITING MAGNÉTICO & AIDA
              </motion.div>
            </motion.div>
          )}

          {/* CENA 2: SITES INSTITUCIONAIS (ADVOGADOS, PERSONAIS, BARBEIROS, MÉDICOS + GOOGLE 5.0 ⭐, SSL, SEO #1) */}
          {scene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Rotating Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full border border-purple-500/20 border-dashed"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-pink-500/20"
              />

              {/* Google Search Bar Mockup Top Center */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 sm:top-20 w-[300px] sm:w-[520px] bg-black/90 border border-white/20 rounded-full px-4 py-2.5 flex items-center gap-3 backdrop-blur-xl opacity-50 shadow-xl"
              >
                <Search size={14} className="text-purple-400" />
                <span className="font-mono text-xs text-zinc-300 flex-1 text-left truncate">
                  Advogados, Personal Trainers, Barbeiros & Médicos no Google...
                </span>
                <span className="font-mono text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                  TOP #1
                </span>
              </motion.div>

              {/* 4 Professional Niche Badges */}
              
              {/* 1. Advogado Badge (Top Left) */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "top-32 left-3 opacity-30" : "top-36 left-[12%] opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-purple-500/40 rounded-2xl backdrop-blur-xl shadow-2xl`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Scale size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Advocacia & Direito</div>
                  <div className="text-[9px] text-purple-300">Prestígio & Contratos</div>
                </div>
              </motion.div>

              {/* 2. Personal Trainer Badge (Top Right) */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "top-32 right-3 opacity-30" : "top-36 right-[12%] opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-pink-500/40 rounded-2xl backdrop-blur-xl shadow-2xl`}
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300">
                  <Dumbbell size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Personal Trainer</div>
                  <div className="text-[9px] text-pink-300">Consultoria Online</div>
                </div>
              </motion.div>

              {/* 3. Barbeiro / Studio Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "bottom-32 left-3 opacity-30" : "bottom-36 left-[12%] opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-blue-500/40 rounded-2xl backdrop-blur-xl shadow-2xl`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                  <Scissors size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Barber & Aesthetics</div>
                  <div className="text-[9px] text-blue-300">Agendamentos VIP</div>
                </div>
              </motion.div>

              {/* 4. Médico Badge (Bottom Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "bottom-32 right-3 opacity-30" : "bottom-36 right-[12%] opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-emerald-500/40 rounded-2xl backdrop-blur-xl shadow-2xl`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Stethoscope size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Clínica & Saúde</div>
                  <div className="text-[9px] text-emerald-300">Pacientes & Autoridade</div>
                </div>
              </motion.div>

              {/* Bottom Center Micro Element: Google 5 Stars & SSL */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 flex items-center gap-4 bg-black/80 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] text-zinc-300 font-mono ml-1">5.0 Google Reviews</span>
                </div>
                <span className="text-zinc-600">|</span>
                <div className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                  <Lock size={10} /> Dominio & SSL
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* CENA 3: REDE NEURAL & 1 SINGLE CRM CARD (+AUTOMAÇÃO WHATSAPP, WEBHOOKS, SUPABASE, FATURAMENTO) */}
          {scene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Neural Data Network Lines */}
              <svg className="absolute w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1200 800">
                <motion.path
                  d="M 100 200 Q 300 50, 600 400 T 1100 600"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -100] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* 1 SINGLE CRM CARD IN ENTIRE LOOP */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "left-2 w-[190px] h-[290px] opacity-25" : "left-[8%] md:left-[11%] w-[330px] h-[430px] opacity-50"
                } rounded-3xl border border-emerald-500/40 bg-black/90 backdrop-blur-xl p-5 flex flex-col justify-between shadow-[0_0_50px_rgba(16,185,129,0.25)]`}
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                    <BarChart3 size={10} /> CRM DE LEADS
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold">100% ONLINE</span>
                </div>
                <div className="space-y-3 text-left">
                  <div className="text-xs font-bold text-white font-mono">Pipeline de Vendas</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-white/5 border border-white/15 rounded flex items-center justify-between">
                      <div className="text-[10px] text-zinc-300 font-mono">Clinica Médica</div>
                      <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1 py-0.5 rounded">Novo</span>
                    </div>
                    <div className="p-2 bg-white/5 border border-white/15 rounded flex items-center justify-between">
                      <div className="text-[10px] text-zinc-300 font-mono">Advocacia</div>
                      <span className="text-[8px] bg-yellow-500/20 text-yellow-300 px-1 py-0.5 rounded">Proposta</span>
                    </div>
                    <div className="p-2 bg-white/5 border border-white/15 rounded flex items-center justify-between">
                      <div className="text-[10px] text-zinc-300 font-mono">Personal & Barber</div>
                      <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded">Fechado</span>
                    </div>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-emerald-300 text-left border-t border-white/10 pt-2 flex justify-between">
                  <span>AUTOMAÇÃO DE LEADS</span>
                  <span>SUPABASE SYNC</span>
                </div>
              </motion.div>

              {/* Data Sync Node Pill Right Top */}
              <motion.div
                animate={{ scale: [1.05, 0.95, 1.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "right-3 top-36 opacity-30" : "right-[10%] top-40 opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-teal-500/40 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(20,184,166,0.25)]`}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                  <Activity size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">+1.480 Leads No Funil</div>
                  <div className="text-[9px] text-teal-300">Dashboard em Tempo Real</div>
                </div>
              </motion.div>

              {/* Data Sync Node Pill Right Bottom */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "right-3 bottom-32 opacity-30" : "right-[10%] bottom-36 opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-emerald-500/40 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.25)]`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <MessageSquareText size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Automação WhatsApp</div>
                  <div className="text-[9px] text-emerald-300">Disparo & Webhooks API</div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* CENA 4: REATOR QUANTUM & VELOCIDADE 100/100 (+CLEAN CODE, FCP 0.3s, LCP 0.6s, VITE + REACT) */}
          {scene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Quantum Speed Meter Core Ring */}
              <div className="relative flex items-center justify-center opacity-30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full border-4 border-amber-500/30 border-t-amber-400 border-r-transparent"
                />
                <div className="absolute font-mono font-black text-6xl sm:text-8xl text-amber-400 tracking-tighter opacity-60">
                  100
                </div>
              </div>

              {/* Quantum Speed Pill Left Top */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "left-3 top-36 opacity-30" : "left-[10%] top-40 opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-amber-500/40 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.25)]`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Cpu size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Google PageSpeed</div>
                  <div className="text-[9px] text-amber-300">Nota 100/100 Absoluta</div>
                </div>
              </motion.div>

              {/* Quantum Speed Pill Left Bottom (FCP/LCP metrics) */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "left-3 bottom-32 opacity-30" : "left-[10%] bottom-36 opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-emerald-500/40 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.25)]`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">FCP: 0.3s | LCP: 0.6s</div>
                  <div className="text-[9px] text-emerald-300">SEO & Core Web Vitals</div>
                </div>
              </motion.div>

              {/* Code Engineering Pill Right */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${
                  isMobile ? "right-3 bottom-36 opacity-30" : "right-[10%] bottom-40 opacity-70"
                } flex items-center gap-3 px-4 py-3 bg-black/80 border border-orange-500/40 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.25)]`}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center text-orange-400">
                  <Terminal size={20} />
                </div>
                <div className="text-left font-mono">
                  <div className="text-xs font-bold text-white">Clean Code & Vite</div>
                  <div className="text-[9px] text-orange-300">0.2s Ultra Fast Render</div>
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Scene Navigation Selector Bullets at Bottom of Background */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {scenesMeta.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setScene(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                scene === idx ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ORIGINAL HERO FRONT CONTENT (Mantido exatamente como no original) */}
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
            <span className="absolute inset-0 w-full h-full bg-white/20 blur-md group-hover:scale-150 transition-transform duration-500" />
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
        className="absolute bottom-8 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/60 to-white/40 animate-pulse" />
        <span className="font-mono text-[9px] tracking-widest uppercase opacity-60">Scroll para explorar</span>
      </motion.div>
    </section>
  );
}
