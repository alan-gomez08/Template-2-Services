import { useState } from 'react';
import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function MenuT1({ data }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const filteredItems = activeCategory === 'Todo' 
    ? data.menu.items 
    : data.menu.items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="w-full bg-[#0A0A0A] py-20 lg:py-[120px] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center w-full">
            
            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-10 lg:mb-[60px]">
              {data.menu.title}
            </h2>

            {/* Pestañas (Estilo Figma: Subrayado, no botones rellenos) */}
            <div className="w-full mb-12 overflow-hidden flex justify-center border-b border-white/10">
              <div className="flex overflow-x-auto gap-8 md:gap-12 pb-[-1px] hide-scrollbar snap-x">
                {data.menu.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap pb-4 text-[15px] lg:text-[16px] font-medium transition-all snap-center relative
                      ${activeCategory === category 
                        ? 'text-white' 
                        : 'text-[#A3A3A3] hover:text-white'
                      }`}
                  >
                    {category}
                    {/* Línea indicadora activa */}
                    {activeCategory === category && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Grilla de Platos */}
            <div className="w-full">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar">
                {filteredItems.map((item) => (
                  <article 
                    key={item.id} 
                    className="min-w-[85vw] md:min-w-0 snap-center bg-[#141414] rounded-[16px] p-6 flex flex-col gap-6"
                  >
                    <div className="w-full aspect-[4/3] flex items-center justify-center">
                      <img 
                        src={item.imagePath} 
                        alt={item.title} 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-3 flex-grow">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-white text-[18px] lg:text-[20px] font-bold leading-tight">
                          {item.title}
                        </h3>
                        <span className="text-white font-bold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[#A3A3A3] text-[14px] lg:text-[15px] font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Botón fantasma estilo Figma */}
                    <a 
                      href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera pedir: ${item.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-full border border-white/20 text-white flex justify-center items-center gap-2 text-[15px] font-semibold hover:bg-white hover:text-black transition-colors mt-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Realizar Pedido
                    </a>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}