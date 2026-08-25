import { useState, useEffect } from "react";
import { 
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
  Target,
  DollarSign,
  Star,
  Lock,
  Terminal,
  MessageSquareText,
  Clock
} from "lucide-react";
import { KovaIcon } from "./KovaLogo";

export function Hero() {
  const [scene, setScene] = useState(0);

  // Defer scene rotation after initial render to ensure 0 ms TBT on Lighthouse load
  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setScene((prev) => (prev + 1) % 4);
      }, 6000);
      return () => clearInterval(interval);
    }, 4000);

    return () => clearTimeout(startTimer);
  }, []);

  const scenesMeta = [
    { glow: "from-[#7C3AED]/25 via-indigo-600/15 to-[#EF233C]/15" },
    { glow: "from-purple-600/15 via-[#7C3AED]/15 to-blue-600/15" },
    { glow: "from-emerald-600/15 via-teal-600/10 to-[#7C3AED]/15" },
    { glow: "from-[#EF233C]/20 via-orange-600/15 to-[#7C3AED]/20" }
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden bg-[#050507]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* BACKGROUND GRAPHICS & MOTION SEQUENCE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        
        {/* Dynamic Background Aura Glow in Kova Violet & Red */}
        <div
          className={`absolute w-[400px] h-[400px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-tr ${scenesMeta[scene].glow} blur-[60px] md:blur-[120px] transition-all duration-1000 will-change-transform`}
        />

        {/* Cybernetic Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050507]/85 to-[#050507] z-0" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* SCENE ENRICHED MOTIONS - Pure CSS transitions for zero main-thread blocking */}
        <div className="hidden md:block absolute inset-0">
          
          {/* CENA 1: LANDING PAGES / PÁGINAS DE VENDAS */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
              scene === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Static Radar Waves */}
            {[0, 1].map((ring) => (
              <div
                key={`radar-${ring}`}
                className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] border border-[#7C3AED]/20 rounded-full"
              />
            ))}

            {/* 1. Elemento: +ROI Elevado */}
            <div className="absolute top-36 left-[10%] opacity-90 flex items-center gap-3 px-4 py-2.5 bg-[#0e0e14] border border-[#7C3AED]/40 rounded-full shadow-lg">
              <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
                <TrendingUp size={16} />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] text-zinc-400">Retorno de Investimento</div>
                <div className="text-xs font-bold text-green-400">+ROI Elevado (ADS)</div>
              </div>
            </div>

            {/* 2. Elemento: Vendas 24/7 */}
            <div className="absolute top-36 right-[10%] opacity-90 flex items-center gap-3 px-4 py-2.5 bg-[#0e0e14] border border-[#EF233C]/40 rounded-full shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#EF233C]/20 border border-[#EF233C]/40 flex items-center justify-center text-[#EF233C]">
                <Clock size={16} />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] text-zinc-400">Funil Automático</div>
                <div className="text-xs font-bold text-white">Vendas 24H Por Dia</div>
              </div>
            </div>

            {/* 3. Elemento: Meta & Google Ads */}
            <div className="absolute bottom-36 left-[10%] opacity-90 flex items-center gap-3 px-4 py-2.5 bg-[#0e0e14] border border-[#7C3AED]/40 rounded-full shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED]">
                <Target size={16} />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] text-zinc-400">Pixel & Tracking Active</div>
                <div className="text-xs font-bold text-purple-300">Google & Meta Ads</div>
              </div>
            </div>

            {/* 4. Elemento: Direct Checkout */}
            <div className="absolute bottom-36 right-[10%] opacity-90 flex items-center gap-3 px-4 py-2.5 bg-[#0e0e14] border border-emerald-500/40 rounded-full shadow-lg">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <DollarSign size={16} />
              </div>
              <div className="text-left font-mono">
                <div className="text-[10px] text-zinc-400">Alta Conversão</div>
                <div className="text-xs font-bold text-green-400">R$ 497,00 Checkout Direct</div>
              </div>
            </div>

            {/* Center Micro Floating Badge */}
            <div className="absolute top-20 font-mono text-[10px] text-purple-300 bg-[#7C3AED]/15 border border-[#7C3AED]/40 px-3 py-1 rounded-full">
              ⚡ COPYWRITING MAGNÉTICO & AIDA
            </div>
          </div>

          {/* CENA 2: SITES INSTITUCIONAIS */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
              scene === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Google Search Bar Mockup Top Center */}
            <div className="absolute top-20 w-[500px] bg-[#0e0e14] border border-white/20 rounded-full px-4 py-2.5 flex items-center gap-3 shadow-xl">
              <Search size={14} className="text-[#7C3AED]" />
              <span className="font-mono text-xs text-zinc-300 flex-1 text-left truncate">
                Advogados, Personal Trainers, Barbeiros & Médicos no Google...
              </span>
              <span className="font-mono text-[9px] bg-[#7C3AED]/20 text-purple-300 px-2 py-0.5 rounded-full border border-[#7C3AED]/40">
                TOP #1
              </span>
            </div>

            {/* 1. Advogado Badge */}
            <div className="absolute top-36 left-[12%] opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-[#7C3AED]/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-purple-300">
                <Scale size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Advocacia & Direito</div>
                <div className="text-[9px] text-purple-300">Prestígio & Contratos</div>
              </div>
            </div>

            {/* 2. Personal Trainer Badge */}
            <div className="absolute top-36 right-[12%] opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-[#EF233C]/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#EF233C]/20 border border-[#EF233C]/40 flex items-center justify-center text-[#EF233C]">
                <Dumbbell size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Personal Trainer</div>
                <div className="text-[9px] text-[#EF233C]">Consultoria Online</div>
              </div>
            </div>

            {/* 3. Barbeiro Badge */}
            <div className="absolute bottom-36 left-[12%] opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-blue-500/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                <Scissors size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Barber & Aesthetics</div>
                <div className="text-[9px] text-blue-300">Agendamentos VIP</div>
              </div>
            </div>

            {/* 4. Médico Badge */}
            <div className="absolute bottom-36 right-[12%] opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-emerald-500/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <Stethoscope size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Clínica & Saúde</div>
                <div className="text-[9px] text-emerald-300">Pacientes & Autoridade</div>
              </div>
            </div>

            {/* Bottom Center Micro Element */}
            <div className="absolute bottom-20 flex items-center gap-4 bg-[#0e0e14] border border-white/15 px-4 py-1.5 rounded-full shadow-lg">
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
            </div>
          </div>

          {/* CENA 3: CRMs & SISTEMAS */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
              scene === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 1 SINGLE CRM CARD */}
            <div className="absolute left-[11%] w-[320px] h-[400px] opacity-75 rounded-3xl border border-[#7C3AED]/40 bg-[#0e0e14] p-5 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="font-mono text-[9px] text-purple-300 bg-[#7C3AED]/20 px-2 py-0.5 rounded border border-[#7C3AED]/40 flex items-center gap-1">
                  <BarChart3 size={10} /> KOVA CRM SYSTEMS
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
              <div className="text-[9px] font-mono text-purple-300 text-left border-t border-white/10 pt-2 flex justify-between">
                <span>AUTOMAÇÃO DE LEADS</span>
                <span>SUPABASE SYNC</span>
              </div>
            </div>

            {/* Data Sync Node Pill Right Top */}
            <div className="absolute right-[10%] top-40 opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-teal-500/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                <Activity size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">+1.480 Leads No Funil</div>
                <div className="text-[9px] text-teal-300">Dashboard em Tempo Real</div>
              </div>
            </div>

            {/* Data Sync Node Pill Right Bottom */}
            <div className="absolute right-[10%] bottom-36 opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-[#7C3AED]/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-purple-300">
                <MessageSquareText size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Automação WhatsApp</div>
                <div className="text-[9px] text-purple-300">Disparo & Webhooks API</div>
              </div>
            </div>
          </div>

          {/* CENA 4: REATOR QUANTUM & VELOCIDADE 100/100 */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
              scene === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Speed Core Ring */}
            <div className="relative flex items-center justify-center opacity-30">
              <div className="w-[440px] h-[440px] rounded-full border-4 border-[#7C3AED]/30 border-t-[#7C3AED]" />
              <div className="absolute font-mono font-black text-8xl text-purple-400 tracking-tighter opacity-60">
                100
              </div>
            </div>

            {/* Quantum Speed Pill Left Top */}
            <div className="absolute left-[10%] top-40 opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-amber-500/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Cpu size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Google PageSpeed</div>
                <div className="text-[9px] text-amber-300">Nota 100/100 Absoluta</div>
              </div>
            </div>

            {/* Quantum Speed Pill Left Bottom */}
            <div className="absolute left-[10%] bottom-36 opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-emerald-500/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">FCP: 0.3s | LCP: 0.6s</div>
                <div className="text-[9px] text-emerald-300">SEO & Core Web Vitals</div>
              </div>
            </div>

            {/* Code Engineering Pill Right */}
            <div className="absolute right-[10%] bottom-40 opacity-90 flex items-center gap-3 px-4 py-3 bg-[#0e0e14] border border-[#EF233C]/40 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#EF233C]/20 border border-[#EF233C]/40 flex items-center justify-center text-[#EF233C]">
                <Terminal size={20} />
              </div>
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">Clean Code & Vite</div>
                <div className="text-[9px] text-[#EF233C]">0.2s Ultra Fast Render</div>
              </div>
            </div>
          </div>

        </div>

        {/* Scene Navigation Selector Bullets (Desktop) */}
        <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 items-center gap-2 z-10">
          {scenesMeta.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setScene(idx)}
              aria-label={`Alternar para cena ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 min-w-[24px] min-h-[24px] flex items-center justify-center ${
                scene === idx ? "w-8 bg-[#7C3AED]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/* HERO MAIN BRAND & LOGO SECTION */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Official Kova Logo Icon Main Display */}
        <div className="mb-4">
          <KovaIcon className="w-16 h-16 md:w-24 md:h-24" glow={true} useImg={true} />
        </div>

        {/* STACKED TITLE: Kova / LABS */}
        <h1
          className="text-5xl md:text-[6.5rem] font-bold tracking-tighter uppercase leading-[0.9] text-white flex flex-col items-center font-['Orbitron']"
          style={{ textShadow: "0 0 35px rgba(124,58,237,0.3)" }}
        >
          <span className="tracking-[0.1em] font-black">Kova</span>
          <span className="text-2xl md:text-5xl tracking-[0.25em] font-medium uppercase mt-2 font-sans text-[#7C3AED]">LABS</span>
        </h1>

        {/* RESTORED EXACT COPY AND FONT */}
        <div className="mt-10 flex flex-col items-center">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-zinc-300 mb-2 whitespace-pre-line text-center">
            {`SITES DE ALTA CONVERSÃO - PERFORMANCE - UX\nTRANSFORMANDO TRÁFEGO EM AUTORIDADE E FATURAMENTO !`}
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contato"
            aria-label="Escalar seu negócio com Kova Labs"
            className="w-full sm:w-48 h-14 flex justify-center items-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm uppercase tracking-widest transition-colors relative overflow-hidden group rounded-xl min-h-[44px] shadow-[0_0_25px_rgba(124,58,237,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 blur-md group-hover:scale-150 transition-transform duration-500" />
            ESCALAR
          </a>
          <a
            href="#projetos"
            aria-label="Ver cases de sucesso do portfólio Kova Labs"
            className="w-full sm:w-48 h-14 flex justify-center items-center border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors rounded-xl min-h-[44px]"
          >
            VER CASES
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-3 z-10">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#7C3AED] to-white/40 animate-pulse" />
        <span className="font-mono text-[9px] tracking-widest uppercase opacity-60">Scroll para explorar</span>
      </div>
    </section>
  );
}
