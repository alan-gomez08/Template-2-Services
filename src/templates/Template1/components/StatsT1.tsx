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
                className="inline-flex justify-center items-center px-8 lg:px-[54px] py-4 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
              >
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