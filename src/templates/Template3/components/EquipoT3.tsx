import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function EquipoT3({ data }: Props) {
  // Separamos el texto de la descripción en párrafos detectando los saltos de línea
  const paragraphs = data.about.description.split('\n\n');

  return (
    <section id="equipo" className="w-full bg-white py-[80px] lg:py-[120px] scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Título Desktop (Centrado) */}
        <ScrollReveal>
          <h2 className="hidden lg:block text-center text-[#0F172A] text-[48px] font-bold font-['Lexend_Deca'] mb-16">
            {data.about.title}
          </h2>
        </ScrollReveal>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 xl:gap-24">
          
          {/* Columna Izquierda: Textos y Lista */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <ScrollReveal>
              
              {/* Título Mobile/Tablet (Alineado a la izquierda) */}
              <h2 className="lg:hidden text-left text-[#0F172A] text-[32px] md:text-[40px] font-bold font-['Lexend_Deca'] mb-6">
                {data.about.title}
              </h2>

              <div className="flex flex-col gap-6 text-[#475569] text-[16px] md:text-[18px] font-normal font-['Inter'] lg:font-['Lexend_Deca'] leading-[1.7] md:leading-[1.8]">
                {paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              {/* Lista con Íconos Dinámica */}
              <ul className="flex flex-col gap-4 mt-8 md:mt-10">
                {data.stats.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#475569] text-[16px] md:text-[18px] font-light font-['Lexend_Deca']">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

            </ScrollReveal>
          </div>

          {/* Columna Derecha: Imagen del equipo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
            <ScrollReveal>
              <div className="w-full max-w-[600px] lg:max-w-[608px] rounded-[24px] overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={data.about.images.desktop} 
                  alt={data.about.title} 
                  className="w-full h-auto lg:h-[640px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}