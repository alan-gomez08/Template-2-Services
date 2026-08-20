import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function ServiciosT3({ data }: Props) {
  return (
    <section id="servicios" className="w-full bg-[#F8FAFC] py-[80px] lg:py-[120px] scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Cabecera de Sección */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-[768px] mb-12 md:mb-16">
            <h2 className="text-[#0F172A] text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Lexend_Deca'] leading-tight mb-4">
              {data.menu.title}
            </h2>
            <p className="text-[#475569] text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Lexend_Deca'] md:font-['Inter'] leading-relaxed">
              {/* Reciclamos la primera categoría para guardar el subtítulo de la sección */}
              {data.menu.categories[0]}
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de Servicios Dinámica */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.menu.items.map((service) => (
            <ScrollReveal key={service.id}>
              <article className="h-full p-8 bg-white rounded-[14px] border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start group">
                
                {/* Ícono contenedor */}
                <div className="w-14 h-14 bg-[#2563EB] rounded-[10px] flex justify-center items-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <img 
                    src={service.imagePath} 
                    alt={`Ícono de ${service.title}`} 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                
                {/* Textos */}
                <h3 className="text-[#0F172A] text-[20px] font-bold font-['Lexend_Deca'] leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-[15px] lg:text-[16px] font-normal font-['Inter'] lg:font-['Lexend_Deca'] leading-[26px]">
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