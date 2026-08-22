import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NavbarT4({ data, paleta }: Props) {
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
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent lg:bg-transparent'}`}
      style={{ backgroundColor: scrolled ? `${paleta.fondoPrincipal}F2` : paleta.fondoPrincipal }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        <a href="#inicio" className="text-[20px] lg:text-[24px] font-bold font-['Arimo'] uppercase tracking-wide relative z-10" style={{ color: paleta.colorPrimario }}>
          {data.businessName}
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[16px] font-medium font-['Inter'] transition-colors"
              style={{ color: paleta.textoPrimario }}
              onMouseEnter={(e) => e.currentTarget.style.color = paleta.colorPrimario}
              onMouseLeave={(e) => e.currentTarget.style.color = paleta.textoPrimario}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 relative z-10"
        >
          <div className="w-[24px] h-[2.5px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoPrimario }} />
          <div className="w-[24px] h-[2.5px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoPrimario }} />
          <div className="w-[24px] h-[2.5px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoPrimario }} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full border-t py-6 flex flex-col items-center gap-6 lg:hidden shadow-xl" style={{ backgroundColor: paleta.fondoPrincipal, borderColor: `${paleta.textoPrimario}1A` }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold font-['Inter']" style={{ color: paleta.textoPrimario }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}