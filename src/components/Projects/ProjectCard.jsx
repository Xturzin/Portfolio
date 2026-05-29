"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ProjectCard({ project, index, featured = false }) {
   const cardRef   = useRef(null)
   const tiltRef   = useRef({ x: 0, y: 0 })
   const rafRef    = useRef(null)

   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768)
      check()
      window.addEventListener("resize", check)
      return () => window.removeEventListener("resize", check)
   }, [])

   useEffect(() => {
      return () => {
         if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
         }
      }
   }, [])

   const applyTilt = () => {
      if (!cardRef.current) return
      const { x, y } = tiltRef.current
      cardRef.current.style.transform =
         `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg)`
   }

   const handleMouseMove = (e) => {
      if (isMobile) return
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width - 0.5
      const cy = (e.clientY - rect.top) / rect.height - 0.5

      tiltRef.current = {
         x: cy * -2.5,
         y: cx * 2.5,
      }

      if (!rafRef.current) {
         rafRef.current = requestAnimationFrame(() => {
            applyTilt()
            rafRef.current = null
         })
      }
   }

   const handleMouseEnter = () => {
      if (isMobile) return
      if (cardRef.current) {
         cardRef.current.style.transition = "transform 0.12s ease, box-shadow 0.3s ease, border-color 0.3s ease"
      }
   }

   const handleMouseLeave = () => {
      if (isMobile) return
      tiltRef.current = { x: 0, y: 0 }
      if (cardRef.current) {
         cardRef.current.style.transition = "transform 0.65s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease"
         applyTilt()
      }
   }

   const dotColor = project.isPurple ? "bg-purple-light" : "bg-neon-base"
   const pingColor = project.isPurple ? "bg-purple-light" : "bg-neon-base"

   const borderHover = project.isPurple
      ? "hover:border-purple-base/50"
      : "hover:border-neon-base/40"

   const glowHover = featured
      ? (project.isPurple
         ? "hover:shadow-[0_4px_40px_rgba(124,58,237,0.12)]"
         : "hover:shadow-[0_4px_40px_rgba(0,232,122,0.10)]")
      : (project.isPurple
         ? "hover:shadow-[0_2px_20px_rgba(124,58,237,0.06)]"
         : "hover:shadow-[0_2px_20px_rgba(0,232,122,0.05)]")

   const gradFrom = project.isPurple
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
      : "from-neon-base/25 to-bg-elevated"

   const letterColor = project.isPurple
      ? "text-purple-glow"
      : "text-neon-base"

   const mockupBorder = project.isPurple
      ? "group-hover:border-purple-base/30"
      : "group-hover:border-neon-base/30"

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
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className={"group relative rounded-3xl border overflow-hidden " + (featured ? "border-purple-dim/25" : "border-purple-dim/12") + " " + borderHover + " " + glowHover}
      >
         <div
            className={
               "absolute inset-0 bg-gradient-to-br " +
               gradFrom +
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

         <div className={"relative z-10 flex flex-col md:flex-row items-start " + (featured ? "p-10 md:p-16 gap-12 md:gap-20" : "p-7 md:p-10 gap-8 md:gap-14")}>
            <div className="flex-1 flex flex-col gap-6">

               <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                     <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                        <span className={"animate-ping absolute inline-flex h-full w-full rounded-full opacity-25 " + pingColor}></span>
                        <span className={"relative inline-flex rounded-full h-1.5 w-1.5 opacity-75 " + dotColor}></span>
                     </span>
                     <span className="text-text-muted text-xs font-medium tracking-wider uppercase">
                        Live Project
                     </span>
                  </div>

                  <h3 className={"text-text-primary font-bold tracking-tight " + (featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl")}>
                     {project.name}
                  </h3>

                  <p className="text-text-secondary text-sm">
                     {project.tagline}
                  </p>
               </div>

               <p className="text-text-secondary text-base leading-relaxed max-w-lg">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-2">
                  {(project.stack || []).map((tech) => (
                     <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-purple-dim/30 bg-bg-elevated/80 text-text-muted text-xs"
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
                     aria-label={`Ver projeto ${project.name} ao vivo`}
                     className={
                        "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 active:scale-[0.97] " +
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
                        aria-label={`Ver codigo de ${project.name} no GitHub`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-purple-dim/30 text-text-muted hover:border-purple-base/40 hover:text-text-secondary transition-all duration-300 hover:scale-105 active:scale-[0.97]"
                     >
                        <span>Codigo</span>
                     </a>
                  )}
               </div>
            </div>

            <div className={"w-full flex-shrink-0 " + (featured ? "md:w-80 lg:w-[26rem]" : "md:w-60 lg:w-72")}>

               <div className={
                  "relative rounded-2xl border border-purple-dim/20 bg-bg-elevated/60 backdrop-blur-sm overflow-hidden aspect-video transition-all duration-500 " +
                  mockupBorder
               }>

                  <div className="absolute top-0 left-0 right-0 h-7 bg-bg-deep/90 flex items-center px-3 gap-1.5 border-b border-purple-dim/20">
                     <span className="w-2 h-2 rounded-full bg-red-base/60" />
                     <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                     <span className="w-2 h-2 rounded-full bg-neon-base/60" />

                     <div className="flex-1 mx-2 h-3.5 rounded-full bg-bg-surface flex items-center px-2">
                        <span className="text-text-muted text-[7px] truncate opacity-50">
                           {project.displayUrl}
                        </span>
                     </div>
                  </div>

                  <div className="absolute inset-0 pt-7 flex flex-col items-center justify-center gap-3 p-5">
                     <div className={
                        "w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg " +
                        mockupAccent
                     }>
                        <span className={"text-sm font-bold " + letterColor}>
                           {project.name.charAt(0)}
                        </span>
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </motion.div>
   )
}
