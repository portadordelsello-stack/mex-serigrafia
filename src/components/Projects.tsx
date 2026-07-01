import { motion } from "motion/react";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-[#141414] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <iframe
                src={`${project.instagramUrl}/embed`}
                className="w-full max-w-[320px] h-[540px] border-none rounded-lg overflow-hidden bg-white"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                title={project.title}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
