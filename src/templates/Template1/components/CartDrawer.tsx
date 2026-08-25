import { useState, useEffect } from 'react';

export default function CartDrawer({ data, cart, updateQuantity, paleta }: any) {
  const isEcommerce = data?.config?.ecommerceMode || false;
  const defaultDelivery = data?.config?.deliveryMethod === 'delivery' ? 'delivery' : 'takeaway';

  const [isOpen, setIsOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState(defaultDelivery);
  const [zone, setZone] = useState('');
  const [address, setAddress] = useState('');

  const parsePrice = (priceStr: string) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const total = cart.reduce((acc: number, item: any) => acc + (parsePrice(item.price) * item.quantity), 0);

  const isOrderValid = () => {
    if (cart.length === 0) return false;
    if (deliveryType === 'delivery') {
      if (zone === '' || address.trim() === '') return false;
    }
    return true;
  };

  const sendOrderToWhatsApp = () => {
    let message = `*NUEVO PEDIDO* 🛍️\n\n`;
    
    cart.forEach((item: any) => {
      message += `▪ ${item.quantity}x ${item.title} ${isEcommerce && item.price ? `(${item.price} c/u)` : ''}\n`;
    });
    
    if(total > 0) {
      message += `\n*TOTAL: $${total.toLocaleString('es-AR')}*\n\n`;
    } else {
      message += `\n*TOTAL:* (A confirmar por el local)\n\n`;
    }
    
    if (deliveryType === 'takeaway') {
      message += `📍 *Retiro en el local* (Takeaway)\n`;
    } else {
      message += `🛵 *Envío a domicilio* (Delivery)\n`;
      message += `Zona: ${zone}\n`;
      message += `Dirección: ${address}\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${data?.contact?.whatsapp || ''}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isEcommerce || cart.length === 0) return null;

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-4 md:p-5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 transition-transform hover:scale-110 animate-bounce"
        style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoBoton }}
      >
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="font-black text-xl leading-none absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm border-2 border-white shadow-sm">
          {cart.length}
        </span>
      </button>

      {/* DRAWER LATERAL / MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />

          <div 
            className="relative w-full max-w-md h-[100dvh] shadow-2xl flex flex-col overflow-hidden rounded-l-[32px] md:rounded-l-[40px] border-l animate-slide-in-right" 
            style={{ backgroundColor: paleta.fondoSecundario, borderColor: `${paleta.textoSecundario}22` }}
          >
            {/* CABECERA */}
            <div className="p-6 md:p-8 flex justify-between items-center bg-black/20">
              <h2 className="text-3xl font-black tracking-tight" style={{ color: paleta.textoPrimario }}>Tu Pedido</h2>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" style={{ color: paleta.textoPrimario }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* LISTA DE ITEMS (AHORA CON IMÁGENES) */}
            <div className="flex-grow overflow-y-auto p-5 md:p-6 flex flex-col gap-4 hide-scrollbar">
              {cart.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4 bg-white/5 p-3 rounded-[24px] border border-white/5 hover:bg-white/10 transition-colors">
                  {/* IMAGEN DEL PRODUCTO */}
                  {item.imagePath && (
                    <div className="w-16 h-16 shrink-0 rounded-[16px] overflow-hidden bg-black/30 flex items-center justify-center p-1">
                      <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover rounded-[12px]" />
                    </div>
                  )}
                  
                  {/* INFO */}
                  <div className="flex flex-col flex-grow">
                    <span className="font-bold text-base leading-tight mb-0.5 line-clamp-1" style={{ color: paleta.textoPrimario }}>{item.title}</span>
                    <span className="text-sm font-black" style={{ color: paleta.colorPrimario }}>{item.price || 'A confirmar'}</span>
                  </div>
                  
                  {/* CONTROLES */}
                  <div className="flex items-center gap-3 bg-black/40 rounded-full p-1 border border-white/5 shrink-0">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-black text-xl leading-none">-</button>
                    <span className="font-black text-sm w-4 text-center" style={{ color: paleta.textoPrimario }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-black text-xl leading-none">+</button>
                  </div>
                </div>
              ))}
            </div>

            {/* CHECKOUT LÓGISTICA Y TOTAL */}
            <div className="p-6 md:p-8 flex flex-col gap-5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-10" style={{ backgroundColor: paleta.fondoCajas }}>
              
              <div className="flex flex-col gap-3">
                <span className="font-bold text-[11px] uppercase tracking-[0.2em]" style={{ color: paleta.textoSecundario }}>Método de entrega</span>
                <div className="flex gap-2 bg-black/20 p-1.5 rounded-2xl border border-white/5">
                  {data?.config?.deliveryMethod !== 'delivery' && (
                    <button 
                      onClick={() => setDeliveryType('takeaway')} 
                      className={`flex-1 py-3 rounded-[12px] font-bold text-sm transition-all shadow-sm ${deliveryType === 'takeaway' ? 'scale-100' : 'scale-[0.98] opacity-60 hover:opacity-100'}`} 
                      style={deliveryType === 'takeaway' ? { backgroundColor: paleta.colorPrimario, color: paleta.textoBoton } : { backgroundColor: 'transparent', color: paleta.textoPrimario }}
                    >
                      Retiro Local
                    </button>
                  )}
                  {data?.config?.deliveryMethod !== 'takeaway' && (
                    <button 
                      onClick={() => setDeliveryType('delivery')} 
                      className={`flex-1 py-3 rounded-[12px] font-bold text-sm transition-all shadow-sm ${deliveryType === 'delivery' ? 'scale-100' : 'scale-[0.98] opacity-60 hover:opacity-100'}`} 
                      style={deliveryType === 'delivery' ? { backgroundColor: paleta.colorPrimario, color: paleta.textoBoton } : { backgroundColor: 'transparent', color: paleta.textoPrimario }}
                    >
                      Delivery
                    </button>
                  )}
                </div>
              </div>

              {deliveryType === 'delivery' && (
                <div className="flex flex-col gap-3 transition-all duration-300">
                  <select 
                    value={zone} onChange={(e) => setZone(e.target.value)}
                    className="w-full p-4 rounded-[16px] outline-none font-bold text-sm cursor-pointer appearance-none"
                    style={{ backgroundColor: paleta.fondoSecundario, color: paleta.textoPrimario, border: `2px solid ${zone ? paleta.colorPrimario : `${paleta.textoSecundario}33`}` }}
                  >
                    <option value="" disabled>Seleccioná tu zona...</option>
                    {data?.config?.deliveryZones?.map((z: string) => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                  
                  <input 
                    type="text" placeholder="Calle y número exacto..." 
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-4 rounded-[16px] outline-none font-bold text-sm placeholder:font-medium"
                    style={{ backgroundColor: paleta.fondoSecundario, color: paleta.textoPrimario, border: `2px solid ${address.trim() ? paleta.colorPrimario : `${paleta.textoSecundario}33`}` }}
                  />
                </div>
              )}

              <div className="flex justify-between items-center mt-1 border-t pt-5" style={{ borderColor: `${paleta.textoSecundario}22` }}>
                <span className="text-lg font-black uppercase tracking-wider" style={{ color: paleta.textoSecundario }}>Total</span>
                <span className="text-3xl font-black" style={{ color: paleta.textoPrimario }}>${total.toLocaleString('es-AR')}</span>
              </div>
              
              <button 
                onClick={sendOrderToWhatsApp}
                disabled={!isOrderValid()}
                className="w-full py-4 rounded-full font-black text-[15px] transition-all flex items-center justify-center gap-3 mt-1 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
                style={!isOrderValid() ? { backgroundColor: paleta.fondoSecundario, color: paleta.textoSecundario } : { backgroundColor: '#25D366', color: '#ffffff' }}
              >
                {/* ICONO WHATSAPP */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir por WhatsApp
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}