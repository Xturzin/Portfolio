"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"

const services = [
   {
      id: "frontend",
      title: "Frontend Development",
      description: "Interfaces modernas, responsivas e acessiveis com React. Componentes reutilizaveis, animacoes fluidas e atencao a cada detalhe visual.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
         </svg>
      ),
   },
   {
      id: "backend",
      title: "Backend Development",
      description: "APIs robustas com Node.js. Modelagem de dados, autenticacao, seguranca e logica de negocio bem estruturada e escalavel.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
         </svg>
      ),
   },
   {
      id: "apis",
      title: "Integracao de APIs",
      description: "Conexao com servicos externos, webhooks, OAuth e pipelines de dados entre sistemas. Do contrato ao funcionamento em producao.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10"></path>
            <path d="M12 20V4"></path>
            <path d="M6 20v-6"></path>
         </svg>
      ),
   },
   {
      id: "deploy",
      title: "Deploy e Infraestrutura",
      description: "Do ambiente local ao producao. Vercel, variaveis de ambiente, CI/CD e monitoramento. Aplicacao no ar e funcionando.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
         </svg>
      ),
   },
]

export default function WhatIDo() {
   return (
      <SectionWrapper id="what-i-do" variant="fadeUp" className="py-32 px-6 md:px-12">
         <div className="max-w-6xl mx-auto flex flex-col gap-12">

            <div className="flex flex-col gap-2">
               <span className="text-neon-base text-xs font-medium tracking-widest uppercase">O que faco</span>
               <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                  Desenvolvimento completo,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     do inicio ao fim
                  </span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {services.map((service) => (
                  <div
                     key={service.id}
                     className="group relative rounded-2xl border border-purple-dim/20 bg-bg-surface/80 backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:border-purple-base/40 hover:bg-bg-elevated hover:-translate-y-1 hover:shadow-purple-md cursor-default overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-base/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                     <div className="relative z-10 w-9 h-9 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base group-hover:bg-purple-dim/30 transition-all duration-300">
                        {service.icon}
                     </div>

                     <div className="relative z-10 flex flex-col gap-1.5">
                        <h3 className="text-text-primary font-semibold text-base">{service.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </SectionWrapper>
   )
}