import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import CustomCursor    from "@/components/shared/CustomCursor"
import ScrollProgress  from "@/components/shared/ScrollProgress"
import PageLoader      from "@/components/shared/PageLoader"

const spaceGrotesk = Space_Grotesk({
   subsets:  ["latin"],
   weight:   ["300", "400", "500", "600", "700"],
   variable: "--font-space-grotesk",
   display:  "swap",
})

export const metadata = {
   metadataBase: new URL("https://arthurcouto.dev"),
   title: {
      default:  "Arthur Couto — Desenvolvedor Full Stack | React, Node.js, JavaScript",
      template: "%s | Arthur Couto",
   },
   description:
      "Desenvolvedor Full Stack com 5 anos de experiência construindo aplicações web completas do zero ao deploy. Especialista em React, Node.js, JavaScript e Python.",
   keywords: [
      "desenvolvedor full stack",
      "react developer",
      "node.js",
      "javascript",
      "python",
      "web developer",
      "frontend",
      "backend",
      "portfolio",
      "Cabo Frio",
      "Rio de Janeiro",
      "Brasil",
   ],
   authors:  [{ name: "Arthur Couto Oliveira", url: "https://arthurcouto.dev" }],
   creator:  "Arthur Couto Oliveira",
   robots: {
      index:          true,
      follow:         true,
      googleBot: {
         index:               true,
         follow:              true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet":       -1,
      },
   },
   openGraph: {
      type:        "website",
      locale:      "pt_BR",
      url:         "https://arthurcouto.dev",
      title:       "Arthur Couto — Desenvolvedor Full Stack",
      description: "Desenvolvedor Full Stack com 5 anos de experiência construindo aplicações web completas do zero ao deploy.",
      siteName:    "Arthur Couto",
      images: [
         {
            url:    "/og-image.png",
            width:  1200,
            height: 630,
            alt:    "Arthur Couto — Full Stack Developer",
         },
      ],
   },
   twitter: {
      card:        "summary_large_image",
      title:       "Arthur Couto — Desenvolvedor Full Stack",
      description: "React, Node.js, JavaScript, Python. Do zero ao deploy.",
      images:      ["/og-image.png"],
   },
   icons: {
      icon:        "/favicon.ico",
      shortcut:    "/favicon-16x16.png",
      apple:       "/apple-touch-icon.png",
   },
   manifest: "/site.webmanifest",
   other: {
      "theme-color": "#07070f",
   },
}

export default function RootLayout({ children }) {
   return (
      <html lang="pt-BR" className={spaceGrotesk.variable}>
         <body className="bg-bg-deep text-text-primary antialiased">
            <PageLoader />
            <CustomCursor />
            <ScrollProgress />
            {children}
         </body>
      </html>
   )
}