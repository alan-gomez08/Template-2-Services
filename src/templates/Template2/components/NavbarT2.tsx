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

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Colección', href: '#coleccion' },
    { name: 'Inspiración', href: '#inspiracion' },
    { name: 'Ubicación', href: '#ubicacion' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-md shadow-lg' : 'py-8 bg-transparent'}`}
      style={{ backgroundColor: scrolled ? `${paleta.fondoOscuro}CC` : 'transparent' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center justify-between relative">
        
        <a href="#inicio" className="text-[26px] lg:text-[28px] font-semibold font-['Manrope'] tracking-wide relative z-10 shrink-0" style={{ color: paleta.textoClaro }}>
          {data.businessName}
        </a>

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

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border-[1.75px] flex flex-col justify-center items-center gap-[5px] relative z-10 transition-transform active:scale-90"
          style={{ borderColor: `${paleta.textoClaro}66` }}
        >
          <div className="w-[22px] h-[1.5px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
          <div className="w-[22px] h-[1.5px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
          <div className="w-[16px] h-[1.5px] rounded-full self-start ml-[10px] transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
        </button>
      </div>

      {isOpen && (
        <div 
          className="absolute top-full left-0 w-full backdrop-blur-md py-6 flex flex-col items-center gap-6 lg:hidden border-t shadow-2xl"
          style={{ backgroundColor: `${paleta.fondoOscuro}F2`, borderTopColor: `${paleta.textoClaro}1A` }}
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold font-['Inter']" style={{ color: paleta.textoClaro }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}