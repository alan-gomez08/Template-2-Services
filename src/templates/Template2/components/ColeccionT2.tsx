import { useState, useRef, useEffect } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function ColeccionT2({ data }: Props) {
  const [activeCategory, setActiveCategory] = useState(data.menu.categories[0] || 'Sillones');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = data.menu.items.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  // Ajustamos el salto del scroll para que mueva casi 4 tarjetas de golpe en desktop
  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 340; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 340; };

  return (
    <section id="coleccion" className="w-full bg-white py-[60px] lg:py-[100px] flex justify-center">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 mb-12 px-6">
            <h2 className="text-[#1E1D1B] text-[28px] md:text-[34px] lg:text-[42px] font-bold font-['Manrope'] leading-tight text-center">
              {data.menu.title || 'Los más elegidos'}
            </h2>
            <div className="flex bg-[#EEEEEE] rounded-full p-1.5 overflow-x-auto hide-scrollbar max-w-full">
              {data.menu.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 px-5 py-2 rounded-full text-[14px] md:text-[16px] font-['Manrope'] transition-all
                    ${activeCategory === category 
                      ? 'bg-white text-[#1E1D1B] font-semibold shadow-sm' 
                      : 'text-[#1E1D1B]/70 font-medium hover:text-[#1E1D1B]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="w-full flex flex-col items-center">
          {/* Contenedor principal ajustado con padding lateral */}
          <div className="w-full max-w-[1320px] mx-auto px-4 lg:px-8">
            
            {/* Pista del slider: Ahora es 100% Flexbox horizontal infinito */}
            <div 
              ref={sliderRef}
              className="flex gap-4 md:gap-6 justify-start items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar w-full"
            >
              {filteredItems.map((item) => (
                <article 
                  key={item.id} 
                  // MAGIA ACÁ: 
                  // w-[280px] en celular
                  // w-[calc(50%-12px)] en tablet (entran 2 justos)
                  // w-[calc(25%-18px)] en desktop (entran 4 justos)
                  className="shrink-0 flex-none w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white rounded-[16px] p-4 flex flex-col gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transition-shadow"
                >
                  <div className="w-full aspect-square bg-[#F4F2EE] rounded-[10px] overflow-hidden flex items-center justify-center p-4">
                    {item.imagePath ? (
                      <img src={item.imagePath} alt={item.title} className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="text-[#1E1D1B]/30 flex flex-col items-center gap-2">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="text-[12px] font-medium uppercase tracking-wider">Sin foto</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1 px-1 flex-grow">
                    <span className="text-[#1E1D1B]/50 text-[13px] font-medium font-['Inter'] uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-[#1E1D1B] text-[18px] lg:text-[20px] font-bold font-['Manrope'] leading-tight truncate">{item.title}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-[14px] h-[14px] text-[#F6B76F]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera consultar por el producto: ${item.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 mt-2 bg-[#1E1D1B] rounded-full text-white flex justify-center items-center gap-2 text-[15px] font-semibold font-['Inter'] hover:bg-black transition-colors active:scale-95"
                  >
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Las flechitas ahora están siempre visibles y centradas abajo */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#1E1D1B]/10 text-[#1E1D1B] hover:bg-gray-50 active:scale-90 shadow-sm transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#1E1D1B]/10 text-[#1E1D1B] hover:bg-gray-50 active:scale-90 shadow-sm transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>

        </div>
      </div>
    </section>
  );
}