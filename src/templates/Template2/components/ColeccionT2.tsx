import { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../../Template1/components/ScrollReveal';

export default function ColeccionT2({ data, paleta, addToCart }: any) {
  const [activeCategory, setActiveCategory] = useState(data.menu.categories[0] || 'Sillones');
  
  // Estado local para guardar las variantes (talles/colores) de los productos en tienda
  const [selecciones, setSelecciones] = useState<Record<string, any>>({});
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = data.menu.items.filter((item: any) => item.category === activeCategory);

  // Configuraciones maestras
  const isEcommerce = data?.config?.modulo === 'carrito';
  const mostrarPrecios = data?.config?.mostrarPrecios !== false;
  const isTurnos = data?.config?.modulo === 'turnos';

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
  }, [activeCategory]);

  const scrollLeft = () => { if (sliderRef.current) sliderRef.current.scrollLeft -= 340; };
  const scrollRight = () => { if (sliderRef.current) sliderRef.current.scrollLeft += 340; };

  const handleSeleccion = (itemId: string, tipo: string, valor: string) => {
    setSelecciones(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], [tipo]: valor }
    }));
  };

  const handleAction = (item: any) => {
    if (isTurnos) {
      if (data?.config?.agendaModo === 'link' && data?.config?.agendaLink) {
        window.open(data.config.agendaLink, '_blank');
      } else {
        const msg = encodeURIComponent(`Hola, quiero consultar/reservar turno para: ${item.title}`);
        window.open(`https://wa.me/${data?.contact?.whatsapp}?text=${msg}`, '_blank');
      }
      return;
    }

    if (isEcommerce) {
      const tieneTalles = item.talles && item.talles.length > 0;
      const tieneColores = item.colores && item.colores.length > 0;
      const seleccionActual = selecciones[item.id] || {};

      if ((tieneTalles && !seleccionActual.talle) || (tieneColores && !seleccionActual.color)) {
        alert("Por favor, seleccioná las opciones (Color/Variante) antes de agregar al carrito.");
        return;
      }

      addToCart({
        ...item,
        selectedTalle: seleccionActual.talle || null,
        selectedColor: seleccionActual.color || null,
        cartId: `${item.id}-${seleccionActual.talle || ''}-${seleccionActual.color || ''}`
      });
    } else {
      // Modo Vitrina Libre (Sin carrito)
      const msg = encodeURIComponent(`Hola! Quisiera consultar por el producto: ${item.title}`);
      window.open(`https://wa.me/${data?.contact?.whatsapp}?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="coleccion" className="w-full py-[60px] lg:py-[100px] flex justify-center" style={{ backgroundColor: paleta.fondoCajas }}>
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 mb-12 px-6">
            <h2 className="text-[28px] md:text-[34px] lg:text-[42px] font-bold font-['Manrope'] leading-tight text-center" style={{ color: paleta.textoPrimario }}>
              {data.menu.title || 'Los más elegidos'}
            </h2>
            <div className="flex rounded-full p-1.5 overflow-x-auto hide-scrollbar max-w-full" style={{ backgroundColor: paleta.fondoSecundario }}>
              {data.menu.categories.map((category: string) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 px-5 py-2 rounded-full text-[14px] md:text-[16px] font-['Manrope'] transition-all
                    ${activeCategory === category ? 'font-semibold shadow-sm' : 'font-medium'}`}
                  style={{
                    backgroundColor: activeCategory === category ? paleta.fondoCajas : 'transparent',
                    color: activeCategory === category ? paleta.textoPrimario : `${paleta.textoPrimario}B3`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1320px] mx-auto px-4 lg:px-8">
            <div ref={sliderRef} className="flex gap-4 md:gap-6 justify-start items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar w-full">
              {filteredItems.map((item: any) => {
                const seleccionActual = selecciones[item.id] || {};

                return (
                  <article 
                    key={item.id} 
                    className="shrink-0 flex-none w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start rounded-[16px] p-4 flex flex-col gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transition-shadow group"
                    style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}0D` }}
                  >
                    <div className="w-full aspect-square rounded-[10px] overflow-hidden flex items-center justify-center p-4" style={{ backgroundColor: paleta.fondoPrincipal }}>
                      {item.imagePath ? (
                        <img src={item.imagePath} alt={item.title} className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="flex flex-col items-center gap-2" style={{ color: `${paleta.textoPrimario}4D` }}>
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span className="text-[12px] font-medium uppercase tracking-wider">Sin foto</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1 px-1 flex-grow">
                      <span className="text-[13px] font-medium font-['Inter'] uppercase tracking-wider" style={{ color: `${paleta.textoPrimario}80` }}>{item.category}</span>
                      <h3 className="text-[18px] lg:text-[20px] font-bold font-['Manrope'] leading-tight line-clamp-2" style={{ color: paleta.textoPrimario }}>{item.title}</h3>
                      
                      {mostrarPrecios && item.price && (
                        <span className="text-[18px] font-black mt-1" style={{ color: paleta.colorPrimario }}>{item.price}</span>
                      )}

                      {/* SECTOR DE VARIANTES PARA SHOWROOM */}
                      {isEcommerce && (
                        <div className="flex flex-col gap-2 mt-3 mb-1">
                          {item.colores && (
                            <div className="flex flex-wrap gap-1.5">
                              {item.colores.map((c: string) => (
                                <button 
                                  key={c} onClick={() => handleSeleccion(item.id, 'color', c)}
                                  className={`px-3 py-1 rounded-md text-[11px] font-bold border transition-all ${seleccionActual.color === c ? 'border-transparent text-white' : 'border-gray-200 text-gray-500'}`}
                                  style={seleccionActual.color === c ? { backgroundColor: paleta.textoPrimario } : {}}
                                >
                                  {c}
                                </button>
                              ))}
                            </div>
                          )}
                          {item.talles && (
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {item.talles.map((t: string) => (
                                <button 
                                  key={t} onClick={() => handleSeleccion(item.id, 'talle', t)}
                                  className={`px-3 py-1 rounded-md text-[11px] font-bold border transition-all ${seleccionActual.talle === t ? 'border-transparent text-white' : 'border-gray-200 text-gray-500'}`}
                                  style={seleccionActual.talle === t ? { backgroundColor: paleta.textoPrimario } : {}}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* BOTÓN MULTIUSO */}
                    <button 
                      onClick={() => handleAction(item)}
                      className="w-full py-3.5 mt-auto rounded-full flex justify-center items-center gap-2 text-[15px] font-semibold font-['Inter'] transition-colors active:scale-95 hover:opacity-90"
                      style={{ backgroundColor: paleta.colorAcento, color: '#ffffff' }}
                    >
                      {isTurnos ? 'Reservar Turno' : isEcommerce ? 'Agregar a Bolsa' : 'Consultar'}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-4">
            <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center rounded-full shadow-sm hover:opacity-80 active:scale-90 transition-all border" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}1A`, color: paleta.textoPrimario }}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center rounded-full shadow-sm hover:opacity-80 active:scale-90 transition-all border" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}1A`, color: paleta.textoPrimario }}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>

        </div>
      </div>
    </section>
  );
}