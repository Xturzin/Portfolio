"use client"

import { useEffect, useState } from "react"

const sections = [
   { id: "hero",      label: "Inicio" },
   { id: "sobre",     label: "Sobre" },
   { id: "what-i-do", label: "O que faco" },
   { id: "skills",    label: "Skills" },
   { id: "projetos",  label: "Projetos" },
   { id: "contato",   label: "Contato" },
]

export default function ScrollProgress() {
   const [active, setActive] = useState("hero")

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY + window.innerHeight * 0.35

         let current = "hero"

         sections.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el && el.offsetTop <= scrollY) {
               current = section.id
            }
         })

         setActive(current)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   return (
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3">
         {sections.map((section) => (
            <a
               key={section.id}
               href={"#" + section.id}
               className="group flex items-center gap-2"
            >
               <span
                  className={
                     "text-xs font-medium transition-all duration-300 " +
                     (active === section.id
                        ? "text-text-secondary opacity-100"
                        : "text-text-muted opacity-0 group-hover:opacity-100")
                  }
               >
                  {section.label}
               </span>

               <span
                  className={
                     "block rounded-full transition-all duration-300 " +
                     (active === section.id
                        ? "w-5 h-1.5 bg-neon-base shadow-neon-sm"
                        : "w-1.5 h-1.5 bg-text-muted/30 group-hover:bg-purple-base/60")
                  }
               />
            </a>
         ))}
      </div>
   )
}