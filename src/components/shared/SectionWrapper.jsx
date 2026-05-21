"use client"

import { motion } from "framer-motion"

export default function SectionWrapper({
   children,
   id,
   className = "",
   delay = 0,
}) {
   return (
      <motion.section
         id={id}
         initial={{ opacity: 0, y: 32 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-80px" }}
         transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay,
         }}
         className={`relative w-full ${className}`}
      >
         {children}
      </motion.section>
   )
}