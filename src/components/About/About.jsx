"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import { motion } from "framer-motion"

const infoItems = [
   { label: "Localizacao", value: "Cabo Frio, RJ"        },
   { label: "Experiencia", value: "~5 anos programando"  },
   { label: "Foco",        value: "Full Stack Web"       },
]

const educationItems = [
   { course: "Analise e Desenvolvimento de Sistemas", start: "ago/2025" },
   { course: "Ciencias da Computacao",                start: "fev/2026" },
]

export default function About() {
   return (
      <SectionWrapper id="sobre" variant="fadeLeft" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            <motion.div
               initial={{ opacity: 0, x: -24 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
               className="w-full md:w-80 flex-shrink-0"
            >
               <div className="rounded-2xl border border-purple-dim/30 bg-bg-surface/80 backdrop-blur-sm p-6 flex flex-col gap-5">

                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-base to-neon-dim flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        AC
                     </div>
                     <div className="flex flex-col">
                        <p className="text-text-primary font-semibold text-sm">Arthur Couto</p>
                        <p className="text-text-muted text-xs">Full Stack Developer</p>
                     </div>
                  </div>

                  <div className="w-full h-px bg-purple-dim/20"></div>

                  <div className="flex flex-col gap-3">
                     {infoItems.map((item) => (
                        <div key={item.label} className="flex flex-col gap-0.5">
                           <span className="text-text-muted text-xs uppercase tracking-wider">{item.label}</span>
                           <span className="text-text-secondary text-sm font-medium">{item.value}</span>
                        </div>
                     ))}
                  </div>

                  <div className="w-full h-px bg-purple-dim/20"></div>

                  <div className="flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-base opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-base"></span>
                     </span>
                     <span className="text-neon-base text-xs font-medium">Disponivel para projetos</span>
                  </div>

               </div>
            </motion.div>

            <div className="flex-1 flex flex-col gap-8">

               <div className="flex flex-col gap-2">
                  <span className="text-neon-base text-xs font-medium tracking-widest uppercase">Sobre mim</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                     Construindo do zero
                     <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                        ao deploy
                     </span>
                  </h2>
               </div>

               <div className="flex flex-col gap-4 text-text-secondary text-base leading-relaxed">
                  <p>
                     Cinco anos construindo aplicacoes web reais de forma independente. Nao so interfaces, nao so APIs, mas o sistema inteiro, do banco de dados ao browser do usuario.
                  </p>
                  <p>
                     Trabalho com produto em mente. Cada decisao tecnica passa pelo impacto real na experiencia de quem usa. Codigo limpo nao e objetivo, e consequencia de pensar bem antes de escrever.
                  </p>
               </div>

               <div className="flex flex-col gap-3">
                  <span className="text-text-muted text-xs uppercase tracking-wider">Formacao</span>
                  <div className="flex flex-col gap-3">
                     {educationItems.map((item) => (
                        <div key={item.course} className="flex items-start gap-3">
                           <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-base flex-shrink-0"></span>
                           <div className="flex flex-col">
                              <p className="text-text-secondary text-sm font-medium">{item.course}</p>
                              <p className="text-text-muted text-xs">Inicio: {item.start}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

         </div>
      </SectionWrapper>
   )
}