import { useState } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT2({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-8">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#inicio" className="text-white text-[26px] lg:text-[28px] font-semibold font-['Manrope'] tracking-wide">
          {data.businessName}
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          {['Colección', 'Nosotros', 'Inspiración', 'Contacto'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white text-[18px] font-bold font-['Inter'] hover:text-white/70 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Botón Menú Hamburguesa (Tablet & Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border-[1.75px] border-white/40 flex flex-col justify-center items-center gap-[5px]"
        >
          <div className="w-[22px] h-[1.5px] bg-white rounded-full transition-transform" />
          <div className="w-[22px] h-[1.5px] bg-white rounded-full transition-transform" />
          <div className="w-[16px] h-[1.5px] bg-white rounded-full self-start ml-[10px] transition-transform" />
        </button>

      </div>

      {/* Menú Mobile Desplegable (Básico para empezar) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-6 flex flex-col items-center gap-6 lg:hidden border-t border-white/10">
          {['Colección', 'Nosotros', 'Inspiración', 'Contacto'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-white text-lg font-bold font-['Inter']">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}