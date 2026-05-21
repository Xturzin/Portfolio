"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
   const dotRef   = useRef(null)
   const ringRef  = useRef(null)

   const mouse    = useRef({ x: -200, y: -200 })
   const dotPos   = useRef({ x: -200, y: -200 })
   const ringPos  = useRef({ x: -200, y: -200 })

   const rafRef   = useRef(null)

   const [hovered, setHovered] = useState(false)
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      const lerp = (a, b, t) => a + (b - a) * t

      const onMove = (e) => {
         mouse.current = { x: e.clientX, y: e.clientY }
         if (!visible) setVisible(true)
      }

      // ✔ melhor que MutationObserver + bind infinito
      const addHoverListeners = () => {
         const els = document.querySelectorAll("a, button, [role='button']")

         els.forEach((el) => {
            if (el.__cursorBound) return

            el.addEventListener("mouseenter", () => setHovered(true))
            el.addEventListener("mouseleave", () => setHovered(false))

            el.__cursorBound = true
         })
      }

      const tick = () => {
         dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.22)
         dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.22)

         ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.09)
         ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.09)

         if (dotRef.current) {
            dotRef.current.style.transform =
               `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`
         }

         if (ringRef.current) {
            ringRef.current.style.transform =
               `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
         }

         rafRef.current = requestAnimationFrame(tick)
      }

      window.addEventListener("mousemove", onMove, { passive: true })

      addHoverListeners()
      rafRef.current = requestAnimationFrame(tick)

      // ✔ observer leve (sem ficar re-bind infinito)
      const observer = new MutationObserver(() => addHoverListeners())
      observer.observe(document.body, { childList: true, subtree: true })

      return () => {
         window.removeEventListener("mousemove", onMove)
         cancelAnimationFrame(rafRef.current)
         observer.disconnect()
      }
   }, [visible])

   return (
      <>
         {/* DOT */}
         <div
            ref={dotRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform hidden md:block rounded-full"
            style={{
               width: "5px",
               height: "5px",
               backgroundColor: hovered ? "transparent" : "#00e87a",
               opacity: visible ? 1 : 0,
               transition: "background-color 0.25s ease, opacity 0.3s ease",
            }}
         />

         {/* RING */}
         <div
            ref={ringRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform hidden md:block rounded-full"
            style={{
               width: hovered ? "40px" : "26px",
               height: hovered ? "40px" : "26px",
               border: hovered
                  ? "1.5px solid #39ff9a"
                  : "1.5px solid rgba(0,232,122,0.45)",
               opacity: visible ? (hovered ? 1 : 0.85) : 0,
               boxShadow: hovered
                  ? "0 0 14px rgba(0,232,122,0.30)"
                  : "none",
               transition:
                  "width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.35s ease",
            }}
         />
      </>
   )
}