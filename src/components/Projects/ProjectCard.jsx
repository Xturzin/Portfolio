"use client"

import { useState } from "react"
import { motion }   from "framer-motion"

function ProjectCover({ project }) {
   const isPurple  = project.isPurple
   const accent    = isPurple ? "#a855f7"  : "#00e87a"
   const accentDim = isPurple ? "rgba(124,58,237,0.22)" : "rgba(0,232,122,0.16)"
   const glow      = isPurple ? "rgba(124,58,237,0.28)" : "rgba(0,232,122,0.20)"
   const bgGrad    = isPurple
      ? "linear-gradient(135deg, rgba(61,42,110,0.55) 0%, rgba(22,22,42,0.80) 60%)"
      : "linear-gradient(135deg, rgba(0,128,74,0.30) 0%, rgba(22,22,42,0.80) 60%)"

   return (
      <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
         {/* Fundo base */}
         <div className="absolute inset-0" style={{ background: bgGrad }} />

         {/* Glow radial */}
         <div className="absolute rounded-full" aria-hidden="true" style={{
            width: 380, height: 380,
            top: "-30%", left: "-5%",
            background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
         }} />

         {/* Elemento decorativo: janela de browser centralizada */}
         <div className="absolute inset-0 flex items-center justify-center px-8">
            <div
               className="w-full rounded-xl overflow-hidden"
               style={{
                  maxWidth: 360,
                  border: `1px solid ${accentDim}`,
                  background: "rgba(7,7,15,0.75)",
                  boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accentDim}`,
               }}
            >
               {/* Chrome do browser */}
               <div className="flex items-center gap-1.5 px-3 border-b" style={{
                  height: 28,
                  background: "rgba(7,7,15,0.90)",
                  borderColor: accentDim,
               }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "rgba(239,68,68,0.5)" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "rgba(250,204,21,0.5)" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: `${accent}80` }} />
                  <div className="flex-1 mx-2 rounded-full flex items-center px-2" style={{
                     height: 14,
                     background: "rgba(255,255,255,0.04)",
                     border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                     <span style={{ fontSize: 7, color: "rgba(255,255,255,0.30)" }}>{project.displayUrl}</span>
                  </div>
               </div>

               {/* Conteúdo da janela */}
               <div className="p-4" style={{ minHeight: 90 }}>
                  {project.mockup === "organizer" && <OrganizerContent accent={accent} accentDim={accentDim} />}
                  {project.mockup === "tasks"     && <TasksContent     accent={accent} accentDim={accentDim} />}
               </div>
            </div>
         </div>

         {/* Fade inferior para transição com o conteúdo */}
         <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-surface to-transparent" />
      </div>
   )
}

function OrganizerContent({ accent, accentDim }) {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex items-center justify-between mb-1">
            <div className="h-2 w-16 rounded-full" style={{ background: accentDim }} />
            <div className="h-2 w-8 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
         </div>
         {[{ w: "75%", done: false }, { w: "55%", done: true }, { w: "85%", done: false }].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
               <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0 flex items-center justify-center" style={{
                  border: `1px solid ${row.done ? accent : "rgba(255,255,255,0.15)"}`,
                  background: row.done ? `${accent}22` : "transparent",
               }}>
                  {row.done && <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke={accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
               </div>
               <div className="h-1.5 rounded-full" style={{ width: row.w, background: row.done ? "rgba(255,255,255,0.10)" : accentDim }} />
            </div>
         ))}
         <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
               <div className="h-full w-2/3 rounded-full" style={{ background: accent }} />
            </div>
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.30)" }}>2/3</span>
         </div>
      </div>
   )
}

function TasksContent({ accent }) {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex gap-1.5 mb-1">
            {["A fazer", "Fazendo", "Feito"].map((tab, i) => (
               <div key={tab} className="px-2 rounded-full flex items-center" style={{
                  height: 14, fontSize: 6,
                  background: i === 1 ? `${accent}25` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 1 ? accent + "55" : "rgba(255,255,255,0.06)"}`,
                  color: i === 1 ? accent : "rgba(255,255,255,0.25)",
               }}>
                  {tab}
               </div>
            ))}
         </div>
         {["Revisar design", "Criar componente", "Deploy final"].map((label, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg px-2.5" style={{
               height: 24,
               background: i === 0 ? `${accent}12` : "rgba(255,255,255,0.03)",
               border: `1px solid ${i === 0 ? accent + "40" : "rgba(255,255,255,0.05)"}`,
            }}>
               <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{
                  background: i === 1 ? "rgba(255,255,255,0.15)" : accent,
               }} />
               <span style={{ fontSize: 7, color: i === 1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.60)", flex: 1 }}>{label}</span>
            </div>
         ))}
      </div>
   )
}

