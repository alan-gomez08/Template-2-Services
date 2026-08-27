import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NosotrosT2({ data, paleta }: Props) {
  if (!data?.stats?.items || data.stats.items.length === 0) return null;

  // Íconos SVG por defecto para las 3 características
  const defaultIcons = [
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
  ];

  return (
    <section id="nosotros" className="w-full py-[56px] md:py-[80px] lg:py-[120px]" style={{ backgroundColor: paleta.fondoPrincipal }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        <ScrollReveal>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-center md:items-start justify-between gap-10 md:gap-x-12 md:gap-y-16 lg:gap-12">
            
            <h2 className="text-[28px] md:text-[34px] lg:text-[42px] font-bold font-['Manrope'] leading-[1.25] md:leading-[1.15] lg:leading-[1.1] text-center md:text-left w-full max-w-[360px] md:max-w-none lg:max-w-[396px] shrink-0" style={{ color: paleta.textoPrimario }}>
              {data.stats.title}
            </h2>

            {data.stats.items.map((feature: any, index: number) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-3 w-full max-w-[360px] md:max-w-none lg:max-w-[284px]">
                {/* Ahora el círculo muestra un SVG en lugar del número */}
                <div 
                  className="md:hidden w-14 h-14 rounded-full border-[1.2px] flex justify-center items-center shrink-0"
                  style={{ backgroundColor: `${paleta.colorAcento}0D`, borderColor: `${paleta.colorAcento}40`, color: paleta.colorAcento }}
                >
                  {defaultIcons[index % 3]}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-[19px] md:text-[21px] lg:text-[24px] font-semibold font-['Manrope'] leading-snug" style={{ color: `${paleta.textoPrimario}E6` }}>
                    {feature.value}
                  </h3>
                  <p className="text-[15px] lg:text-[16px] font-normal font-['Inter'] md:font-['Manrope'] leading-relaxed md:leading-[26px] lg:leading-[29.6px]" style={{ color: `${paleta.textoPrimario}B3` }}>
                    {feature.label}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}