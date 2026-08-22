import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function BeneficiosT4({ data, paleta }: Props) {
  const benefits = data.menu.items.filter(item => item.category === 'beneficios');
  const commitments = data.menu.items.filter(item => item.category === 'compromisos');

  return (
    <section 
      id="beneficios" 
      className="w-full py-16 lg:py-20 scroll-mt-[64px]"
      style={{ background: `linear-gradient(to bottom right, ${paleta.fondoGradienteInicio}, ${paleta.fondoGradienteFin})` }}
    >
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold font-['Arimo'] leading-tight mb-4" style={{ color: paleta.textoPrimario }}>
              {data.about.title}
            </h2>
            <p className="text-[16px] lg:text-[20px] font-normal font-['Arimo'] lg:font-['Inter'] leading-relaxed max-w-[768px]" style={{ color: paleta.textoSecundario }}>
              {data.about.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index}>
              <article 
                className="h-full p-6 lg:p-8 rounded-[16px] lg:rounded-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] border hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-start group"
                style={{ backgroundColor: paleta.fondoPrincipal, borderColor: `${paleta.textoSecundario}33` }}
              >
                <div 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex justify-center items-center mb-4 lg:mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm"
                  style={{ background: `linear-gradient(to bottom right, ${paleta.colorSecundario}, ${paleta.colorPrimario})` }}
                >
                  {benefit.imagePath ? (
                    <img src={benefit.imagePath} alt={`Ícono de ${benefit.title}`} className="w-6 h-6 lg:w-7 lg:h-7 object-contain brightness-0 invert" />
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  )}
                </div>
                <h3 className="text-[18px] lg:text-[20px] font-bold font-['Arimo'] lg:font-['Inter'] leading-tight mb-2 lg:mb-3" style={{ color: paleta.textoPrimario }}>
                  {benefit.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-normal font-['Arimo'] lg:font-['Inter'] leading-[24px]" style={{ color: paleta.textoSecundario }}>
                  {benefit.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="w-full mt-12 lg:mt-16">
          <ScrollReveal>
            <div 
              className="w-full p-8 lg:p-12 rounded-[16px] lg:rounded-[24px] shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border flex flex-col justify-start items-start"
              style={{ backgroundColor: paleta.fondoPrincipal, borderColor: `${paleta.textoSecundario}33` }}
            >
              <h3 className="text-[26px] md:text-[30px] lg:text-[32px] font-bold font-['Arimo'] lg:font-['Inter'] leading-snug mb-8 lg:mb-10" style={{ color: paleta.textoPrimario }}>
                Compromiso con la Excelencia
              </h3>
              <div className="flex flex-col gap-6 lg:gap-8 w-full">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-5">
                    <div 
                      className="w-10 h-10 lg:w-10 lg:h-10 rounded-full flex justify-center items-center shrink-0"
                      style={{ backgroundColor: `${paleta.colorPrimario}1A` }}
                    >
                      {item.imagePath ? (
                        <img src={item.imagePath} alt={item.title} className="w-5 h-5 object-contain" />
                      ) : (
                        <svg className="w-5 h-5" style={{ color: paleta.colorPrimario }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h4 className="text-[15px] lg:text-[16px] font-bold font-['Arimo'] lg:font-['Inter'] leading-tight mb-1" style={{ color: paleta.textoPrimario }}>
                        {item.title}
                      </h4>
                      <p className="text-[13px] lg:text-[14px] font-normal font-['Arimo'] lg:font-['Inter'] leading-relaxed max-w-[600px]" style={{ color: paleta.textoSecundario }}>
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