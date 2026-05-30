"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import AnimatedLabel  from "@/components/shared/AnimatedLabel"
import { motion }     from "framer-motion"
import { useState }   from "react"

const info = [
   { label: "Localização", value: "Cabo Frio, RJ"     },
   { label: "Experiência",  value: "5 anos"             },
   { label: "Foco",         value: "Full Stack"          },
]

const stack = ["React", "Node.js", "Python", "SQL", "TypeScript"]

const education = [
   { course: "Análise e Desenvolvimento de Sistemas", start: "ago/2025" },
   { course: "Ciências da Computação",                start: "fev/2026" },
]

function ProfilePhoto() {
   const [error, setError] = useState(false)

   if (error) {
      return (
         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-light to-purple-base flex items-center justify-center font-bold text-sm text-white flex-shrink-0">
            AC
         </div>
      )
   }

   return (
      <img
         src="/foto.jpg"
         alt="Arthur Couto"
         width={64}
         height={64}
         loading="lazy"
         onError={() => setError(true)}
         className="w-16 h-16 rounded-full object-cover object-center flex-shrink-0 ring-2 ring-purple-base/40 ring-offset-2 ring-offset-bg-surface"
      />
   )
}

const headingVariant = {
   hidden:  { opacity: 0, y: -28, rotateX: -14 },
   visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.6 },
   },
}

const textVariant = {
   hidden:  { opacity: 0, y: 22 },
   visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 22, stiffness: 130, mass: 0.65 },
   },
}

const eduVariant = {
   hidden:  { opacity: 0, x: -14 },
   visible: {
      opacity: 1, x: 0,
      transition: { type: "spring", damping: 22, stiffness: 140, mass: 0.6 },
   },
}

export default function About() {
   return (
      <SectionWrapper id="sobre" variant="fadeLeft" className="pt-20 md:pt-28 pb-28 md:pb-36 px-6 md:px-16 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

            {/* Card lateral */}
            <motion.div
               initial={{ opacity: 0, x: -48 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, margin: "-60px" }}
               transition={{ type: "spring", damping: 26, stiffness: 90, mass: 0.9 }}
               className="w-full md:w-72 flex-shrink-0"
            >
               <div
                  className="card-base rounded-2xl p-6 flex flex-col gap-5"
                  style={{
                     boxShadow: "inset 1px 0 0 rgba(124,58,237,0.14), inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 28px rgba(0,0,0,0.32)",
                  }}
               >
                  {/* Foto + nome */}
                  <div className="flex items-center gap-3">
                     <ProfilePhoto />
                     <div className="flex flex-col">
                        <p className="text-text-primary font-semibold text-caption leading-tight">Arthur Couto</p>
                        <p className="text-text-muted text-label tracking-wide mt-1">Full Stack Developer</p>
                     </div>
                  </div>

                  <div className="h-px bg-purple-dim/20" />

                  {/* Info */}
                  <div className="flex flex-col gap-3">
                     {info.map((item) => (
                        <div key={item.label} className="flex items-center justify-between gap-2">
                           <span className="text-label text-text-muted">{item.label}</span>
                           <span className="text-caption text-text-secondary font-medium">{item.value}</span>
                        </div>
                     ))}
                  </div>

                  <div className="h-px bg-purple-dim/20" />

                  {/* Stack */}
                  <div className="flex flex-col gap-2.5">
                     <span className="text-label text-text-muted">Stack</span>
                     <div className="flex flex-wrap gap-1.5">
                        {stack.map((tech) => (
                           <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full border border-purple-dim/30 bg-bg-elevated/50 text-text-muted text-[10px] font-medium tracking-wide"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="h-px bg-purple-dim/20" />

                  {/* Status */}
                  <div className="flex items-center gap-2">
                     <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-base opacity-30" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-base opacity-80" />
                     </span>
                     <span className="text-neon-base text-label tracking-wide">Disponível para projetos</span>
                  </div>

               </div>
            </motion.div>

            {/* Conteúdo principal */}
            <motion.div
               className="flex-1 flex flex-col gap-8"
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } } }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
            >
               {/* Heading */}
               <div className="flex flex-col gap-4">
                  <AnimatedLabel>Sobre mim</AnimatedLabel>
                  <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                     Construo produtos,
                     <br />
                     <span
                        className="text-transparent bg-clip-text"
                        style={{
                           backgroundImage: "linear-gradient(90deg, #a855f7 0%, #3b82f6 55%, #00e87a 100%)",
                           WebkitBackgroundClip: "text",
                        }}
                     >
                        não só código.
                     </span>
                  </motion.h2>
               </div>

               {/* Bio */}
               <motion.div variants={textVariant} className="flex flex-col gap-4">
                  <p className="text-text-secondary leading-relaxed">
                     Cinco anos construindo aplicações web completas — frontend, backend, banco de dados e deploy.
                     React, Node.js, Python, SQL. Cada camada da stack, construída sem delegar.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                     Penso em produto antes de pensar em código. Prefiro clareza a complexidade, solução a arquitetura.
                     Cada decisão técnica tem que fazer sentido pra quem usa no final — não só pra quem escreve.
                  </p>
               </motion.div>

               {/* Divisor */}
               <motion.div
                  variants={textVariant}
                  className="w-full h-px bg-gradient-to-r from-purple-dim/30 via-purple-dim/10 to-transparent"
               />

               {/* Formação */}
               <motion.div variants={textVariant} className="flex flex-col gap-4">
                  <span className="text-label text-text-muted uppercase tracking-widest">Formação</span>
                  <motion.div
                     variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }}
                     className="flex flex-col gap-4"
                  >
                     {education.map((item) => (
                        <motion.div key={item.course} variants={eduVariant} className="flex items-start gap-4">
                           <div
                              className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
                           />
                           <div className="flex flex-col gap-0.5">
                              <p className="text-caption text-text-secondary font-medium leading-snug">{item.course}</p>
                              <span className="text-label text-text-muted tracking-wide">Início: {item.start}</span>
                           </div>
                        </motion.div>
                     ))}
                  </motion.div>
               </motion.div>

            </motion.div>

         </div>
      </SectionWrapper>
   )
}
