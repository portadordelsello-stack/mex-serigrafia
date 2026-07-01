import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FF5F1F] text-black" id="contacto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-baseline space-x-2 mb-6">
              <h1 className="text-4xl font-black tracking-tighter uppercase" style={{ WebkitTextStroke: '1.5px black' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#39FF14] to-[#84cc16] font-['Jost',sans-serif]">M</span>
                <span className="text-[#FFFF00] font-['Jost',sans-serif]">E</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#dc2626] font-['Jost',sans-serif]">X</span>
                <span className="text-white ml-2 italic font-['Inter',sans-serif]">Grafica</span>
              </h1>
            </div>
            <p className="font-medium max-w-sm text-sm">
              Especialistas en publicidad visual, rotulación y serigrafía textil en Santa Fe, Argentina. Transformamos espacios comerciales con calidad premium.
            </p>
          </div>
          
          <div>
            <h4 className="font-black tracking-widest uppercase mb-6 text-[10px]">Contacto Taller</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <a href="https://instagram.com/mex_grafica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={2.5} />
                  <span>@mex_grafica</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" strokeWidth={2.5} />
                  <span>Santa Fe, Argentina</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span>+54 342 123-4567</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black tracking-widest uppercase mb-6 text-[10px]">Navegación</h4>
            <ul className="space-y-3 text-sm font-bold uppercase">
              <li><a href="#servicios" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="#visualizador" className="hover:text-white transition-colors">AI Visualizer</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-tighter">
            <span>&copy; {new Date().getFullYear()} Mex Serigrafía</span>
            <span className="hidden sm:inline-block">Todos los derechos reservados</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest">Taller Activo / Recibiendo Pedidos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
