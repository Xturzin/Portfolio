"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
   const dotRef    = useRef(null)
   const ringRef   = useRef(null)
   const rafRef    = useRef(null)

   const mouse     = useRef({ x: -200, y: -200 })
   const ringPos   = useRef({ x: -200, y: -200 })

   const hoveredEl = useRef(false)
   const visRef    = useRef(false)
   const pausedRef = useRef(false)

   const [visible,   setVisible]   = useState(false)
   const [isHover,   setIsHover]   = useState(false)
   const [isPressed, setIsPressed] = useState(false)
   const [isFine,    setIsFine]    = useState(false)

   useEffect(() => {
      if (!window.matchMedia("(pointer: fine)").matches) return
      setIsFine(true)

      const onMove = (e) => {
         mouse.current.x = e.clientX
         mouse.current.y = e.clientY
         if (!visRef.current) { visRef.current = true; setVisible(true) }
      }

      const onOver = (e) => {
         const el = e.target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
         if (el && !hoveredEl.current)       { hoveredEl.current = true;  setIsHover(true)  }
         else if (!el && hoveredEl.current)  { hoveredEl.current = false; setIsHover(false) }
      }

      const onDown = () => setIsPressed(true)
      const onUp   = () => setIsPressed(false)

      const onVis = () => {
         pausedRef.current = document.hidden
         if (!document.hidden && rafRef.current === null) rafRef.current = requestAnimationFrame(tick)
      }

      const tick = () => {
         if (pausedRef.current) { rafRef.current = null; return }

         ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
         ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12

         if (dotRef.current)
            dotRef.current.style.transform =
               `translate(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%))`
         if (ringRef.current)
            ringRef.current.style.transform =
               `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`

         rafRef.current = requestAnimationFrame(tick)
      }

      document.body.classList.add("cursor-fine")
      window.addEventListener("pointermove",      onMove, { passive: true })
      document.addEventListener("mouseover",      onOver, { passive: true })
      window.addEventListener("mousedown",        onDown)
      window.addEventListener("mouseup",          onUp)
      document.addEventListener("visibilitychange", onVis)
      rafRef.current = requestAnimationFrame(tick)

      return () => {
         document.body.classList.remove("cursor-fine")
         window.removeEventListener("pointermove",  onMove)
         document.removeEventListener("mouseover",  onOver)
         window.removeEventListener("mousedown",    onDown)
         window.removeEventListener("mouseup",      onUp)
         document.removeEventListener("visibilitychange", onVis)
         if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
   }, [])

   if (!isFine) return null

   const dotSize  = isPressed ? 3  : (isHover ? 6  : 5  )
   const ringSize = isPressed ? 40 : (isHover ? 50 : 26 )

   return (
      <>
         <div
            ref={ringRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top: 0, left: 0,
               width:         ringSize,
               height:        ringSize,
               borderRadius:  "50%",
               border:        isHover ? "1.5px solid rgba(168,85,247,0.65)" : "1px solid rgba(124,58,237,0.38)",
               background:    isHover ? "rgba(168,85,247,0.05)" : "transparent",
               pointerEvents: "none",
               zIndex:        99998,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    "opacity .4s ease, width .45s cubic-bezier(.22,1,.36,1), height .45s cubic-bezier(.22,1,.36,1), border .28s ease, background .28s ease",
               boxShadow:     isHover ? "0 0 18px rgba(168,85,247,0.18)" : "none",
            }}
         />
         <div
            ref={dotRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top: 0, left: 0,
               width:         dotSize,
               height:        dotSize,
               borderRadius:  "50%",
               background:    isHover ? "rgba(255,255,255,0.88)" : "#00e87a",
               pointerEvents: "none",
               zIndex:        99999,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    "opacity .4s ease, width .3s cubic-bezier(.22,1,.36,1), height .3s cubic-bezier(.22,1,.36,1), background .28s ease, box-shadow .28s ease",
               boxShadow:     isHover
                  ? "0 0 0 1.5px rgba(255,255,255,0.15), 0 0 10px rgba(255,255,255,0.5)"
                  : "0 0 0 2px rgba(0,232,122,0.20), 0 0 8px rgba(0,232,122,0.70)",
            }}
         />
      </>
   )
}
