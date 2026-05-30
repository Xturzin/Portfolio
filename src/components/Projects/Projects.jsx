"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import AnimatedLabel  from "@/components/shared/AnimatedLabel"
import ProjectCard    from "./ProjectCard"
import { projects }  from "@/data/projects"
import { motion }    from "framer-motion"

const headingVariant = {
   hidden:  { opacity: 0, y: -32, rotateX: -18, filter: "blur(5px)" },
   visible: {
      opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.6 },
   },
}

const textVariant = {
   hidden:  { opacity: 0, y: 22, filter: "blur(4px)" },
   visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 140, mass: 0.6 },
   },
}

export default function Projects() {
   return (
      <SectionWrapper id="projetos" variant="fadeRight" className="py-28 md:py-44 px-6 md:px-16">
         <div className="max-w-5xl mx-auto flex flex-col gap-20">

            <motion.div
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, margin: "-60px" }}
               className="flex flex-col gap-4"
            >
               <div className="flex items-center gap-4">
                  <AnimatedLabel>Projetos</AnimatedLabel>
                  <motion.span variants={textVariant} className="text-text-muted text-label tracking-widest">
                     0{projects.length}
                  </motion.span>
               </div>

               <motion.h2 variants={headingVariant} style={{ transformPerspective: 700 }}>
                  Produtos que
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     estão no ar
                  </span>
               </motion.h2>

               <motion.p variants={textVariant} className="text-caption text-text-muted max-w-sm" style={{ marginTop: "0.25rem" }}>
                  Aplicações completas, do desenvolvimento ao deploy em produção.
               </motion.p>
            </motion.div>

            <div className="flex flex-col gap-6">
               {projects.map((project) => (
                  <ProjectCard
                     key={project.id}
                     project={project}
                  />
               ))}
            </div>

         </div>
      </SectionWrapper>
   )
}
