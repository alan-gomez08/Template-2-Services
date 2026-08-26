import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function MenuT1({ data, paleta, cart, addToCart, updateQuantity }: any) {
  const categories = data?.menu?.categories || [];
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Destacados');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = data?.menu?.items?.filter((item: any) => item.category === activeCategory) || [];
  const isEcommerce = data?.config?.ecommerceMode || false;
  const mostrarPrecios = data?.config?.mostrarPrecios !== false;

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
  }, [activeCategory]);

  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 300; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 300; };

  // Calcula la cantidad actual de un ítem en el carrito
  const getItemQuantity = (id: string) => {
    const cartItem = cart?.find((i: any) => i.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <section id="menu" className="w-full py-[60px] lg:py-[100px] flex justify-center" style={{ backgroundColor: paleta.fondoSecundario }}>
      <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-10 lg:mb-[70px] px-6 leading-tight tracking-tight" style={{ color: paleta.textoPrimario }}>
            {data?.menu?.title || 'Nuestro Menú'}
          </h2>
        </ScrollReveal>

        {/* NAVEGACIÓN DE PESTAÑAS */}
        <nav className="w-full mb-12 block">
          <ul className="flex flex-row justify-start md:justify-center overflow-x-auto gap-3 px-6 py-2 hide-scrollbar w-full">
            {categories.map((category: string) => (
              <li key={category} className="shrink-0 flex-none block">
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="px-7 py-3 rounded-full text-[14px] md:text-[15px] font-bold transition-all border hover:opacity-80 shadow-sm"
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

        {/* LISTADO DE PRODUCTOS */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <div ref={sliderRef} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[32px] justify-start items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth px-6 scroll-pl-6 lg:px-12 lg:scroll-pl-12 pb-8 md:pb-0 hide-scrollbar">
              
              {filteredItems.map((item: any) => {
                const quantity = getItemQuantity(item.id);

                return (
                  <ScrollReveal 
                    key={item.id} 
                    className="shrink-0 flex-none w-[280px] sm:w-[330px] lg:w-auto snap-start h-full"
                  >
                    <article 
                      className="h-full rounded-[32px] p-2 transition-all duration-300 hover:-translate-y-2 group"
                      style={{ backgroundColor: paleta.fondoCajas, boxShadow: `0 10px 40px -10px rgba(0,0,0,0.3)` }}
                    >
                      {/* CONTENEDOR INTERNO PARA EL BORDE SUAVE */}
                      <div className="h-full border rounded-[28px] flex flex-col p-5" style={{ borderColor: `${paleta.textoSecundario}15` }}>
                        
                        {/* IMAGEN FLOTANTE (Sin fondo oscuro) */}
                        <div className="w-full h-[180px] flex items-center justify-center relative mb-5">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {item.imagePath ? (
                            <img 
                              src={item.imagePath} 
                              alt={item.title} 
                              className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 relative z-10" 
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-2" style={{ color: paleta.textoSecundario }}>
                              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              <span className="text-[12px] font-medium tracking-wider uppercase">Sin foto</span>
                            </div>
                          )}
                        </div>
                        
                        {/* TEXTOS */}
                        <div className="flex flex-col gap-2 flex-grow px-1">
                          <h3 className="text-[20px] lg:text-[22px] font-black leading-tight tracking-tight" style={{ color: paleta.textoPrimario }}>{item.title}</h3>
                          <p className="text-[14px] font-medium leading-relaxed opacity-60 line-clamp-2" style={{ color: paleta.textoSecundario }}>{item.description}</p>
                        </div>
                        
                        {/* FOOTER: PRECIO Y BOTONERA */}
                        <div className="mt-6 flex flex-col gap-4 px-1 pb-1">
                          
                          {isEcommerce && mostrarPrecios && item.price && (
                            <div className="text-[22px] font-black tracking-tighter" style={{ color: paleta.colorPrimario }}>
                              {item.price}
                            </div>
                          )}
                          
                          {isEcommerce ? (
                            quantity === 0 ? (
                              // BOTÓN "AGREGAR" MODERNIZADO
                              <button 
                                onClick={() => addToCart(item)}
                                className="w-full py-3.5 rounded-[16px] flex justify-center items-center gap-2 text-[15px] font-black tracking-wide transition-all duration-300 active:scale-95 hover:brightness-110 shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-lg"
                                style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoBoton }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                                Agregar al Pedido
                              </button>
                            ) : (
                              // CONTROL DE CANTIDAD ESTILO APP
                              <div className="w-full h-[52px] rounded-[16px] flex items-center justify-between px-2 transition-all duration-300 shadow-sm border" style={{ backgroundColor: paleta.fondoPrincipal, borderColor: `${paleta.colorPrimario}40` }}>
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)} 
                                  className="w-10 h-10 flex items-center justify-center rounded-[12px] font-medium text-2xl transition-all active:scale-90 hover:bg-black/5"
                                  style={{ color: paleta.textoPrimario }}
                                >
                                  -
                                </button>
                                <span className="font-black text-[16px]" style={{ color: paleta.textoPrimario }}>
                                  {quantity}
                                </span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)} 
                                  className="w-10 h-10 flex items-center justify-center rounded-[12px] font-black text-xl transition-all active:scale-90 shadow-sm"
                                  style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoBoton }}
                                >
                                  +
                                </button>
                              </div>
                            )
                          ) : (
                            <a 
                              href={`https://wa.me/${data?.contact?.whatsapp || ''}?text=Hola! Quisiera consultar/pedir: ${item.title}`}
                              target="_blank" rel="noopener noreferrer"
                              className="w-full py-3.5 rounded-[16px] flex justify-center items-center gap-2 text-[15px] font-black tracking-wide transition-all duration-300 active:scale-95 hover:brightness-110 shadow-md hover:shadow-lg"
                              style={{ backgroundColor: paleta.fondoBoton, color: paleta.textoBoton }}
                            >
                              Consultar
                            </a>
                          )}
                        </div>
                        
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* CONTROLES PARA MÓVIL */}
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