import { useState, useRef, useEffect } from 'react';
import ScrollReveal from '../../Template1/components/ScrollReveal';

export default function ColeccionT2({ data, paleta, addToCart }: any) {
  const [activeCategory, setActiveCategory] = useState(data?.menu?.categories?.[0] || 'Sillones');
  const [selecciones, setSelecciones] = useState<Record<string, any>>({});
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = data?.menu?.items?.filter((item: any) => item.category === activeCategory) || [];

  const rawModulo = data?.config?.modulo || 'catalogo';
  const moduloActual = String(rawModulo).toLowerCase().trim();
  
  const isEcommerce = moduloActual === 'catalogo' || moduloActual === 'carrito';
  const isTurnos = moduloActual === 'turnos' || moduloActual === 'turno';
  const mostrarPrecios = data?.config?.mostrarPrecios !== false;
  
  // Extraemos el modo de la agenda (por defecto asumimos whatsapp)
  const agendaModo = data?.config?.agendaModo || 'whatsapp';

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
      if (agendaModo === 'link' && data?.config?.agendaLink) {
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
        alert("Por favor, seleccioná las opciones (Color/Variante) antes de agregar a la bolsa.");
        return;
      }

      addToCart({
        ...item,
        selectedTalle: seleccionActual.talle || null,
        selectedColor: seleccionActual.color || null,
        cartId: `${item.id}-${seleccionActual.talle || ''}-${seleccionActual.color || ''}`
      });
    } else {
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
              {data?.menu?.title || 'Los más elegidos'}
            </h2>
            <div className="flex rounded-full p-1.5 overflow-x-auto hide-scrollbar max-w-full" style={{ backgroundColor: paleta.fondoSecundario }}>
              {data?.menu?.categories?.map((category: string) => (
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
                    className={`shrink-0 flex-none w-[280px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start rounded-[16px] flex flex-col shadow-[0px_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.1)] transition-shadow group border ${!isTurnos ? 'p-4' : 'overflow-hidden'}`}
                    style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoPrimario}0D` }}
                  >
                    
                    <div 
                      className={`w-full aspect-square relative ${!isTurnos ? 'rounded-[10px] overflow-hidden flex items-center justify-center p-4' : ''}`} 
                      style={{ backgroundColor: paleta.fondoPrincipal }}
                    >
                      {item.imagePath ? (
                        <img 
                          src={item.imagePath} 
                          alt={item.title} 
                          className={!isTurnos 
                            ? "w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" 
                            : "absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          } 
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-2" style={{ color: `${paleta.textoPrimario}4D` }}>
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span className="text-[12px] font-medium uppercase tracking-wider">Sin foto</span>
                        </div>
                      )}
                    </div>
                    
                    <div className={`flex flex-col flex-grow justify-between ${isTurnos ? 'p-5' : 'px-2 pt-5 pb-2'}`}>
                      
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-bold font-['Inter'] uppercase tracking-[2px]" style={{ color: `${paleta.textoPrimario}80` }}>{item.category}</span>
                        <h3 className="text-[19px] lg:text-[21px] font-bold font-['Manrope'] leading-[1.2] line-clamp-2" style={{ color: paleta.textoPrimario }}>{item.title}</h3>
                        
                        {mostrarPrecios && item.price && (
                          <span className="text-[22px] font-black mt-1" style={{ color: paleta.colorPrimario }}>{item.price}</span>
                        )}
                      </div>

                      <div className="flex flex-col mt-auto">
                        {isEcommerce && (
                          <div className="flex flex-col gap-2 mt-4 mb-2">
                            {item.colores && (
                              <div className="flex flex-wrap gap-1.5">
                                {item.colores.map((c: string) => (
                                  <button 
                                    key={c} onClick={() => handleSeleccion(item.id, 'color', c)}
                                    className={`px-3 py-1.5 rounded-md text-[11px] font-bold border transition-all ${seleccionActual.color === c ? 'border-transparent text-white' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
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
                                    className={`px-3 py-1.5 rounded-md text-[11px] font-bold border transition-all ${seleccionActual.talle === t ? 'border-transparent text-white' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                                    style={seleccionActual.talle === t ? { backgroundColor: paleta.textoPrimario } : {}}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        
                        <button 
                          onClick={() => handleAction(item)}
                          className={`w-full py-3.5 mt-4 rounded-full flex justify-center items-center gap-2 text-[15px] font-bold font-['Inter'] transition-transform active:scale-95 hover:opacity-90 shadow-sm`}
                          style={{ backgroundColor: paleta.colorAcento, color: '#ffffff' }}
                        >
                          {isTurnos ? (
                            <>
                              {agendaModo === 'link' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                              )}
                              <span>Reservar Turno</span>
                            </>
                          ) : (isEcommerce ? 'Agregar a Bolsa' : 'Consultar')}
                        </button>
                      </div>

                    </div>
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