"use client"

import SectionWrapper from "@/components/shared/SectionWrapper"
import ProjectCard    from "./ProjectCard"
import { projects }  from "@/data/projects"

export default function Projects() {
   return (
      <SectionWrapper id="projetos" variant="fadeRight" className="py-28 md:py-44 px-6 md:px-16">
         <div className="max-w-5xl mx-auto flex flex-col gap-20">

            <div className="flex flex-col gap-2">
               <span className="text-neon-base text-xs font-medium tracking-widest uppercase">
                  Projetos
               </span>
               <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                  Produtos que
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                     estao no ar
                  </span>
               </h2>
            </div>

            <div className="flex flex-col gap-6">
               {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
               ))}
            </div>

         </div>
      </SectionWrapper>
   )
}