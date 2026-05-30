"use client"

import { motion } from "framer-motion"

const sectionVariants = {
   fadeUp: {
      hidden:  { opacity: 0, y: 72 },
      visible: { opacity: 1, y: 0  },
   },
   fadeLeft: {
      hidden:  { opacity: 0, x: -72 },
      visible: { opacity: 1, x: 0   },
   },
   fadeRight: {
      hidden:  { opacity: 0, x: 72 },
      visible: { opacity: 1, x: 0  },
   },
   scaleIn: {
      hidden:  { opacity: 0, scale: 0.88 },
      visible: { opacity: 1, scale: 1    },
   },
}

export function StaggerWrapper({ children, className = "", delay = 0 }) {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: "-60px" }}
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
            hidden:  { opacity: 0, y: 32 },
            visible: {
               opacity: 1,
               y: 0,
               transition: { type: "spring", damping: 24, stiffness: 100, mass: 0.8 },
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
         viewport={{ once: false, margin: "-80px" }}
         transition={{
            type:     "spring",
            damping:  28,
            stiffness: 90,
            mass:     0.9,
            delay,
         }}
         variants={selected}
         className={"relative w-full " + className}
      >
         {children}
      </motion.section>
   )
}
