import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function CtaT3({ data }: Props) {
  return (
    <section className="w-full bg-white lg:bg-[#F8FAFC] py-[48px] md:py-[64px] lg:py-[100px] flex justify-center">
      <div className="w-full max-w-[1250px] mx-auto px-4 md:px-8">
        
        <ScrollReveal>
          {/* 
            En Desktop: Es un contenedor transparente sin bordes.
            En Mobile/Tablet: Se convierte en una tarjeta gris claro con bordes.
          */}
          <div className="w-full max-w-[851px] mx-auto bg-[#F8FAFC] lg:bg-transparent border-[1.75px] border-[#E2E8F0] lg:border-none rounded-[16px] lg:rounded-none px-6 py-10 md:p-10 lg:p-0 flex flex-col items-center justify-center gap-5 md:gap-6 shadow-sm lg:shadow-none">
            
            <h2 className="text-[#0F172A] text-[26px] md:text-[36px] lg:text-[48px] font-bold font-['Lexend_Deca'] text-center leading-tight max-w-[621px]">
              Llevá la gestión de tu empresa al siguiente nivel
            </h2>
            
            <p className="text-[#475569] text-[16px] font-normal font-['Inter'] text-center max-w-[520px] lg:max-w-[611px] leading-relaxed">
              Dejá los números y los contratos en manos de expertos. Contactanos hoy para un diagnóstico inicial de tu situación fiscal.
            </p>
            
            <div className="mt-2 w-full sm:w-auto">
              <a 
                href={`https://wa.me/${data.contact.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-[#2563EB] text-white rounded-[6px] md:rounded-[8px] flex justify-center items-center gap-2.5 hover:bg-[#1d4ed8] shadow-[0px_10px_30px_-8px_rgba(37,99,235,0.60)] hover:shadow-[0px_15px_40px_-8px_rgba(37,99,235,0.75)] transition-all duration-300 active:scale-95"
              >
                {/* Ícono de WhatsApp */}
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-white text-[15px] md:text-[16px] font-medium font-['Inter']">
                  Agendar una reunión
                </span>
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}