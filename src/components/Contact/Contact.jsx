"use client"

import { useState, useRef, useEffect } from "react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import AnimatedLabel  from "@/components/shared/AnimatedLabel"
import { motion }     from "framer-motion"

const EMAIL = "arthur.coliveira@gmail.com"

const headingVariant = {
   hidden:  { opacity: 0, y: -32, rotateX: -16 },
   visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.6 },
   },
}

const cardVariant = {
   hidden:  { opacity: 0, y: 44, scale: 0.93 },
   visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", damping: 22, stiffness: 135, mass: 0.6 },
   },
}

const fadeVariant = {
   hidden:  { opacity: 0, y: 16 },
   visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 22, stiffness: 140, mass: 0.6 },
   },
}

export default function Contact() {
   const [copied, setCopied] = useState(false)
   const timerRef = useRef(null)

   useEffect(() => {
      return () => { if (timerRef.current) clearTimeout(timerRef.current) }
   }, [])

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(EMAIL)
         setCopied(true)
         if (timerRef.current) clearTimeout(timerRef.current)
         timerRef.current = setTimeout(() => setCopied(false), 2000)
      } catch {
         // Clipboard API indisponível (permissão negada ou contexto inseguro)
      }
   }

   return (
      <SectionWrapper id="contato" variant="scaleIn" className="pt-32 md:pt-48 pb-24 md:pb-36 px-6 md:px-12">
         <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.10 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            className="max-w-xl mx-auto flex flex-col items-center text-center gap-12"
         >

            {/* Header */}
            <div className="flex flex-col items-center gap-4">
               <AnimatedLabel>Contato</AnimatedLabel>
               <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                  Vamos construir
                  <br />
                  <span className="text-text-primary">algo juntos</span>
               </motion.h2>
               <motion.p variants={fadeVariant} className="max-w-md text-base leading-relaxed text-text-secondary">
                  Aberto a projetos, colaborações e oportunidades.
               </motion.p>
            </div>

            {/* Cards */}
            <motion.div
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
               className="w-full flex flex-col sm:flex-row sm:justify-center gap-3"
            >

               {/* Email: clique em qualquer lugar copia */}
               <motion.div
                  variants={cardVariant}
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCopy() } }}
                  aria-label={copied ? "Email copiado!" : "Clique para copiar o email"}
                  className="group card-base flex items-center gap-4 px-5 py-4 hover:border-purple-base/40 cursor-pointer select-none w-full sm:w-auto sm:min-w-[240px]"
               >
                  <div
                     className="w-9 h-9 rounded-xl bg-purple-dim/20 flex items-center justify-center flex-shrink-0 transition-colors duration-[220ms]"
                     style={{ color: copied ? "#00e87a" : undefined }}
                  >
                     {copied ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <polyline points="20 6 9 17 4 12" />
                        </svg>
                     ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-light group-hover:text-neon-base transition-colors duration-[220ms]">
                           <rect x="2" y="4" width="20" height="16" rx="2" />
                           <path d="M2 7l10 7 10-7" />
                        </svg>
                     )}
                  </div>

                  <div className="flex flex-col items-start min-w-0 flex-1">
                     <span className="text-[10px] text-text-muted tracking-widest uppercase font-medium">Email</span>
                     <span
                        className="text-sm font-medium truncate w-full text-left transition-colors duration-[220ms]"
                        style={{ color: copied ? "#00e87a" : undefined }}
                     >
                        {copied ? "Copiado!" : EMAIL}
                     </span>
                  </div>
               </motion.div>

               {/* LinkedIn */}
               <motion.a
                  variants={cardVariant}
                  href="https://www.linkedin.com/in/arthurcoutooliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar LinkedIn de Arthur Couto"
                  className="group card-base flex items-center gap-4 px-5 py-4 hover:border-neon-base/30 hover:shadow-neon-sm w-full sm:w-auto sm:min-w-[200px]"
               >
                  <div className="w-9 h-9 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base transition-colors duration-[220ms] flex-shrink-0">
                     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                     </svg>
                  </div>
                  <div className="flex flex-col items-start min-w-0">
                     <span className="text-[10px] text-text-muted tracking-widest uppercase font-medium">LinkedIn</span>
                     <span className="text-sm text-text-primary group-hover:text-neon-base transition-colors duration-[220ms] font-medium">
                        arthurcoutooliveira
                     </span>
                  </div>
               </motion.a>

            </motion.div>

         </motion.div>
      </SectionWrapper>
   )
}
