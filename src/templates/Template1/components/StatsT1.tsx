import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function StatsT1({ data }: Props) {
  return (
    <section className="w-full bg-black py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-16 md:gap-[120px]">
            <div className="w-full flex flex-col items-center gap-10 lg:gap-[60px]">
              <h2 className="text-[#F5F5F5] text-[26px] md:text-[40px] lg:text-[44px] font-bold md:font-black font-['Inter'] text-center">
                {data.stats.title}
              </h2>
              <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {data.stats.items.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center justify-start gap-2">
                    <div className="text-[#F5F5F5] text-[40px] lg:text-[56px] font-bold font-['Inter'] leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[#A3A3A3] lg:text-white text-[14px] lg:text-[18px] font-normal font-['Inter'] text-center">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full bg-[#1A1A1A] lg:bg-transparent rounded-[24px] lg:rounded-none p-8 md:p-12 lg:p-0 flex flex-col items-center gap-6 lg:gap-10">
              <div className="flex flex-col items-center gap-4 lg:gap-6 text-center">
                <h3 className="text-[#F5F5F5] text-[24px] md:text-[32px] lg:text-[50px] font-bold font-['Inter'] leading-tight max-w-[1148px]">
                  {data.events.title}
                </h3>
                <p className="text-[#A3A3A3] lg:text-white text-[15px] lg:text-[20px] font-normal font-['Inter'] leading-relaxed max-w-[1170px]">
                  {data.events.description}
                </p>
              </div>
              <a 
                href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera consultar presupuesto para un evento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 px-8 lg:px-[54px] py-4 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="text-black text-[15px] lg:text-[18px] font-semibold font-['Inter']">
                  {data.events.buttonText}
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}