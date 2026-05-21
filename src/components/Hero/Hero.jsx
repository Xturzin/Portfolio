"use client"

import dynamic from "next/dynamic"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false })

const containerVariants = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.55 },
   },
}

const itemVariants = {
   hidden: {
      opacity: 0,
      y: 32,
      filter: "blur(10px)",
   },
   visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
   },
}

export default function Hero() {
   const mouseX = useMotionValue(0)
   const mouseY = useMotionValue(0)

   // springs corretos (AGORA USADOS DE VERDADE)
   const springX = useSpring(mouseX, { stiffness: 35, damping: 22 })
   const springY = useSpring(mouseY, { stiffness: 35, damping: 22 })

   // transforms baseados nos springs (isso que estava errado antes)
   const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2])
   const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2])

   const translateX = useTransform(springX, [-0.5, 0.5], [-6, 6])
   const translateY = useTransform(springY, [-0.5, 0.5], [-4, 4])

   const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
   }

   return (
      <section
         id="hero"
         className="relative w-full h-screen flex items-center justify-center overflow-hidden"
         onMouseMove={handleMouseMove}
      >
         <HeroBackground />

         <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/15 via-transparent to-bg-deep pointer-events-none" />

         <motion.div
            style={{
               rotateX,
               rotateY,
               x: translateX,
               y: translateY,
               transformPerspective: 1400,
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
         >
            <motion.span
               variants={itemVariants}
               className="text-neon-base text-sm font-medium tracking-widest uppercase mb-6"
            >
               Full Stack Developer
            </motion.span>

            <motion.h1
               variants={itemVariants}
               className="text-5xl md:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-6"
            >
               Arthur{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                  Couto
               </span>
            </motion.h1>

            <motion.p
               variants={itemVariants}
               className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
               Desenvolvedor full stack focado em construir{" "}
               <span className="text-text-primary font-medium">
                  aplicacoes web completas
               </span>{" "}
               do zero ao deploy.
            </motion.p>

            <motion.div
               variants={itemVariants}
               className="flex items-center gap-4 flex-wrap justify-center"
            >
               <a
                  href="#projetos"
                  className="px-6 py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-300 shadow-purple-md hover:shadow-purple-lg hover:scale-105 active:scale-95"
               >
                  Ver projetos
               </a>

               <a
                  href="#contato"
                  className="px-6 py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
               >
                  Fale comigo
               </a>
            </motion.div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <span className="text-text-muted text-xs tracking-widest uppercase">
               Scroll
            </span>

            <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
               className="w-px h-8 bg-gradient-to-b from-purple-base to-transparent"
            />
         </motion.div>
      </section>
   )
}