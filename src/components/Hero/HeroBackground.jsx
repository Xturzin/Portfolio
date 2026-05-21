"use client"

import { useRef, useMemo } from "react"
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
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
         mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
         mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
         u.y
      );
   }

   float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 3; i++) {
         value += amplitude * noise(p);
         p *= 2.1;
         amplitude *= 0.5;
      }
      return value;
   }

   void main() {
      vec2 uv = vUv;

      vec2 mouseInfluence = uMouse * 0.08;
      uv += mouseInfluence;

      float t = uTime * 0.12;

      float n1 = fbm(uv * 2.0 + vec2(t, t * 0.6));
      float n2 = fbm(uv * 1.5 - vec2(t * 0.8, t * 0.3) + n1 * 0.4);

      vec3 colorBg     = vec3(0.027, 0.027, 0.059);
      vec3 colorPurple = vec3(0.486, 0.227, 0.929);
      vec3 colorNeon   = vec3(0.0,   0.910, 0.478);
      vec3 colorBlue   = vec3(0.231, 0.510, 0.965);

      vec3 color = colorBg;
      color = mix(color, colorPurple, smoothstep(0.3, 0.7, n1) * 0.55);
      color = mix(color, colorNeon,   smoothstep(0.5, 0.8, n2) * 0.20);
      color = mix(color, colorBlue,   smoothstep(0.4, 0.7, n1 * n2) * 0.18);

      float vignette = 1.0 - smoothstep(0.3, 1.2, length(vUv - 0.5) * 1.6);
      color *= vignette;

      gl_FragColor = vec4(color, 1.0);
   }
`

function AuroraPlane() {
   const meshRef   = useRef()
   const mouseRef  = useRef({ x: 0, y: 0 })
   const targetRef = useRef({ x: 0, y: 0 })

   const uniforms = useMemo(() => ({
      uTime:  { value: 0 },
      uMouse: { value: [0, 0] },
   }), [])

   useFrame(({ clock }) => {
      targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.04
      targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.04

      meshRef.current.material.uniforms.uTime.value  = clock.getElapsedTime()
      meshRef.current.material.uniforms.uMouse.value = [
         targetRef.current.x,
         targetRef.current.y,
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

export default function HeroBackground() {
   const handleMouseMove = (e) => {
      if (typeof window !== "undefined" && window.__auroraMouseRef) {
         const x = (e.clientX / window.innerWidth  - 0.5) * 2
         const y = (e.clientY / window.innerHeight - 0.5) * 2
         window.__auroraMouseRef.current = { x, y: -y }
      }
   }

   return (
      <div
         className="absolute inset-0 w-full h-full"
         onMouseMove={handleMouseMove}
      >
         <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: "high-performance" }}
         >
            <AuroraPlane />
         </Canvas>
      </div>
   )
}