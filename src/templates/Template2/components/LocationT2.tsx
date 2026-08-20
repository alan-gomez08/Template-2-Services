import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function LocationT2({ data }: Props) {
  const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52481.5654067098!2d-58.66579295!3d-34.7042079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc63640bfa095%3A0xc665181da2da365!2sRafael%20Castillo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";
  const mapUrl = data.location.mapEmbedUrl || defaultMapUrl;

  return (
    <section id="ubicacion" className="w-full bg-[#FAF9F6] py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* TEXTOS Y BOTÓN */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <ScrollReveal>
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-[560px]">
              <h2 className="text-[#1E1D1B] text-[30px] md:text-[40px] lg:text-[50px] font-bold font-['Manrope'] leading-[1.25] md:leading-[1.15] lg:leading-[1.2]">
                Nuestro Showroom. Vení a probar tu próximo mueble
              </h2>
              <p className="text-[#1E1D1B]/80 text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Manrope'] leading-[1.6]">
                Sabemos que elegir un sillón es una decisión importante. Te invitamos a nuestro showroom para que puedas sentir las texturas de nuestras telas, probar la comodidad de los tapizados y recibir asesoramiento personalizado para tu casa.
              </p>
              
              <a 
                href={`https://wa.me/${data.contact.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 md:mt-6 w-full md:w-auto px-8 py-4 bg-[#3A4B3A] shadow-[0px_6px_20px_rgba(58,75,58,0.25)] rounded-full flex justify-center items-center gap-2.5 hover:bg-[#2d3a2d] hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <span className="text-white text-[15px] md:text-[17px] font-semibold font-['Manrope']">
                  Agendar visita por WhatsApp
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* MAPA BLINDADO: Ancho fijo en pantallas grandes para que Flexbox no lo aplaste */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
          <ScrollReveal>
            <div className="w-full sm:w-[500px] lg:w-[480px] xl:w-[600px] h-[350px] md:h-[450px] lg:h-[550px] shrink-0 rounded-[16px] overflow-hidden shadow-xl bg-gray-200">
              <iframe
                src={mapUrl}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[10%] contrast-[1.1] opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Ubicación de nuestro showroom"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}