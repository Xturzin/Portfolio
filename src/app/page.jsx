import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import WhatIDo from "@/components/WhatIDo/WhatIDo"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/shared/Footer"

function Divider({ weight = "normal" }) {
   const opacity = weight === "light"  ? "via-purple-dim/10"
                 : weight === "strong" ? "via-purple-dim/30"
                 : "via-purple-dim/18"

   return (
      <div className="w-full px-6 md:px-16">
         <div className={"max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent " + opacity + " to-transparent"}></div>
      </div>
   )
}

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <Divider weight="light" />
         <About />
         <Divider weight="normal" />
         <WhatIDo />
         <Divider weight="light" />
         <Skills />
         <Divider weight="strong" />
         <Projects />
         <Divider weight="normal" />
         <Contact />
         <Footer />
      </main>
   )
}