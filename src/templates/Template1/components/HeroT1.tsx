import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function HeroT1({ data }: Props) {
  return (
    <section id="inicio" className="relative w-full h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      
      {/* Imagen de Fondo */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={data.hero.images.desktop} />
        <source media="(min-width: 768px)" srcSet={data.hero.images.tablet} />
        <img 
          src={data.hero.images.mobile} 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover object-right lg:object-center"
        />
      </picture>

      {/* Gradientes oscuros para legibilidad (más fuertes a la izquierda) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido alineado a la izquierda */}
      <div className="relative z-10 w-full max-w-[1170px] mx-auto px-6 md:px-12 mt-20">
        <ScrollReveal>
          <div className="max-w-[600px] flex flex-col items-start text-left gap-6 md:gap-8">
            <h1 className="text-white text-[44px] md:text-[56px] lg:text-[68px] font-bold leading-[1.1] tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-[#E0E0E0] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed">
              {data.hero.subtitle}
            </p>

            <a 
              href={`https://wa.me/${data.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center items-center px-8 lg:px-10 py-4 lg:py-5 bg-white rounded-full shadow-[0px_4px_14px_rgba(255,255,255,0.15)] transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-black text-[16px] lg:text-[18px] font-bold">
                {data.hero.buttonText}
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}