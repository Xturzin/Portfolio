"use client"

import { motion } from "framer-motion"

export default function AnimatedLabel({ children, className = "section-label" }) {
   const chars = children.split("")

   return (
      <motion.span
         className={className}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, margin: "-40px" }}
         variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.022, delayChildren: 0.04 } },
         }}
         style={{ display: "inline-flex" }}
      >
         {chars.map((char, i) => (
            <motion.span
               key={i}
               variants={{
                  hidden:  { opacity: 0, y: 16, filter: "blur(4px)" },
                  visible: {
                     opacity: 1, y: 0, filter: "blur(0px)",
                     transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
                  },
               }}
               style={{ display: "inline-block", whiteSpace: "pre" }}
            >
               {char}
            </motion.span>
         ))}
      </motion.span>
   )
}
