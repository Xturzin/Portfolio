"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

function OrganizerMockup({ isPurple }) {
   const accentBg  = isPurple ? "rgba(168,85,247,0.18)" : "rgba(0,232,122,0.15)"
   const accentLine= isPurple ? "rgba(168,85,247,0.25)" : "rgba(0,232,122,0.22)"
   const checkColor= isPurple ? "#c084fc" : "#00e87a"
   const tagBg     = isPurple ? "rgba(124,58,237,0.25)" : "rgba(0,232,122,0.18)"
   const tagBorder = isPurple ? "rgba(168,85,247,0.40)" : "rgba(0,232,122,0.35)"

   return (
      <div className="absolute inset-0 pt-7 px-4 pb-3 flex flex-col gap-2.5 overflow-hidden">
         <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded-full" style={{ background: accentLine, opacity: 0.8 }} />
            <div className="h-4 w-4 rounded-full flex items-center justify-center" style={{ background: accentBg }}>
               <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4h6M4 1v6" stroke={checkColor} strokeWidth="1.4" strokeLinecap="round"/>
               </svg>
            </div>
         </div>

         {[
            { checked: false, w: "78%", tag: "hoje"   },
            { checked: true,  w: "52%", tag: null      },
            { checked: false, w: "88%", tag: "urgente" },
         ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
               <div
                  className="w-3.5 h-3.5 rounded-sm border flex-shrink-0 flex items-center justify-center"
                  style={{
                     borderColor: item.checked ? checkColor : "rgba(124,58,237,0.25)",
                     background:  item.checked ? accentBg : "transparent",
                  }}
               >
                  {item.checked && (
                     <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3.5" stroke={checkColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  )}
               </div>
               <div
                  className="h-1.5 rounded-full flex-1"
                  style={{ width: item.w, background: accentLine, opacity: item.checked ? 0.25 : 0.55 }}
               />
               {item.tag && (
                  <div
                     className="h-3 px-1.5 rounded-full text-[6px] font-medium flex items-center"
                     style={{ background: tagBg, border: `1px solid ${tagBorder}`, color: checkColor }}
                  >
                     {item.tag}
                  </div>
               )}
            </div>
         ))}

         <div className="mt-auto flex items-center gap-2 pt-1">
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
               <div
                  className="h-full rounded-full w-2/3"
                  style={{ background: `linear-gradient(90deg, ${checkColor}60, ${checkColor})` }}
               />
            </div>
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>2/3</span>
         </div>
      </div>
   )
}

function TasksMockup({ isPurple }) {
   const accent    = isPurple ? "#a855f7" : "#00e87a"
   const accentBg  = isPurple ? "rgba(124,58,237,0.14)" : "rgba(0,232,122,0.10)"
   const activeBg  = isPurple ? "rgba(124,58,237,0.28)" : "rgba(0,232,122,0.22)"
   const activeBorder = isPurple ? "rgba(168,85,247,0.45)" : "rgba(0,232,122,0.40)"

   return (
      <div className="absolute inset-0 pt-7 px-3 pb-3 flex flex-col gap-2 overflow-hidden">
         <div className="flex gap-1.5 mb-0.5">
            {[
               { label: "A fazer",  active: false },
               { label: "Fazendo",  active: true  },
               { label: "Feito",    active: false },
            ].map((tab) => (
               <div
                  key={tab.label}
                  className="px-2 rounded-full flex items-center font-medium"
                  style={{
                     height: 14,
                     fontSize: 6,
                     background:   tab.active ? activeBg   : "rgba(255,255,255,0.04)",
                     border:       `1px solid ${tab.active ? activeBorder : "rgba(255,255,255,0.06)"}`,
                     color:        tab.active ? accent      : "rgba(255,255,255,0.25)",
                  }}
               >
                  {tab.label}
               </div>
            ))}
         </div>

         {[
            { label: "Revisar design do card", done: false, dot: accent           },
            { label: "Implementar animação",   done: true,  dot: "rgba(255,255,255,0.15)" },
            { label: "Deploy em produção",     done: false, dot: accent           },
         ].map((task, i) => (
            <div
               key={i}
               className="flex items-center gap-2 rounded-lg px-2.5"
               style={{
                  height: 26,
                  background: accentBg,
                  border: `1px solid ${i === 0 ? activeBorder : "rgba(255,255,255,0.05)"}`,
               }}
            >
               <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: task.dot }} />
               <span
                  style={{
                     fontSize: 7,
                     color: task.done ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.60)",
                     textDecoration: task.done ? "line-through" : "none",
                     flex: 1,
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     whiteSpace: "nowrap",
                  }}
               >
                  {task.label}
               </span>
            </div>
         ))}

         <div className="flex items-center gap-2 mt-auto pt-1">
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
               <div
                  className="h-full rounded-full"
                  style={{ width: "60%", background: `linear-gradient(90deg, ${accent}55, ${accent})` }}
               />
            </div>
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>60%</span>
         </div>
      </div>
   )
}

function MockupContent({ project }) {
   if (project.mockup === "organizer") return <OrganizerMockup isPurple={project.isPurple} />
   if (project.mockup === "tasks")     return <TasksMockup     isPurple={project.isPurple} />

   const mockupAccent = project.isPurple ? "from-purple-base to-purple-dim" : "from-neon-base/25 to-bg-elevated"
   const letterColor  = project.isPurple ? "text-purple-glow"               : "text-neon-base"
   return (
      <div className="absolute inset-0 pt-7 flex flex-col items-center justify-center gap-3 p-5">
         <div className={`w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg ${mockupAccent}`}>
            <span className={`text-sm font-bold ${letterColor}`}>{project.name.charAt(0)}</span>
         </div>
      </div>
   )
}

