import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import WhatIDo from "@/components/WhatIDo/WhatIDo"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <About />
         <WhatIDo />
         <Skills />
         <Projects />
         <div className="h-screen flex items-center justify-center">
            <p className="text-text-secondary">Proximas secoes em breve.</p>
         </div>
      </main>
   )
}