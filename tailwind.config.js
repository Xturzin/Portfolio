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
            bg: {
               deep:     "#07070f",
               surface:  "#0f0f1a",
               elevated: "#16162a",
            },
            purple: {
               dim:   "#3d2a6e",
               base:  "#7c3aed",
               light: "#a855f7",
               glow:  "#c084fc",
            },
            neon: {
               dim:    "#00804a",
               base:   "#00e87a",
               bright: "#39ff9a",
            },
            blue: {
               dim:   "#1e3a8a",
               base:  "#3b82f6",
               light: "#60a5fa",
            },
            red: {
               dim:   "#7f1d1d",
               base:  "#ef4444",
               light: "#f87171",
            },
            text: {
               primary:   "#f1f0ff",
               secondary: "#a09ab8",
               muted:     "#5c5875",
            },
         },
         fontFamily: {
            sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
         },
         fontSize: {
            "display":  ["clamp(3rem, 7.5vw, 5.5rem)",   { lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "700" }],
            "heading":  ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.18", letterSpacing: "-0.028em", fontWeight: "700" }],
            "subhead":  ["clamp(1.05rem, 2vw, 1.25rem)", { lineHeight: "1.4",  letterSpacing: "-0.018em", fontWeight: "600" }],
            "body-lg":  ["1.0625rem",                    { lineHeight: "1.85", letterSpacing: "-0.008em", fontWeight: "400" }],
            "body":     ["0.9375rem",                    { lineHeight: "1.78", letterSpacing: "-0.003em", fontWeight: "400" }],
            "caption":  ["0.8125rem",                    { lineHeight: "1.6",  letterSpacing: "-0.002em", fontWeight: "400" }],
            "label":    ["0.6875rem",                    { lineHeight: "1.2",  letterSpacing: "0.06em",   fontWeight: "500" }],
         },
         animation: {
            "fade-in":    "fadeIn 0.75s cubic-bezier(0.22,1,0.36,1) forwards",
            "slide-up":   "slideUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards",
            "glow-pulse": "glowPulse 4s ease-in-out infinite",
         },
         keyframes: {
            fadeIn:    { from: { opacity: "0" },                            to: { opacity: "1" } },
            slideUp:   { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
            glowPulse: { "0%,100%": { opacity: "0.5" }, "50%": { opacity: "1" } },
         },
         boxShadow: {
            "neon-sm":   "0 0 10px 0px rgba(0,232,122,0.25)",
            "neon-md":   "0 0 22px 2px rgba(0,232,122,0.18)",
            "neon-lg":   "0 0 40px 4px rgba(0,232,122,0.14)",
            "purple-sm": "0 0 10px 0px rgba(124,58,237,0.25)",
            "purple-md": "0 0 22px 2px rgba(124,58,237,0.18)",
            "purple-lg": "0 0 40px 4px rgba(124,58,237,0.14)",
         },
         transitionTimingFunction: {
            "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
         },
         transitionDuration: {
            "hover": "220ms",
            "enter": "750ms",
         },
      },
   },
   plugins: [],
}