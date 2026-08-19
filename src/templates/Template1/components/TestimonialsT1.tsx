import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function TestimonialsT1({ data }: Props) {
  return (
    <section id="resenas" className="w-full bg-black py-20 lg:py-[120px] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col items-center w-full">
            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-10 lg:mb-[70px]">
              {data.testimonials.title}
            </h2>
            
            <div className="w-full flex lg:grid lg:grid-cols-3 gap-6 lg:gap-[30px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 hide-scrollbar">
              {data.testimonials.items.map((review) => (
                <article 
                  key={review.id} 
                  className="min-w-[85vw] md:min-w-[340px] lg:min-w-0 snap-center bg-[#191919] rounded-[16px] p-8 lg:p-[40px] flex flex-col justify-start gap-6"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.imagePath} 
                      alt={review.name} 
                      className="w-[56px] h-[56px] lg:w-[74px] lg:h-[74px] rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-[16px] lg:text-[18px] font-bold">
                        {review.name}
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-[14px] h-[14px] text-[#FF9901]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Ícono de Comillas (Quote) */}
                  <div className="text-white text-5xl font-serif leading-[0px] mt-4 mb-2 opacity-80">
                    “
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/10 lg:w-[195px]"></div>
                  
                  <p className="text-[#A3A3A3] text-[15px] lg:text-[18px] font-normal leading-relaxed">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}