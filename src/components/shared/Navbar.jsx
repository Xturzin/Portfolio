"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
   { label: "Sobre",      href: "#sobre",     id: "sobre" },
   { label: "O que faco", href: "#what-i-do", id: "what-i-do" },
   { label: "Skills",     href: "#skills",    id: "skills" },
   { label: "Projetos",   href: "#projetos",  id: "projetos" },
   { label: "Contato",    href: "#contato",   id: "contato" },
]

const menuVariants = {
   hidden: {
      opacity: 0,
      y: -12,
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.32,
         ease: [0.22, 1, 0.36, 1],
         staggerChildren: 0.06,
         delayChildren: 0.08,
      },
   },
   exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.22, ease: "easeIn" },
   },
}

const linkVariants = {
   hidden: { opacity: 0, x: -10 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: "easeOut" } },
   exit: { opacity: 0, x: -8 },
}

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)
   const [active, setActive] = useState("")
   const activeRef = useRef("")

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20)
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
   }, [])

   useEffect(() => {
      const observers = []

      navLinks.forEach(({ id }) => {
         const el = document.getElementById(id)
         if (!el) return

         const obs = new IntersectionObserver(
            (entries) => {
               entries.forEach((entry) => {
                  if (entry.isIntersecting && activeRef.current !== id) {
                     activeRef.current = id
                     setActive(id)
                  }
               })
            },
            { threshold: 0.4, rootMargin: "0px 0px -30% 0px" }
         )

         obs.observe(el)
         observers.push(obs)
      })

      return () => observers.forEach((o) => o.disconnect())
   }, [])

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : ""
      return () => {
         document.body.style.overflow = ""
      }
   }, [menuOpen])

   const headerClass = scrolled
      ? "bg-bg-deep/75 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.35)]"
      : "bg-transparent border-b border-transparent"

   const close = () => setMenuOpen(false)

   return (
      <>
         <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={
               "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500 ease-in-out " +
               headerClass
            }
         >
            <a
               href="#hero"
               onClick={close}
               aria-label="Voltar ao topo"
               className="text-text-primary font-semibold text-lg tracking-tight hover:text-neon-base transition-colors duration-300"
            >
               Arthur<span className="text-neon-base">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-8" aria-label="Navegacao principal">
               {navLinks.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className={
                        "text-sm font-medium transition-colors duration-300 relative group " +
                        (active === link.id
                           ? "text-text-primary"
                           : "text-text-secondary hover:text-text-primary")
                     }
                  >
                     {link.label}
                     <span
                        className={
                           "absolute -bottom-0.5 left-0 h-px bg-neon-base transition-all duration-300 " +
                           (active === link.id ? "w-full" : "w-0 group-hover:w-full")
                        }
                     />
                  </a>
               ))}
            </nav>

            <a
               href="#contato"
               aria-label="Fale comigo"
               className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-dim/40 text-text-secondary hover:border-neon-base/50 hover:text-neon-base transition-all duration-300"
            >
               Fale comigo
            </a>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
               className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-bg-elevated transition-colors duration-300"
            >
               <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-px bg-text-secondary origin-center"
               />
               <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-5 h-px bg-text-secondary origin-center"
               />
               <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-px bg-text-secondary origin-center"
               />
            </button>
         </motion.header>

         <AnimatePresence>
            {menuOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25 }}
                     onClick={close}
                     className="fixed inset-0 z-40 bg-bg-deep/60 backdrop-blur-sm md:hidden"
                  />

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
                           onClick={close}
                           className={
                              "flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 group " +
                              (active === link.id
                                 ? "text-text-primary bg-bg-elevated"
                                 : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated")
                           }
                        >
                           <span>{link.label}</span>

                           <svg
                              className="w-3.5 h-3.5 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                           </svg>
                        </motion.a>
                     ))}

                     <div className="mt-2 pt-4 border-t border-purple-dim/20">
                        <a
                           href="#contato"
                           onClick={close}
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