"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

const vertexShader = `
   varying vec2 vUv;
   void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }
`

const fragmentShader = `
   uniform float uTime;
   uniform vec2  uMouse;
   varying vec2  vUv;

   float hash(vec2 p) {
      p = fract(p * vec2(234.34, 435.345));
      p += dot(p, p + 34.23);
      return fract(p.x * p.y);
   }

   float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
      return mix(
         mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
         mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
         u.y
      );
   }

   float fbm(vec2 p) {
      float value     = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      for (int i = 0; i < 4; i++) {
         value     += amplitude * noise(p * frequency);
         frequency *= 2.1;
         amplitude *= 0.48;
      }
      return value;
   }

   void main() {
      vec2 uv = vUv;
      uv += uMouse * 0.055;

      float t  = uTime * 0.09;
      float n1 = fbm(uv * 1.8 + vec2(t * 0.7,  t * 0.5));
      float n2 = fbm(uv * 2.6 - vec2(t * 0.5,  t * 0.3) + n1 * 0.5);
      float n3 = fbm(uv * 1.1 + vec2(t * 0.25, t * 0.7) + n2 * 0.3);

      vec3 colorBg     = vec3(0.027, 0.027, 0.059);
      vec3 colorDeep   = vec3(0.10,  0.03,  0.20);
      vec3 colorPurple = vec3(0.486, 0.227, 0.929);
      vec3 colorNeon   = vec3(0.0,   0.910, 0.478);
      vec3 colorBlue   = vec3(0.231, 0.510, 0.965);

      vec3 color = colorBg;
      color = mix(color, colorDeep,   smoothstep(0.20, 0.60, n3) * 0.75);
      color = mix(color, colorPurple, smoothstep(0.35, 0.72, n1) * 0.58);
      color = mix(color, colorNeon,   smoothstep(0.56, 0.84, n2) * 0.16);
      color = mix(color, colorBlue,   smoothstep(0.44, 0.74, n1 * n2) * 0.22);

      float vignette = 1.0 - smoothstep(0.25, 1.1, length(vUv - 0.5) * 1.7);
      color *= vignette;
      color *= mix(0.25, 1.0, smoothstep(0.0, 0.18, vUv.y));

      gl_FragColor = vec4(color, 1.0);
   }
`

function AuroraPlane() {
   const meshRef   = useRef()
   const mouseRef  = useRef({ x: 0, y: 0 })
   const targetRef = useRef({ x: 0, y: 0 })
   const pausedRef = useRef(false)

   const uniforms = useMemo(() => ({
      uTime:  { value: 0 },
      uMouse: { value: [0, 0] },
   }), [])

   useEffect(() => {
      const onVisibility = () => {
         pausedRef.current = document.hidden
      }
      document.addEventListener("visibilitychange", onVisibility)
      return () => document.removeEventListener("visibilitychange", onVisibility)
   }, [])

   useFrame(({ clock }) => {
      if (pausedRef.current) return

      targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.015
      targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.015

      meshRef.current.material.uniforms.uTime.value  = clock.getElapsedTime() * 0.55
      meshRef.current.material.uniforms.uMouse.value = [
         targetRef.current.x * 0.5,
         targetRef.current.y * 0.5,
      ]
   })

   if (typeof window !== "undefined") {
      window.__auroraMouseRef = mouseRef
   }

   return (
      <mesh ref={meshRef}>
         <planeGeometry args={[2, 2]} />
         <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
         />
      </mesh>
   )
}

function StaticFallback() {
   return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-bg-deep via-purple-dim/20 to-bg-deep"></div>
   )
}

export default function HeroBackground() {
   const [webglFailed, setWebglFailed] = useState(false)

   const handleMouseMove = (e) => {
      if (typeof window !== "undefined" && window.__auroraMouseRef) {
         window.__auroraMouseRef.current = {
            x:  (e.clientX / window.innerWidth  - 0.5) * 2,
            y: -(e.clientY / window.innerHeight - 0.5) * 2,
         }
      }
   }

   if (webglFailed) {
      return <StaticFallback />
   }

   return (
      <div
         className="absolute inset-0 w-full h-full"
         onMouseMove={handleMouseMove}
      >
         <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: "high-performance", failIfMajorPerformanceCaveat: true }}
            onCreated={({ gl }) => {
               if (!gl) setWebglFailed(true)
            }}
         >
            <AuroraPlane />
         </Canvas>
      </div>
   )
}