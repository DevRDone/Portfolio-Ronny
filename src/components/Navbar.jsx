import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { KovaLogo } from "./KovaLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Processo", href: "#processo" },
    { name: "Sob Encomenda", href: "#precos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-2xl" : "py-6"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <a href="#" aria-label="Kova Labs - Página inicial" className="group">
            <KovaLogo size="md" />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-zinc-300 uppercase tracking-[0.2em] hover:text-[#7C3AED] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contato" 
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 min-h-[44px] inline-flex items-center rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              INICIAR PROJETO
            </a>
          </div>

          <button 
            className="md:hidden p-3 text-white border border-white/10 rounded-xl bg-white/5 min-w-[44px] min-h-[44px] flex items-center justify-center" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#050507]/98 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <button
              className="absolute top-6 right-6 p-3 text-white border border-white/10 rounded-xl bg-white/5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu de navegação"
            >
              <X size={28} />
            </button>
            
            <div className="mb-10">
              <KovaLogo size="lg" layout="vertical" />
            </div>

            <nav className="flex flex-col items-center gap-6" aria-label="Navegação móvel">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-white uppercase tracking-[0.2em] py-2 min-h-[44px] flex items-center hover:text-[#7C3AED]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 bg-[#7C3AED] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-xl min-h-[44px] flex items-center shadow-[0_0_25px_rgba(124,58,237,0.5)]"
              >
                INICIAR PROJETO
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
