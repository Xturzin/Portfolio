"use client"

import { useState }       from "react"
import SectionWrapper     from "@/components/shared/SectionWrapper"
import { motion }         from "framer-motion"

const coreStack = [
   {
      id:            "react",
      name:          "React",
      description:   "Interfaces modernas e componentizadas com foco em experiência do usuário.",
      dotClass:      "bg-blue-base",
      glowColor:     "rgba(59,130,246,0.25)",
      borderActive:  "border-blue-base/50",
      gradientClass: "from-blue-base/10 to-transparent",
      label:         "Frontend",
   },
   {
      id:            "node",
      name:          "Node.js",
      description:   "APIs REST, autenticação, integração com banco de dados e lógica de servidor.",
      dotClass:      "bg-neon-base",
      glowColor:     "rgba(0,232,122,0.22)",
      borderActive:  "border-neon-base/50",
      gradientClass: "from-neon-dim/15 to-transparent",
      label:         "Backend",
   },
   {
      id:            "javascript",
      name:          "JavaScript",
      description:   "ES6+, assincronicidade, manipulação de DOM, lógica de negócio no front e no back.",
      dotClass:      "bg-yellow-400",
      glowColor:     "rgba(250,204,21,0.22)",
      borderActive:  "border-yellow-400/50",
      gradientClass: "from-yellow-400/8 to-transparent",
      label:         "Core",
   },
   {
      id:            "python",
      name:          "Python",
      description:   "Automação, scripts, processamento de dados e aplicações back end.",
      dotClass:      "bg-blue-light",
      glowColor:     "rgba(96,165,250,0.22)",
      borderActive:  "border-blue-light/50",
      gradientClass: "from-blue-light/10 to-transparent",
      label:         "Backend",
   },
]

const otherTech = [
   { id: "html",     name: "HTML5"       },
   { id: "css",      name: "CSS3"        },
   { id: "nextjs",   name: "Next.js"     },
   { id: "tailwind", name: "TailwindCSS" },
   { id: "git",      name: "Git"         },
   { id: "vercel",   name: "Vercel"      },
   { id: "rest",     name: "REST APIs"   },
   { id: "postgres", name: "PostgreSQL"  },
]

const labelVariant = {
   hidden:  { opacity: 0, x: -28 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const headingVariant = {
   hidden:  { opacity: 0, y: -36, rotateX: -20 },
   visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 90, mass: 0.9 },
   },
}

const coreCardVariant = {
   hidden:  { opacity: 0, y: 56, rotateX: 12, scale: 0.94 },
   visible: {
      opacity: 1, y: 0, rotateX: 0, scale: 1,
      transition: { type: "spring", damping: 24, stiffness: 100, mass: 0.85 },
   },
}

const tagVariant = {
   hidden:  { opacity: 0, scale: 0.85, y: 12 },
   visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { type: "spring", damping: 22, stiffness: 120 },
   },
}

function CoreCard({ tech }) {
   const [hovered, setHovered] = useState(false)

   return (
      <motion.div
         variants={coreCardVariant}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className={"group relative rounded-2xl border bg-bg-surface/80 backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden cursor-default hover:-translate-y-1 " + (hovered ? "border-purple-base/30 " + tech.borderActive : "border-purple-dim/20")}
         style={{
            boxShadow: hovered ? ("0 0 32px " + tech.glowColor) : "none",
            transformPerspective: 800,
         }}
      >
         <div className={"absolute inset-0 bg-gradient-to-br " + tech.gradientClass + " transition-opacity duration-300 pointer-events-none " + (hovered ? "opacity-100" : "opacity-0")} />

         <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <span className={"w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 " + tech.dotClass + (hovered ? " scale-125" : "")} />
               <h3 className="text-text-primary font-bold text-xl tracking-tight">{tech.name}</h3>
            </div>
            <span className="text-text-muted text-[10px] uppercase tracking-widest border border-purple-dim/25 px-2 py-0.5 rounded-full">
               {tech.label}
            </span>
         </div>

         <p className="relative z-10 text-text-secondary text-sm leading-relaxed">{tech.description}</p>

         <div className={"relative z-10 h-px w-full bg-gradient-to-r from-transparent transition-all duration-500 " + (hovered ? "via-purple-base/40 to-transparent opacity-100" : "via-purple-dim/20 to-transparent opacity-60")} />
      </motion.div>
   )
}

export default function Skills() {
   return (
      <SectionWrapper id="skills" variant="scaleIn" className="py-28 md:py-40 px-6 md:px-16">
         <div className="max-w-6xl mx-auto flex flex-col gap-16">

            <motion.div
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } } }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
               className="flex flex-col gap-4"
            >
               <motion.span variants={labelVariant} className="section-label">Stack</motion.span>
               <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                  Tecnologias que
                  <br />
                  <span className="text-text-primary">uso no dia a dia</span>
               </motion.h2>
            </motion.div>

            <div className="flex flex-col gap-5">
               <motion.div
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-40px" }}
                  className="flex items-center gap-4"
               >
                  <motion.span
                     variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                     className="text-label text-text-muted uppercase tracking-wide whitespace-nowrap"
                  >
                     Core Stack
                  </motion.span>
                  <div className="flex-1 h-px bg-purple-dim/20" />
               </motion.div>

               <motion.div
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.10 } } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-40px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  style={{ perspective: "1200px" }}
               >
                  {coreStack.map((tech) => (
                     <CoreCard key={tech.id} tech={tech} />
                  ))}
               </motion.div>
            </div>

            <div className="flex flex-col gap-5">
               <div className="flex items-center gap-4">
                  <span className="text-label text-text-muted uppercase tracking-wide whitespace-nowrap">Outras Tecnologias</span>
                  <div className="flex-1 h-px bg-purple-dim/20" />
               </div>

               <motion.div
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-40px" }}
                  className="flex flex-wrap gap-3"
               >
                  {otherTech.map((tech) => (
                     <motion.div
                        key={tech.id}
                        variants={tagVariant}
                        className="px-4 py-2 rounded-full border border-purple-dim/20 bg-bg-surface/80 backdrop-blur-sm text-text-secondary text-sm font-medium transition-all duration-300 hover:border-purple-base/40 hover:text-text-primary hover:bg-bg-elevated hover:shadow-purple-sm cursor-default"
                     >
                        {tech.name}
                     </motion.div>
                  ))}
               </motion.div>
            </div>

         </div>
      </SectionWrapper>
   )
}
