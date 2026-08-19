import { useState } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT1({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = ['Inicio', 'Nosotros', 'Menú', 'Reseñas', 'Contacto'];

  // Lógica para la versión Tablet: Tu diseño de Figma tiene el logo en dos colores.
  // Dividimos dinámicamente el nombre del cliente en la primera palabra y el resto.
  const [firstWord, ...restWords] = data.businessName.split(' ');
  const restOfName = restWords.join(' ');

  return (
    <nav className="w-full absolute lg:relative top-0 left-0 z-50 flex items-center justify-between px-8 lg:px-32 h-24 lg:h-32 bg-gradient-to-b from-black/80 to-transparent lg:bg-black lg:from-transparent lg:to-transparent">
      
      {/* 1. Logo Dinámico */}
      <div className="cursor-pointer flex gap-1">
        {/* Versión Mobile / Desktop (Color unificado - Lexend Deca) */}
        <span className="text-xl lg:text-3xl font-semibold text-white font-['Lexend_Deca'] md:hidden lg:block">
          {data.businessName}
        </span>
        
        {/* Versión Tablet (Dos colores - Inter) */}
        <div className="hidden md:flex lg:hidden text-lg leading-7">
          <span className="text-neutral-100 font-black font-['Inter']">{firstWord}&nbsp;</span>
          {restOfName && <span className="text-neutral-400 font-medium font-['Inter']">{restOfName}</span>}
        </div>
      </div>

      {/* 2. Menú Desktop (Oculto en móvil y tablet) */}
      <ul className="hidden lg:flex items-center gap-2">
        {navLinks.map((link, index) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              // El primer link (Inicio) es semibold, el resto medium, tal como tu JSX
              className={`px-4 py-4 text-lg font-['Inter'] rounded-[10px] transition-colors hover:bg-white/10 text-white ${index === 0 ? 'font-semibold' : 'font-medium'}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* 3. Menú Hamburguesa (Visible solo en móvil y tablet) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden flex-col justify-center items-center gap-1.5 p-1 focus:outline-none z-50"
        aria-label="Abrir menú"
      >
        {/* Reemplazamos los SVGs crudos por divs de Tailwind (mucho más limpio) */}
        <div className={`w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
        <div className={`w-6 h-[2px] bg-white rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
      </button>

{/* 4. Desplegable Mobile (Funcionalidad extra) */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 lg:hidden shadow-xl border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white font-['Inter'] active:text-gray-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}