export default function ProjectCard({ project, index, featured = false }) {
   const cardRef   = useRef(null)
   const tiltRef   = useRef({ x: 0, y: 0 })
   const rafRef    = useRef(null)

   const [isMobile, setIsMobile] = useState(false)
   const [hovered, setHovered] = useState(false)

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
      setHovered(true)
      if (cardRef.current) {
         cardRef.current.style.transition = "transform 0.12s ease, box-shadow 0.3s ease, border-color 0.3s ease"
      }
   }

   const handleMouseLeave = () => {
      if (isMobile) return
      setHovered(false)
      tiltRef.current = { x: 0, y: 0 }
      if (cardRef.current) {
         cardRef.current.style.transition = "transform 0.65s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease"
         applyTilt()
      }
   }

   const dotColor  = project.isPurple ? "bg-purple-light" : "bg-neon-base"
   const pingColor = project.isPurple ? "bg-purple-light" : "bg-neon-base"

   const borderHover = project.isPurple
      ? "hover:border-purple-base/50"
      : "hover:border-neon-base/40"

   const glowHover = featured
      ? (project.isPurple
         ? "hover:shadow-[0_4px_40px_rgba(124,58,237,0.14)]"
         : "hover:shadow-[0_4px_40px_rgba(0,232,122,0.12)]")
      : (project.isPurple
         ? "hover:shadow-[0_2px_20px_rgba(124,58,237,0.08)]"
         : "hover:shadow-[0_2px_20px_rgba(0,232,122,0.06)]")

   const gradFrom = project.isPurple
      ? "from-purple-base/8"
      : "from-neon-dim/12"

   const accentVia = project.isPurple
      ? "via-purple-base/35"
      : "via-neon-base/25"

   const blobColor = project.isPurple
      ? "rgba(124,58,237,0.13)"
      : "rgba(0,232,122,0.09)"

   const blobPos = featured
      ? { top: "-30%", right: "-10%", width: "70%", paddingBottom: "70%" }
      : { bottom: "-40%", left: "-12%", width: "60%", paddingBottom: "60%" }

   const sweepColor = project.isPurple
      ? "rgba(168,85,247,0.07)"
      : "rgba(0,232,122,0.05)"

   const borderGlow = project.isPurple
      ? "rgba(124,58,237,0.55)"
      : "rgba(0,232,122,0.45)"

   const ctaClass = project.isPurple
      ? "border-purple-base/50 text-purple-light hover:bg-purple-base/10 hover:border-purple-light/60 hover:shadow-purple-sm"
      : "border-neon-base/40 text-neon-base hover:bg-neon-base/10 hover:border-neon-base/60 hover:shadow-neon-sm"

   const mockupBorder = project.isPurple
      ? "group-hover:border-purple-base/30"
      : "group-hover:border-neon-base/30"

   return (
      <motion.div
         ref={cardRef}
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-60px" }}
         transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.12,
         }}
         onMouseMove={handleMouseMove}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className={"group relative rounded-3xl border overflow-hidden " + (featured ? "border-purple-dim/25" : "border-purple-dim/12") + " " + borderHover + " " + glowHover}
      >
         {/* blob de luz ambiente */}
         <div
            aria-hidden="true"
            className="absolute pointer-events-none overflow-hidden rounded-full"
            style={{
               ...blobPos,
               background: "radial-gradient(circle, " + blobColor + " 0%, transparent 70%)",
               filter: "blur(32px)",
               position: "absolute",
            }}
         />

         {/* gradiente direcional */}
         <div
            className={
               "absolute inset-0 bg-gradient-to-br " +
               gradFrom +
               " to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            }
         />

         {/* superfície base */}
         <div className="absolute inset-0 bg-bg-surface/80 backdrop-blur-sm pointer-events-none" />

         {/* light sweep diagonal no hover */}
         <motion.div
            aria-hidden="true"
            animate={{
               opacity: hovered ? 1 : 0,
               x:       hovered ? "100%" : "-100%",
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 pointer-events-none"
            style={{
               background: "linear-gradient(105deg, transparent 30%, " + sweepColor + " 50%, transparent 70%)",
            }}
         />

         {/* borda superior iluminada */}
         <div
            className={
               "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent " +
               accentVia +
               " to-transparent transition-opacity duration-500 pointer-events-none"
            }
            style={{
               opacity: hovered ? 1 : 0.35,
               boxShadow: hovered ? "0 0 12px 0 " + borderGlow : "none",
               transition: "opacity 0.5s ease, box-shadow 0.5s ease",
            }}
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
                     {project.category && (
                        <span className="px-2 py-0.5 rounded-full border border-purple-dim/25 text-text-muted text-[10px] uppercase tracking-wider">
                           {project.category}
                        </span>
                     )}
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
                        aria-label={`Ver código de ${project.name} no GitHub`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-purple-dim/30 text-text-muted hover:border-purple-base/40 hover:text-text-secondary transition-all duration-300 hover:scale-105 active:scale-[0.97]"
                     >
                        <span>Código</span>
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

                  <MockupContent project={project} />

               </div>
            </div>

         </div>
      </motion.div>
   )
}
