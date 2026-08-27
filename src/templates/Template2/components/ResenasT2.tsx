import { useRef } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function ResenasT2({ data, paleta }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  if (!data?.testimonials?.items || data.testimonials.items.length === 0) return null;

  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 350; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 350; };

  return (
    <section id="resenas" className="w-full py-[80px] lg:py-[120px] relative overflow-hidden" style={{ backgroundColor: paleta.fondoCajas }}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 mb-12 lg:mb-20 px-6">
            <span className="text-[13px] lg:text-[18px] font-bold font-['Manrope'] uppercase tracking-[3px]" style={{ color: paleta.colorPrimario }}>
              Reseñas
            </span>
            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold font-['Manrope'] leading-tight text-center" style={{ color: paleta.textoPrimario }}>
              {data.testimonials.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative w-full flex items-center justify-center group">
          <button onClick={scrollLeft} className="hidden lg:flex absolute left-8 z-20 w-14 h-14 border rounded-full items-center justify-center hover:scale-110 hover:opacity-80 transition-all shadow-md" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}1A`, color: paleta.textoPrimario }} aria-label="Anterior">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div ref={sliderRef} className="w-full flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-6 lg:px-[120px] pb-12 pt-4">
            {data.testimonials.items.map((review: any, index: number) => (
              <div key={index} className="relative shrink-0 snap-center w-[300px] md:w-[370px] flex flex-col rounded-[20px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border transition-shadow duration-300" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}0D` }}>
                
                {/* IMAGEN DE FONDO */}
                <div className="w-full h-[230px] md:h-[280px] rounded-t-[20px] overflow-hidden bg-gray-100">
                  <img src={review.bgImage || `/assets-t2/review-bg-${(index % 3) + 1}.webp`} alt={`Interior de ${review.name}`} className="w-full h-full object-cover" />
                </div>
                
                <div className="relative px-6 pb-10 pt-12 flex flex-col items-center">
                  
                  {/* AVATAR CIRCULAR O LETRA */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[76px] h-[76px] rounded-full border-[4px] overflow-hidden shadow-md flex items-center justify-center text-[28px] font-bold" style={{ borderColor: paleta.fondoCajas, backgroundColor: paleta.colorAcento, color: paleta.textoClaro }}>
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>

                  <h3 className="text-[18px] lg:text-[20px] font-bold font-['Manrope']" style={{ color: paleta.textoPrimario }}>{review.name}</h3>
                  <span className="text-[12px] lg:text-[13px] font-medium font-['Manrope'] mb-4" style={{ color: `${paleta.textoPrimario}99` }}>{review.role}</span>
                  <p className="text-[14px] lg:text-[15px] font-medium font-['Manrope'] text-center leading-[1.6] min-h-[100px]" style={{ color: `${paleta.textoPrimario}CC` }}>"{review.content}"</p>

                  <div className="flex gap-1.5 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-[16px] h-[16px]" style={{ color: paleta.colorPrimario }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="hidden lg:flex absolute right-8 z-20 w-14 h-14 border rounded-full items-center justify-center hover:scale-110 hover:opacity-80 transition-all shadow-md" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}1A`, color: paleta.textoPrimario }} aria-label="Siguiente">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}