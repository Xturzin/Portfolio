"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navLinks = [
   { label: "Sobre", href: "#sobre" },
   { label: "O que faco", href: "#what-i-do" },
   { label: "Skills", href: "#skills" },
   { label: "Projetos", href: "#projetos" },
   { label: "Contato", href: "#contato" },
]

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   const headerClass = scrolled
      ? "bg-bg-deep/80 backdrop-blur-md border-b border-purple-dim/20 shadow-md"
      : "bg-transparent border-b border-transparent"

   return (
      <motion.header
         initial={{ opacity: 0, y: -16 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className={"fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500 ease-in-out " + headerClass}
      >
         <a href="#hero" className="text-text-primary font-semibold text-lg tracking-tight hover:text-neon-base transition-colors duration-300">
            Arthur
            <span className="text-neon-base">.</span>
         </a>

         <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
               <a key={link.href} href={link.href} className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-300 relative group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neon-base transition-all duration-300 group-hover:w-full"></span>
               </a>
            ))}
         </nav>

         <a href="#contato" className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-dim/40 text-text-secondary hover:border-neon-base/50 hover:text-neon-base transition-all duration-300">
            Fale comigo
         </a>

      </motion.header>
   )
}