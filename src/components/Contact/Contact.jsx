"use client"

import { useState } from "react"
import SectionWrapper from "@/components/shared/SectionWrapper"

const EMAIL = "arthur.coliveira@gmail.com"

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
         <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-12">

            {/* HEADER */}
            <div className="flex flex-col items-center gap-4">
               <span className="section-label">Contato</span>

               <h2>
                  Vamos construir
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     algo juntos
                  </span>
               </h2>

               <p className="text-body-lg max-w-md">
                  Aberto a projetos, colaborações e oportunidades.
               </p>
            </div>

            {/* CARDS */}
            <div className="w-full flex flex-col sm:flex-row gap-3 justify-center">

               {/* EMAIL */}
               <div className="group card-base flex items-center gap-3 px-5 py-4 hover:border-purple-base/40">

                  <div className="w-8 h-8 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base transition-colors duration-[220ms]">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 7 10-7" />
                     </svg>
                  </div>

                  <div className="flex flex-col items-start flex-1 min-w-0">
                     <span className="text-label text-text-muted tracking-widest uppercase">
                        Email
                     </span>

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
                     aria-label="Copiar email"
                     className="flex-shrink-0 px-2.5 py-1 rounded-lg border border-purple-dim/25 text-text-muted hover:text-text-secondary hover:border-purple-dim/50 transition-all duration-[220ms] text-label tracking-wide"
                  >
                     {copied ? "Copiado" : "Copiar"}
                  </button>

               </div>

               {/* LINKEDIN */}
               <a
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
                     <span className="text-label text-text-muted tracking-widest uppercase">
                        LinkedIn
                     </span>
                     <span className="text-caption text-text-primary group-hover:text-neon-base transition-colors duration-[220ms] font-medium">
                        arthurcoutooliveira
                     </span>
                  </div>
               </a>

            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-dim/25 to-transparent" />

            {/* LOCATION */}
            <span className="text-label text-text-muted tracking-wide">
               Cabo Frio, Rio de Janeiro, Brasil
            </span>

         </div>
      </SectionWrapper>
   )
}