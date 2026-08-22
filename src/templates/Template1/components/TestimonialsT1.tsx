import { useRef } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function TestimonialsT1({ data, paleta }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 320; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 320; };

  return (
    <section id="resenas" className="w-full py-[60px] lg:py-[100px] flex justify-center overflow-hidden" style={{ backgroundColor: paleta.fondoSecundario }}>
      <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-10 lg:mb-[80px] px-4 max-w-[300px] sm:max-w-md lg:max-w-none mx-auto leading-snug break-words" style={{ color: paleta.textoPrimario }}>
            {data.testimonials.title}
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col items-center w-full">
          <div ref={sliderRef} className="w-full flex lg:grid lg:grid-cols-3 gap-5 lg:gap-[30px] justify-start items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth px-6 scroll-pl-6 lg:px-12 lg:scroll-pl-12 pb-4 lg:pb-0 hide-scrollbar">
            {data.testimonials.items.map((review) => (
              <article 
                key={review.id} 
                className="shrink-0 flex-none w-[300px] sm:w-[340px] lg:w-full snap-start rounded-[24px] p-8 lg:p-[40px] flex flex-col justify-start border transition-colors"
                style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoSecundario}33` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.imagePath} alt={review.name} className="w-[56px] h-[56px] lg:w-[74px] lg:h-[74px] rounded-full object-cover" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[16px] lg:text-[18px] font-bold" style={{ color: paleta.textoPrimario }}>{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-[14px] h-[14px]" style={{ color: paleta.colorPrimario }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <svg className="w-8 h-8 mb-5 opacity-50" style={{ color: paleta.textoSecundario }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="w-full h-[1px] lg:w-[195px] mb-6" style={{ backgroundColor: `${paleta.textoSecundario}33` }}></div>
                <p className="text-[15px] lg:text-[18px] font-normal leading-relaxed" style={{ color: paleta.textoSecundario }}>
                  {review.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}