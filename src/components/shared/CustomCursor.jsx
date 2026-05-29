"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
   const dotRef     = useRef(null)
   const ringRef    = useRef(null)
   const glowRef    = useRef(null)
   const rafRef     = useRef(null)

   const mouse      = useRef({ x: -200, y: -200 })
   const ringPos    = useRef({ x: -200, y: -200 })
   const glowPos    = useRef({ x: -200, y: -200 })

   const hoveredEl  = useRef(false)
   const visibleRef = useRef(false)
   const pausedRef  = useRef(false)

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

      const onDown = () => setIsPressed(true)
      const onUp   = () => setIsPressed(false)

      const onVisibility = () => {
         pausedRef.current = document.hidden
         if (!document.hidden && rafRef.current === null) {
            rafRef.current = requestAnimationFrame(tick)
         }
      }

      const tick = () => {
         if (pausedRef.current) {
            rafRef.current = null
            return
         }

         ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.11
         ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.11

         glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.038
         glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.038

         if (dotRef.current) {
            dotRef.current.style.transform =
               `translate(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%))`
         }
         if (ringRef.current) {
            ringRef.current.style.transform =
               `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`
         }
         if (glowRef.current) {
            glowRef.current.style.transform =
               `translate(calc(${glowPos.current.x}px - 50%), calc(${glowPos.current.y}px - 50%))`
         }

         rafRef.current = requestAnimationFrame(tick)
      }

      document.body.classList.add("cursor-fine")
      window.addEventListener("pointermove",     onMove, { passive: true })
      document.addEventListener("mouseover",     onOver, { passive: true })
      window.addEventListener("mousedown",       onDown)
      window.addEventListener("mouseup",         onUp)
      document.addEventListener("visibilitychange", onVisibility)
      rafRef.current = requestAnimationFrame(tick)

      return () => {
         document.body.classList.remove("cursor-fine")
         window.removeEventListener("pointermove",  onMove)
         document.removeEventListener("mouseover",  onOver)
         window.removeEventListener("mousedown",    onDown)
         window.removeEventListener("mouseup",      onUp)
         document.removeEventListener("visibilitychange", onVisibility)
         if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
   }, [])

   if (!isFine) return null

   const dotSize  = isPressed ? 3  : (isHover ? 7  : 5  )
   const ringSize = isPressed ? 44 : (isHover ? 54 : 28 )
   const glowSize = isHover ? 210 : 140

   return (
      <>
         {/* Glow ambiental — mais lento, segue a distância */}
         <div
            ref={glowRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top:           0,
               left:          0,
               width:         glowSize,
               height:        glowSize,
               borderRadius:  "50%",
               background:    isHover
                  ? "radial-gradient(circle, rgba(168,85,247,0.11) 0%, transparent 65%)"
                  : "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 65%)",
               pointerEvents: "none",
               zIndex:        99996,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    "opacity 0.5s ease, background 0.5s ease, width 0.6s cubic-bezier(0.22,1,0.36,1), height 0.6s cubic-bezier(0.22,1,0.36,1)",
               filter:        "blur(6px)",
            }}
         />

         {/* Ring — velocidade média, expande no hover */}
         <div
            ref={ringRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top:           0,
               left:          0,
               width:         ringSize,
               height:        ringSize,
               borderRadius:  "50%",
               border:        isHover
                  ? "1.5px solid rgba(168,85,247,0.70)"
                  : "1px solid rgba(124,58,237,0.42)",
               background:    isHover
                  ? "rgba(168,85,247,0.06)"
                  : "rgba(124,58,237,0.02)",
               pointerEvents: "none",
               zIndex:        99998,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    [
                  "opacity 0.4s ease",
                  "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  "height 0.5s cubic-bezier(0.22,1,0.36,1)",
                  "border 0.3s ease",
                  "background 0.3s ease",
                  "box-shadow 0.3s ease",
               ].join(", "),
               boxShadow: isHover
                  ? "0 0 22px rgba(168,85,247,0.22), inset 0 0 14px rgba(168,85,247,0.07)"
                  : "0 0 8px rgba(124,58,237,0.12)",
            }}
         />

         {/* Dot — instantâneo, muda de cor no hover */}
         <div
            ref={dotRef}
            aria-hidden="true"
            style={{
               position:      "fixed",
               top:           0,
               left:          0,
               width:         dotSize,
               height:        dotSize,
               borderRadius:  "50%",
               background:    isHover ? "rgba(255,255,255,0.88)" : "#00e87a",
               pointerEvents: "none",
               zIndex:        99999,
               willChange:    "transform",
               opacity:       visible ? 1 : 0,
               transition:    [
                  "opacity 0.4s ease",
                  "width 0.3s cubic-bezier(0.22,1,0.36,1)",
                  "height 0.3s cubic-bezier(0.22,1,0.36,1)",
                  "background 0.3s ease",
                  "box-shadow 0.3s ease",
               ].join(", "),
               boxShadow: isHover
                  ? "0 0 0 1.5px rgba(255,255,255,0.18), 0 0 12px rgba(255,255,255,0.55)"
                  : "0 0 0 2px rgba(0,232,122,0.22), 0 0 10px rgba(0,232,122,0.75)",
            }}
         />
      </>
   )
}
