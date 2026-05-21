"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
   const dotRef = useRef(null)
   const ringRef = useRef(null)

   const mouse = useRef({ x: -100, y: -100 })
   const dotPos = useRef({ x: -100, y: -100 })
   const ringPos = useRef({ x: -100, y: -100 })

   const rafRef = useRef(null)
   const observerRef = useRef(null)

   const [hovered, setHovered] = useState(false)
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      const lerp = (a, b, t) => a + (b - a) * t

      const onMove = (e) => {
         mouse.current = { x: e.clientX, y: e.clientY }

         setVisible((v) => {
            if (!v) return true
            return v
         })
      }

      const onEnterClickable = () => setHovered(true)
      const onLeaveClickable = () => setHovered(false)

      const addListeners = () => {
         const clickables = document.querySelectorAll(
            "a, button, [role='button']"
         )

         clickables.forEach((el) => {
            // ❗ remove antes de adicionar (EVITA DUPLICAÇÃO)
            el.removeEventListener("mouseenter", onEnterClickable)
            el.removeEventListener("mouseleave", onLeaveClickable)

            el.addEventListener("mouseenter", onEnterClickable)
            el.addEventListener("mouseleave", onLeaveClickable)
         })
      }

      const animate = () => {
         dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.18)
         dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.18)

         ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.08)
         ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.08)

         if (dotRef.current) {
            dotRef.current.style.transform =
               `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`
         }

         if (ringRef.current) {
            ringRef.current.style.transform =
               `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
         }

         rafRef.current = requestAnimationFrame(animate)
      }

      window.addEventListener("mousemove", onMove, { passive: true })

      addListeners()
      rafRef.current = requestAnimationFrame(animate)

      observerRef.current = new MutationObserver(addListeners)
      observerRef.current.observe(document.body, {
         childList: true,
         subtree: true,
      })

      return () => {
         window.removeEventListener("mousemove", onMove)
         cancelAnimationFrame(rafRef.current)

         if (observerRef.current) {
            observerRef.current.disconnect()
         }
      }
   }, [])

   return (
      <>
         <div
            ref={dotRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
            style={{
               width: hovered ? "6px" : "5px",
               height: hovered ? "6px" : "5px",
               borderRadius: "50%",
               backgroundColor: hovered ? "transparent" : "#00e87a",
               opacity: visible ? 1 : 0,
               transition:
                  "width 0.25s ease, height 0.25s ease, background-color 0.25s ease",
            }}
         />

         <div
            ref={ringRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
            style={{
               width: hovered ? "40px" : "28px",
               height: hovered ? "40px" : "28px",
               borderRadius: "50%",
               border: hovered
                  ? "1.5px solid #39ff9a"
                  : "1.5px solid rgba(0,232,122,0.5)",
               boxShadow: hovered
                  ? "0 0 12px rgba(0,232,122,0.35)"
                  : "none",
               opacity: visible ? 1 : 0,
               transition:
                  "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
         />
      </>
   )
}