"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import ProjectCard    from "./ProjectCard"
import { projects }  from "@/data/projects"

export default function Projects() {
   return (
      <SectionWrapper id="projetos" variant="fadeRight" className="py-28 md:py-44 px-6 md:px-16">
         <div className="max-w-5xl mx-auto flex flex-col gap-20">

            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4">
                  <span className="section-label">Projetos</span>
                  <span className="text-text-muted text-label tracking-widest">0{projects.length}</span>
               </div>
               <h2>
                  Produtos que
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     estão no ar
                  </span>
               </h2>
               <p className="text-caption text-text-muted max-w-sm" style={{ marginTop: "0.25rem" }}>
                  Aplicações completas, do desenvolvimento ao deploy em produção.
               </p>
            </div>

            <div className="flex flex-col gap-6">
               {projects.map((project, index) => (
                  <ProjectCard
                     key={project.id}
                     project={project}
                     index={index}
                     featured={index === 0}
                  />
               ))}
            </div>

         </div>
      </SectionWrapper>
   )
}