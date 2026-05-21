"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import { motion } from "framer-motion"

const projects = [
   {
      id: "fora-perrengue",
      name: "Fora Perrengue",
      tagline: "Organizacao pessoal inteligente",
      description: "Aplicacao web completa para organizacao pessoal. Interface limpa, experiencia fluida e foco total na produtividade do usuario no dia a dia.",
      url: "https://test-perrengue.vercel.app",
      displayUrl: "test-perrengue.vercel.app",
      stack: ["React", "Node.js", "JavaScript"],
      isPurple: true,
   },
   {
      id: "vamos-fazer",
      name: "Vamos Fazer?",
      tagline: "Gerenciamento de tarefas e produtividade",
      description: "App de produtividade com foco em simplicidade e clareza. Gerenciamento de tarefas com interface moderna e experiencia de uso refinada.",
      url: "https://vamos-fazer.vercel.app",
      displayUrl: "vamos-fazer.vercel.app",
      stack: ["React", "JavaScript", "CSS"],
      isPurple: false,
   },
]

function ProjectCard({ project, index }) {
   const dotColor          = project.isPurple ? "bg-purple-light" : "bg-neon-base"
   const pingColor         = project.isPurple ? "bg-purple-light" : "bg-neon-base"
   const borderHover       = project.isPurple ? "hover:border-purple-base/50" : "hover:border-neon-base/40"
   const glowHover         = project.isPurple ? "hover:shadow-[0_0_60px_rgba(124,58,237,0.15)]" : "hover:shadow-[0_0_60px_rgba(0,232,122,0.10)]"
   const gradientFrom      = project.isPurple ? "from-purple-base/10" : "from-neon-dim/15"
   const accentVia         = project.isPurple ? "via-purple-base/40" : "via-neon-base/30"
   const ctaBorder         = project.isPurple ? "border-purple-base/50 text-purple-light hover:bg-purple-base/10 hover:border-purple-light/60" : "border-neon-base/40 text-neon-base hover:bg-neon-base/10 hover:border-neon-base/60"
   const mockupAccent      = project.isPurple ? "from-purple-base to-purple-dim" : "from-neon-dim to-bg-elevated"
   const letterColor       = project.isPurple ? "text-purple-glow" : "text-neon-base"
   const mockupBorderHover = project.isPurple ? "group-hover:border-purple-base/30" : "group-hover:border-neon-base/30"

   return (
      <motion.div
         initial={{ opacity: 0, y: 32 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
         className={"group relative rounded-3xl border border-purple-dim/20 bg-bg-surface overflow-hidden transition-all duration-500 hover:-translate-y-1 " + borderHover + " " + glowHover}
      >

         <div className={"absolute inset-0 bg-gradient-to-br " + gradientFrom + " to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}></div>

         <div className={"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent " + accentVia + " to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}></div>

         <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            <div className="flex-1 flex flex-col gap-6">

               <div className="flex flex-col gap-3">

                  <div className="flex items-center gap-2.5">
                     <span className="relative flex h-2 w-2">
                        <span className={"animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 " + pingColor}></span>
                        <span className={"relative inline-flex rounded-full h-2 w-2 " + dotColor}></span>
                     </span>
                     <span className="text-text-muted text-xs font-medium tracking-wider uppercase">Live Project</span>
                  </div>

                  <h3 className="text-text-primary font-bold text-2xl md:text-3xl tracking-tight">
                     {project.name}
                  </h3>

                  <p className="text-text-secondary text-sm font-medium">
                     {project.tagline}
                  </p>

               </div>

               <p className="text-text-secondary text-base leading-relaxed max-w-lg">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                     <span key={tech} className="px-3 py-1 rounded-full border border-purple-dim/30 bg-bg-elevated text-text-muted text-xs font-medium">
                        {tech}
                     </span>
                  ))}
               </div>

               <div className="pt-2">
                  <a
                     href={project.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={"inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 " + ctaBorder}
                  >
                     <span>Ver projeto</span>

                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                     </svg>
                  </a>
               </div>

            </div>

            <div className="w-full md:w-72 lg:w-80 flex-shrink-0">

               <div className={"relative rounded-2xl border border-purple-dim/20 bg-bg-elevated overflow-hidden aspect-video transition-all duration-500 " + mockupBorderHover}>

                  <div className="absolute top-0 left-0 right-0 h-7 bg-bg-deep/90 flex items-center px-3 gap-1.5 border-b border-purple-dim/20">
                     <span className="w-2 h-2 rounded-full bg-red-base/60"></span>
                     <span className="w-2 h-2 rounded-full bg-yellow-400/60"></span>
                     <span className="w-2 h-2 rounded-full bg-neon-base/60"></span>
                     <div className="flex-1 mx-2 h-3.5 rounded-full bg-bg-surface flex items-center px-2">
                        <span className="text-text-muted text-[7px] truncate opacity-50">{project.displayUrl}</span>
                     </div>
                  </div>

                  <div className="absolute inset-0 pt-7 flex flex-col items-center justify-center gap-3 p-5">

                     <div className={"w-8 h-8 rounded-xl bg-gradient-to-br " + mockupAccent + " flex items-center justify-center"}>
                        <span className={"text-xs font-bold " + letterColor}>
                           {project.name.charAt(0)}
                        </span>
                     </div>

                     <div className="flex flex-col items-center gap-1.5 w-full">
                        <div className="h-1.5 w-20 rounded-full bg-purple-dim/30"></div>
                        <div className="h-1.5 w-14 rounded-full bg-purple-dim/20"></div>
                     </div>

                     <div className="grid grid-cols-2 gap-1.5 w-full mt-1">
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20"></div>
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20"></div>
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20"></div>
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20"></div>
                     </div>

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

               </div>

            </div>

         </div>

      </motion.div>
   )
}

export default function Projects() {
   return (
      <SectionWrapper id="projetos" className="py-32 px-6 md:px-12">
         <div className="max-w-6xl mx-auto flex flex-col gap-16">

            <div className="flex flex-col gap-2">
               <span className="text-neon-base text-xs font-medium tracking-widest uppercase">Projetos</span>
               <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                  Produtos que
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     estao no ar
                  </span>
               </h2>
            </div>

            <div className="flex flex-col gap-6">
               {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
               ))}
            </div>

         </div>
      </SectionWrapper>
   )
}