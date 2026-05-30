"use client"

import { useState }    from "react"
import SectionWrapper  from "@/components/shared/SectionWrapper"
import AnimatedLabel   from "@/components/shared/AnimatedLabel"
import { motion }      from "framer-motion"

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

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(EMAIL)
         setCopied(true)
         setTimeout(() => setCopied(false), 2000)
      } catch (_) {}
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

            <div className="flex flex-col items-center gap-4">
               <AnimatedLabel>Contato</AnimatedLabel>
               <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                  Vamos construir
                  <br />
                  <span className="text-text-primary">algo juntos</span>
               </motion.h2>
               <motion.p variants={fadeVariant} className="text-body-lg max-w-md">
                  Aberto a projetos, colaborações e oportunidades.
               </motion.p>
            </div>

            <motion.div
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
               className="w-full flex flex-col sm:flex-row gap-3 justify-center"
            >

               <motion.div variants={cardVariant} className="group card-base flex items-center gap-3 px-5 py-4 hover:border-purple-base/40">
                  <div className="w-8 h-8 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base transition-colors duration-[220ms]">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 7 10-7" />
                     </svg>
                  </div>
                  <div className="flex flex-col items-start flex-1 min-w-0">
                     <span className="text-label text-text-muted tracking-widest uppercase">Email</span>
                     <a
                        href={`mailto:${EMAIL}`}
                        aria-label="Enviar email para Arthur Couto"
                        className="text-caption text-text-primary hover:text-neon-base transition-colors duration-[220ms] truncate font-medium"
                     >
                        {EMAIL}
                     </a>
                  </div>
                  <button
                     onClick={handleCopy}
                     aria-label={copied ? "Email copiado" : "Copiar email"}
                     className="flex-shrink-0 px-2.5 py-1 rounded-lg border border-purple-dim/25 text-text-muted hover:text-text-secondary hover:border-purple-dim/50 transition-all duration-[220ms] text-label tracking-wide"
                  >
                     <span aria-live="polite" aria-atomic="true">{copied ? "Copiado" : "Copiar"}</span>
                  </button>
               </motion.div>

               <motion.a
                  variants={cardVariant}
                  href="https://www.linkedin.com/in/arthurcoutooliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar LinkedIn de Arthur Couto"
                  className="group card-base flex items-center justify-center gap-3 px-5 py-4 hover:border-neon-base/30 hover:shadow-neon-sm"
               >
                  <div className="w-8 h-8 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base transition-colors duration-[220ms]">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                     </svg>
                  </div>
                  <div className="flex flex-col items-start">
                     <span className="text-label text-text-muted tracking-widest uppercase">LinkedIn</span>
                     <span className="text-caption text-text-primary group-hover:text-neon-base transition-colors duration-[220ms] font-medium">
                        arthurcoutooliveira
                     </span>
                  </div>
               </motion.a>

            </motion.div>

            <motion.div variants={fadeVariant} className="w-full h-px bg-gradient-to-r from-transparent via-purple-dim/25 to-transparent" />
            <motion.span variants={fadeVariant} className="text-label text-text-muted tracking-wide">
               Cabo Frio, Rio de Janeiro, Brasil
            </motion.span>

         </motion.div>
      </SectionWrapper>
   )
}
