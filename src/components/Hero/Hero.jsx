"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false })

const containerVariants = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
   },
}

const itemVariants = {
   hidden:  { opacity: 0, y: 24 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
   },
}

export default function Hero() {
   return (
      <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">

         <HeroBackground />

         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-deep pointer-events-none"></div>

         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
         >

            <motion.span variants={itemVariants} className="text-neon-base text-sm font-medium tracking-widest uppercase mb-6 text-glow-neon">
               Full Stack Developer
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-6">
               Arthur <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-neon-base">Couto</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
               Desenvolvedor full stack focado em construir <span className="text-text-primary font-medium">aplicacoes web completas</span> do zero ao deploy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap justify-center">
               <a href="#projetos" className="px-6 py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-300 shadow-purple-md hover:shadow-purple-lg">
                  Ver projetos
               </a>
               <a href="#contato" className="px-6 py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-300">
                  Fale comigo
               </a>
            </motion.div>

         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
               animate={{ y: [0, 6, 0] }}
               transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-8 bg-gradient-to-b from-purple-base to-transparent"
            ></motion.div>
         </motion.div>

      </section>
   )
}