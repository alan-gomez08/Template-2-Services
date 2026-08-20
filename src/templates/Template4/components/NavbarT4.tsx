import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function NavbarT4({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent lg:bg-transparent bg-white'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#inicio" className="text-[#059669] text-[20px] lg:text-[24px] font-bold font-['Arimo'] uppercase tracking-wide relative z-10">
          {data.businessName}
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-700 text-[16px] font-medium font-['Inter'] hover:text-[#059669] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Menú Hamburguesa Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 relative z-10"
        >
          <div className="w-[24px] h-[2.5px] bg-slate-800 rounded-full transition-transform" />
          <div className="w-[24px] h-[2.5px] bg-slate-800 rounded-full transition-transform" />
          <div className="w-[24px] h-[2.5px] bg-slate-800 rounded-full transition-transform" />
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 py-6 flex flex-col items-center gap-6 lg:hidden shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-800 text-lg font-bold font-['Inter']">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}