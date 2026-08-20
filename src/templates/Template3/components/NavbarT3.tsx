import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT3({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Buscá esta parte y reemplazala:
  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nuestro Equipo', href: '#equipo' },
    { name: 'Ubicación', href: '#ubicacion' } // <-- Reemplazamos Contacto por Ubicación
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0F172A]/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#inicio" className="flex items-baseline relative z-10">
          <span className="text-[#F5F5F5] text-[24px] lg:text-[28px] font-bold font-['Lexend_Deca'] tracking-wide">
            {data.businessName.replace('.', '')}
          </span>
          <span className="text-[#2563EB] text-[24px] lg:text-[32px] font-bold font-['Lexend_Deca'] leading-none">.</span>
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#F5F5F5] text-[15px] font-medium font-['Lexend_Deca'] hover:text-[#2563EB] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-2.5 bg-[#2563EB]/20 border border-[#2563EB]/50 hover:bg-[#2563EB] text-[#F5F5F5] text-[15px] font-medium font-['Lexend_Deca'] rounded transition-all flex items-center gap-2"
          >
            {data.hero.buttonText}
          </a>
        </div>

        {/* Menú Hamburguesa Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-10"
        >
          <div className="w-[24px] h-[2px] bg-white rounded-full transition-transform" />
          <div className="w-[24px] h-[2px] bg-white rounded-full transition-transform" />
          <div className="w-[24px] h-[2px] bg-white rounded-full transition-transform" />
        </button>
      </div>

      {/* Menú Mobile Desplegable */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F172A] border-t border-white/10 py-6 flex flex-col items-center gap-6 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium font-['Lexend_Deca']">
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`}
            className="mt-2 px-8 py-3 bg-[#2563EB] text-white font-medium rounded flex items-center gap-2"
          >
            {data.hero.buttonText}
          </a>
        </div>
      )}
    </nav>
  );
}