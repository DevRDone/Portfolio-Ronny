import { motion } from "framer-motion";
import { Code2, Megaphone, TrendingUp } from "lucide-react";

export function Services() {
  return (
    <section id="servicos" className="py-24 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 block">Especialidade</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-['Orbitron']">Criação de Sites e Landing Pages</h2>
        <p className="text-zinc-300 max-w-xl mx-auto">
          Nosso foco absoluto é desenvolver ecossistemas digitais que convertem. Da estrutura de código ao design premium.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-3 bg-zinc-950/90 border border-white/10 p-10 md:p-16 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500">
            <Code2 className="text-white" size={36} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight font-['Orbitron']">Desenvolvimento Web de Alta Performance</h3>
          <p className="text-zinc-300 max-w-3xl text-lg mb-8 leading-relaxed">
            Páginas de altíssima conversão com design moderno, microinterações envolventes e métricas de velocidade otimizadas. Desenvolvemos interfaces que transmitem autoridade imediata e transformam cliques em vendas contínuas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200 bg-white/5">Design Premium</span>
            <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200 bg-white/5">Código Limpo</span>
            <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200 bg-white/5">Carregamento Instantâneo</span>
          </div>
        </motion.div>

        {/* Secondary Services - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-3 flex flex-col md:flex-row gap-6 mt-4"
        >
          <div className="flex-1 bg-zinc-950/90 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
              <Megaphone className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-1 text-white font-['Orbitron']">Criativos para Anúncios</h4>
              <p className="text-sm text-zinc-300">Artes e vídeos para complementar seu funil.</p>
            </div>
          </div>
          
          <div className="flex-1 bg-zinc-950/90 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-purple-400" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-1 text-white font-['Orbitron']">Gestão de Tráfego Pago</h4>
              <p className="text-sm text-zinc-300">Escala e distribuição para as páginas criadas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
