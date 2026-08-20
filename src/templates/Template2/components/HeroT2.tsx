import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function HeroT2({ data }: Props) {
  return (
    <section id="inicio" className="relative w-full bg-[#FAF9F6]">
      
      {/* =========================================
          VISTA DESKTOP & TABLET
          ========================================= */}
      {/* Cambiamos justify-center por justify-start para controlar la altura exacta desde arriba */}
      <div className="hidden md:flex relative w-full h-[100svh] min-h-[750px] flex-col justify-start pt-[18vh] lg:pt-[22vh] items-center overflow-hidden bg-black">
        
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet={data.hero.images.desktop} />
          <img src={data.hero.images.tablet} alt="Hero Background" className="w-full h-full object-cover object-center" />
        </picture>
        
        {/* Gradiente más suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent opacity-90" />

        {/* Textos */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <h1 className="text-white text-[48px] md:text-[60px] lg:text-[80px] font-bold font-['Manrope'] leading-[1.1] max-w-[800px] mb-6">
            Transformá Tu Casa En Tu Lugar Favorito.
          </h1>
          <p className="text-white/85 text-[19px] lg:text-[24px] font-medium font-['Manrope'] max-w-[600px] leading-relaxed mb-10">
            Muebles de autor con envíos a todo el país. Visitá nuestro showroom o comprá online.
          </p>
          
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 py-2 pl-6 pr-2 bg-white/20 border border-white/40 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <span className="text-white text-[16px] lg:text-[18px] font-medium font-['Manrope']">Agendar visita al Showroom</span>
            <div className="w-10 h-10 lg:w-[42px] lg:h-[42px] bg-[#E58411] rounded-full flex justify-center items-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
          </a>
        </div>
      </div>

      {/* =========================================
          VISTA MOBILE
          ========================================= */}
      {/* Fondo reforzado para evitar bordes grises */}
      <div className="flex md:hidden flex-col w-full bg-[#FAF9F6]">
        <div className="relative w-full h-[60vh] min-h-[450px] bg-black">
          <img src={data.hero.images.mobile} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FAF9F6]" />
        </div>
        
        <div className="relative z-10 -mt-20 px-4 pb-16 w-full bg-[#FAF9F6]">
          {/* Tarjeta flotante más limpia */}
          <div className="bg-[#FAF9F6] rounded-[16px] p-6 shadow-[0px_15px_40px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col items-start w-full relative z-20">
            <h1 className="text-[#1E1D1B] text-[36px] font-bold font-['Manrope'] leading-[1.1] mb-4">
              Transformá tu casa en tu lugar favorito.
            </h1>
            <p className="text-[#1E1D1B]/70 text-[16px] font-normal font-['Inter'] leading-[26px] mb-6">
              Muebles de autor con envíos a todo el país. Visitá nuestro showroom o comprá online.
            </p>
            <a 
              href={`https://wa.me/${data.contact.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full py-4 bg-[#3A4B3A] rounded-full flex justify-center items-center gap-2.5 active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-white text-[15px] font-semibold font-['Inter']">Agendar visita al Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}