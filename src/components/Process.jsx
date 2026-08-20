import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Confirmação",
    desc: "Pagamento inicial confirmado para reservar sua vaga na fila e garantir cumprimento rigoroso do prazo.",
  },
  {
    num: "02",
    title: "Briefing",
    desc: "Coleta rápida de dados sobre seu negócio, objetivos, referências visuais e identidade de marca.",
  },
  {
    num: "03",
    title: "UI/UX & Alinhamento",
    desc: "Apresentação da estrutura visual e wireframes para validação do estilo em conjunto.",
  },
  {
    num: "04",
    title: "Desenvolvimento & Ajustes",
    desc: "Código limpo, animações fluidas e rodada de revisão com feedbacks pontuais para lapidar os detalhes.",
  },
  {
    num: "05",
    title: "Lançamento & Entrega",
    desc: "Publicação no seu domínio, otimização de velocidade, entrega dos acessos e site 100% no ar.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">Como Funciona</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Processo de Criação</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Do pagamento ao deploy final, cada etapa é pensada para garantir velocidade, sofisticação e alinhamento com a sua visão.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex items-center gap-8 md:gap-16 mb-16 last:mb-0 md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 1 ? 'md:text-left text-left' : 'md:text-right text-left'}`}>
              <div className="font-mono text-xs text-zinc-500 mb-2">{step.num}</div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{step.title}</h3>
              <p className={`text-zinc-400 text-sm md:text-base max-w-sm ${i % 2 === 1 ? 'mr-auto' : 'ml-auto'}`}>
                {step.desc}
              </p>
            </div>
            
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 ring-4 ring-background shadow-[0_0_15px_rgba(255,255,255,0.5)] -translate-x-[7px] md:-translate-x-1/2" />
            
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
