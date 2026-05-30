"use client"

import { motion } from "framer-motion"

const sectionVariants = {
   fadeUp:    { hidden: { opacity: 0, y: 56 },    visible: { opacity: 1, y: 0  } },
   fadeLeft:  { hidden: { opacity: 0, x: -56 },   visible: { opacity: 1, x: 0  } },
   fadeRight: { hidden: { opacity: 0, x: 56 },    visible: { opacity: 1, x: 0  } },
   scaleIn:   { hidden: { opacity: 0, scale: 0.90 }, visible: { opacity: 1, scale: 1 } },
}

export function StaggerWrapper({ children, className = "", delay = 0 }) {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: "-50px" }}
         variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.10, delayChildren: delay } },
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
            visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 140, mass: 0.6 } },
         }}
         className={className}
      >
         {children}
      </motion.div>
   )
}

export default function SectionWrapper({ children, id, className = "", delay = 0, variant = "fadeUp" }) {
   const selected = sectionVariants[variant] || sectionVariants.fadeUp
   return (
      <motion.section
         id={id}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: "-70px" }}
         transition={{ type: "spring", damping: 26, stiffness: 130, mass: 0.65, delay }}
         variants={selected}
         className={"relative w-full " + className}
      >
         {children}
      </motion.section>
   )
}
