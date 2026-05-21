"use client"

import { motion } from "framer-motion"

const variants = {
   fadeUp: {
      hidden:  { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0  },
   },
   fadeLeft: {
      hidden:  { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0   },
   },
   fadeRight: {
      hidden:  { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0  },
   },
   scaleIn: {
      hidden:  { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1    },
   },
}

export default function SectionWrapper({
   children,
   id,
   className = "",
   delay     = 0,
   variant   = "fadeUp",
}) {
   const selected = variants[variant] || variants.fadeUp

   return (
      <motion.section
         id={id}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-80px" }}
         transition={{
            duration: 0.75,
            ease:     [0.25, 0.1, 0.25, 1],
            delay,
         }}
         variants={selected}
         className={"relative w-full " + className}
      >
         {children}
      </motion.section>
   )
}