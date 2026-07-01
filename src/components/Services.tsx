import { motion } from "motion/react";
import { SERVICES } from "../data";

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block px-2 py-1 bg-[#222] text-[#FF5F1F] text-[10px] font-bold uppercase mb-4 tracking-widest border border-[#333]">
              Catálogo
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FBFBFB] mb-2 tracking-tighter uppercase italic">
              Soluciones <span className="text-transparent border-b-2 border-[#FF5F1F]" style={{ WebkitTextStroke: '1px #FBFBFB' }}>Visuales</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm font-medium">
            Ofrecemos un catálogo completo de servicios para potenciar la imagen de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] p-8 hover:bg-[#1A1A1A] transition-colors group flex flex-col min-h-[300px]"
              >
                <div className="text-[10px] text-[#FF5F1F] font-mono mb-6">0{index + 1}.</div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#FBFBFB] mb-4 uppercase italic leading-tight">
                    {service.title.split(' ').map((word, i, arr) => (
                      <span key={i}>{word}{i !== arr.length - 1 && <br/>}</span>
                    ))}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                   <Icon className="w-8 h-8 text-[#333] group-hover:text-[#FF5F1F] transition-colors" strokeWidth={1.5} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
