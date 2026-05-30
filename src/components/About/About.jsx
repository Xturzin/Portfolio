"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import AnimatedLabel  from "@/components/shared/AnimatedLabel"
import { motion }     from "framer-motion"
import { useState }   from "react"

const info = [
   { label: "Localização", value: "Cabo Frio, RJ"     },
   { label: "Experiência", value: "5 anos programando" },
   { label: "Foco",        value: "Full Stack"          },
]

const education = [
   { course: "Análise e Desenvolvimento de Sistemas", start: "ago/2025" },
   { course: "Ciências da Computação",                start: "fev/2026" },
]

function ProfilePhoto() {
   const [error, setError] = useState(false)

   if (error) {
      return (
         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-light to-purple-base flex items-center justify-center font-bold text-sm text-white flex-shrink-0">
            AC
         </div>
      )
   }

   return (
      <img
         src="/foto.jpg"
         alt="Arthur Couto"
         width={56}
         height={56}
         onError={() => setError(true)}
         className="w-14 h-14 rounded-full object-cover object-center flex-shrink-0 ring-2 ring-purple-base/30"
      />
   )
}

const headingVariant = {
   hidden:  { opacity: 0, y: -32, rotateX: -18, filter: "blur(5px)" },
   visible: {
      opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.6 },
   },
}

const textVariant = {
   hidden:  { opacity: 0, y: 26, filter: "blur(5px)" },
   visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 130, mass: 0.65 },
   },
}

const eduVariant = {
   hidden:  { opacity: 0, x: -18, filter: "blur(3px)" },
   visible: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 140, mass: 0.6 },
   },
}

export default function About() {
   return (
      <SectionWrapper id="sobre" variant="fadeLeft" className="pt-20 md:pt-28 pb-28 md:pb-36 px-6 md:px-16 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-start">

            <motion.div
               initial={{ opacity: 0, x: -48 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, margin: "-60px" }}
               transition={{ type: "spring", damping: 26, stiffness: 90, mass: 0.9 }}
               className="w-full md:w-72 flex-shrink-0"
            >
               <div className="card-base rounded-2xl p-6 flex flex-col gap-5" style={{ boxShadow: "inset 1px 0 0 rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 12px rgba(0,0,0,0.25)" }}>

                  <div className="flex items-center gap-3">
                     <ProfilePhoto />
                     <div className="flex flex-col">
                        <p className="text-text-primary font-semibold text-caption">Arthur Couto</p>
                        <p className="text-text-muted text-label tracking-wide mt-0.5">Full Stack Developer</p>
                     </div>
                  </div>

                  <div className="h-px bg-purple-dim/20" />

                  <div className="flex flex-col gap-3.5">
                     {info.map((item) => (
                        <div key={item.label} className="flex flex-col gap-0.5">
                           <span className="text-label text-text-muted">{item.label}</span>
                           <span className="text-caption text-text-secondary font-medium">{item.value}</span>
                        </div>
                     ))}
                  </div>

                  <div className="h-px bg-purple-dim/20" />

                  <div className="flex items-center gap-2">
                     <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-base opacity-30" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-base opacity-80" />
                     </span>
                     <span className="text-neon-base text-label tracking-wide">Disponível para projetos</span>
                  </div>

               </div>
            </motion.div>

            <motion.div
               className="flex-1 flex flex-col gap-8"
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } } }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
            >
               <div className="flex flex-col gap-4">
                  <AnimatedLabel>Sobre mim</AnimatedLabel>
                  <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                     Construindo do zero
                     <br />
                     <span className="text-text-primary">ao deploy</span>
                  </motion.h2>
               </div>

               <motion.div variants={textVariant} className="flex flex-col gap-4">
                  <p>
                     Cinco anos construindo aplicações web do começo ao fim. Frontend, backend, banco de dados, deploy. O sistema inteiro, cada parte.
                  </p>
                  <p>
                     Penso em produto antes de pensar em código. Cada decisão técnica precisa fazer sentido pra quem usa no final. Sistema simples e bem-feito vale mais do que sistema complexo que quebra.
                  </p>
               </motion.div>

               <motion.div variants={textVariant} className="flex flex-col gap-3">
                  <span className="text-label text-text-muted">Formação</span>
                  <motion.div
                     variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }}
                     className="flex flex-col gap-3"
                  >
                     {education.map((item) => (
                        <motion.div key={item.course} variants={eduVariant} className="flex items-start gap-3">
                           <span className="mt-[7px] w-1 h-1 rounded-full bg-purple-base flex-shrink-0" />
                           <div className="flex flex-col">
                              <p className="text-caption text-text-secondary font-medium">{item.course}</p>
                              <span className="text-label text-text-muted tracking-wide mt-0.5">Início: {item.start}</span>
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
