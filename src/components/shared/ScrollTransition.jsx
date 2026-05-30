"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence }      from "framer-motion"

export default function ScrollTransition() {
   const [active, setActive]   = useState(false)
   const scrollRef             = useRef(null)
   const timerRef              = useRef(null)

   useEffect(() => {
      const onScroll = () => {
         setActive(true)
         clearTimeout(timerRef.current)
         timerRef.current = setTimeout(() => setActive(false), 180)
      }

      window.addEventListener("scroll", onScroll, { passive: true })
      return () => {
         window.removeEventListener("scroll", onScroll)
         clearTimeout(timerRef.current)
      }
   }, [])

   return (
      <AnimatePresence>
         {active && (
            <motion.div
               key="scroll-bar"
               initial={{ scaleX: 0, opacity: 1 }}
               animate={{ scaleX: 1, opacity: 1 }}
               exit={{ opacity: 0, transition: { duration: 0.25 } }}
               transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
               className="fixed top-0 left-0 right-0 pointer-events-none origin-left"
               style={{
                  height:     2,
                  zIndex:     99995,
                  background: "linear-gradient(90deg, #7c3aed 0%, #00e87a 55%, #3b82f6 100%)",
               }}
            />
         )}
      </AnimatePresence>
   )
}
