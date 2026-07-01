import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#141414]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-2 py-1 bg-[#FF5F1F] text-black text-[10px] font-bold uppercase mb-6 tracking-widest">
              NUEVO: VISUALIZADOR IA
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl font-black text-[#FBFBFB] leading-[0.9] tracking-tighter mb-6 uppercase italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Publicidad que se <span className="text-transparent border-b-4 border-[#FF5F1F] block mt-2 pb-2" style={{ WebkitTextStroke: '1px #FBFBFB' }}>Siente</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm text-gray-400 font-medium mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Especialistas en publicidad visual, letras corpóreas, rotulación y serigrafía textil. Diseñamos, fabricamos e instalamos soluciones que hacen destacar tu negocio en Santa Fe.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 gap-2 mb-8 lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
             <div className="bg-[#121212] aspect-[4/3] overflow-hidden rounded-sm border border-[#2A2A2A]">
               <img src="/1.png" alt="Cartel neon" className="w-full h-full object-cover opacity-90" />
             </div>
             <div className="bg-[#1A1A1A] aspect-[4/3] overflow-hidden rounded-sm border border-[#2A2A2A]">
               <img src="/2.png" alt="Vidriera" className="w-full h-full object-cover opacity-90" />
             </div>
             <div className="bg-[#0F0F0F] aspect-[4/3] overflow-hidden rounded-sm border border-[#2A2A2A]">
               <img src="/3.png" alt="Estampado" className="w-full h-full object-cover opacity-90" />
             </div>
             <div className="bg-[#141414] aspect-[4/3] overflow-hidden rounded-sm border border-[#2A2A2A]">
               <img src="/4.png" alt="Vehiculo" className="w-full h-full object-cover opacity-90" />
             </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contacto" className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3AF10A] via-[#FFFF00] to-[#dc2626] hover:opacity-90 text-black px-6 sm:px-8 py-4 font-black uppercase text-[10px] tracking-widest transition-all text-center w-full sm:w-auto">
              Solicitar Presupuesto <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#visualizador" className="flex items-center justify-center gap-2 bg-transparent hover:bg-[#222] text-[#FBFBFB] px-6 sm:px-8 py-4 font-black uppercase text-[10px] tracking-widest transition-all border border-[#2A2A2A] text-center w-full sm:w-auto">
              Probar IA Visualizador
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative hidden lg:block h-full min-h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 border-2 border-[#FF5F1F] rotate-12 flex items-center justify-center opacity-20 z-0">
            <div className="text-[150px] font-black italic text-[#FF5F1F]">M</div>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
             <div className="bg-[#121212] aspect-square overflow-hidden group">
               <img src="/1.png" alt="Cartel neon" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
             </div>
             <div className="bg-[#1A1A1A] aspect-square overflow-hidden group">
               <img src="/2.png" alt="Vidriera" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
             </div>
             <div className="bg-[#0F0F0F] aspect-square overflow-hidden group">
               <img src="/3.png" alt="Estampado" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
             </div>
             <div className="bg-[#141414] aspect-square overflow-hidden group">
               <img src="/4.png" alt="Vehiculo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
