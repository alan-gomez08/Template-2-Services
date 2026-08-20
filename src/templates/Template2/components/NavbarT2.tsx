import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT2({ data }: Props) {
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md shadow-lg' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center justify-between relative">
        
        <a href="#inicio" className="text-white text-[26px] lg:text-[28px] font-semibold font-['Manrope'] tracking-wide relative z-10 shrink-0">
          Tu Logo
        </a>

        {/* Links a la derecha con ml-auto */}
        <div className="hidden lg:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-[16px] font-bold font-['Inter'] hover:text-[#E58411] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border-[1.75px] border-white/40 flex flex-col justify-center items-center gap-[5px] relative z-10"
        >
          <div className="w-[22px] h-[1.5px] bg-white rounded-full transition-transform" />
          <div className="w-[22px] h-[1.5px] bg-white rounded-full transition-transform" />
          <div className="w-[16px] h-[1.5px] bg-white rounded-full self-start ml-[10px] transition-transform" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-6 flex flex-col items-center gap-6 lg:hidden border-t border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg font-bold font-['Inter']">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}