import type { ClientData } from '../../../types';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NosotrosT1({ data, paleta }: Props) {
  return (
    <section id="nosotros" className="w-full py-[60px] lg:py-[100px] flex justify-center" style={{ backgroundColor: paleta.fondoPrincipal }}>
      <div className="w-full max-w-[1170px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-[80px]">
            
            <div className="flex flex-col items-center gap-4 lg:gap-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-[40px] lg:text-[50px] font-bold leading-tight" style={{ color: paleta.textoPrimario }}>
                {data.about.title}
              </h2>
              <p className="text-[15px] lg:text-[20px] font-normal leading-relaxed" style={{ color: paleta.textoSecundario }}>
                {data.about.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[87px] items-center">
              <div className="text-[15px] lg:text-[18px] font-normal leading-relaxed text-center lg:text-left" style={{ color: paleta.textoSecundario }}>
                {data.about.description}
              </div>

              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden" style={{ backgroundColor: paleta.fondoCajas }}>
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