import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    tag: "CONVERSÃO & LANÇAMENTOS",
    title: "PÁGINAS DE VENDAS",
    status: "Sob consulta",
    subtitle: "Páginas de alta performance para infoprodutos, serviços e ofertas diretas com foco total em conversão.",
    recommended: false,
    features: [
      "Copywriting & estrutura magnética AIDA",
      "Design exclusivo Kova Labs 100% responsivo",
      "Otimização de velocidade extrema (100/100)",
      "Integração com WhatsApp e checkout direct"
    ],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento com a Kova Labs para uma Página de Vendas.",
    cta: "SOLICITAR NO WHATSAPP",
    variant: "violet"
  },
  {
    tag: "PROFISSIONAIS & EMPRESAS",
    title: "SITES INSTITUCIONAIS",
    status: "Sob consulta",
    subtitle: "Presença digital de alta autoridade para Advogados, Personal Trainers, Barbeiros, Médicos e Negócios Locais.",
    recommended: true,
    badgeText: "RECOMENDADO",
    features: [
      "Apresentação premium da sua marca",
      "Seções customizadas de serviços & portfólio",
      "Otimização SEO para TOP #1 no Google",
      "Botões diretos de contato e agendamento VIP"
    ],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento com a Kova Labs para um Site Institucional.",
    cta: "SOLICITAR NO WHATSAPP",
    variant: "violet"
  },
  {
    tag: "SISTEMAS & AUTOMAÇÕES",
    title: "CRMs & SISTEMAS WEB",
    status: "Sob consulta",
    subtitle: "Sistemas web e CRMs sob medida para gerenciar seus clientes, leads, funis e automatizar os processos do seu negócio.",
    recommended: false,
    features: [
      "Painel de controle / Dashboard em tempo real",
      "Gestão de leads, etapas e funil de vendas",
      "Autenticação de usuários & Supabase / Postgres",
      "Fluxos operacionais & Webhooks WhatsApp"
    ],
    whatsappMsg: "Olá! Gostaria de solicitar um orçamento com a Kova Labs para um CRM ou Sistema Web personalizado.",
    cta: "FALAR COM ESPECIALISTA",
    variant: "outline"
  }
];

export function Pricing() {
  const whatsappBase = "https://wa.me/5585996590156";

  return (
    <section id="precos" className="py-24 px-6 max-w-7xl mx-auto relative bg-[#050507]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-[#7C3AED] mb-4 block font-bold">
          Investimento & Formatos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase font-['Orbitron']">
          Projetos Sob Encomenda
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto text-base md:text-lg">
          Desenvolvemos soluções 100% personalizadas sob medida na Kova Labs. Escolha o formato ideal para o seu momento.
        </p>
      </motion.div>

      {/* Grid of 3 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative bg-[#121216] border ${
              plan.recommended ? "border-[#7C3AED] shadow-[0_0_30px_rgba(124,58,237,0.2)]" : "border-white/10"
            } p-8 rounded-2xl flex flex-col justify-between group hover:border-[#7C3AED]/60 transition-all duration-300`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 right-6 bg-[#7C3AED] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                {plan.badgeText}
              </div>
            )}

            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#7C3AED] mb-2 font-bold">
                {plan.tag}
              </div>

              <div className="flex items-baseline justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight font-['Orbitron']">
                  {plan.title}
                </h3>
              </div>

              <div className="mb-6 flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="text-zinc-300 text-xs font-mono">ORÇAMENTO</span>
                <span className="text-2xl font-extrabold tracking-tight text-white font-mono">
                  {plan.status}
                </span>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                {plan.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-200">
                    <span className="w-4 h-4 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
                      <Check size={10} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${whatsappBase}?text=${encodeURIComponent(plan.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar orçamento de ${plan.title} na Kova Labs pelo WhatsApp`}
              className={`w-full py-4 text-center font-bold tracking-widest text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-xl min-h-[44px] ${
                plan.recommended
                  ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              <MessageCircle size={16} />
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Wide Bottom Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-[#121216] border border-white/15 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#EF233C] mb-2 font-bold">
            PROJETOS ESPECIAIS & DEMANDAS SOB ENCOMENDA
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 font-['Orbitron']">
            Precisa de um projeto exclusivo ou integração personalizada?
          </h3>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Seja para advogados, personal trainers, barbeiros, clínicas ou empresas com demandas específicas de CRM e automações, a Kova Labs desenvolve a solução ideal sob medida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4 w-full md:w-auto flex-shrink-0">
          <div className="text-left md:text-right">
            <span className="text-2xl md:text-3xl font-black text-white font-mono block">
              Sob consulta
            </span>
            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
              / KOVA LABS CUSTOM
            </span>
          </div>

          <a
            href={`${whatsappBase}?text=${encodeURIComponent("Olá Kova Labs! Gostaria de solicitar um orçamento para um projeto especial sob encomenda.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento para projeto personalizado na Kova Labs pelo WhatsApp"
            className="w-full md:w-auto px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            <MessageCircle size={16} />
            SOLICITAR NO WHATSAPP
          </a>
        </div>
      </motion.div>
    </section>
  );
}
