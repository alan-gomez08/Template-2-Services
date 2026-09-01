import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NavbarT2({ data, paleta }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Leemos dinámicamente o usamos los valores por defecto
  const navLinks = data.nav?.links || [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Colección', href: '#coleccion' },
    { name: 'Inspiración', href: '#inspiracion' },
    { name: 'Ubicación', href: '#ubicacion' }
  ];

  // LOGICA CLAVE: Si se scrolleó O si el menú móvil está abierto, la barra entera se vuelve sólida.
  const isNavSolid = scrolled || isOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isNavSolid ? 'py-4 shadow-lg' : 'py-8'}`}
      style={{ 
        backgroundColor: isNavSolid ? paleta.fondoOscuro : 'transparent',
        borderBottom: (scrolled && !isOpen) ? `1px solid ${paleta.textoClaro}1A` : 'none'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center justify-between relative z-20">
        
        {/* LOGO */}
        <a href="#inicio" onClick={() => setIsOpen(false)} className="text-[26px] lg:text-[28px] font-semibold font-['Manrope'] tracking-wide relative z-10 shrink-0 transition-transform active:scale-95" style={{ color: paleta.textoClaro }}>
          {data.businessName}
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[16px] font-bold font-['Inter'] transition-colors hover:opacity-80"
              style={{ color: paleta.textoClaro }}
              onMouseEnter={(e) => e.currentTarget.style.color = paleta.colorPrimario}
              onMouseLeave={(e) => e.currentTarget.style.color = paleta.textoClaro}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA / CERRAR MOBILE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border-[1.75px] flex flex-col justify-center items-center relative z-10 transition-all active:scale-90"
          style={{ borderColor: isOpen ? 'transparent' : `${paleta.textoClaro}66` }}
        >
          {/* Animación fluida de hamburguesa a Cruz (X) */}
          <div className={`w-[22px] h-[1.5px] rounded-full transition-all duration-300 absolute ${isOpen ? 'rotate-45' : '-translate-y-[6px]'}`} style={{ backgroundColor: paleta.textoClaro }} />
          <div className={`w-[22px] h-[1.5px] rounded-full transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: paleta.textoClaro }} />
          <div className={`w-[22px] h-[1.5px] rounded-full transition-all duration-300 absolute ${isOpen ? '-rotate-45' : 'translate-y-[6px]'}`} style={{ backgroundColor: paleta.textoClaro }} />
        </button>
      </div>

      {/* MENU DESPLEGABLE MOBILE */}
      <div 
        className="absolute top-full left-0 w-full flex flex-col items-center lg:hidden transition-all duration-300 ease-in-out overflow-hidden z-10 shadow-2xl"
        style={{ 
          backgroundColor: paleta.fondoOscuro,
          maxHeight: isOpen ? '400px' : '0px',
          paddingTop: isOpen ? '16px' : '0px',
          paddingBottom: isOpen ? '40px' : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="flex flex-col items-center gap-8 w-full mt-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold font-['Inter'] tracking-wide transition-opacity hover:opacity-80" 
              style={{ color: paleta.textoClaro }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}