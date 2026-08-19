import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function LocationT1({ data }: Props) {
  return (
    <section id="ubicacion" className="w-full bg-black py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-[117px]">
            
            <div className="flex flex-col justify-start items-start gap-6 lg:gap-[70px] w-full lg:max-w-[577px]">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#F5F5F5] text-[26px] md:text-[40px] lg:text-[50px] font-bold md:font-black font-['Inter'] leading-tight whitespace-pre-line text-left">
                  {data.location.title}
                </h2>
                <p className="text-[#A3A3A3] lg:text-white text-[14px] md:text-[16px] lg:text-[20px] font-normal font-['Inter'] leading-relaxed text-left">
                  {data.location.description}
                </p>
              </div>

              <a 
                href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera hacer un pedido para retirar por el local.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto flex justify-center items-center px-6 lg:px-[54px] py-4 lg:py-5 bg-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <span className="text-black text-[15px] lg:text-[18px] font-semibold font-['Inter']">
                  {data.location.buttonText}
                </span>
              </a>
            </div>

            <div className="w-full lg:w-[483px] shrink-0 h-[220px] md:h-[395px] lg:h-[470px] relative bg-[#1A1A1A] rounded-[12px] lg:rounded-[24px] overflow-hidden shadow-xl">
              <iframe 
                src={data.location.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps"
              />
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}