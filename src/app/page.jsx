import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import WhatIDo from "@/components/WhatIDo/WhatIDo"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/shared/Footer"

function Divider() {
   return (
      <div className="w-full px-6 md:px-12">
         <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-purple-dim/20 to-transparent"></div>
      </div>
   )
}

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <Divider />
         <About />
         <Divider />
         <WhatIDo />
         <Divider />
         <Skills />
         <Divider />
         <Projects />
         <Divider />
         <Contact />
         <Footer />
      </main>
   )
}