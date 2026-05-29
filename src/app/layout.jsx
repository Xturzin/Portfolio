import { Space_Grotesk }    from "next/font/google"
import "./globals.css"
import ScrollProgress       from "@/components/shared/ScrollProgress"
import GlobalBackground     from "@/components/shared/GlobalBackground"
import CustomCursor         from "@/components/shared/CustomCursor"

const spaceGrotesk = Space_Grotesk({
   subsets:  ["latin"],
   weight:   ["300", "400", "500", "600", "700"],
   variable: "--font-space-grotesk",
   display:  "swap",
})

export const metadata = {
   metadataBase: new URL("https://arthurcouto.dev"),
   title: {
      default:  "Arthur Couto — Full Stack Developer | React, Node.js, Web Apps",
      template: "%s | Arthur Couto",
   },
   description:
      "Desenvolvedor Full Stack com 5 anos de experiencia construindo aplicacoes web completas do zero ao deploy. React, Node.js, JavaScript, Python.",
   keywords: [
      "desenvolvedor full stack", "react developer", "node.js",
      "javascript", "python", "web developer", "frontend",
      "backend", "portfolio", "Cabo Frio", "Rio de Janeiro",
   ],
   authors:  [{ name: "Arthur Couto Oliveira", url: "https://arthurcouto.dev" }],
   creator:  "Arthur Couto Oliveira",
   robots:   { index: true, follow: true },
   openGraph: {
      type:        "website",
      locale:      "pt_BR",
      url:         "https://arthurcouto.dev",
      title:       "Arthur Couto — Full Stack Developer",
      description: "Desenvolvedor Full Stack. Do zero ao deploy.",
      siteName:    "Arthur Couto",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Arthur Couto — Full Stack Developer" }],
   },
   twitter: {
      card:        "summary_large_image",
      title:       "Arthur Couto — Full Stack Developer",
      description: "React, Node.js, JavaScript, Python. Do zero ao deploy.",
      images:      ["/og-image.png"],
   },
   icons: {
      icon: [
         { url: "/favicon.svg", type: "image/svg+xml" },
         { url: "/favicon.ico" },
      ],
      apple: "/apple-touch-icon.png",
   },
   manifest: "/site.webmanifest",
   other:    { "theme-color": "#07070f" },
}

export default function RootLayout({ children }) {
   return (
      <html lang="pt-BR" className={spaceGrotesk.variable}>
         <body className="bg-bg-deep text-text-primary antialiased">
            <a
               href="#sobre"
               className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-neon-base focus:text-bg-deep focus:font-medium focus:text-sm focus:outline-none"
            >
               Pular para o conteúdo
            </a>

            <GlobalBackground />
            <CustomCursor />
            <ScrollProgress />
            <div className="relative z-10">
               {children}
            </div>
         </body>
      </html>
   )
}
