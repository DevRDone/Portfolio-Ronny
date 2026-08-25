import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Sparkles, ExternalLink, Lock } from "lucide-react";

import maviImg from "../assets/projects/mavi.webp";
import vozImg from "../assets/projects/vozqueconverte.webp";
import protocoloImg from "../assets/projects/protocolofive.webp";
import fiveformsImg from "../assets/projects/fiveforms.webp";

const projects = [
  {
    id: 1,
    title: "Mavi Personal Trainer",
    category: "Personal",
    categoryLabel: "Personal Trainer",
    description: "Landing page premium e consultoria fitness online de alta performance, focada em autoridade profissional, planos exclusivos e agendamento direto.",
    tags: ["Personal Trainer", "Consultoria Online", "Alta Conversão", "React"],
    image: maviImg,
    link: "https://mavipersonal.netlify.app",
    badge: "Case de Sucesso",
    badgeColor: "border-green-500/40 text-green-400 bg-green-500/10",
    objectFit: "object-cover object-top"
  },
  {
    id: 2,
    title: "Voz que Converte",
    category: "Landing Page",
    categoryLabel: "Página de Vendas",
    description: "Página de vendas oficial para o treinamento 'Voz que Converte'. Copywriting magnético, estrutura AIDA, VSL responsiva e checkout otimizado.",
    tags: ["Página de Vendas", "Infoproduto", "Checkout Direct", "Speed 100"],
    image: vozImg,
    link: "https://vozqueconverte.netlify.app",
    badge: "Alta Conversão",
    badgeColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    objectFit: "object-cover object-top"
  },
  {
    id: 3,
    title: "Protocolo Five",
    category: "Landing Page",
    categoryLabel: "Página de Vendas",
    description: "Landing page de vendas de alta conversão para o método Protocolo Five. Estrutura validada para tráfego pago (Meta & Google Ads) com alta taxa de retenção.",
    tags: ["Página de Vendas", "Tráfego Pago", "Design Premium", "Vite"],
    image: protocoloImg,
    link: "https://protocolofive.netlify.app",
    badge: "Otimizado para Ads",
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    objectFit: "object-cover object-top"
  },
  {
    id: 4,
    title: "Five Forms - CRM & Gestão",
    category: "CRM",
    categoryLabel: "CRMs & Sistemas",
    description: "CRM inteligente para gestão de candidatos e leads. Criação de formulários integrados na plataforma onde o administrador gerencia respostas e pipelines em tempo real de forma prática.",
    tags: ["CRM Customizado", "Formulários", "Gestão de Candidatos", "Supabase"],
    image: fiveformsImg,
    link: "#",
    badge: "Sistema Privado",
    badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    objectFit: "object-contain bg-black"
  },
  {
    id: 5,
    title: "Site Institucional Corporativo",
    category: "Institucional",
    categoryLabel: "Site Institucional",
    description: "Redesign completo e reposicionamento de marca para empresa corporativa, com SEO local no Google, autoridade digital e captura de novos clientes.",
    tags: ["Site Institucional", "Rework Em Andamento", "SEO Google", "Branding"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    badge: "Rework em Andamento",
    badgeColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    objectFit: "object-cover object-top"
  }
];

const filterCategories = [
  { key: "Todos", label: "Todos os Cases (5)" },
  { key: "Personal", label: "Personal Trainer" },
  { key: "Landing Page", label: "Páginas de Vendas" },
  { key: "CRM", label: "CRMs & Sistemas" },
  { key: "Institucional", label: "Institucional" }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
          <Sparkles size={14} className="text-purple-400" /> CASES REAIS & PROJETOS
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-['Orbitron']">
          Trabalhos em Destaque
        </h2>
        <p className="text-zinc-300 max-w-xl">
          Conheça o portfólio de landing pages de alta conversão, sites institucionais e sistemas CRM customizados.
        </p>
      </motion.div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-16 border-b border-white/10 pb-6" role="tablist" aria-label="Filtro de projetos">
        {filterCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            aria-label={`Filtrar por ${cat.label}`}
            aria-selected={activeFilter === cat.key}
            role="tab"
            className={`px-4 py-2.5 rounded-full font-mono text-xs transition-all duration-300 flex items-center gap-2 min-h-[44px] ${
              activeFilter === cat.key
                ? "bg-white text-black font-bold shadow-lg"
                : "bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16 md:gap-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => {
            const hasLink = project.link && project.link !== "#";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
                className={`group flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
              >
                {/* Project Image Box */}
                <div
                  className={`w-full md:w-3/5 overflow-hidden rounded-2xl glass-card p-2 relative aspect-[16/10] border border-white/10 group-hover:border-white/30 transition-colors flex items-center justify-center bg-black/60 ${
                    hasLink ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() => {
                    if (hasLink) window.open(project.link, "_blank");
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  
                  {/* Badge Top Left */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold border backdrop-blur-md uppercase tracking-wider ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  <img
                    src={project.image}
                    alt={`Capa do projeto ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="750"
                    className={`w-full h-full rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${project.objectFit}`}
                  />
                  
                  {hasLink && (
                    <div 
                      className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/70 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      aria-label={`Ver projeto ${project.title}`}
                    >
                      <ArrowUpRight className="text-white" size={22} />
                    </div>
                  )}
                </div>
                
                {/* Text Content */}
                <div className="w-full md:w-2/5 flex flex-col gap-4 text-left">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                    {project.categoryLabel}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-['Orbitron'] flex items-center gap-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hasLink ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar o projeto ${project.title} ao vivo em nova aba`}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-xl w-fit transition-all duration-300 group/btn min-h-[44px]"
                    >
                      <span>VISITAR PROJETO AO VIVO</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : project.id === 4 ? (
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 rounded-xl w-fit min-h-[44px]">
                      <Lock size={13} />
                      SISTEMA PRIVADO (ACESSO RESTRITO)
                    </span>
                  ) : (
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider border border-amber-500/30 bg-amber-500/10 px-4 py-3 rounded-xl w-fit min-h-[44px]">
                      REWORK EM ANDAMENTO
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
