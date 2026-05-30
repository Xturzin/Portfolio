"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import { motion }     from "framer-motion"

const services = [
   {
      id: "frontend",
      title: "Frontend Development",
      description: "Interfaces modernas, responsivas e acessíveis com React. Componentes reutilizáveis, animações fluidas e atenção a cada detalhe visual.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
         </svg>
      ),
   },
   {
      id: "backend",
      title: "Backend Development",
      description: "APIs robustas com Node.js. Modelagem de dados, autenticação, segurança e lógica de negócio bem estruturada e escalável.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
         </svg>
      ),
   },
   {
      id: "apis",
      title: "Integração de APIs",
      description: "Conexão com serviços externos, webhooks, OAuth e pipelines de dados entre sistemas. Do contrato ao funcionamento em produção.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10"/>
            <path d="M12 20V4"/>
            <path d="M6 20v-6"/>
         </svg>
      ),
   },
   {
      id: "deploy",
      title: "Deploy e Infraestrutura",
      description: "Do ambiente local à produção. Vercel, variáveis de ambiente, CI/CD e monitoramento. Aplicação no ar e funcionando.",
      icon: (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
         </svg>
      ),
   },
]

const heading = {
   hidden:  {},
   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const grid = {
   hidden:  {},
   visible: { transition: { staggerChildren: 0.10, delayChildren: 0.2 } },
}

const item = {
   hidden:  { opacity: 0, y: 28 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhatIDo() {
   return (
      <SectionWrapper id="what-i-do" variant="fadeUp" className="py-32 px-6 md:px-12">
         <div className="max-w-6xl mx-auto flex flex-col gap-12">

            <motion.div
               variants={heading}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
               className="flex flex-col gap-4"
            >
               <motion.span variants={item} className="section-label">O que faço</motion.span>
               <motion.h2 variants={item}>
                  Desenvolvimento completo,
                  <br />
                  <span className="text-text-primary">do início ao fim</span>
               </motion.h2>
            </motion.div>

            <motion.div
               variants={grid}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-40px" }}
               className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
               {services.map((service) => (
                  <motion.div
                     key={service.id}
                     variants={item}
                     className="group relative rounded-2xl border border-purple-dim/20 bg-bg-surface/80 backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:border-purple-base/40 hover:bg-bg-elevated hover:-translate-y-1 hover:shadow-purple-md cursor-default overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-base/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                     <div className="relative z-10 w-9 h-9 rounded-xl bg-purple-dim/20 flex items-center justify-center text-purple-light group-hover:text-neon-base group-hover:bg-purple-dim/30 transition-all duration-300">
                        {service.icon}
                     </div>

                     <div className="relative z-10 flex flex-col gap-1.5">
                        <h3 className="text-text-primary font-semibold text-base">{service.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                     </div>
                  </motion.div>
               ))}
            </motion.div>

         </div>
      </SectionWrapper>
   )
}
