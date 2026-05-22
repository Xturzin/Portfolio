"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLoader() {
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 900)
      return () => clearTimeout(timer)
   }, [])

   return (
      <AnimatePresence>
         {loading && (
            <motion.div
               key="loader"
               initial={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
               className="fixed inset-0 z-[99999] bg-bg-deep flex items-center justify-center pointer-events-none"
            >
               <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1    }}
                  exit={{    opacity: 0, scale: 0.96  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2"
               >
                  <span className="text-text-primary font-semibold text-xl tracking-tight">
                     Arthur
                  </span>
                  <span className="text-neon-base text-xl font-bold text-glow-neon">.</span>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   )
}