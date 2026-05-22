"use client"

import dynamic from "next/dynamic"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false })

const containerVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.2, delayChildren: 0.55 } },
}

const itemVariants = {
   hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
   visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
   },
}

const ORBS = [
   { cx: "15%", cy: "25%", size: 3, color: "#00e87a", dur: 4.2, delay: 0 },
   { cx: "80%", cy: "18%", size: 2, color: "#a855f7", dur: 5.8, delay: 1.1 },
   { cx: "65%", cy: "72%", size: 2, color: "#3b82f6", dur: 4.8, delay: 0.7 },
   { cx: "28%", cy: "68%", size: 3, color: "#00e87a", dur: 6.2, delay: 2.0 },
   { cx: "90%", cy: "55%", size: 2, color: "#c084fc", dur: 5.0, delay: 0.4 },
   { cx: "8%", cy: "52%", size: 2, color: "#3b82f6", dur: 4.6, delay: 1.6 },
   { cx: "50%", cy: "88%", size: 3, color: "#a855f7", dur: 5.4, delay: 0.9 },
]

function FloatingOrbs() {
   return (
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
         {ORBS.map((orb, i) => (
            <motion.div
               key={i}
               className="absolute rounded-full"
               style={{
                  left: orb.cx,
                  top: orb.cy,
                  width: orb.size,
                  height: orb.size,
                  backgroundColor: orb.color,
                  boxShadow: `0 0 ${orb.size * 4}px ${orb.color}`,
               }}
               animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
               transition={{
                  duration: orb.dur,
                  repeat: Infinity,
                  delay: orb.delay,
                  ease: "easeInOut",
               }}
            />
         ))}
      </div>
   )
}

export default function Hero() {
   const [isTouch, setIsTouch] = useState(false)

   useEffect(() => {
      const touch =
         window.matchMedia("(pointer: coarse)").matches ||
         window.innerWidth < 768
      setIsTouch(touch)
   }, [])

   const mouseX = useMotionValue(0)
   const mouseY = useMotionValue(0)

   const springCfg = { stiffness: 28, damping: 26, mass: 1 }
   const springX = useSpring(mouseX, springCfg)
   const springY = useSpring(mouseY, springCfg)

   const rotateX = useTransform(
      springY,
      [-0.5, 0.5],
      isTouch ? [0, 0] : [1.5, -1.5]
   )
   const rotateY = useTransform(
      springX,
      [-0.5, 0.5],
      isTouch ? [0, 0] : [-1.5, 1.5]
   )
   const tx = useTransform(
      springX,
      [-0.5, 0.5],
      isTouch ? [0, 0] : [-5, 5]
   )
   const ty = useTransform(
      springY,
      [-0.5, 0.5],
      isTouch ? [0, 0] : [-3, 3]
   )

   const handleMouseMove = (e) => {
      if (isTouch) return
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
   }

   return (
      <section
         id="hero"
         aria-label="Introdução"
         className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
         onMouseMove={handleMouseMove}
      >
         <HeroBackground />
         <FloatingOrbs />

         <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/15 via-transparent to-bg-deep pointer-events-none" />

         <motion.div
            style={{
               rotateX,
               rotateY,
               x: tx,
               y: ty,
               transformPerspective: 1400,
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto"
         >
            <motion.span
               variants={itemVariants}
               className="text-neon-base text-xs md:text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 text-glow-neon"
            >
               Full Stack Developer
            </motion.span>

            <motion.h1
               variants={itemVariants}
               className="text-[2rem] sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.15] tracking-tight mb-4 md:mb-6"
            >
               Arthur{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                  Couto
               </span>
            </motion.h1>

            <motion.p
               variants={itemVariants}
               className="text-text-secondary text-sm sm:text-base md:text-xl max-w-xs sm:max-w-xl md:max-w-2xl leading-relaxed mb-8 md:mb-10"
            >
               Desenvolvedor full stack focado em construir{" "}
               <span className="text-text-primary font-medium">
                  aplicações web completas
               </span>{" "}
               do zero ao deploy.
            </motion.p>

            <motion.div
               variants={itemVariants}
               className="flex items-center gap-3 flex-wrap justify-center"
            >
               <a
                  href="#projetos"
                  aria-label="Ver projetos de Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-300 shadow-purple-md hover:shadow-purple-lg hover:scale-105 active:scale-[0.97]"
               >
                  Ver projetos
               </a>

               <a
                  href="#contato"
                  aria-label="Entrar em contato com Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-[0.97]"
               >
                  Fale comigo
               </a>
            </motion.div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.0 }}
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <span className="text-text-muted text-xs tracking-widest uppercase">
               Scroll
            </span>

            <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-8 bg-gradient-to-b from-purple-base to-transparent"
            />
         </motion.div>
      </section>
   )
}