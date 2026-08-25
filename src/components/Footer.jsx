import { motion } from "framer-motion";
import { MessageCircle, Mail, Globe } from "lucide-react";
import { KovaLogo } from "./KovaLogo";

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = "https://wa.me/5585996590156?text=" + encodeURIComponent("Olá! Gostaria de conversar com a Kova Labs sobre um projeto de alta performance.");

  return (
    <footer id="contato" className="relative pt-28 pb-12 px-6 overflow-hidden bg-[#050507] border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-[#7C3AED]/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="mb-6">
            <KovaLogo size="lg" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 font-['Orbitron'] max-w-3xl leading-tight">
            Criamos experiências digitais de <span className="text-[#EF233C]">alta performance</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-10 font-sans">
            Transformamos ideias em resultados reais. Destaque sua marca com landing pages, sistemas web e automações sob medida.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Ronny, Founder & CEO da Kova Labs no WhatsApp"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl text-base md:text-lg transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] min-h-[44px]"
          >
            <MessageCircle size={22} aria-hidden="true" />
            Falar com Ronny — Founder & CEO
          </a>
        </motion.div>

        {/* Business Card Info Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#121216] border border-white/10 text-left mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#7C3AED]">
              <Mail size={18} aria-hidden="true" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">E-mail Comercial</div>
              <a href="mailto:hello@kovalabs.com" className="text-sm font-bold text-white hover:text-[#7C3AED] transition-colors font-mono">
                hello@kovalabs.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EF233C]/20 border border-[#EF233C]/40 flex items-center justify-center text-[#EF233C]">
              <Globe size={18} aria-hidden="true" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Domínio Oficial</div>
              <a href="https://kovalabs.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#EF233C] transition-colors font-mono">
                kovalabs.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <InstagramIcon size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Instagram Oficial</div>
              <a href="https://instagram.com/kovalabss" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-purple-300 transition-colors font-mono">
                @kovalabss
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Footer Bottom Line */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <KovaLogo size="sm" />
            <span className="text-xs text-zinc-300 font-mono">| Ronny — Founder & CEO</span>
          </div>
          
          <div className="text-zinc-300 text-xs font-mono">
            © {new Date().getFullYear()} Kova Labs. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/kovalabss" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Kova Labs" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#7C3AED]/30 transition-colors min-w-[44px] min-h-[44px]"
            >
              <InstagramIcon size={18} />
            </a>
            <a 
              href="mailto:hello@kovalabs.com" 
              aria-label="E-mail da Kova Labs" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#7C3AED]/30 transition-colors min-w-[44px] min-h-[44px]"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
