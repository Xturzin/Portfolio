"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"

export default function Contact() {
   return (
      <SectionWrapper id="contato" className="py-32 px-6 md:px-12">
         <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-12">

            <div className="flex flex-col items-center gap-4">
               <span className="text-neon-base text-xs font-medium tracking-widest uppercase">
                  Contato
               </span>

               <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
                  Vamos construir
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     algo juntos
                  </span>
               </h2>

               <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                  Aberto a projetos, colaboracoes e oportunidades. Se tiver algo em mente, manda uma mensagem.
               </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">

               {/* EMAIL */}
               <a
                  href="mailto:arthur.coliveira@gmail.com"
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-purple-dim/30 bg-bg-surface hover:border-purple-base/50 hover:bg-bg-elevated transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-md"
               >
                  <div className="w-8 h-8 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base group-hover:bg-purple-dim/30 transition-all duration-300">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M2 7l10 7 10-7"></path>
                     </svg>
                  </div>

                  <div className="flex flex-col items-start">
                     <span className="text-text-muted text-xs">Email</span>
                     <span className="text-text-primary text-sm font-medium">
                        arthur.coliveira@gmail.com
                     </span>
                  </div>
               </a>

               {/* LINKEDIN */}
               <a
                  href="https://www.linkedin.com/in/arthurcoutooliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-purple-dim/30 bg-bg-surface hover:border-neon-base/40 hover:bg-bg-elevated transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neon-md"
               >
                  <div className="w-8 h-8 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base group-hover:bg-purple-dim/30 transition-all duration-300">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                     </svg>
                  </div>

                  <div className="flex flex-col items-start">
                     <span className="text-text-muted text-xs">LinkedIn</span>
                     <span className="text-text-primary text-sm font-medium">
                        arthurcoutooliveira
                     </span>
                  </div>
               </a>

            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-dim/30 to-transparent" />

            <p className="text-text-muted text-sm">
               Cabo Frio, Rio de Janeiro, Brasil
            </p>

         </div>
      </SectionWrapper>
   )
}