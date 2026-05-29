"use client"

import { motion } from "framer-motion"

const sectionVariants = {
   fadeUp: {
      hidden:  { opacity: 0, y: 52 },
      visible: { opacity: 1, y: 0  },
   },
   fadeLeft: {
      hidden:  { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0   },
   },
   fadeRight: {
      hidden:  { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0  },
   },
   scaleIn: {
      hidden:  { opacity: 0, scale: 0.93 },
      visible: { opacity: 1, scale: 1    },
   },
}

export function StaggerWrapper({ children, className = "", delay = 0 }) {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-40px" }}
         variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
         }}
         className={className}
      >
         {children}
      </motion.div>
   )
}

export function StaggerItem({ children, className = "" }) {
   return (
      <motion.div
         variants={{
            hidden:  { opacity: 0, y: 28 },
            visible: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            },
         }}
         className={className}
      >
         {children}
      </motion.div>
   )
}

export default function SectionWrapper({
   children,
   id,
   className = "",
   delay   = 0,
   variant = "fadeUp",
}) {
   const selected = sectionVariants[variant] || sectionVariants.fadeUp

   return (
      <motion.section
         id={id}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-40px" }}
         transition={{
            duration: 0.9,
            ease:     [0.22, 1, 0.36, 1],
            delay,
         }}
         variants={selected}
         className={"relative w-full " + className}
      >
         {children}
      </motion.section>
   )
}
