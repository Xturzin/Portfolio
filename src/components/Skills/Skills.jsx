"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"

const coreStack = [
   {
      id: "react",
      name: "React",
      description: "Interfaces modernas, componentizadas e reutilizaveis com foco em experiencia do usuario.",
      dot: "bg-blue-base",
      border: "hover:border-blue-base/40",
      glow: "hover:shadow-[0_0_24px_rgba(59,130,246,0.18)]",
      gradient: "from-blue-base/15 to-transparent",
   },
   {
      id: "node",
      name: "Node.js",
      description: "APIs REST escaláveis, autenticacao, integracao com banco de dados e logica de servidor.",
      dot: "bg-neon-base",
      border: "hover:border-neon-base/40",
      glow: "hover:shadow-[0_0_24px_rgba(0,232,122,0.18)]",
      gradient: "from-neon-dim/20 to-transparent",
   },
   {
      id: "javascript",
      name: "JavaScript",
      description: "Linguagem principal no front e no back. ES6+, assincronia, manipulacao de DOM e muito mais.",
      dot: "bg-yellow-400",
      border: "hover:border-yellow-400/40",
      glow: "hover:shadow-[0_0_24px_rgba(250,204,21,0.18)]",
      gradient: "from-yellow-400/10 to-transparent",
   },
   {
      id: "python",
      name: "Python",
      description: "Scripts de automacao, processamento de dados e desenvolvimento de aplicacoes back end.",
      dot: "bg-blue-light",
      border: "hover:border-blue-light/40",
      glow: "hover:shadow-[0_0_24px_rgba(96,165,250,0.18)]",
      gradient: "from-blue-light/15 to-transparent",
   },
]

const otherTech = [
   { id: "html",      name: "HTML5"       },
   { id: "css",       name: "CSS3"        },
   { id: "nextjs",    name: "Next.js"     },
   { id: "tailwind",  name: "TailwindCSS" },
   { id: "git",       name: "Git"         },
   { id: "vercel",    name: "Vercel"      },
   { id: "rest",      name: "REST APIs"   },
   { id: "postgres",  name: "PostgreSQL"  },
]

export default function Skills() {
   return (
      <SectionWrapper id="skills" className="py-32 px-6 md:px-12">
         <div className="max-w-6xl mx-auto flex flex-col gap-16">

            <div className="flex flex-col gap-2">
               <span className="text-neon-base text-xs font-medium tracking-widest uppercase">
                  Stack
               </span>
               <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                  Tecnologias que
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     uso no dia a dia
                  </span>
               </h2>
            </div>

            <div className="flex flex-col gap-5">
               <div className="flex items-center gap-4">
                  <span className="text-text-muted text-xs uppercase tracking-wider whitespace-nowrap">
                     Core Stack
                  </span>
                  <div className="flex-1 h-px bg-purple-dim/20"></div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreStack.map((tech) => (
                     <div
                        key={tech.id}
                        className={`group relative rounded-2xl border border-purple-dim/20 bg-bg-surface p-6 flex flex-col gap-3 transition-all duration-300 overflow-hidden cursor-default hover:bg-bg-elevated hover:-translate-y-1 ${tech.border} ${tech.glow}`}
                     >
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                        <div className="relative z-10 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${tech.dot}`}></span>
                              <h3 className="text-text-primary font-semibold text-lg tracking-tight">
                                 {tech.name}
                              </h3>
                           </div>
                           <svg
                              className="w-4 h-4 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                           </svg>
                        </div>

                        <p className="relative z-10 text-text-secondary text-sm leading-relaxed">
                           {tech.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-5">
               <div className="flex items-center gap-4">
                  <span className="text-text-muted text-xs uppercase tracking-wider whitespace-nowrap">
                     Outras Tecnologias
                  </span>
                  <div className="flex-1 h-px bg-purple-dim/20"></div>
               </div>

               <div className="flex flex-wrap gap-3">
                  {otherTech.map((tech) => (
                     <div
                        key={tech.id}
                        className="px-4 py-2 rounded-full border border-purple-dim/20 bg-bg-surface text-text-secondary text-sm font-medium transition-all duration-300 hover:border-purple-base/40 hover:text-text-primary hover:bg-bg-elevated hover:shadow-purple-sm cursor-default"
                     >
                        {tech.name}
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </SectionWrapper>
   )
}