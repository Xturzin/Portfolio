import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <About />
         <div className="h-screen flex items-center justify-center">
            <p className="text-text-secondary">Proximas secoes em breve.</p>
         </div>
      </main>
   )
}