export default function ProjectCard({ project, index }) {
   const [hovered, setHovered] = useState(false)

   const isPurple    = project.isPurple
   const borderHover = isPurple ? "rgba(168,85,247,0.35)" : "rgba(0,232,122,0.30)"
   const dotClass    = isPurple ? "bg-purple-light" : "bg-neon-base"

   const ctaClass = isPurple
      ? "border-purple-base/50 text-purple-light hover:bg-purple-base/10 hover:border-purple-light/60"
      : "border-neon-base/40 text-neon-base hover:bg-neon-base/10 hover:border-neon-base/60"

   return (
      <motion.div
         initial={{ opacity: 0, y: 32 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, margin: "-40px" }}
         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.10 }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className="group relative rounded-3xl overflow-hidden transition-all duration-300"
         style={{
            border: `1px solid ${hovered ? borderHover : "rgba(61,42,110,0.25)"}`,
            background: "rgba(15,15,26,0.75)",
            boxShadow: hovered
               ? `0 4px 48px rgba(0,0,0,0.35), 0 0 0 1px ${borderHover}`
               : "0 2px 12px rgba(0,0,0,0.2)",
         }}
      >
         {/* Cover visual — a parte que tinha "sem imagens" */}
         <ProjectCover project={project} />

         {/* Info section */}
         <div className="p-7 md:p-9 flex flex-col gap-5">

            <div className="flex flex-col gap-2.5">
               <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                     <span className={"animate-ping absolute inline-flex h-full w-full rounded-full opacity-25 " + dotClass} />
                     <span className={"relative inline-flex rounded-full h-1.5 w-1.5 opacity-75 " + dotClass} />
                  </span>
                  <span className="text-text-muted text-xs font-medium tracking-wider uppercase">
                     Live Project
                  </span>
                  {project.category && (
                     <span className="px-2 py-0.5 rounded-full border border-purple-dim/25 text-text-muted text-[10px] uppercase tracking-wider">
                        {project.category}
                     </span>
                  )}
               </div>

               <h3 className="text-text-primary font-bold text-xl md:text-2xl tracking-tight">
                  {project.name}
               </h3>

               <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
               </p>
            </div>

            <div className="flex flex-wrap gap-2">
               {(project.stack || []).map((tech) => (
                  <span
                     key={tech}
                     className="px-3 py-1 rounded-full border border-purple-dim/25 bg-bg-elevated/60 text-text-muted text-xs"
                  >
                     {tech}
                  </span>
               ))}
            </div>

            <div className="flex items-center gap-3">
               <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver projeto ${project.name} ao vivo`}
                  className={"inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 active:scale-[0.97] " + ctaClass}
               >
                  Ver projeto
               </a>

               {project.github && (
                  <a
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={`Ver código de ${project.name} no GitHub`}
                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-purple-dim/30 text-text-muted hover:border-purple-base/40 hover:text-text-secondary transition-all duration-300 hover:scale-105 active:scale-[0.97]"
                  >
                     Código
                  </a>
               )}
            </div>

         </div>
      </motion.div>
   )
}
