import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function LocationT2({ data, paleta }: Props) {
  const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52481.5654067098!2d-58.66579295!3d-34.7042079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc63640bfa095%3A0xc665181da2da365!2sRafael%20Castillo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";
  const mapUrl = data.location.mapEmbedUrl || defaultMapUrl;

  // 👇 LOGICA DE BOTÓN: Verifica si en dataT2 se elegió 'calendar' exclusivamente para la sección "Location"
  const isCalendar = data.location.buttonType === 'calendar';
  
  // 👇 LOGICA DE BOTÓN: Resuelve la redirección basada en la variable "isCalendar" de esta sección específica
  const buttonHref = isCalendar && data.location.buttonUrl ? data.location.buttonUrl : `https://wa.me/${data.contact.whatsapp}`;

  // 👇 LOGICA DE BOTÓN: Inyecta en variable iconSvg el icono del calendario o del WhatsApp
  const iconSvg = isCalendar ? (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ) : (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  );

  return (
    <section id="ubicacion" className="w-full py-[60px] md:py-[80px] lg:py-[120px]" style={{ backgroundColor: paleta.fondoPrincipal }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <ScrollReveal>
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-[560px]">
              <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold font-['Manrope'] leading-[1.25] md:leading-[1.15] lg:leading-[1.2]" style={{ color: paleta.textoPrimario }}>
                {data.location.title}
              </h2>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Manrope'] leading-[1.6]" style={{ color: `${paleta.textoPrimario}CC` }}>
                {data.location.description}
              </p>
              
              <a 
                href={buttonHref} target="_blank" rel="noopener noreferrer"
                className="mt-4 md:mt-6 w-full md:w-auto px-8 py-4 shadow-[0px_6px_20px_rgba(0,0,0,0.15)] rounded-full flex justify-center items-center gap-2.5 hover:opacity-90 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                style={{ backgroundColor: paleta.colorAcento, color: paleta.textoClaro }}
              >
                {/* 👇 LOGICA DE BOTÓN: Se renderiza el iconSvg que armamos arriba */}
                {iconSvg}
                <span className="text-[15px] md:text-[17px] font-semibold font-['Manrope']">
                  {data.location.buttonText || 'Consultar Ubicación'}
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
          <ScrollReveal>
            <div className="w-full sm:w-[500px] lg:w-[480px] xl:w-[600px] h-[350px] md:h-[450px] lg:h-[550px] shrink-0 rounded-[16px] overflow-hidden shadow-xl" style={{ backgroundColor: paleta.fondoSecundario }}>
              <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full grayscale-[10%] contrast-[1.1] opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-500" title="Ubicación" />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}