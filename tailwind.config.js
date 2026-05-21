/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,jsx}",
      "./src/components/**/*.{js,jsx}",
      "./src/app/**/*.{js,jsx}",
   ],
   theme: {
      extend: {
         colors: {
            // Fundos
            bg: {
               deep:    "#07070f",   // fundo raiz - quase preto com toque roxo
               surface: "#0f0f1a",   // cards e seções alternadas
               elevated:"#16162a",   // elementos elevados
            },
            // Roxo - cor principal
            purple: {
               dim:    "#3d2a6e",    // bordas sutis, glow fraco
               base:   "#7c3aed",    // cor base
               light:  "#a855f7",    // hover, destaques
               glow:   "#c084fc",    // brilho máximo
            },
            // Verde neon - destaque principal
            neon: {
               dim:    "#00804a",    // versão escura para bordas
               base:   "#00e87a",    // cor base
               bright: "#39ff9a",    // hover / glow
            },
            // Energia visual
            blue: {
               dim:    "#1e3a8a",
               base:   "#3b82f6",
               light:  "#60a5fa",
            },
            red: {
               dim:    "#7f1d1d",
               base:   "#ef4444",
               light:  "#f87171",
            },
            // Texto
            text: {
               primary:   "#f1f0ff",  // quase branco com toque frio
               secondary: "#a09ab8",  // cinza com toque roxo
               muted:     "#5c5875",  // muted, labels
            },
         },
         fontFamily: {
            sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
         },
         animation: {
            "fade-in":     "fadeIn 0.6s ease forwards",
            "slide-up":    "slideUp 0.7s ease forwards",
            "glow-pulse":  "glowPulse 3s ease-in-out infinite",
         },
         keyframes: {
            fadeIn: {
               from: { opacity: "0" },
               to:   { opacity: "1" },
            },
            slideUp: {
               from: { opacity: "0", transform: "translateY(24px)" },
               to:   { opacity: "1", transform: "translateY(0)" },
            },
            glowPulse: {
               "0%, 100%": { opacity: "0.6" },
               "50%":      { opacity: "1" },
            },
         },
         boxShadow: {
            "neon-sm":  "0 0 8px 0px rgba(0, 232, 122, 0.4)",
            "neon-md":  "0 0 20px 2px rgba(0, 232, 122, 0.35)",
            "neon-lg":  "0 0 40px 4px rgba(0, 232, 122, 0.25)",
            "purple-sm":"0 0 8px 0px rgba(168, 85, 247, 0.4)",
            "purple-md":"0 0 20px 2px rgba(168, 85, 247, 0.35)",
            "purple-lg":"0 0 40px 4px rgba(168, 85, 247, 0.25)",
         },
      },
   },
   plugins: [],
}