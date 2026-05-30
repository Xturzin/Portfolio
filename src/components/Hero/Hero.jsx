"use client"

import { motion } from "framer-motion"

const PARTICLES = [
   { x: "14%",  y: "22%", size: 2.5, dur: 8,  delay: 0,   color: "#a855f7" },
   { x: "78%",  y: "18%", size: 2,   dur: 11,  delay: 2.5, color: "#00e87a" },
   { x: "88%",  y: "62%", size: 1.5, dur: 9.5, delay: 1.2, color: "#3b82f6" },
   { x: "22%",  y: "72%", size: 2,   dur: 13,  delay: 3.8, color: "#a855f7" },
   { x: "55%",  y: "82%", size: 1.5, dur: 10,  delay: 0.6, color: "#00e87a" },
   { x: "68%",  y: "40%", size: 2,   dur: 12,  delay: 4.2, color: "#3b82f6" },
]

const wordVariant = {
   hidden:  { y: "108%", rotateZ: 4 },
   visible: {
      y: 0, rotateZ: 0,
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.55 },
   },
}

const wordVariantAlt = {
   hidden:  { y: "108%", rotateZ: -3 },
   visible: {
      y: 0, rotateZ: 0,
      transition: { type: "spring", damping: 20, stiffness: 140, mass: 0.55 },
   },
}

function HeroWord({ children, alt = false }) {
   return (
      <span style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.06em", lineHeight: 1.04 }}>
         <motion.span variants={alt ? wordVariantAlt : wordVariant} style={{ display: "inline-block" }}>
            {children}
         </motion.span>
      </span>
   )
}

const labelVariant = {
   hidden:  { opacity: 0, x: -28, filter: "blur(4px)" },
   visible: { opacity: 1, x: 0,  filter: "blur(0px)", transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
}

const subtitleVariant = {
   hidden:  { opacity: 0, y: 26, filter: "blur(6px)" },
   visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 130, mass: 0.6 },
   },
}

const ctaVariant = {
   hidden:  { opacity: 0, y: 20, scale: 0.96 },
   visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 150, mass: 0.5 },
   },
}

export default function Hero() {
   return (
      <section
         id="hero"
         aria-label="Introdução"
         className="relative w-full h-svh min-h-[540px] flex items-center justify-center overflow-hidden"
      >
         {/* Grade de pontos animada */}
         <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
               backgroundImage: "radial-gradient(rgba(124,58,237,0.12) 1.3px, transparent 1.3px)",
               backgroundSize: "38px 38px",
               animation: "gridDrift 42s ease-in-out infinite",
               maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
               WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
            }}
         />

         {/* Orbs CSS — zero JS */}
         <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 760, height: 760, top: "-14%", left: "-12%",
               background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 45%, transparent 70%)",
               animation: "heroOrb1 14s ease-in-out infinite",
            }} />
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 620, height: 620, bottom: "-8%", right: "-6%",
               background: "radial-gradient(circle, rgba(0,232,122,0.13) 0%, rgba(0,232,122,0.04) 45%, transparent 70%)",
               animation: "heroOrb2 17s ease-in-out infinite",
            }} />
            <div style={{
               position: "absolute", borderRadius: "50%",
               width: 920, height: 920, top: "15%", left: "18%",
               background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.02) 45%, transparent 68%)",
               animation: "heroOrb3 21s ease-in-out infinite",
            }} />
         </div>

         {/* Glow central pulsante — destaque atrás do nome */}
         <div
            aria-hidden="true"
            style={{
               position: "absolute", borderRadius: "50%",
               width: 520, height: 280,
               top: "50%", left: "50%",
               marginLeft: -260, marginTop: -140,
               background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
               animation: "centralGlow 5.5s ease-in-out infinite",
               pointerEvents: "none",
            }}
         />

         {/* Anéis pulsantes */}
         <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
            {[340, 520, 700].map((size, i) => (
               <div
                  key={size}
                  style={{
                     position: "absolute",
                     width: size, height: size,
                     top: "50%", left: "50%",
                     marginLeft: -(size / 2), marginTop: -(size / 2),
                     borderRadius: "50%",
                     border: "1px solid rgba(124,58,237,0.09)",
                     animation: `ringPulse ${6.5 + i * 2.8}s ease-in-out infinite ${i * 2}s`,
                  }}
               />
            ))}
         </div>

         {/* Partículas flutuantes */}
         <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            {PARTICLES.map((p, i) => (
               <div
                  key={i}
                  style={{
                     position: "absolute",
                     left: p.x, top: p.y,
                     width: p.size, height: p.size,
                     borderRadius: "50%",
                     background: p.color,
                     boxShadow: `0 0 ${p.size * 5}px ${p.color}, 0 0 ${p.size * 12}px ${p.color}60`,
                     animation: `particleFloat ${p.dur}s ease-in-out infinite ${p.delay}s`,
                  }}
               />
            ))}
         </div>

         {/* Gradientes de vinheta */}
         <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/30 via-transparent to-bg-deep" />
            <div className="absolute inset-0" style={{
               background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(7,7,15,0.60) 100%)",
            }} />
         </div>

         {/* Conteúdo */}
         <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl mx-auto"
         >
            <motion.span variants={labelVariant} className="text-neon-base text-xs md:text-sm font-medium tracking-widest uppercase mb-6 md:mb-8">
               Full Stack Developer
            </motion.span>

            {/* H1 com word-by-word reveal */}
            <motion.h1
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.0 } } }}
               style={{ transformPerspective: 700 }}
               className="text-[2rem] sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.04] tracking-tight mb-5 md:mb-7"
            >
               <HeroWord>Arthur&nbsp;</HeroWord>
               <HeroWord alt>
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
               </HeroWord>
            </motion.h1>

            <motion.p variants={subtitleVariant} className="text-text-secondary text-sm sm:text-base md:text-xl max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed mb-10 md:mb-14">
               Desenvolvedor full stack focado em construir{" "}
               <span className="text-text-primary font-medium">aplicações web completas</span>{" "}
               do zero ao deploy.
            </motion.p>

            <motion.div variants={ctaVariant} className="flex items-center gap-3 flex-wrap justify-center">
               <a
                  href="#projetos"
                  aria-label="Ver projetos de Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-purple-base hover:bg-purple-light text-white font-medium text-sm transition-all duration-250 shadow-purple-md hover:shadow-purple-lg hover:scale-[1.04] active:scale-[0.96]"
               >
                  Ver projetos
               </a>
               <a
                  href="#contato"
                  aria-label="Entrar em contato com Arthur Couto"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-purple-dim/50 text-text-secondary hover:border-neon-base/50 hover:text-neon-base font-medium text-sm transition-all duration-250 hover:scale-[1.04] active:scale-[0.96]"
               >
                  Fale comigo
               </a>
            </motion.div>
         </motion.div>

         {/* Scroll indicator */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.0 }}
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
            <motion.div
               animate={{ y: [0, 10, 0], opacity: [0.25, 0.75, 0.25] }}
               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
               className="w-px h-10 bg-gradient-to-b from-purple-base via-neon-base/40 to-transparent mx-auto"
            />
         </motion.div>
      </section>
   )
}
