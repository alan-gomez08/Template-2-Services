import ScrollReveal from './ScrollReveal';

export default function StatsT1({ data, paleta }: any) {
  return (
    <section 
      className="w-full py-[80px] lg:py-[120px] flex flex-col items-center gap-20 lg:gap-32" 
      style={{ backgroundColor: paleta.fondoPrincipal }}
    >
      
      {/* === BLOQUE DE ESTADÍSTICAS === */}
      <div className="w-full max-w-[1170px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-center mb-16 md:mb-24 tracking-tight leading-tight" style={{ color: paleta.textoPrimario }}>
            {data?.stats?.title || 'Creemos en la calidad absoluta'}
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {data?.stats?.items?.map((stat: any, index: number) => (
            <ScrollReveal key={index}>
              <div className="flex flex-col gap-3">
                <span className="text-[56px] md:text-[72px] lg:text-[80px] font-black tracking-tighter leading-none" style={{ color: paleta.textoPrimario }}>
                  {stat.value}
                </span>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold opacity-70" style={{ color: paleta.textoSecundario }}>
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* === BLOQUE DE EVENTOS === */}
      <div className="w-full max-w-[900px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-8">
            
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black leading-tight tracking-tight" style={{ color: paleta.textoPrimario }}>
              {data?.events?.title || 'Llevamos Nuestro Sabor A Tus Eventos'}
            </h2>
            
            <p className="text-[18px] md:text-[22px] lg:text-[24px] font-medium leading-relaxed opacity-80" style={{ color: paleta.textoSecundario }}>
              {data?.events?.description}
            </p>
            
            <a 
              href={`https://wa.me/${data?.contact?.whatsapp || ''}?text=Hola! Quisiera consultar por el servicio para Eventos.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 px-10 py-5 rounded-full font-black text-[16px] md:text-[18px] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.2)]"
              style={{ backgroundColor: paleta.textoPrimario, color: paleta.fondoPrincipal }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {data?.events?.buttonText || 'Consultar por Eventos'}
            </a>
            
          </div>
        </ScrollReveal>
      </div>
      
    </section>
  );
}