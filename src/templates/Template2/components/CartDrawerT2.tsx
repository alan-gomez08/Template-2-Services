import { useState, useEffect } from 'react';

export default function CartDrawerT2({ data, cart, updateQuantity, paleta }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // Si el módulo no es ni carrito ni catalogo, este componente directamente no existe
  if (data?.config?.modulo !== 'carrito' && data?.config?.modulo !== 'catalogo') return null;

  const mostrarPrecios = data?.config?.mostrarPrecios !== false;

  const parsePrice = (priceStr: string) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const total = cart.reduce((acc: number, item: any) => acc + (parsePrice(item.price) * item.quantity), 0);

  const sendOrderToWhatsApp = () => {
    let message = `*NUEVO PEDIDO / CONSULTA* 🛍️\n\n`;
    
    cart.forEach((item: any) => {
      const variantStr = [item.selectedTalle, item.selectedColor].filter(Boolean).join(', ');
      const titleWithVariant = variantStr ? `${item.title} (${variantStr})` : item.title;
      
      message += `▪ ${item.quantity}x ${titleWithVariant} ${mostrarPrecios && item.price ? `(${item.price} c/u)` : ''}\n`;
    });
    
    if (mostrarPrecios && total > 0) {
      message += `\n*TOTAL APROX: $${total.toLocaleString('es-AR')}*\n`;
    }
    
    message += `\n_Aguardamos confirmación de stock, métodos de envío y detalles de pago. Gracias!_`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${data?.contact?.whatsapp || ''}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (cart.length === 0) return null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-bounce border-2"
        style={{ backgroundColor: paleta.fondoCajas, color: paleta.textoPrimario, borderColor: `${paleta.textoPrimario}22` }}
      >
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        <span className="font-black absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm border-2" style={{ backgroundColor: paleta.colorPrimario, color: '#ffffff', borderColor: paleta.fondoCajas }}>
          {cart.reduce((acc: number, item: any) => acc + item.quantity, 0)}
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div 
            className="relative w-full max-w-md h-[100dvh] shadow-2xl flex flex-col animate-slide-in-right rounded-l-[32px] md:rounded-l-[40px] border-l"
            style={{ backgroundColor: paleta.fondoSecundario, borderColor: `${paleta.textoSecundario}22` }}
          >
            <div className="p-6 md:p-8 border-b flex justify-between items-center" style={{ borderColor: `${paleta.textoSecundario}22` }}>
              <h2 className="text-3xl font-black font-['Manrope']" style={{ color: paleta.textoPrimario }}>Tu Bolsa</h2>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors" style={{ color: paleta.textoPrimario }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
              {cart.map((item: any) => (
                <div key={item.cartId} className="flex gap-4 p-3 rounded-[24px] bg-black/5 hover:bg-black/10 transition-colors">
                  {item.imagePath && (
                    <div className="w-20 h-24 shrink-0 rounded-[16px] overflow-hidden flex items-center justify-center p-1" style={{ backgroundColor: paleta.fondoPrincipal }}>
                      <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover rounded-[12px] mix-blend-multiply" />
                    </div>
                  )}
                  
                  <div className="flex flex-col flex-grow justify-center pr-2">
                    <span className="font-bold text-md leading-tight" style={{ color: paleta.textoPrimario }}>{item.title}</span>
                    
                    {(item.selectedTalle || item.selectedColor) && (
                      <span className="text-xs font-bold mt-1 uppercase opacity-70" style={{ color: paleta.textoPrimario }}>
                        {item.selectedTalle} {item.selectedColor ? `| ${item.selectedColor}` : ''}
                      </span>
                    )}

                    <div className="flex justify-between items-end mt-3">
                      <span className="font-black text-lg" style={{ color: paleta.colorPrimario }}>{mostrarPrecios ? item.price : ''}</span>
                      
                      <div className="flex items-center gap-3 rounded-full p-1 border" style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoSecundario}33` }}>
                        <button onClick={() => updateQuantity(item.cartId, -1)} className="w-7 h-7 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors font-black text-lg leading-none" style={{ color: paleta.textoPrimario }}>-</button>
                        <span className="font-black text-sm w-4 text-center" style={{ color: paleta.textoPrimario }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, 1)} className="w-7 h-7 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors font-black text-lg leading-none" style={{ color: paleta.textoPrimario }}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-10" style={{ backgroundColor: paleta.fondoCajas }}>
              {mostrarPrecios && (
                <div className="flex justify-between items-center mb-2 border-b pb-4" style={{ borderColor: `${paleta.textoSecundario}22` }}>
                  <span className="font-bold uppercase text-xs tracking-widest" style={{ color: paleta.textoSecundario }}>Total Estimado</span>
                  <span className="text-3xl font-black" style={{ color: paleta.textoPrimario }}>${total.toLocaleString('es-AR')}</span>
                </div>
              )}
              
              <button 
                onClick={sendOrderToWhatsApp}
                className="w-full py-5 rounded-full font-black text-[15px] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] active:scale-95 hover:-translate-y-1"
                style={{ backgroundColor: '#25D366', color: '#ffffff' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar Consulta por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}