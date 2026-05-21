"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
   { label: "Sobre", href: "#sobre" },
   { label: "O que faco", href: "#what-i-do" },
   { label: "Skills", href: "#skills" },
   { label: "Projetos", href: "#projetos" },
   { label: "Contato", href: "#contato" },
]

const menuVariants = {
   hidden: { opacity: 0, y: -16 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.35,
         ease: [0.25, 0.1, 0.25, 1],
         staggerChildren: 0.06,
         delayChildren: 0.1,
      },
   },
   exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.25, ease: "easeIn" },
   },
}

const linkVariants = {
   hidden: { opacity: 0, x: -12 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
   exit: { opacity: 0, x: -8 },
}

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : ""
      return () => (document.body.style.overflow = "")
   }, [menuOpen])

   const headerClass = scrolled
      ? "bg-bg-deep/80 backdrop-blur-md border-b border-purple-dim/20 shadow-md"
      : "bg-transparent border-b border-transparent"

   const handleLinkClick = () => setMenuOpen(false)

   return (
      <>
         <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={
               "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500 " +
               headerClass
            }
         >
            {/* Logo */}
            <a
               href="#hero"
               onClick={handleLinkClick}
               className="text-text-primary font-semibold text-lg tracking-tight hover:text-neon-base transition-colors duration-300"
            >
               Arthur<span className="text-neon-base">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
               {navLinks.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-300 relative group"
                  >
                     {link.label}
                     <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neon-base transition-all duration-300 group-hover:w-full"></span>
                  </a>
               ))}
            </nav>

            {/* CTA desktop */}
            <a
               href="#contato"
               className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-dim/40 text-text-secondary hover:border-neon-base/50 hover:text-neon-base transition-all duration-300"
            >
               Fale comigo
            </a>

            {/* Mobile button */}
            <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-bg-elevated transition-colors duration-300"
               aria-label="Menu"
            >
               <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-px bg-text-secondary"
               />
               <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block w-5 h-px bg-text-secondary"
               />
               <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-px bg-text-secondary"
               />
            </button>
         </motion.header>

         {/* Mobile menu */}
         <AnimatePresence>
            {menuOpen && (
               <>
                  {/* overlay */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setMenuOpen(false)}
                     className="fixed inset-0 z-40 bg-bg-deep/60 backdrop-blur-sm md:hidden"
                  />

                  {/* menu */}
                  <motion.div
                     variants={menuVariants}
                     initial="hidden"
                     animate="visible"
                     exit="exit"
                     className="fixed top-16 left-4 right-4 z-50 md:hidden rounded-2xl border border-purple-dim/25 bg-bg-surface/95 backdrop-blur-md p-6 flex flex-col gap-2"
                  >
                     {navLinks.map((link) => (
                        <motion.a
                           key={link.href}
                           href={link.href}
                           variants={linkVariants}
                           onClick={handleLinkClick}
                           className="flex items-center justify-between px-4 py-3 rounded-xl text-text-secondary font-medium hover:text-text-primary hover:bg-bg-elevated transition-all duration-200 group"
                        >
                           <span>{link.label}</span>
                        </motion.a>
                     ))}

                     <div className="mt-2 pt-4 border-t border-purple-dim/20">
                        <a
                           href="#contato"
                           onClick={handleLinkClick}
                           className="flex items-center justify-center w-full px-4 py-3 rounded-xl border border-purple-dim/40 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300"
                        >
                           Fale comigo
                        </a>
                     </div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
   )
}