"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ProjectCard({ project, index }) {
   const cardRef = useRef(null)
   const [tilt, setTilt] = useState({ x: 0, y: 0 })
   const [hovering, setHovering] = useState(false)

   const dotColor    = project.isPurple ? "bg-purple-light" : "bg-neon-base"
   const pingColor   = project.isPurple ? "bg-purple-light" : "bg-neon-base"

   const borderHover = project.isPurple
      ? "hover:border-purple-base/50"
      : "hover:border-neon-base/40"

   const glowHover = project.isPurple
      ? "hover:shadow-[0_8px_60px_rgba(124,58,237,0.18)]"
      : "hover:shadow-[0_8px_60px_rgba(0,232,122,0.12)]"

   const gradientFrom = project.isPurple
      ? "from-purple-base/8"
      : "from-neon-dim/12"

   const accentVia = project.isPurple
      ? "via-purple-base/35"
      : "via-neon-base/25"

   const ctaClass = project.isPurple
      ? "border-purple-base/50 text-purple-light hover:bg-purple-base/10 hover:border-purple-light/60 hover:shadow-purple-sm"
      : "border-neon-base/40 text-neon-base hover:bg-neon-base/10 hover:border-neon-base/60 hover:shadow-neon-sm"

   const mockupAccent = project.isPurple
      ? "from-purple-base to-purple-dim"
      : "from-neon-dim to-bg-elevated"

   const letterColor = project.isPurple ? "text-purple-glow" : "text-neon-base"

   const mockupBorder = project.isPurple
      ? "group-hover:border-purple-base/30"
      : "group-hover:border-neon-base/30"

   const handleMouseMove = (e) => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width - 0.5
      const cy = (e.clientY - rect.top) / rect.height - 0.5

      setTilt({
         x: cy * -5,
         y: cx * 5,
      })
   }

   const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
      setHovering(false)
   }

   return (
      <motion.div
         ref={cardRef}
         initial={{ opacity: 0, y: 32 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.12,
         }}
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={handleMouseLeave}
         style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: hovering
               ? "transform 0.1s ease"
               : "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            transformOrigin: "center center",
         }}
         className={
            "group relative rounded-3xl border border-purple-dim/20 overflow-hidden " +
            borderHover +
            " " +
            glowHover
         }
      >
         {/* background gradient */}
         <div
            className={
               "absolute inset-0 bg-gradient-to-br " +
               gradientFrom +
               " to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }
         />

         <div className="absolute inset-0 bg-bg-surface/80 backdrop-blur-sm pointer-events-none" />

         <div
            className={
               "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent " +
               accentVia +
               " to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            }
         />

         <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* LEFT */}
            <div className="flex-1 flex flex-col gap-6">

               <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                     <span className="relative flex h-2 w-2">
                        <span className={"animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 " + pingColor} />
                        <span className={"relative inline-flex rounded-full h-2 w-2 " + dotColor} />
                     </span>
                     <span className="text-text-muted text-xs font-medium tracking-wider uppercase">
                        Live Project
                     </span>
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
                     <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-purple-dim/30 bg-bg-elevated/80 text-text-muted text-xs font-medium"
                     >
                        {tech}
                     </span>
                  ))}
               </div>

               <div className="flex items-center gap-3 pt-2">

                  <a
                     href={project.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={"Ver projeto " + project.name + " ao vivo"}
                     className={
                        "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 active:scale-95 " +
                        ctaClass
                     }
                  >
                     <span>Ver projeto</span>
                  </a>

                  {project.github && (
                     <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={"Ver codigo fonte de " + project.name}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-purple-dim/30 text-text-muted hover:border-purple-base/40 hover:text-text-secondary transition-all duration-300 hover:scale-105 active:scale-95"
                     >
                        <span>Codigo</span>
                     </a>
                  )}

               </div>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-72 lg:w-80 flex-shrink-0">

               <div className={"relative rounded-2xl border border-purple-dim/20 bg-bg-elevated/60 backdrop-blur-sm overflow-hidden aspect-video transition-all duration-500 " + mockupBorder}>

                  <div className="absolute top-0 left-0 right-0 h-7 bg-bg-deep/90 flex items-center px-3 gap-1.5 border-b border-purple-dim/20">
                     <span className="w-2 h-2 rounded-full bg-red-base/60"></span>
                     <span className="w-2 h-2 rounded-full bg-yellow-400/60"></span>
                     <span className="w-2 h-2 rounded-full bg-neon-base/60"></span>

                     <div className="flex-1 mx-2 h-3.5 rounded-full bg-bg-surface flex items-center px-2">
                        <span className="text-text-muted text-[7px] truncate opacity-50">
                           {project.displayUrl}
                        </span>
                     </div>
                  </div>

                  <div className="absolute inset-0 pt-7 flex flex-col items-center justify-center gap-3 p-5">
                     <div className={"w-9 h-9 rounded-xl bg-gradient-to-br " + mockupAccent + " flex items-center justify-center shadow-lg"}>
                        <span className={"text-sm font-bold " + letterColor}>
                           {project.name.charAt(0)}
                        </span>
                     </div>

                     <div className="flex flex-col items-center gap-1.5 w-full">
                        <div className="h-1.5 w-20 rounded-full bg-purple-dim/30" />
                        <div className="h-1.5 w-14 rounded-full bg-purple-dim/20" />
                     </div>

                     <div className="grid grid-cols-2 gap-1.5 w-full mt-1">
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20" />
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20" />
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20" />
                        <div className="h-7 rounded-lg bg-purple-dim/10 border border-purple-dim/20" />
                     </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               </div>
            </div>

         </div>
      </motion.div>
   )
}