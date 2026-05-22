"use client"

import { useEffect, useRef } from "react"

export default function GlobalBackground() {
   const canvasRef = useRef(null)

   useEffect(() => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches
      const canvas  = canvasRef.current
      if (!canvas) return

      const ctx    = canvas.getContext("2d")
      let raf      = null
      let paused   = false
      let W        = 0
      let H        = 0
      let time     = 0

      const GRID_SIZE   = 80
      const DOT_RADIUS  = 0.8
      const NODE_COUNT  = isTouch ? 18 : 36

      const palette = [
         "rgba(124, 58, 237,",
         "rgba(0, 232, 122,",
         "rgba(59, 130, 246,",
         "rgba(239, 68, 68,",
      ]

      const nodes = []

      const resize = () => {
         W = canvas.width  = window.innerWidth
         H = canvas.height = document.body.scrollHeight
      }

      const initNodes = () => {
         nodes.length = 0
         for (let i = 0; i < NODE_COUNT; i++) {
            const color = palette[Math.floor(Math.random() * palette.length)]
            nodes.push({
               x:     Math.random() * W,
               y:     Math.random() * H,
               vx:    (Math.random() - 0.5) * 0.18,
               vy:    (Math.random() - 0.5) * 0.18,
               r:     Math.random() * 1.2 + 0.4,
               alpha: Math.random() * 0.4 + 0.15,
               color,
            })
         }
      }

      const drawGrid = () => {
         const cols = Math.ceil(W / GRID_SIZE) + 1
         const rows = Math.ceil(H / GRID_SIZE) + 1
         const pulse = Math.sin(time * 0.4) * 0.012 + 0.022

         ctx.fillStyle = "rgba(124, 58, 237, " + pulse + ")"
         for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
               ctx.beginPath()
               ctx.arc(c * GRID_SIZE, r * GRID_SIZE, DOT_RADIUS, 0, Math.PI * 2)
               ctx.fill()
            }
         }
      }

      const drawConnections = () => {
         const MAX_DIST = 260
         for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
               const dx   = nodes[i].x - nodes[j].x
               const dy   = nodes[i].y - nodes[j].y
               const dist = Math.sqrt(dx * dx + dy * dy)
               if (dist < MAX_DIST) {
                  const alpha = (1 - dist / MAX_DIST) * 0.055
                  ctx.strokeStyle = nodes[i].color + alpha + ")"
                  ctx.lineWidth   = 0.6
                  ctx.beginPath()
                  ctx.moveTo(nodes[i].x, nodes[i].y)
                  ctx.lineTo(nodes[j].x, nodes[j].y)
                  ctx.stroke()
               }
            }
         }
      }

      const drawNodes = () => {
         nodes.forEach((n) => {
            n.x += n.vx
            n.y += n.vy
            if (n.x < 0 || n.x > W) n.vx *= -1
            if (n.y < 0 || n.y > H) n.vy *= -1

            ctx.beginPath()
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
            ctx.fillStyle = n.color + n.alpha + ")"
            ctx.fill()
         })
      }

      const tick = () => {
         if (paused) {
            raf = requestAnimationFrame(tick)
            return
         }
         time += 0.016
         ctx.clearRect(0, 0, W, H)
         drawGrid()
         drawConnections()
         drawNodes()
         raf = requestAnimationFrame(tick)
      }

      const onVisibility = () => { paused = document.hidden }
      const onResize     = () => { resize(); initNodes() }

      resize()
      initNodes()
      raf = requestAnimationFrame(tick)

      document.addEventListener("visibilitychange", onVisibility)
      window.addEventListener("resize", onResize)

      return () => {
         cancelAnimationFrame(raf)
         document.removeEventListener("visibilitychange", onVisibility)
         window.removeEventListener("resize", onResize)
      }
   }, [])

   return (
      <canvas
         ref={canvasRef}
         aria-hidden="true"
         className="fixed inset-0 w-full h-full pointer-events-none z-0"
         style={{ opacity: 0.35 }}
      />
   )
}