import { useState } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT1({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Ubicación', href: '#ubicacion' }, // <-- Aquí cambiamos el texto
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 transition-all">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        
        <a 
          href="#inicio" 
          className="text-white text-2xl font-black font-['Inter'] tracking-tight hover:opacity-80 active:scale-95 transition-all"
        >
          {data.businessName}
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#A3A3A3] hover:text-white text-sm font-medium font-['Inter'] transition-all active:scale-90"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 active:scale-90 transition-transform"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`md:hidden absolute top-20 left-0 w-full bg-[#111] border-b border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="flex flex-col p-6 gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#A3A3A3] text-lg font-medium font-['Inter'] active:scale-95 active:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}