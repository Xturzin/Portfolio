"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
   const dotRef     = useRef(null)
   const ringRef    = useRef(null)
   const rafRef     = useRef(null)
   const mouse      = useRef({ x: -100, y: -100 })
   const ringPos    = useRef({ x: -100, y: -100 })
   const hoveredEl  = useRef(false)
   const visibleRef = useRef(false)
   const pausedRef  = useRef(false)

   const [visible, setVisible] = useState(false)
   const [isHover, setIsHover] = useState(false)
   const [isFine,  setIsFine]  = useState(false)

   useEffect(() => {
      if (!window.matchMedia("(pointer: fine)").matches) return

      setIsFine(true)

      const onMove = (e) => {
         mouse.current.x = e.clientX
         mouse.current.y = e.clientY
         if (!visibleRef.current) {
            visibleRef.current = true
            setVisible(true)
         }
      }

      const onOver = (e) => {
         const interactive = e.target.closest(
            "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
         )
         if (interactive && !hoveredEl.current) {
            hoveredEl.current = true
            setIsHover(true)
         } else if (!interactive && hoveredEl.current) {
            hoveredEl.current = false
            setIsHover(false)
         }
      }

      const onVisibility = () => {
         pausedRef.current = document.hidden
         if (document.hidden) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
         } else if (rafRef.current === null) {
            rafRef.current = requestAnimationFrame(tick)
         }
      }

      const tick = () => {
         if (pausedRef.current) return

         ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.10
         ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.10

         if (dotRef.current) {
            dotRef.current.style.transform =
               `translate(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%))`
         }
         if (ringRef.current) {
            ringRef.current.style.transform =
               `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`
         }

         rafRef.current = requestAnimationFrame(tick)
      }

      document.body.classList.add("cursor-fine")
      window.addEventListener("pointermove", onMove, { passive: true })
      document.addEventListener("mouseover",  onOver, { passive: true })
      document.addEventListener("visibilitychange", onVisibility)
      rafRef.current = requestAnimationFrame(tick)

      return () => {
         document.body.classList.remove("cursor-fine")
         window.removeEventListener("pointermove", onMove)
         document.removeEventListener("mouseover",  onOver)
         document.removeEventListener("visibilitychange", onVisibility)
         cancelAnimationFrame(rafRef.current)
      }
   }, [])

   if (!isFine) return null

   return (
      <>
         <div
            ref={dotRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top:           0,
               left:          0,
               width:         "6px",
               height:        "6px",
               borderRadius:  "50%",
               background:    "#00e87a",
               pointerEvents: "none",
               zIndex:        99999,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    "opacity 0.4s ease",
               boxShadow:     "0 0 0 1.5px rgba(0,232,122,0.25), 0 0 10px rgba(0,232,122,0.60)",
            }}
         />

         <div
            ref={ringRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top:           0,
               left:          0,
               width:         isHover ? "42px" : "30px",
               height:        isHover ? "42px" : "30px",
               borderRadius:  "50%",
               border:        isHover
                  ? "1px solid rgba(124,58,237,0.65)"
                  : "1px solid rgba(124,58,237,0.35)",
               background:    isHover
                  ? "rgba(124,58,237,0.06)"
                  : "rgba(124,58,237,0.02)",
               pointerEvents: "none",
               zIndex:        99998,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    [
                  "opacity 0.4s ease",
                  "width 0.4s cubic-bezier(0.22,1,0.36,1)",
                  "height 0.4s cubic-bezier(0.22,1,0.36,1)",
                  "border-color 0.3s ease",
                  "background 0.3s ease",
                  "box-shadow 0.3s ease",
               ].join(", "),
               boxShadow: isHover
                  ? "0 0 18px rgba(124,58,237,0.22), inset 0 0 12px rgba(124,58,237,0.06)"
                  : "0 0 6px rgba(124,58,237,0.10)",
            }}
         />
      </>
   )
}