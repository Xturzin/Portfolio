"use client"

import { useEffect, useRef } from "react"

const ENERGY_LINES = [
   { y: 0.18, speed: 0.00022, amplitude: 38, color: "124,58,237",  width: 0.8, alpha: 0.18 },
   { y: 0.34, speed: 0.00018, amplitude: 52, color: "0,232,122",   width: 0.6, alpha: 0.12 },
   { y: 0.52, speed: 0.00026, amplitude: 44, color: "59,130,246",  width: 0.7, alpha: 0.14 },
   { y: 0.68, speed: 0.00020, amplitude: 60, color: "124,58,237",  width: 0.5, alpha: 0.10 },
   { y: 0.82, speed: 0.00024, amplitude: 36, color: "239,68,68",   width: 0.6, alpha: 0.10 },
]

const ORBS = [
   { x: 0.15, y: 0.12, r: 280, color: "124,58,237", alpha: 0.055, speed: 0.00014 },
   { x: 0.82, y: 0.28, r: 320, color: "0,232,122",  alpha: 0.035, speed: 0.00018 },
   { x: 0.45, y: 0.65, r: 260, color: "59,130,246", alpha: 0.045, speed: 0.00012 },
   { x: 0.88, y: 0.78, r: 300, color: "124,58,237", alpha: 0.040, speed: 0.00016 },
]

const GRID_STEP = 72

export default function GlobalBackground() {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      let raf    = null
      let paused = false
      let t      = 0
      let W      = 0
      let H      = 0

      const resize = () => {
         W = canvas.width  = window.innerWidth
         H = canvas.height = window.innerHeight
      }

      const drawGrid = () => {
         const pulse = Math.sin(t * 0.0008) * 0.008 + 0.018
         ctx.fillStyle = "rgba(124,58,237," + pulse + ")"
         const cols = Math.ceil(W / GRID_STEP) + 1
         const rows = Math.ceil(H / GRID_STEP) + 1
         for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
               ctx.beginPath()
               ctx.arc(c * GRID_STEP, r * GRID_STEP, 0.7, 0, Math.PI * 2)
               ctx.fill()
            }
         }
      }

      const drawOrbs = () => {
         ORBS.forEach((orb) => {
            const ox    = orb.x * W + Math.sin(t * orb.speed * 0.7) * 60
            const oy    = orb.y * H + Math.cos(t * orb.speed)       * 40
            const pulse = Math.sin(t * orb.speed * 3) * 0.015 + orb.alpha
            const grad  = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r)
            grad.addColorStop(0,   "rgba(" + orb.color + "," + pulse + ")")
            grad.addColorStop(0.5, "rgba(" + orb.color + "," + (pulse * 0.3) + ")")
            grad.addColorStop(1,   "rgba(" + orb.color + ",0)")
            ctx.fillStyle = grad
            ctx.beginPath()
            ctx.arc(ox, oy, orb.r, 0, Math.PI * 2)
            ctx.fill()
         })
      }

      const drawEnergyLines = () => {
         ENERGY_LINES.forEach((line) => {
            const baseY  = line.y * H
            const points = Math.ceil(W / 6) + 2
            const pulse  = Math.sin(t * line.speed * 0.5) * 0.04 + line.alpha

            ctx.beginPath()
            ctx.lineWidth   = line.width
            ctx.strokeStyle = "rgba(" + line.color + "," + pulse + ")"

            for (let i = 0; i <= points; i++) {
               const x   = (i / points) * W
               const phase1 = Math.sin(x * 0.008 + t * line.speed * 1000) * line.amplitude
               const phase2 = Math.sin(x * 0.003 + t * line.speed * 600 + 1.2) * (line.amplitude * 0.4)
               const y   = baseY + phase1 + phase2

               if (i === 0) ctx.moveTo(x, y)
               else         ctx.lineTo(x, y)
            }

            ctx.stroke()

            const glowPulse = Math.sin(t * line.speed * 1500 + line.y * 10)
            if (glowPulse > 0.7) {
               const glowX = ((glowPulse - 0.7) / 0.3) * W
               const glowY = line.y * H + Math.sin(glowX * 0.008 + t * line.speed * 1000) * line.amplitude
               const grad  = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 20)
               grad.addColorStop(0, "rgba(" + line.color + ",0.35)")
               grad.addColorStop(1, "rgba(" + line.color + ",0)")
               ctx.fillStyle = grad
               ctx.beginPath()
               ctx.arc(glowX, glowY, 20, 0, Math.PI * 2)
               ctx.fill()
            }
         })
      }

      const tick = () => {
         if (!paused) {
            t++
            ctx.clearRect(0, 0, W, H)
            drawGrid()
            drawOrbs()
            drawEnergyLines()
         }
         raf = requestAnimationFrame(tick)
      }

      const onVisibility = () => { paused = document.hidden }

      resize()
      raf = requestAnimationFrame(tick)
      window.addEventListener("resize",           resize)
      document.addEventListener("visibilitychange", onVisibility)

      return () => {
         cancelAnimationFrame(raf)
         window.removeEventListener("resize", resize)
         document.removeEventListener("visibilitychange", onVisibility)
      }
   }, [])

   return (
      <canvas
         ref={canvasRef}
         aria-hidden="true"
         className="fixed inset-0 w-full h-full pointer-events-none z-0"
         style={{ opacity: 0.45 }}
      />
   )
}