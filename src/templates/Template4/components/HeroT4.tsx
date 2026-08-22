import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function HeroT4({ data, paleta }: Props) {
  return (
    <section 
      id="inicio" 
      className="relative w-full pt-[100px] lg:pt-[140px] pb-16 lg:pb-24 overflow-hidden"
      style={{ background: `linear-gradient(to bottom right, ${paleta.fondoGradienteInicio}, ${paleta.fondoGradienteFin})` }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-10">
        
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 lg:py-4">
          
          <div className="px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6" style={{ backgroundColor: `${paleta.colorPrimario}1A` }}>
            <svg className="w-4 h-4 hidden lg:block" style={{ color: paleta.colorPrimario }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="text-[12px] lg:text-[14px] font-bold lg:font-normal font-['Arimo'] lg:font-['Inter'] uppercase lg:normal-case tracking-tight lg:tracking-normal" style={{ color: paleta.colorPrimario }}>
              <span className="lg:hidden">Servicio 24/7</span>
              <span className="hidden lg:inline">Certificados y Asegurados</span>
            </span>
          </div>

          <h1 className="text-[36px] md:text-[60px] font-bold font-['Arimo'] leading-[1.1] mb-4 lg:mb-6 max-w-[672px] lg:max-w-[584px]" style={{ color: paleta.textoPrimario }}>
            {data.hero.title}
          </h1>
          
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-['Arimo'] lg:font-['Inter'] leading-[1.6] mb-8 max-w-[512px] lg:max-w-[584px]" style={{ color: paleta.textoSecundario }}>
            {data.hero.subtitle}
          </p>

          <div className="hidden sm:flex lg:flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3 mb-10 w-full lg:max-w-[584px]">
            {['Inspección gratuita y evaluación completa', 'Técnicos certificados con 15+ años de exp.', 'Garantía de satisfacción del 100%'].map((text, i) => (
              <div key={i} className="flex items-center gap-2.5 lg:gap-3">
                <div className="w-5 h-5 rounded-full flex justify-center items-center shrink-0" style={{ backgroundColor: paleta.colorPrimario }}>
                  <svg className="w-3 h-3 lg:w-5 lg:h-5" style={{ color: paleta.textoClaro }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-[14px] lg:text-[16px] font-bold lg:font-normal font-['Arimo'] lg:font-['Inter'] leading-snug" style={{ color: paleta.textoPrimario }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          <a 
            href={`https://wa.me/${data.contact.whatsapp}?text=Hola! Quisiera solicitar una cotización gratuita.`}
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-80 px-6 py-4 rounded-[12px] lg:rounded-[10px] flex justify-center items-center gap-2 hover:scale-[1.02] transition-all duration-300 active:scale-95 mb-10 lg:mb-12 hover:opacity-90"
            style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoClaro, boxShadow: `0px 12px 28px -10px ${paleta.colorPrimario}99` }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="text-[16px] lg:text-[18px] font-bold font-['Arimo'] lg:font-['Inter']">
              {data.hero.buttonText}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <div>
              <h3 className="text-[30px] font-bold font-['Inter'] leading-none mb-1" style={{ color: paleta.colorPrimario }}>1000+</h3>
              <p className="text-[16px] font-normal font-['Inter']" style={{ color: paleta.textoSecundario }}>Clientes Satisfechos</p>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: `${paleta.textoSecundario}33` }}></div>
            <div>
              <h3 className="text-[30px] font-bold font-['Inter'] leading-none mb-1" style={{ color: paleta.colorPrimario }}>24/7</h3>
              <p className="text-[16px] font-normal font-['Inter']" style={{ color: paleta.textoSecundario }}>Servicio de Emergencia</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col shrink-0 z-10">
          <div className="w-full max-w-[703px] lg:max-w-full h-[384px] md:h-[441px] lg:h-full lg:flex-1 rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-2xl">
            <img 
              src={data.hero.images.desktop} 
              alt={data.hero.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}