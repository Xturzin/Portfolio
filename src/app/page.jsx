import Navbar from "@/components/shared/Navbar"

export default function Home() {
   return (
      <main>
         <Navbar />

         {/* Placeholder de altura para testar o scroll da Navbar */}
         <div className="h-screen flex items-center justify-center">
            <p className="text-neon-base text-xl font-medium">
               Etapa 2 concluída. Hero vem aí.
            </p>
         </div>

         <div className="h-screen flex items-center justify-center">
            <p className="text-text-secondary">
               Seção placeholder para testar o scroll reveal.
            </p>
         </div>
      </main>
   )
}