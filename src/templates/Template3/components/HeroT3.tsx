import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function HeroT3({ data }: Props) {
  return (
    <section id="inicio" className="relative w-full h-[100svh] min-h-[700px] flex items-center overflow-hidden bg-[#0F172A]">
      
      {/* =========================================
          IMAGEN Y FILTROS DE FONDO
          ========================================= */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet={data.hero.images.desktop} />
        <source media="(min-width: 768px)" srcSet={data.hero.images.tablet} />
        <img 
          src={data.hero.images.mobile} 
          alt="Estudio Contable Background" 
          className="w-full h-full object-cover object-center grayscale-[50%]"
        />
      </picture>

      {/* Capas de gradientes para lograr el efecto corporativo (Dark Theme) */}
      <div className="absolute inset-0 bg-[#0F172A]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent hidden lg:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 via-transparent to-[#0F172A] lg:hidden" />

      {/* =========================================
          CONTENIDO
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto px-6 lg:px-8 mt-16 md:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        {/* Etiqueta decorativa (Solo Mobile) */}
        <div className="lg:hidden mb-6 px-4 py-1.5 bg-white/5 border border-white/20 rounded-full">
          <span className="text-white/90 text-[11px] font-medium font-['Inter'] uppercase tracking-widest">
            Contable · Jurídico
          </span>
        </div>

        <h1 className="text-[#F5F5F5] text-[32px] md:text-[48px] lg:text-[54px] font-bold font-['Lexend_Deca'] leading-[1.15] max-w-[340px] md:max-w-[640px] lg:max-w-[610px] mb-4 lg:mb-6">
          {data.hero.title}
        </h1>
        
        <p className="text-[#F5F5F5]/80 text-[16px] md:text-[20px] lg:text-[19px] font-normal font-['Inter'] lg:font-['Lexend_Deca'] leading-relaxed max-w-[340px] md:max-w-[640px] lg:max-w-[430px] mb-8 lg:mb-10">
          {data.hero.subtitle}
        </p>
        
        <a 
          href={`https://wa.me/${data.contact.whatsapp}`}
          target="_blank" rel="noopener noreferrer"
          className="w-full md:w-auto px-10 py-4 bg-[#2563EB] shadow-[0px_10px_30px_rgba(37,99,235,0.35)] rounded-[6px] flex justify-center items-center gap-3 hover:bg-[#1d4ed8] hover:shadow-[0px_15px_40px_rgba(37,99,235,0.45)] transition-all duration-300 active:scale-95"
        >
          {/* Ícono Oficial de WhatsApp adaptado al estilo corporativo */}
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span className="text-[#F5F5F5] text-[16px] md:text-[18px] font-bold font-['Inter'] md:font-['Lexend_Deca'] tracking-wide">
            Consultar ahora
          </span>
        </a>

      </div>
    </section>
  );
}