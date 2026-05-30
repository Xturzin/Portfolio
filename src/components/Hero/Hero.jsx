"use client"

import { motion } from "framer-motion"

const containerVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}

const itemVariants = {
   hidden:  { opacity: 0, y: 28 },
   visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 90, mass: 0.9 } },
}

const labelVariant = {
   hidden:  { opacity: 0, x: -24 },
   visible: { opacity: 1, x: 0,  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const headingVariant = {
   hidden:  { opacity: 0, y: -40, rotateX: -22 },
   visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 85, mass: 1.0 },
   },
}

export default function Hero() {
   return (
      <section
         id="hero"
         aria-label="Introdução"
         className="relative w-full h-svh min-h-[540px] flex items-center justify-center overflow-hidden"
      >
         {/* Grade de pontos — identidade visual, zero JS */}
         <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
               backgroundImage: "radial-gradient(rgba(124,58,237,0.10) 1.2px, transparent 1.2px)",
               backgroundSize: "38px 38px",
               maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
               WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            }}
         />

         {/* Orbs animados via CSS — sem JS */}
         <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 700, height: 700, top: "-14%", left: "-10%",
               background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(124,58,237,0.04) 45%, transparent 70%)",
               animation: "heroOrb1 14s ease-in-out infinite",
            }} />
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 580, height: 580, bottom: "-8%", right: "-6%",
               background: "radial-gradient(circle, rgba(0,232,122,0.10) 0%, rgba(0,232,122,0.03) 45%, transparent 70%)",
               animation: "heroOrb2 17s ease-in-out infinite",
            }} />
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 860, height: 860, top: "18%", left: "20%",
               background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 45%, transparent 68%)",
               animation: "heroOrb3 20s ease-in-out infinite",
            }} />
         </div>

         {/* Anéis pulsantes concêntricos */}
         <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
            {[380, 560, 740].map((size, i) => (
               <div
                  key={size}
                  style={{
                     position: "absolute",
                     width: size, height: size,
                     top: "50%", left: "50%",
                     marginLeft: -(size / 2), marginTop: -(size / 2),
                     borderRadius: "50%",
                     border: "1px solid rgba(124,58,237,0.07)",
                     animation: `ringPulse ${7 + i * 2.5}s ease-in-out infinite ${i * 1.8}s`,
                     transformOrigin: "center center",
                  }}
               />
            ))}
         </div>

         {/* Gradientes de fade nos cantos */}
         <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/25 via-transparent to-bg-deep" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 35%, rgba(7,7,15,0.55) 100%)" }} />
         </div>

         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto"
         >
            <motion.span variants={labelVariant} className="text-neon-base text-xs md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8">
               Full Stack Developer
            </motion.span>

            <motion.h1
               variants={headingVariant}
               style={{ transformPerspective: 700 }}
               className="text-[2rem] sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.04] tracking-tight mb-5 md:mb-7"
            >
               Arthur{" "}
               <span
                  className="text-transparent bg-clip-text inline-block"
                  style={{
                     backgroundImage: "linear-gradient(90deg, #a855f7 0%, #00e87a 30%, #3b82f6 60%, #a855f7 100%)",
                     backgroundSize: "300% 100%",
                     WebkitBackgroundClip: "text",
                     animation: "gradientShift 18s ease infinite",
                  }}
               >
                  Couto
               </span>
            </motion.h1>

            <motion.p
               variants={itemVariants}
               className="text-text-secondary text-sm sm:text-base md:text-xl max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed mb-10 md:mb-14"
            >
               Desenvolvedor full stack focado em construir{" "}
               <span className="text-text-primary font-medium">aplicações web completas</span>{" "}
               do zero ao deploy.
            </motion.p>

            <motion.div
               variants={itemVariants}
               className="flex items-center gap-3 flex-wrap justify-center"
            >
               <a
                  href="#projetos"
                  aria-label="Ver projetos de Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-300 shadow-purple-md hover:shadow-purple-lg hover:scale-[1.03] active:scale-[0.97]"
               >
                  Ver projetos
               </a>
               <a
                  href="#contato"
                  aria-label="Entrar em contato com Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
               >
                  Fale comigo
               </a>
            </motion.div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.0 }}
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
            <motion.div
               animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-10 bg-gradient-to-b from-purple-base via-neon-base/40 to-transparent mx-auto"
            />
         </motion.div>
      </section>
   )
}
