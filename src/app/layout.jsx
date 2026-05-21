import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/shared/CustomCursor"

const spaceGrotesk = Space_Grotesk({
   subsets:  ["latin"],
   weight:   ["300", "400", "500", "600", "700"],
   variable: "--font-space-grotesk",
   display:  "swap",
})

export const metadata = {
   title:       "Arthur Couto | Full Stack Developer",
   description: "Desenvolvedor Full Stack focado em construir aplicacoes web completas do zero ao deploy. Node.js, React, JavaScript, Python.",
   keywords:    ["full stack", "desenvolvedor", "react", "node.js", "web", "portfolio"],
   authors:     [{ name: "Arthur Couto Oliveira" }],
   openGraph: {
      title:       "Arthur Couto | Full Stack Developer",
      description: "Desenvolvedor Full Stack. Do zero ao deploy.",
      type:        "website",
   },
}

export default function RootLayout({ children }) {
   return (
      <html lang="pt-BR" className={spaceGrotesk.variable}>
         <body className="bg-bg-deep text-text-primary antialiased">
            <CustomCursor />
            {children}
         </body>
      </html>
   )
}