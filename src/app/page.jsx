import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import WhatIDo from "@/components/WhatIDo/WhatIDo"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact"

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <About />
         <WhatIDo />
         <Skills />
         <Projects />
         <Contact />
      </main>
   )
}