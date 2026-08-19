import { useState, useRef, useEffect } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function MenuT1({ data }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'Todo' 
    ? data.menu.items 
    : data.menu.items.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <section id="menu" className="w-full bg-[#0A0A0A] py-[60px] lg:py-[100px] flex justify-center">
      <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="text-white text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-8 lg:mb-[60px] px-6 leading-tight">
            {data.menu.title}
          </h2>
        </ScrollReveal>

        <nav className="w-full mb-10 block">
          <ul className="flex flex-row justify-start md:justify-center overflow-x-auto gap-3 px-6 py-2 hide-scrollbar w-full">
            {data.menu.categories.map((category) => (
              <li key={category} className="shrink-0 flex-none block">
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-[14px] md:text-[15px] font-medium transition-colors border
                    ${activeCategory === category 
                      ? 'bg-white text-black border-white' 
                      : 'bg-[#1A1A1A] text-[#A3A3A3] hover:text-white border-white/5 hover:border-white/20'
                    }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <div 
              ref={sliderRef}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] justify-start items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth px-6 scroll-pl-6 lg:px-12 lg:scroll-pl-12 pb-4 md:pb-0 hide-scrollbar"
            >
              {filteredItems.map((item) => (
                <article 
                  key={item.id} 
                  className="shrink-0 flex-none w-[280px] sm:w-[320px] lg:w-auto snap-start bg-[#141414] rounded-[24px] p-6 flex flex-col gap-6 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-full aspect-[4/3] flex items-center justify-center">
                    <img 
                      src={item.imagePath} 
                      alt={item.title} 
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex items-start">
                      <h3 className="text-white text-[18px] lg:text-[20px] font-bold leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#A3A3A3] text-[14px] lg:text-[15px] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera pedir: ${item.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full border border-white/20 text-white flex justify-center items-center gap-2 text-[15px] font-semibold hover:bg-white hover:text-black transition-colors mt-2 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Realizar Pedido
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-center items-center gap-6 mt-8">
            <button 
              type="button"
              onClick={scrollLeft} 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 active:scale-90 transition-all z-10"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              type="button"
              onClick={scrollRight} 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 active:scale-90 transition-all z-10"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}