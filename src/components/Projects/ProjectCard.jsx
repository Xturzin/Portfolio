"use client"

import { useState } from "react"
import { motion }   from "framer-motion"

const itemVariant = {
   hidden:  { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCover({ project }) {
   const [loaded, setLoaded] = useState(false)
   const [error,  setError]  = useState(false)

   const isPurple = project.isPurple
   const glow     = isPurple ? "rgba(124,58,237,0.30)" : "rgba(0,232,122,0.22)"
   const bgGrad   = isPurple
      ? "linear-gradient(135deg, rgba(61,42,110,0.60) 0%, rgba(15,15,26,0.90) 70%)"
      : "linear-gradient(135deg, rgba(0,80,46,0.40) 0%, rgba(15,15,26,0.90) 70%)"

   return (
      <div className="relative w-full overflow-hidden rounded-t-3xl" style={{ height: 230 }}>

         {/* Screenshot real */}
         {project.screenshot && !error && (
            <img
               src={project.screenshot}
               alt={`Preview de ${project.name}`}
               onLoad={() => setLoaded(true)}
               onError={() => setError(true)}
               className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"
               style={{ opacity: loaded ? 1 : 0 }}
            />
         )}

         {/* Overlay de cor enquanto carrega ou no fallback */}
         <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
               background: bgGrad,
               opacity: loaded && !error ? 0.55 : 1,
            }}
         />

         {/* Glow radial de identidade */}
         <div className="absolute rounded-full pointer-events-none" style={{
            width: 340, height: 340,
            top: "-25%", left: "-8%",
            background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
         }} />

         {/* Fade para o conteúdo abaixo */}
         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-surface to-transparent pointer-events-none" />

         {/* URL badge */}
         <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(7,7,15,0.70)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.isPurple ? "#a855f7" : "#00e87a" }} />
            <span className="text-[10px] text-text-muted font-medium">{project.displayUrl}</span>
         </div>

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

   const stagger = {
      hidden:  {},
      visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
   }

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
            border:     `1px solid ${hovered ? borderHover : "rgba(61,42,110,0.25)"}`,
            background: "rgba(15,15,26,0.75)",
            boxShadow:  hovered
               ? `0 4px 48px rgba(0,0,0,0.35), 0 0 0 1px ${borderHover}`
               : "0 2px 12px rgba(0,0,0,0.2)",
         }}
      >
         <ProjectCover project={project} />

         <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20px" }}
            className="p-7 md:p-9 flex flex-col gap-5"
         >
            <motion.div variants={itemVariant} className="flex flex-col gap-2.5">
               <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                     <span className={"animate-ping absolute inline-flex h-full w-full rounded-full opacity-25 " + dotClass} />
                     <span className={"relative inline-flex rounded-full h-1.5 w-1.5 opacity-75 " + dotClass} />
                  </span>
                  <span className="text-text-muted text-xs font-medium tracking-wider uppercase">Live Project</span>
                  {project.category && (
                     <span className="px-2 py-0.5 rounded-full border border-purple-dim/25 text-text-muted text-[10px] uppercase tracking-wider">
                        {project.category}
                     </span>
                  )}
               </div>
               <h3 className="text-text-primary font-bold text-xl md:text-2xl tracking-tight">{project.name}</h3>
               <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
            </motion.div>

            <motion.div variants={itemVariant} className="flex flex-wrap gap-2">
               {(project.stack || []).map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full border border-purple-dim/25 bg-bg-elevated/60 text-text-muted text-xs">
                     {tech}
                  </span>
               ))}
            </motion.div>

            <motion.div variants={itemVariant} className="flex items-center gap-3">
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
            </motion.div>
         </motion.div>
      </motion.div>
   )
}
