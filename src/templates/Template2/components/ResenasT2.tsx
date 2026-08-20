import { useRef } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function ResenasT2({ data }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Data dura (hardcodeada para replicar el diseño de Figma)
  const reviews = [
    {
      id: 1,
      name: 'Federico G.',
      location: 'Castelar',
      text: '"Estábamos buscando renovar el comedor y nos ayudaron un montón con las medidas. Las sillas llegaron impecables y en la fecha que nos prometieron."',
      avatar: '/assets-t2/avatar-federico.webp',
      bgImage: '/assets-t2/review-bg-1.webp',
    },
    {
      id: 2,
      name: 'Sofía',
      location: 'Ramos Mejía',
      text: '"Compré la Poltrona Roma y superó mis expectativas. Nos asesoraron excelente con el color de la tela por WhatsApp para que combine con mi living. Muy recomendables."',
      avatar: '/assets-t2/avatar-sofia.webp',
      bgImage: '/assets-t2/review-bg-2.webp',
    },
    {
      id: 3,
      name: 'Martina L.',
      location: 'Ramos Mejía',
      text: '"Nos queda cerca el showroom, así que fuimos a probar los sillones en persona. Terminamos encargando todo el juego de living. Excelente calidad de terminaciones."',
      avatar: '/assets-t2/avatar-martina.webp',
      bgImage: '/assets-t2/review-bg-3.webp',
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 350;
  };
  
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 350;
  };

  return (
    <section id="resenas" className="w-full bg-white py-[80px] lg:py-[120px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Cabecera adaptada a fondo blanco */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 mb-12 lg:mb-20 px-6">
            <span className="text-[#E58411] text-[13px] lg:text-[18px] font-bold font-['Manrope'] uppercase tracking-[3px]">
              Reseñas
            </span>
            <h2 className="text-[#1E1D1B] text-[30px] md:text-[36px] lg:text-[42px] font-semibold font-['Manrope'] leading-tight text-center">
              Historias de casas reales
            </h2>
          </div>
        </ScrollReveal>

        {/* Contenedor del Slider con Flechas (Desktop) */}
        <div className="relative w-full flex items-center justify-center group">
          
          {/* Flecha Izquierda */}
          <button 
            onClick={scrollLeft}
            className="hidden lg:flex absolute left-8 z-20 w-14 h-14 bg-white border border-[#1E1D1B]/10 rounded-full items-center justify-center text-[#1E1D1B] hover:scale-110 hover:bg-gray-50 transition-all shadow-md"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Slider de Tarjetas */}
          <div 
            ref={sliderRef}
            className="w-full flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-6 lg:px-[120px] pb-12 pt-4"
          >
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="relative shrink-0 snap-center w-[300px] md:w-[370px] flex flex-col bg-white rounded-[20px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-gray-100 transition-shadow duration-300"
              >
                {/* Mitad Superior: Imagen de Fondo */}
                <div className="w-full h-[230px] md:h-[280px] rounded-t-[20px] overflow-hidden">
                  <img 
                    src={review.bgImage} 
                    alt={`Interior de ${review.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mitad Inferior: Textos y Avatar superpuesto */}
                <div className="relative px-6 pb-10 pt-12 flex flex-col items-center">
                  
                  {/* Avatar Flotante */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[76px] h-[76px] rounded-full border-[4px] border-white overflow-hidden shadow-md bg-white">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-[#1E1D1B] text-[18px] lg:text-[20px] font-bold font-['Manrope']">
                    {review.name}
                  </h3>
                  <span className="text-[#1E1D1B]/60 text-[12px] lg:text-[13px] font-medium font-['Manrope'] mb-4">
                    {review.location}
                  </span>
                  
                  <p className="text-[#1E1D1B]/80 text-[14px] lg:text-[15px] font-medium font-['Manrope'] text-center leading-[1.6] min-h-[100px]">
                    {review.text}
                  </p>

                  {/* Estrellas */}
                  <div className="flex gap-1.5 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-[16px] h-[16px] text-[#F6973F]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha Derecha */}
          <button 
            onClick={scrollRight}
            className="hidden lg:flex absolute right-8 z-20 w-14 h-14 bg-white border border-[#1E1D1B]/10 rounded-full items-center justify-center text-[#1E1D1B] hover:scale-110 hover:bg-gray-50 transition-all shadow-md"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Controles de Flechas para Mobile / Tablet */}
        <div className="flex lg:hidden justify-center items-center gap-6 mt-4">
          <button 
            onClick={scrollLeft} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#1E1D1B]/10 text-[#1E1D1B] hover:bg-gray-50 active:scale-90 shadow-sm transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={scrollRight} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#1E1D1B]/10 text-[#1E1D1B] hover:bg-gray-50 active:scale-90 shadow-sm transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
}