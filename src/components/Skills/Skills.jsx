"use client"

import { useState }       from "react"
import SectionWrapper     from "@/components/shared/SectionWrapper"
import { motion }         from "framer-motion"

const coreStack = [
   {
      id:            "react",
      name:          "React",
      description:   "Interfaces modernas e componentizadas com foco em experiencia do usuario.",
      dotClass:      "bg-blue-base",
      glowColor:     "rgba(59,130,246,0.25)",
      borderActive:  "border-blue-base/50",
      gradientClass: "from-blue-base/10 to-transparent",
      label:         "Frontend",
   },
   {
      id:            "node",
      name:          "Node.js",
      description:   "APIs REST, autenticacao, integracao com banco de dados e logica de servidor.",
      dotClass:      "bg-neon-base",
      glowColor:     "rgba(0,232,122,0.22)",
      borderActive:  "border-neon-base/50",
      gradientClass: "from-neon-dim/15 to-transparent",
      label:         "Backend",
   },
   {
      id:            "javascript",
      name:          "JavaScript",
      description:   "ES6+, assincronia, manipulacao de DOM, logica de negocio no front e no back.",
      dotClass:      "bg-yellow-400",
      glowColor:     "rgba(250,204,21,0.22)",
      borderActive:  "border-yellow-400/50",
      gradientClass: "from-yellow-400/8 to-transparent",
      label:         "Core",
   },
   {
      id:            "python",
      name:          "Python",
      description:   "Automacao, scripts, processamento de dados e aplicacoes back end.",
      dotClass:      "bg-blue-light",
      glowColor:     "rgba(96,165,250,0.22)",
      borderActive:  "border-blue-light/50",
      gradientClass: "from-blue-light/10 to-transparent",
      label:         "Backend",
   },
]

const otherTech = [
   { id: "html",     name: "HTML5"       },
   { id: "css",      name: "CSS3"        },
   { id: "nextjs",   name: "Next.js"     },
   { id: "tailwind", name: "TailwindCSS" },
   { id: "git",      name: "Git"         },
   { id: "vercel",   name: "Vercel"      },
   { id: "rest",     name: "REST APIs"   },
   { id: "postgres", name: "PostgreSQL"  },
]

function CoreCard({ tech, index }) {
   const [hovered, setHovered] = useState(false)

   return (
      <motion.div
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-40px" }}
         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className={"group relative rounded-2xl border bg-bg-surface/80 backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden cursor-default hover:-translate-y-1 " + (hovered ? "border-purple-base/30 " + tech.borderActive : "border-purple-dim/20")}
         style={{ boxShadow: hovered ? ("0 0 32px " + tech.glowColor) : "none" }}
      >
         <div className={"absolute inset-0 bg-gradient-to-br " + tech.gradientClass + " transition-opacity duration-300 pointer-events-none " + (hovered ? "opacity-100" : "opacity-0")}></div>

         <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <span className={"w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 " + tech.dotClass + (hovered ? " shadow-[0_0_10px_currentColor] scale-125" : "")}></span>
               <h3 className="text-text-primary font-bold text-xl tracking-tight">{tech.name}</h3>
            </div>
            <span className="text-text-muted text-[10px] uppercase tracking-widest border border-purple-dim/25 px-2 py-0.5 rounded-full">
               {tech.label}
            </span>
         </div>

         <p className="relative z-10 text-text-secondary text-sm leading-relaxed">
            {tech.description}
         </p>

         <div className={"relative z-10 h-px w-full bg-gradient-to-r from-transparent transition-all duration-500 " + (hovered ? "via-purple-base/40 to-transparent opacity-100" : "via-purple-dim/20 to-transparent opacity-60")}></div>
      </motion.div>
   )
}

export default function Skills() {
   return (
      <SectionWrapper id="skills" variant="scaleIn" className="py-28 md:py-40 px-6 md:px-16">
         <div className="max-w-6xl mx-auto flex flex-col gap-16">

            <div className="flex flex-col gap-4">
               <span className="section-label">Stack</span>
               <h2>
                  Tecnologias que
                  <br />
                  <span className="text-text-primary">
                     uso no dia a dia
                  </span>
               </h2>
            </div>

            <div className="flex flex-col gap-5">
               <div className="flex items-center gap-4">
                  <span className="text-label text-text-muted uppercase tracking-wide whitespace-nowrap">Core Stack</span>
                  <div className="flex-1 h-px bg-purple-dim/20"></div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreStack.map((tech, i) => (
                     <CoreCard key={tech.id} tech={tech} index={i} />
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-5">
               <div className="flex items-center gap-4">
                  <span className="text-label text-text-muted uppercase tracking-wide whitespace-nowrap">Outras Tecnologias</span>
                  <div className="flex-1 h-px bg-purple-dim/20"></div>
               </div>
               <div className="flex flex-wrap gap-3">
                  {otherTech.map((tech, i) => (
                     <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                        className="px-4 py-2 rounded-full border border-purple-dim/20 bg-bg-surface/80 backdrop-blur-sm text-text-secondary text-sm font-medium transition-all duration-300 hover:border-purple-base/40 hover:text-text-primary hover:bg-bg-elevated hover:shadow-purple-sm cursor-default"
                     >
                        {tech.name}
                     </motion.div>
                  ))}
               </div>
            </div>

         </div>
      </SectionWrapper>
   )
}