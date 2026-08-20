import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Processo", href: "#processo" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-8"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-['Orbitron'] font-bold text-xl md:text-2xl tracking-widest flex flex-col items-start leading-[1] text-white">
            <span className="tracking-[0.1em]">LKZ</span>
            <span className="text-[10px] font-sans font-light tracking-[0.2em] lowercase">studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contato" className="bg-white text-black px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors">
              INICIAR PROJETO
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
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
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center p-6"
          >
            <button
              className="absolute top-8 right-8 p-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-white uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-[0.2em]"
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
