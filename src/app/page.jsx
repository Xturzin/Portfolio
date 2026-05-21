import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/Hero/Hero"

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />

         <div className="h-screen flex items-center justify-center">
            <p className="text-text-secondary">
               Proximas secoes em breve.
            </p>
         </div>
      </main>
   )
}