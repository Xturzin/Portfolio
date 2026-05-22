"use client"

import { useEffect, useRef } from "react"

const ORBS = [
   { x: 0.10, y: 0.08, r: 400, color: "124,58,237", alpha: 0.022, speed: 0.00010 },
   { x: 0.88, y: 0.30, r: 440, color: "0,232,122",  alpha: 0.014, speed: 0.00014 },
   { x: 0.50, y: 0.72, r: 360, color: "59,130,246", alpha: 0.018, speed: 0.00009 },
]

const LINES = [
   { y: 0.30, speed: 0.00012, amp: 24, color: "124,58,237", alpha: 0.07 },
   { y: 0.62, speed: 0.00010, amp: 32, color: "0,232,122",  alpha: 0.05 },
]

const GRID = 88

export default function GlobalBackground() {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx  = canvas.getContext("2d")
      let raf    = null
      let paused = false
      let t      = 0
      let W = 0, H = 0

      const resize = () => {
         W = canvas.width  = window.innerWidth
         H = canvas.height = window.innerHeight
      }

      const drawGrid = () => {
         const a = Math.sin(t * 0.0005) * 0.004 + 0.011
         ctx.fillStyle = "rgba(124,58,237," + a + ")"
         const cols = Math.ceil(W / GRID) + 1
         const rows = Math.ceil(H / GRID) + 1
         for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
               ctx.beginPath()
               ctx.arc(c * GRID, r * GRID, 0.55, 0, Math.PI * 2)
               ctx.fill()
            }
         }
      }

      const drawOrbs = () => {
         ORBS.forEach((orb) => {
            const ox = orb.x * W + Math.sin(t * orb.speed * 0.5) * 40
            const oy = orb.y * H + Math.cos(t * orb.speed)       * 28
            const a  = Math.sin(t * orb.speed * 2) * 0.005 + orb.alpha
            const g  = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r)
            g.addColorStop(0,   "rgba(" + orb.color + "," + a + ")")
            g.addColorStop(0.5, "rgba(" + orb.color + "," + (a * 0.15) + ")")
            g.addColorStop(1,   "rgba(" + orb.color + ",0)")
            ctx.fillStyle = g
            ctx.beginPath()
            ctx.arc(ox, oy, orb.r, 0, Math.PI * 2)
            ctx.fill()
         })
      }

      const drawLines = () => {
         LINES.forEach((line) => {
            const baseY  = line.y * H
            const pts    = Math.ceil(W / 10) + 2
            const a      = Math.sin(t * line.speed * 0.3) * 0.018 + line.alpha
            ctx.beginPath()
            ctx.lineWidth   = 0.45
            ctx.strokeStyle = "rgba(" + line.color + "," + a + ")"
            for (let i = 0; i <= pts; i++) {
               const x = (i / pts) * W
               const y = baseY
                  + Math.sin(x * 0.005  + t * line.speed * 800) * line.amp
                  + Math.sin(x * 0.0018 + t * line.speed * 400 + 1.6) * (line.amp * 0.3)
               if (i === 0) ctx.moveTo(x, y)
               else         ctx.lineTo(x, y)
            }
            ctx.stroke()
         })
      }

      const tick = () => {
         if (!paused) {
            t++
            ctx.clearRect(0, 0, W, H)
            drawGrid()
            drawOrbs()
            drawLines()
         }
         raf = requestAnimationFrame(tick)
      }

      const onVis = () => { paused = document.hidden }

      resize()
      raf = requestAnimationFrame(tick)
      window.addEventListener("resize", resize)
      document.addEventListener("visibilitychange", onVis)

      return () => {
         cancelAnimationFrame(raf)
         window.removeEventListener("resize", resize)
         document.removeEventListener("visibilitychange", onVis)
      }
   }, [])

   return (
      <canvas
         ref={canvasRef}
         aria-hidden="true"
         className="fixed inset-0 w-full h-full pointer-events-none z-0"
         style={{ opacity: 0.22 }}
      />
   )
}