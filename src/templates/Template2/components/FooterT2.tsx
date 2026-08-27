import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function FooterT2({ data, paleta }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-8 md:pt-20 md:pb-10 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: paleta.colorAcento }}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-20">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
            
            <div className="flex flex-col gap-5 max-w-[320px]">
              <h2 className="text-[28px] md:text-[32px] font-semibold font-['Manrope'] tracking-wide" style={{ color: paleta.textoClaro }}>
                {data.businessName}
              </h2>
              <p className="text-[15px] font-normal font-['Inter'] leading-[1.6]" style={{ color: `${paleta.textoClaro}CC` }}>
                {data.about.description || 'Diseñamos y fabricamos a medida. Te acompañamos en cada paso.'}
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:mr-[120px]">
              <h3 className="text-[17px] font-medium font-['DM_Sans'] tracking-wide" style={{ color: paleta.textoClaro }}>Seguinos</h3>
              <div className="flex flex-col gap-4">
                {data.contact.facebook && (
                  <a href={data.contact.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors group" style={{ color: `${paleta.textoClaro}CC` }} onMouseEnter={(e) => e.currentTarget.style.color = paleta.textoClaro} onMouseLeave={(e) => e.currentTarget.style.color = `${paleta.textoClaro}CC`}>
                    <div className="w-6 flex justify-center"><svg className="w-[11px] h-[20px] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 320 512"><path d="M275.9 330.7H171.8V512H90V330.7H16V226.6h74v-58.4c0-67.6 39.5-105.4 105.5-105.4 14.4 0 27.5 1.1 31.2 1.5v72.3h-42.6c-16.8 0-20.1 8-20.1 19.7v45.9h66.3l-10.4 104.1z" /></svg></div>
                    <span className="text-[15px] font-bold font-['Inter']">Facebook</span>
                  </a>
                )}
                {data.contact.instagram && (
                  <a href={data.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors group" style={{ color: `${paleta.textoClaro}CC` }} onMouseEnter={(e) => e.currentTarget.style.color = paleta.textoClaro} onMouseLeave={(e) => e.currentTarget.style.color = `${paleta.textoClaro}CC`}>
                    <div className="w-6 flex justify-center"><svg className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></div>
                    <span className="text-[15px] font-bold font-['Inter']">Instagram</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </ScrollReveal>

        <div className="w-full flex justify-center pt-8 md:pt-10">
          <span className="text-[15px] font-normal font-['DM_Sans'] text-center" style={{ color: `${paleta.textoClaro}80` }}>
            Copyright © {currentYear} {data.businessName}
          </span>
        </div>
      </div>
    </footer>
  );
}