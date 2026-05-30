export default function Footer() {
   const year = new Date().getFullYear()

   return (
      <footer className="w-full px-6 md:px-12 py-7 border-t border-purple-dim/15">
         <div className="max-w-6xl mx-auto flex items-center justify-between relative">

            {/* Esquerda: autor + ano */}
            <div className="flex items-center gap-2 shrink-0">
               <span className="text-text-muted text-sm">
                  Arthur<span className="text-neon-base">.</span>
               </span>
               <span className="text-text-muted/30 text-sm">·</span>
               <span className="text-text-muted text-sm">{year}</span>
            </div>

            {/* Centro: localização */}
            <span className="absolute left-1/2 -translate-x-1/2 text-text-muted/60 text-xs tracking-wide whitespace-nowrap">
               Cabo Frio, Rio de Janeiro, Brasil
            </span>

            {/* Direita: links */}
            <div className="flex items-center gap-6 shrink-0">
               <a
                  href="mailto:arthur.coliveira@gmail.com"
                  aria-label="Enviar email para Arthur"
                  className="text-text-muted text-xs hover:text-text-secondary transition-colors duration-300"
               >
                  Email
               </a>
               <a
                  href="https://www.linkedin.com/in/arthurcoutooliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil LinkedIn de Arthur"
                  className="text-text-muted text-xs hover:text-neon-base transition-colors duration-300"
               >
                  LinkedIn
               </a>
            </div>

         </div>
      </footer>
   )
}
