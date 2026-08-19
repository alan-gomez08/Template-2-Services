import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
}

export default function HeroT1({ data }: Props) {
  return (
    <section className="relative w-full min-h-screen lg:h-[818px] bg-zinc-900 flex flex-col justify-end lg:justify-center overflow-hidden">
      
      {/* 1. Imágenes con Dirección de Arte (Desktop, Tablet, Mobile) */}
      <picture>
        {/* Si la pantalla es mayor a 1024px (Desktop), usa esta: */}
        <source media="(min-width: 1024px)" srcSet={data.hero.images.desktop} />
        
        {/* Si la pantalla es mayor a 768px (Tablet), usa esta: */}
        <source media="(min-width: 768px)" srcSet={data.hero.images.tablet} />
        
        {/* Por defecto (Mobile), usa esta: */}
        <img 
          src={data.hero.images.mobile} 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover lg:origin-top-left"
        />
      </picture>

      {/* 2. Capas de Gradiente para legibilidad */}
      {/* Desktop: Gradiente oscuro a la izquierda */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      {/* Mobile/Tablet: Gradiente oscuro abajo */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* 3. Contenedor de Textos y Botón */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-32 pb-16 lg:pb-0 pt-[50vh] lg:pt-0 flex flex-col gap-5 lg:gap-10 max-w-3xl">
        
        <div className="flex flex-col gap-3 lg:gap-2.5">
          {/* Título Dinámico */}
          <h1 className="text-white text-4xl lg:text-6xl font-black font-['Inter'] leading-tight lg:leading-[96px]">
            {data.hero.title}
          </h1>
          
          {/* Subtítulo Dinámico */}
          <p className="text-neutral-300 lg:text-white text-base md:text-2xl lg:text-xl font-normal font-['Inter'] leading-relaxed md:leading-8">
            {data.hero.subtitle}
          </p>
        </div>

        {/* Botón de WhatsApp Dinámico */}
        <a 
          href={`https://wa.me/${data.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex justify-center items-center gap-2 px-8 lg:px-12 py-4 lg:py-5 bg-white rounded-full shadow-[0px_6px_20px_0px_rgba(255,255,255,0.12)] transition-transform hover:scale-105 active:scale-95"
        >
          {/* Ícono de WhatsApp (Visible solo en mobile/tablet según tu diseño) */}
          <svg className="w-5 h-5 lg:hidden" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0266 1.66604C5.47964 1.66604 1.78212 5.36356 1.78212 9.91051C1.78212 11.3595 2.16519 12.7753 2.88138 14.0244L1.66553 18.3215L6.07923 17.164C7.28948 17.8261 8.64705 18.1727 10.0266 18.1716H10.0349C14.5819 18.1716 18.2794 14.4741 18.2794 9.92716C18.2794 7.72864 17.4216 5.65503 15.8643 4.09774C15.1014 3.32517 14.1923 2.71226 13.19 2.29476C12.1877 1.87726 11.1124 1.66353 10.0266 1.66604ZM10.0266 16.7642H10.0183C8.79302 16.7631 7.59067 16.4323 6.53726 15.8066L6.28743 15.6567L3.6975 16.3395L4.3887 13.8162L4.22215 13.5581C3.53431 12.466 3.17045 11.2011 3.17285 9.91051C3.17285 6.12971 6.25412 3.05677 10.0349 3.05677C11.867 3.05677 13.5909 3.77296 14.89 5.07209C15.5282 5.70723 16.0343 6.4626 16.3787 7.29452C16.7232 8.12645 16.8994 9.01841 16.897 9.91884C16.897 13.6996 13.8157 16.7809 10.0349 16.7809L10.0266 16.7642ZM13.7907 11.6344C13.5825 11.5344 12.5666 11.0348 12.3833 10.9598C12.1918 10.8932 12.0586 10.8599 11.917 11.0681C11.7837 11.2763 11.384 11.7343 11.2591 11.8759C11.1425 12.0091 11.0176 12.0341 10.8094 11.9258C10.6012 11.8259 9.93498 11.601 9.15217 10.9015C8.53592 10.3519 8.12786 9.67733 8.00294 9.46914C7.88636 9.26094 7.98629 9.15268 8.09455 9.04442C8.18616 8.95282 8.30274 8.80292 8.40268 8.68633C8.51094 8.56974 8.54425 8.47814 8.61087 8.34489C8.67749 8.21165 8.64418 8.08673 8.59421 7.9868C8.54425 7.88687 8.12786 6.87088 7.96131 6.45449C7.79475 6.05476 7.6282 6.10473 7.49495 6.10473C7.37836 6.0964 7.23679 6.0964 7.10355 6.0964C7.00041 6.09985 6.89909 6.12456 6.80595 6.16898C6.7128 6.2134 6.62984 6.27658 6.56224 6.35456C6.37903 6.56275 5.84606 7.05409 5.84606 8.06175C5.84606 9.06941 6.5789 10.0438 6.67883 10.1853C6.77877 10.3186 8.11121 12.3755 10.1515 13.2583C10.6345 13.4665 11.0176 13.5914 11.3091 13.683C11.7921 13.8412 12.2418 13.8162 12.5915 13.7663C12.9829 13.708 13.8157 13.2666 13.9906 12.7836C14.1655 12.3006 14.1655 11.8925 14.1072 11.8009C14.0572 11.7093 13.924 11.6593 13.7158 11.5594L13.7907 11.6344Z" fill="#25D366"/>
          </svg>
          
          <span className="text-black text-base lg:text-lg font-bold font-['Inter'] leading-tight lg:leading-7">
            {data.hero.buttonText}
          </span>
        </a>

      </div>
    </section>
  );
}s