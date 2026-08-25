import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function MenuT1({ data, paleta, addToCart }: any) {
  const categories = data?.menu?.categories || [];
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Destacados');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = data?.menu?.items?.filter((item: any) => item.category === activeCategory) || [];
  const isEcommerce = data?.config?.ecommerceMode || false;

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
  }, [activeCategory]);

  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 300; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 300; };

  return (
    <section id="menu" className="w-full py-[60px] lg:py-[100px] flex justify-center" style={{ backgroundColor: paleta.fondoSecundario }}>
      <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-8 lg:mb-[60px] px-6 leading-tight" style={{ color: paleta.textoPrimario }}>
            {data?.menu?.title || 'Nuestro Menú'}
          </h2>
        </ScrollReveal>

        {/* NAVEGACIÓN DE PESTAÑAS */}
        <nav className="w-full mb-10 block">
          <ul className="flex flex-row justify-start md:justify-center overflow-x-auto gap-3 px-6 py-2 hide-scrollbar w-full">
            {categories.map((category: string) => (
              <li key={category} className="shrink-0 flex-none block">
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="px-6 py-2.5 rounded-full text-[14px] md:text-[15px] font-medium transition-all border hover:opacity-80"
                  style={{
                    backgroundColor: activeCategory === category ? paleta.textoPrimario : paleta.fondoCajas,
                    color: activeCategory === category ? paleta.fondoPrincipal : paleta.textoSecundario,
                    borderColor: activeCategory === category ? paleta.textoPrimario : `${paleta.textoSecundario}33`
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* LISTADO DE PRODUCTOS DE LA CATEGORÍA SELECCIONADA */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <div ref={sliderRef} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] justify-start items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth px-6 scroll-pl-6 lg:px-12 lg:scroll-pl-12 pb-4 md:pb-0 hide-scrollbar">
              
              {filteredItems.map((item: any) => (
                <article 
                  key={item.id} 
                  className="shrink-0 flex-none w-[280px] sm:w-[320px] lg:w-auto snap-start rounded-[24px] p-6 flex flex-col gap-5 border transition-all hover:shadow-2xl hover:-translate-y-1 group"
                  style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoSecundario}22` }}
                >
                  <div className="w-full aspect-[4/3] flex items-center justify-center rounded-[16px] overflow-hidden relative" style={{ backgroundColor: paleta.fondoPrincipal }}>
                    {item.imagePath ? (
                      <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="flex flex-col items-center gap-2" style={{ color: paleta.textoSecundario }}>
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="text-[12px] font-medium">Imagen pendiente</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 flex-grow">
                    <h3 className="text-[18px] lg:text-[20px] font-bold leading-tight" style={{ color: paleta.textoPrimario }}>{item.title}</h3>
                    <p className="text-[14px] lg:text-[15px] font-normal leading-relaxed opacity-80 line-clamp-3" style={{ color: paleta.textoSecundario }}>{item.description}</p>
                  </div>
                  
                  {isEcommerce && item.price && (
                    <div className="text-xl font-black mb-1" style={{ color: paleta.colorPrimario }}>
                      {item.price}
                    </div>
                  )}
                  
                  {/* BOTÓN MÁS ATRACTIVO */}
                  {isEcommerce ? (
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full py-4 rounded-[16px] flex justify-center items-center gap-2 text-[15px] font-black transition-all active:scale-95 shadow-md hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] mt-auto border border-transparent hover:-translate-y-0.5"
                      style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoBoton }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      Agregar al Pedido
                    </button>
                  ) : (
                    <a 
                      href={`https://wa.me/${data?.contact?.whatsapp || ''}?text=Hola! Quisiera consultar/pedir: ${item.title}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full py-4 rounded-[16px] flex justify-center items-center gap-2 text-[15px] font-black transition-all active:scale-95 shadow-md hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] mt-auto border border-transparent hover:-translate-y-0.5"
                      style={{ backgroundColor: paleta.fondoBoton, color: paleta.textoBoton }}
                    >
                      Consultar
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-center items-center gap-6 mt-8">
            <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:opacity-80 active:scale-90 z-10" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoSecundario}33`, color: paleta.textoPrimario }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:opacity-80 active:scale-90 z-10" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoSecundario}33`, color: paleta.textoPrimario }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}