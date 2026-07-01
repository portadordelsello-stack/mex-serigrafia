import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Visualizador AI", href: "#visualizador" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2A2A2A] py-3" : "bg-transparent py-6 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
        <div className="flex items-baseline space-x-1 sm:space-x-2">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#39FF14] to-[#84cc16] font-['Jost',sans-serif]">M</span>
            <span className="text-[#FFFF00] font-['Jost',sans-serif]">E</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#dc2626] font-['Jost',sans-serif]">X</span>
            <span className="text-white ml-2 italic font-['Inter',sans-serif]">Grafica</span>
          </h1>
          <span className="text-[10px] uppercase tracking-widest opacity-50 hidden sm:inline-block">Santa Fe, AR</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#FF5F1F] transition-colors text-[#FBFBFB]">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="bg-[#3AF10A] hover:bg-white text-black px-4 py-2 font-black transition-colors -mt-2">
            Contactar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#FBFBFB] hover:text-[#FF5F1F]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-b border-[#2A2A2A] p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-xs font-semibold uppercase tracking-widest text-[#FBFBFB] hover:text-[#FF5F1F] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="bg-[#3AF10A] text-black px-4 py-3 font-black text-xs uppercase tracking-widest text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
            Contactar
          </a>
        </div>
      )}
    </header>
  );
}
