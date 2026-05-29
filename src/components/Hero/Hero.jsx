"use client"

import { motion } from "framer-motion"

const containerVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const itemVariants = {
   hidden: { opacity: 0, y: 22 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
   },
}

export default function Hero() {
   return (
      <section
         id="hero"
         aria-label="Introdução"
         className="relative w-full h-svh min-h-[540px] flex items-center justify-center overflow-hidden"
      >
         {/* Gradientes CSS estáticos — sem JS, sem GPU extra */}
         <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute rounded-full" style={{
               width: 640, height: 640,
               top: "-10%", left: "-10%",
               background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 68%)",
            }} />
            <div className="absolute rounded-full" style={{
               width: 520, height: 520,
               bottom: "-5%", right: "-5%",
               background: "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 68%)",
            }} />
            <div className="absolute rounded-full" style={{
               width: 700, height: 700,
               top: "20%", left: "28%",
               background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
            }} />
         </div>

         <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/20 via-transparent to-bg-deep" />
         </div>

         <motion.div
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
            transition={{ delay: 1.2, duration: 0.8 }}
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
            <motion.div
               animate={{ y: [0, 8, 0], opacity: [0.35, 0.75, 0.35] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-8 bg-gradient-to-b from-purple-base to-transparent mx-auto"
            />
         </motion.div>
      </section>
   )
}
