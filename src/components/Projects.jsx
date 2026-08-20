import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma SaaS Premium",
    description: "Design e desenvolvimento completo para um produto digital B2B focado em retenção.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "E-commerce de Alta Conversão",
    description: "Loja virtual otimizada para velocidade extrema e checkout sem fricção.",
    tags: ["Next.js", "Shopify", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Landing Page Escala",
    description: "Página de vendas focada em lançamento de infoprodutos com taxas de 15% de conversão.",
    tags: ["Vite", "React", "Alta Conversão"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">Cases</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Trabalhos em Destaque</h2>
        <p className="text-zinc-400 max-w-xl">
          Um portfólio selecionado de projetos focados em estética premium e resultados reais.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-24">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`group flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
          >
            <div className="w-full md:w-3/5 overflow-hidden rounded-2xl glass-card p-2 relative aspect-[4/3] md:aspect-video cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-white" />
              </div>
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-zinc-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
