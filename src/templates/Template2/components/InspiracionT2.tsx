import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function InspiracionT2({ data, paleta }: Props) {
  // Fallbacks de seguridad por si no cargan imágenes en dataT2.ts
  const heroImage = data.about?.images?.desktop || "/assets-t2/esencia-main.webp";
  const galleryImgs = data.events?.images || [
    "/assets-t2/inspiracion-1.webp",
    "/assets-t2/inspiracion-2.webp",
    "/assets-t2/inspiracion-3.webp"
  ];

  // 👇 LOGICA DE BOTÓN: Creamos una mini función auxiliar para no repetir código. Recibe el objeto "about" o "events" de dataT2 y nos devuelve el Link y el SVG final.
  const getButtonProps = (config: any) => {
    const isCalendar = config?.buttonType === 'calendar';
    const href = isCalendar && config?.buttonUrl ? config.buttonUrl : `https://wa.me/${data.contact.whatsapp}`;
    const icon = isCalendar ? (
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ) : (
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    );
    return { href, icon };
  };

  // 👇 LOGICA DE BOTÓN: Ejecutamos el Helper con los datos del bloque "About" y el bloque "Events"
  const aboutBtn = getButtonProps(data.about);
  const eventsBtn = getButtonProps(data.events);

  return (
    <section id="inspiracion" className="w-full py-[80px] lg:py-[140px] overflow-hidden" style={{ backgroundColor: paleta.fondoCajas }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-[100px] lg:gap-[180px]">
        
        {/* BLOQUE 1 - ABOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[629px] aspect-[4/3]">
              <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[20px] blur-[25px] opacity-25 translate-y-6 scale-95 pointer-events-none" />
              <img src={heroImage} alt={data.about.title} className="relative z-10 w-full h-full object-cover rounded-[16px] lg:rounded-[24px] shadow-sm" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <ScrollReveal>
              <div className="flex flex-col gap-6 lg:gap-8 max-w-[556px]">
                <span className="text-[13px] lg:text-[18px] font-bold font-['Manrope'] uppercase tracking-[3px]" style={{ color: paleta.colorPrimario }}>{data.about.subtitle}</span>
                <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold font-['Manrope'] leading-tight" style={{ color: paleta.textoPrimario }}>{data.about.title}</h2>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] font-medium font-['Manrope'] leading-relaxed" style={{ color: `${paleta.textoPrimario}CC` }}>{data.about.description}</p>
                
                <a 
                  href={aboutBtn.href} 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center lg:justify-start gap-2.5 mt-2 hover:opacity-80 transition-opacity"
                  style={{ color: paleta.colorPrimario }}
                >
                  {/* 👇 LOGICA DE BOTÓN: Renderiza SVG dinámico resuelto por el Helper para el bloque About */}
                  {aboutBtn.icon}
                  <span className="text-[14px] lg:text-[15px] font-medium font-['Inter'] uppercase tracking-wider">{data.about.buttonText || 'Consultar'}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* BLOQUE 2 - EVENTS */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left pt-0 lg:pt-10">
            <ScrollReveal>
              <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 max-w-[556px]">
                <span className="text-[12px] md:text-[13px] lg:text-[18px] font-bold font-['Manrope'] uppercase tracking-[3px]" style={{ color: paleta.colorPrimario }}>Colección Exclusiva</span>
                <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-semibold font-['Manrope'] leading-tight" style={{ color: paleta.textoPrimario }}>{data.events.title}</h2>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] font-medium font-['Manrope'] leading-relaxed" style={{ color: `${paleta.textoPrimario}CC` }}>{data.events.description}</p>
                
                <a 
                  href={eventsBtn.href}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center lg:justify-start gap-2.5 mt-2 hover:opacity-80 transition-opacity"
                  style={{ color: paleta.colorPrimario }}
                >
                  {/* 👇 LOGICA DE BOTÓN: Renderiza SVG dinámico resuelto por el Helper para el bloque Events */}
                  {eventsBtn.icon}
                  <span className="text-[14px] lg:text-[15px] font-medium font-['Inter'] uppercase tracking-wider">{data.events.buttonText || 'Consultar'}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-[55%] flex items-stretch gap-4 lg:gap-6 justify-center lg:justify-end">
            <div className="flex flex-col gap-4 lg:gap-6 w-[45%] max-w-[280px]">
              <div className="relative w-full aspect-[4/3] group">
                <img src={galleryImgs[0]} alt="Inspiración 1" className="absolute inset-0 z-10 w-full h-full object-cover rounded-[16px] lg:rounded-[24px] shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="relative w-full aspect-[3/4] group">
                <img src={galleryImgs[1]} alt="Inspiración 2" className="relative z-10 w-full h-full object-cover rounded-[16px] lg:rounded-[24px] shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
            </div>
            <div className="w-[55%] max-w-[340px] relative group">
              <img src={galleryImgs[2]} alt="Inspiración 3" className="absolute inset-0 z-10 w-full h-full object-cover rounded-[16px] lg:rounded-[24px] shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}