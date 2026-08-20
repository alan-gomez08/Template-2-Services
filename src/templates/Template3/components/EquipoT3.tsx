import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function EquipoT3({ data }: Props) {
  const listItems = [
    'Profesionales matriculados y en constante capacitación',
    'Atención personalizada y respuestas ágiles',
    'Confidencialidad y seguridad de datos absoluta',
    'Visión integral estratégica del negocio'
  ];

  return (
    <section id="equipo" className="w-full bg-white py-[80px] lg:py-[120px] scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Título Desktop (Centrado) */}
        <ScrollReveal>
          <h2 className="hidden lg:block text-center text-[#0F172A] text-[48px] font-bold font-['Lexend_Deca'] mb-16">
            El Estudio
          </h2>
        </ScrollReveal>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 xl:gap-24">
          
          {/* Columna Izquierda: Textos y Lista */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <ScrollReveal>
              
              {/* Título Mobile/Tablet (Alineado a la izquierda) */}
              <h2 className="lg:hidden text-left text-[#0F172A] text-[32px] md:text-[40px] font-bold font-['Lexend_Deca'] mb-6">
                El Estudio
              </h2>

              <div className="flex flex-col gap-6 text-[#475569] text-[16px] md:text-[18px] font-normal font-['Inter'] lg:font-['Lexend_Deca'] leading-[1.7] md:leading-[1.8]">
                <p>
                  En nuestro estudio, entendemos que cada decisión financiera y legal impacta directamente en el crecimiento y la estabilidad de tu negocio. Por eso, contamos con más de 15 años de trayectoria en el mercado brindando asesoramiento integral a Pymes, emprendedores y grandes corporaciones. Nuestro enfoque trasciende la simple liquidación de impuestos o la redacción de contratos; nos posicionamos como verdaderos socios estratégicos de nuestros clientes.
                </p>
                <p>
                  Trabajamos bajo una estricta filosofía basada en la prevención de conflictos, la atención personalizada y la actualización constante frente a los continuos cambios normativos.
                </p>
              </div>

              {/* Lista con Íconos */}
              <ul className="flex flex-col gap-4 mt-8 md:mt-10">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    {/* Ícono de Tilde (Check Circle) */}
                    <svg className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#475569] text-[16px] md:text-[18px] font-light font-['Lexend_Deca']">
                      {item}
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
                  src="/assets-t3/estudio-equipo.webp" 
                  alt="Nuestro equipo de profesionales trabajando" 
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