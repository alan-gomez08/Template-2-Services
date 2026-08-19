import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
}

export default function NosotrosT1({ data }: Props) {
  return (
    <section id="nosotros" className="w-full bg-black py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-20">
            
            <div className="flex flex-col items-center gap-4 lg:gap-6 text-center max-w-3xl mx-auto">
              <h2 className="text-[#F5F5F5] text-3xl md:text-[40px] lg:text-[50px] font-bold md:font-black font-['Inter'] leading-tight">
                {data.about.title}
              </h2>
              <p className="text-[#A3A3A3] text-[15px] lg:text-[20px] font-normal font-['Inter'] leading-relaxed">
                {data.about.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[87px] items-center">
              <div className="text-[#A3A3A3] lg:text-[#EEEEEE] text-[15px] lg:text-[18px] font-normal font-['Inter'] leading-relaxed text-center lg:text-left">
                {data.about.description}
              </div>

              <div className="relative w-full aspect-[4/3] bg-[#191919] rounded-[16px] overflow-hidden">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={data.about.images.desktop} />
                  <source media="(min-width: 768px)" srcSet={data.about.images.tablet} />
                  <img 
                    src={data.about.images.mobile} 
                    alt="Sobre Nosotros" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}