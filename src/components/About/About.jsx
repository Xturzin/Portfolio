"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
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

export default function About() {
   return (
      <SectionWrapper id="sobre" variant="fadeLeft" className="pt-20 md:pt-28 pb-28 md:pb-36 px-6 md:px-16 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-start">

            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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

                  <div className="h-px bg-purple-dim/20"></div>

                  <div className="flex flex-col gap-3.5">
                     {info.map((item) => (
                        <div key={item.label} className="flex flex-col gap-0.5">
                           <span className="text-label text-text-muted">{item.label}</span>
                           <span className="text-caption text-text-secondary font-medium">{item.value}</span>
                        </div>
                     ))}
                  </div>

                  <div className="h-px bg-purple-dim/20"></div>

                  <div className="flex items-center gap-2">
                     <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-base opacity-30"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-base opacity-80"></span>
                     </span>
                     <span className="text-neon-base text-label tracking-wide">Disponível para projetos</span>
                  </div>

               </div>
            </motion.div>

            <motion.div
               className="flex-1 flex flex-col gap-8"
               variants={{
                  hidden:  {},
                  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.15 } },
               }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
            >
               <motion.div
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } } }}
                  className="flex flex-col gap-4"
               >
                  <span className="section-label">Sobre mim</span>
                  <h2>
                     Construindo do zero
                     <br />
                     <span className="text-text-primary">ao deploy</span>
                  </h2>
               </motion.div>

               <motion.div
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } } }}
                  className="flex flex-col gap-4"
               >
                  <p>
                     Cinco anos construindo aplicações web do começo ao fim. Frontend, backend, banco de dados, deploy. O sistema inteiro, cada parte.
                  </p>
                  <p>
                     Penso em produto antes de pensar em código. Cada decisão técnica precisa fazer sentido pra quem usa no final. Sistema simples e bem-feito vale mais do que sistema complexo que quebra.
                  </p>
               </motion.div>

               <motion.div
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } } }}
                  className="flex flex-col gap-3"
               >
                  <span className="text-label text-text-muted">Formação</span>
                  <div className="flex flex-col gap-3">
                     {education.map((item) => (
                        <div key={item.course} className="flex items-start gap-3">
                           <span className="mt-[7px] w-1 h-1 rounded-full bg-purple-base flex-shrink-0" />
                           <div className="flex flex-col">
                              <p className="text-caption text-text-secondary font-medium" style={{ color: "var(--color-text-secondary)" }}>{item.course}</p>
                              <span className="text-label text-text-muted tracking-wide mt-0.5">Início: {item.start}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

            </motion.div>

         </div>
      </SectionWrapper>
   )
}
