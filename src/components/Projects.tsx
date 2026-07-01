import { motion } from "motion/react";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block px-2 py-1 bg-[#222] text-[#FF5F1F] text-[10px] font-bold uppercase mb-4 tracking-widest border border-[#333]">
              Galería
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#FBFBFB] mb-2 tracking-tighter uppercase italic">
              Nuestros <span className="text-[#FF5F1F]">Trabajos</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm font-medium">
            Calidad técnica y terminaciones premium en cada detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0F0F0F] aspect-[4/3] overflow-hidden"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-[#FF5F1F] font-bold text-[10px] tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-[#FBFBFB] text-lg font-black uppercase italic leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
