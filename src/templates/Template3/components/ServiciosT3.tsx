import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function ServiciosT3({ data, paleta }: Props) {
  return (
    <section id="servicios" className="w-full py-[80px] lg:py-[120px] scroll-mt-20" style={{ backgroundColor: paleta.fondoClaro }}>
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-[768px] mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Lexend_Deca'] leading-tight mb-4" style={{ color: paleta.textoOscuro }}>
              {data.menu.title}
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Lexend_Deca'] md:font-['Inter'] leading-relaxed" style={{ color: paleta.textoGris }}>
              {data.menu.categories[0]}
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.menu.items.map((service) => (
            <ScrollReveal key={service.id}>
              <article 
                className="h-full p-8 rounded-[14px] border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start group"
                style={{ backgroundColor: paleta.fondoCajas, borderColor: `${paleta.textoGris}33` }}
              >
                <div 
                  className="w-14 h-14 rounded-[10px] flex justify-center items-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md"
                  style={{ backgroundColor: paleta.colorPrimario }}
                >
                  {service.imagePath ? (
                    <img src={service.imagePath} alt={`Ícono de ${service.title}`} className="w-7 h-7 object-contain mix-blend-screen" />
                  ) : (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  )}
                </div>
                
                <h3 className="text-[20px] font-bold font-['Lexend_Deca'] leading-tight mb-3" style={{ color: paleta.textoOscuro }}>
                  {service.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] font-normal font-['Inter'] lg:font-['Lexend_Deca'] leading-[26px]" style={{ color: paleta.textoGris }}>
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}