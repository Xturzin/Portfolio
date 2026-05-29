"use client"

import dynamic from "next/dynamic"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false })

const containerVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants = {
   hidden: { opacity: 0, y: 16 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
   },
}

const ORBS = [
   { cx: "12%", cy: "20%", size: 420, color: "#00e87a", dur: 9.0,  delay: 0   },
   { cx: "82%", cy: "15%", size: 340, color: "#a855f7", dur: 10.0, delay: 1.8 },
   { cx: "55%", cy: "78%", size: 500, color: "#3b82f6", dur: 9.5,  delay: 0.9 },
]

function FloatingOrbs() {
   return (
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
         {ORBS.map((orb, i) => (
            <motion.div
               key={i}
               className="absolute rounded-full"
               style={{
                  left:       orb.cx,
                  top:        orb.cy,
                  width:      orb.size,
                  height:     orb.size,
                  marginLeft: -(orb.size / 2),
                  marginTop:  -(orb.size / 2),
                  background: `radial-gradient(circle, ${orb.color}18 0%, ${orb.color}07 45%, transparent 70%)`,
               }}
               animate={{ y: [0, -28, 0], opacity: [0.55, 0.95, 0.55] }}
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
   const mouseX = useMotionValue(0)
   const mouseY = useMotionValue(0)

   const springCfg = { stiffness: 16, damping: 32, mass: 1.2 }
   const springX = useSpring(mouseX, springCfg)
   const springY = useSpring(mouseY, springCfg)

   const tx = useTransform(springX, [-0.5, 0.5], [-3, 3])
   const ty = useTransform(springY, [-0.5, 0.5], [-2, 2])

   const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
   }

   return (
      <section
         id="hero"
         aria-label="Introducao"
         className="relative w-full h-svh min-h-[540px] flex items-center justify-center overflow-hidden"
         onMouseMove={handleMouseMove}
      >
         <HeroBackground />
         <FloatingOrbs />

         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/20 via-transparent to-bg-deep"></div>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(7,7,15,0.55) 100%)" }}></div>
         </div>

         <motion.div
            style={{ x: tx, y: ty }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto"
         >
            <motion.span
               variants={itemVariants}
               className="text-neon-base text-xs md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8"
            >
               Full Stack Developer
            </motion.span>

            <motion.h1
               variants={itemVariants}
               className="text-[2rem] sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.04] tracking-tight mb-5 md:mb-7"
            >
               Arthur{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">
                  Couto
               </span>
            </motion.h1>

            <motion.p
               variants={itemVariants}
               className="text-text-secondary text-sm sm:text-base md:text-xl max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed mb-10 md:mb-14"
            >
               Desenvolvedor full stack focado em construir{" "}
               <span className="text-text-primary font-medium">
                  aplicacoes web completas
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
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-300 shadow-purple-md hover:shadow-purple-lg hover:scale-[1.02] active:scale-[0.98]"
               >
                  Ver projetos
               </a>

               <a
                  href="#contato"
                  aria-label="Entrar em contato com Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
               >
                  Fale comigo
               </a>
            </motion.div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <span className="text-text-muted text-xs tracking-widest uppercase">
               Scroll
            </span>

            <motion.div
               animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-8 bg-gradient-to-b from-purple-base to-transparent"
            ></motion.div>
         </motion.div>
      </section>
   )
}
