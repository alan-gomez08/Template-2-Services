import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
}

export default function ServiciosT4({ data }: Props) {
  // Filtramos solo los ítems que correspondan a la categoría de servicios
  const services = data.menu.items.filter(item => item.category === 'servicios');

  return (
    <section id="servicios" className="w-full bg-white py-16 lg:py-20 scroll-mt-[64px]">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Cabecera de Sección */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <h2 className="text-slate-800 text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Arimo'] leading-tight mb-4">
              {data.menu.title}
            </h2>
            <p className="text-slate-500 lg:text-gray-600 text-[16px] lg:text-[20px] font-normal font-['Arimo'] lg:font-['Inter'] leading-relaxed max-w-[768px]">
              {data.menu.categories[0]}
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de Tarjetas */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index}>
              <article className="h-full p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[16px] border border-emerald-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-start group">
                <div className="w-14 h-14 bg-[#059669] rounded-[10px] flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <img 
                    src={service.imagePath} 
                    alt={`Ícono de ${service.title}`} 
                    className="w-7 h-7 object-contain brightness-0 invert" 
                  />
                </div>
                <h3 className="text-gray-900 text-[20px] font-bold font-['Inter'] leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[15px] lg:text-[16px] font-normal font-['Inter'] leading-[24px]">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner CTA Inferior (Emergencia) */}
        <div className="w-full mt-12 lg:mt-16">
          <ScrollReveal>
            <div className="w-full p-8 lg:p-12 bg-[#059669] rounded-[16px] lg:rounded-[24px] shadow-xl flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6 lg:gap-8">
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-white text-[28px] lg:text-[32px] font-bold font-['Inter'] mb-3">
                  ¿Emergencia de Moho?
                </h3>
                <p className="text-emerald-50 text-[16px] lg:text-[18px] font-normal font-['Inter'] max-w-[544px] leading-relaxed">
                  Respuesta rápida 24/7. Nuestro equipo está listo para atender su emergencia en cualquier momento del día o la noche.
                </p>
              </div>
              <a 
                href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Tengo una emergencia y necesito asistencia rápida.`}
                target="_blank" rel="noopener noreferrer"
                className="w-full lg:w-auto px-8 py-4 bg-white text-[#059669] rounded-[10px] flex justify-center items-center gap-2.5 shadow-md hover:bg-emerald-50 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <svg className="w-6 h-6 text-[#059669]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="font-bold font-['Inter'] text-[16px] lg:text-[18px]">Contactar ahora</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}