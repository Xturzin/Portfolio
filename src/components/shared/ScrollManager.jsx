"use client"

import { useEffect } from "react"

const KEY = "portfolio_first_scroll_v1"

export default function ScrollManager() {
   useEffect(() => {
      // Se já scrollou tudo antes, scroll livre
      if (localStorage.getItem(KEY)) return

      // Só aplica snap se o usuário está no topo (primeira visita real)
      if (window.scrollY > 80) {
         localStorage.setItem(KEY, "1")
         return
      }

      const html     = document.documentElement
      const sections = Array.from(document.querySelectorAll("section[id]"))

      const applySnap = () => {
         html.style.scrollSnapType    = "y mandatory"
         html.style.scrollPaddingTop  = "72px"
         sections.forEach((s) => {
            s.style.scrollSnapAlign = "start"
            s.style.scrollSnapStop  = "always"
            s.style.minHeight       = "100vh"
         })
      }

      const removeSnap = () => {
         html.style.scrollSnapType   = ""
         html.style.scrollPaddingTop = ""
         sections.forEach((s) => {
            s.style.scrollSnapAlign = ""
            s.style.scrollSnapStop  = ""
            s.style.minHeight       = ""
         })
      }

      applySnap()

      // Quando o usuário chegar na seção de contato (última), libera
      const contact = document.getElementById("contato")
      if (!contact) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (!entry.isIntersecting) return
            removeSnap()
            localStorage.setItem(KEY, "1")
            observer.disconnect()
         },
         { threshold: 0.25 }
      )

      observer.observe(contact)

      return () => {
         observer.disconnect()
         removeSnap()
      }
   }, [])

   return null
}
