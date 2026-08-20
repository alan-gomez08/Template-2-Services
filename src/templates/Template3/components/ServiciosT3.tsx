import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function ServiciosT3({ data }: Props) {
  // Data estructurada apuntando a tus archivos .svg
  const services = [
    {
      title: 'Asesoría Contable',
      description: 'Liquidación de impuestos, balances y auditorías financieras para mantener tus números al día.',
      iconPath: '/assets-t3/icon-contable.svg'
    },
    {
      title: 'Liquidación de Sueldos',
      description: 'Gestión de nóminas, cargas sociales y asesoramiento laboral continuo para tu equipo.',
      iconPath: '/assets-t3/icon-sueldos.svg'
    },
    {
      title: 'Asesoramiento Legal',
      description: 'Constitución de sociedades, redacción de contratos y defensa corporativa.',
      iconPath: '/assets-t3/icon-legal.svg'
    },
    {
      title: 'Monotributo',
      description: 'Altas, recategorizaciones y control mensual de facturación para trabajadores independientes.',
      iconPath: '/assets-t3/icon-monotributo.svg'
    },
    {
      title: 'Planificación Fiscal',
      description: 'Análisis de rentabilidad y estrategias legales para optimizar la carga impositiva de tu empresa.',
      iconPath: '/assets-t3/icon-fiscal.svg'
    },
    {
      title: 'Gestión de Trámites',
      description: 'Habilitaciones, certificaciones y representación integral ante organismos públicos y AFIP.',
      iconPath: '/assets-t3/icon-tramites.svg'
    }
  ];

  return (
    <section id="servicios" className="w-full bg-[#F8FAFC] py-[80px] lg:py-[120px] scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Cabecera de Sección */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-[768px] mb-12 md:mb-16">
            <h2 className="text-[#0F172A] text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Lexend_Deca'] leading-tight mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-[#475569] text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Lexend_Deca'] md:font-['Inter'] leading-relaxed">
              Soluciones integrales para la tranquilidad financiera y legal de tu negocio.
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de Servicios */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index}>
              <article className="h-full p-8 bg-white rounded-[14px] border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start group">
                
                {/* Ícono contenedor (ahora usa la etiqueta img apuntando al SVG) */}
                <div className="w-14 h-14 bg-[#2563EB] rounded-[10px] flex justify-center items-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <img 
                    src={service.iconPath} 
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