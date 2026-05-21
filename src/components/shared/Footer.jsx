export default function Footer() {
   const year = new Date().getFullYear()

   return (
      <footer className="w-full px-6 md:px-12 py-8 border-t border-purple-dim/15">
         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-2">
               <span className="text-text-muted text-sm">
                  Arthur<span className="text-neon-base">.</span>
               </span>
               <span className="text-text-muted/40 text-sm">—</span>
               <span className="text-text-muted text-sm">
                  {year}
               </span>
            </div>

            <div className="flex items-center gap-6">
               
                  href="mailto:arthur.coliveira@gmail.com"
                  className="text-text-muted text-xs hover:text-text-secondary transition-colors duration-300"
               >
                  arthur.coliveira@gmail.com
               </a>
               
                  href="https://www.linkedin.com/in/arthurcoutooliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-xs hover:text-neon-base transition-colors duration-300"
               >
                  LinkedIn
               </a>
            </div>

         </div>
      </footer>
   )
}