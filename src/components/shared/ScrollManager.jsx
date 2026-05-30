"use client"

import { useEffect } from "react"

const KEY = "portfolio_first_scroll_v1"

export default function ScrollManager() {
   useEffect(() => {
      if (localStorage.getItem(KEY)) return
      if (window.scrollY > 80) { localStorage.setItem(KEY, "1"); return }

      const html = document.documentElement

      // Aguarda um frame para garantir que as sections estão no DOM
      const timer = setTimeout(() => {
         const sections = Array.from(document.querySelectorAll("section[id]"))
         if (!sections.length) return

         html.style.scrollSnapType   = "y mandatory"
         html.style.scrollPaddingTop = "72px"
         sections.forEach((s) => {
            s.style.scrollSnapAlign = "start"
            s.style.minHeight       = "100vh"
            // scroll-snap-stop: always removido, era o principal causador do "stuck"
         })

         const contact = document.getElementById("contato")
         if (!contact) return

         const observer = new IntersectionObserver(
            ([entry]) => {
               if (!entry.isIntersecting) return
               html.style.scrollSnapType   = ""
               html.style.scrollPaddingTop = ""
               sections.forEach((s) => {
                  s.style.scrollSnapAlign = ""
                  s.style.minHeight       = ""
               })
               localStorage.setItem(KEY, "1")
               observer.disconnect()
            },
            { threshold: 0.25 }
         )

         observer.observe(contact)
      }, 80)

      return () => clearTimeout(timer)
   }, [])

   return null
}
