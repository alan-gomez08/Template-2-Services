import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function BeneficiosT4({ data }: Props) {
  const benefits = [
    {
      title: 'Protección de la Salud',
      description: 'Elimine riesgos respiratorios, alergias y problemas de salud causados por la exposición al moho.',
      iconPath: '/assets-t4/beneficio-salud.svg'
    },
    {
      title: 'Soluciones Seguras',
      description: 'Utilizamos productos eco-amigables y métodos seguros aprobados por la EPA para su familia y mascotas.',
      iconPath: '/assets-t4/beneficio-seguridad.svg'
    },
    {
      title: 'Servicio Rápido',
      description: 'Completamos la mayoría de los trabajos en 1-3 días con mínima interrupción a su rutina diaria.',
      iconPath: '/assets-t4/beneficio-rapidez.svg'
    },
    {
      title: 'Garantía Extendida',
      description: 'Garantía de satisfacción con seguimiento gratuito para asegurar que el moho no regrese.',
      iconPath: '/assets-t4/beneficio-garantia.svg'
    },
    {
      title: 'Eco-Amigable',
      description: 'Productos biodegradables y procesos sostenibles que cuidan el medio ambiente.',
      iconPath: '/assets-t4/beneficio-eco.svg'
    },
    {
      title: 'Equipo Experto',
      description: 'Técnicos certificados por IICRC con capacitación continua en las últimas técnicas.',
      iconPath: '/assets-t4/beneficio-equipo.svg'
    }
  ];

  const commitments = [
    {
      title: 'Certificaciones Profesionales',
      description: 'Certificados por IICRC y cumplimos con todas las normas de la industria.',
      iconPath: '/assets-t4/compromiso-certificacion.svg'
    },
    {
      title: '100% Asegurados',
      description: 'Cobertura completa de responsabilidad civil para su tranquilidad.',
      iconPath: '/assets-t4/compromiso-seguro.svg'
    },
    {
      title: 'Satisfacción Garantizada',
      description: 'No quedará satisfecho hasta que usted lo esté.',
      iconPath: '/assets-t4/compromiso-satisfaccion.svg'
    }
  ];

  return (
    <section id="beneficios" className="w-full bg-gradient-to-br from-slate-50 to-emerald-50 py-16 lg:py-20 scroll-mt-[64px]">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Cabecera de Sección */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <h2 className="text-slate-800 text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Arimo'] leading-tight mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-slate-500 lg:text-gray-600 text-[16px] lg:text-[20px] font-normal font-['Arimo'] lg:font-['Inter'] leading-relaxed max-w-[768px]">
              Nos comprometemos a proporcionar el mejor servicio de eliminación de moho con resultados garantizados.
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de Tarjetas (6 Beneficios) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index}>
              <article className="h-full p-6 lg:p-8 bg-white rounded-[16px] lg:rounded-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-start group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#10B981] to-[#0D9488] rounded-full flex justify-center items-center mb-4 lg:mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                  <img 
                    src={benefit.iconPath} 
                    alt={`Ícono de ${benefit.title}`} 
                    className="w-6 h-6 lg:w-7 lg:h-7 object-contain brightness-0 invert" 
                  />
                </div>
                <h3 className="text-gray-900 text-[18px] lg:text-[20px] font-bold font-['Arimo'] lg:font-['Inter'] leading-tight mb-2 lg:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 lg:text-gray-600 text-[14px] lg:text-[16px] font-normal font-['Arimo'] lg:font-['Inter'] leading-[24px]">
                  {benefit.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner Inferior: Compromiso con la Excelencia */}
        <div className="w-full mt-12 lg:mt-16">
          <ScrollReveal>
            <div className="w-full p-8 lg:p-12 bg-white rounded-[16px] lg:rounded-[24px] shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-start items-start">
              <h3 className="text-gray-900 text-[26px] md:text-[30px] lg:text-[32px] font-bold font-['Arimo'] lg:font-['Inter'] leading-snug mb-8 lg:mb-10">
                Compromiso con la Excelencia
              </h3>
              <div className="flex flex-col gap-6 lg:gap-8 w-full">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-5">
                    <div className="w-10 h-10 lg:w-10 lg:h-10 bg-emerald-100 rounded-full flex justify-center items-center shrink-0">
                      <img 
                        src={item.iconPath} 
                        alt={item.title} 
                        className="w-5 h-5 object-contain" 
                      />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h4 className="text-gray-900 text-[15px] lg:text-[16px] font-bold font-['Arimo'] lg:font-['Inter'] leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 lg:text-gray-600 text-[13px] lg:text-[14px] font-normal font-['Arimo'] lg:font-['Inter'] leading-relaxed max-w-[600px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}