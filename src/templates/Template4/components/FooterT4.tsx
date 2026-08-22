import type { ClientData } from '../../../types';
import ScrollReveal from '../../Template1/components/ScrollReveal';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function FooterT4({ data, paleta }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-12 lg:pt-16 pb-8 px-6 lg:px-8" style={{ backgroundColor: paleta.fondoFooter }}>
      <div className="max-w-[1280px] mx-auto flex flex-col">
        
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            
            <div className="flex flex-col items-start w-full lg:max-w-[592px]">
              <a href="#inicio" className="text-[24px] font-bold font-['Arimo'] tracking-wide uppercase mb-4" style={{ color: paleta.textoClaro }}>
                {data.businessName}
              </a>
              
              <p className="text-[15px] lg:text-[16px] font-normal font-['Inter'] leading-relaxed mb-6" style={{ color: `${paleta.textoClaro}B3` }}>
                Especialistas en servicios para el hogar y comercio con más de 15 años de experiencia protegiendo propiedades.
              </p>

              <div className="flex gap-4">
                <a href={data.contact.facebook || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] flex justify-center items-center transition-all duration-300 hover:opacity-80" style={{ backgroundColor: `${paleta.textoClaro}1A`, color: `${paleta.textoClaro}CC` }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = paleta.colorPrimario; e.currentTarget.style.color = paleta.textoClaro; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${paleta.textoClaro}1A`; e.currentTarget.style.color = `${paleta.textoClaro}CC`; }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"><path d="M15.0002 1.66675H12.5002C11.3951 1.66675 10.3353 2.10573 9.55388 2.88714C8.77248 3.66854 8.3335 4.72835 8.3335 5.83341V8.33341H5.8335V11.6667H8.3335V18.3334H11.6668V11.6667H14.1668L15.0002 8.33341H11.6668V5.83341C11.6668 5.6124 11.7546 5.40044 11.9109 5.24416C12.0672 5.08788 12.2791 5.00008 12.5002 5.00008H15.0002V1.66675Z"/></svg>
                </a>
                <a href={data.contact.instagram || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] flex justify-center items-center transition-all duration-300 hover:opacity-80" style={{ backgroundColor: `${paleta.textoClaro}1A`, color: `${paleta.textoClaro}CC` }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = paleta.colorPrimario; e.currentTarget.style.color = paleta.textoClaro; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${paleta.textoClaro}1A`; e.currentTarget.style.color = `${paleta.textoClaro}CC`; }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"><path d="M14.1665 1.66675H5.83317C3.53198 1.66675 1.6665 3.53223 1.6665 5.83341V14.1667C1.6665 16.4679 3.53198 18.3334 5.83317 18.3334H14.1665C16.4677 18.3334 18.3332 16.4679 18.3332 14.1667V5.83341C18.3332 3.53223 16.4677 1.66675 14.1665 1.66675Z"/><path d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z"/><path d="M14.5835 5.41675H14.5918"/></svg>
                </a>
                <a href={`https://wa.me/${data.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] flex justify-center items-center transition-all duration-300 hover:opacity-80" style={{ backgroundColor: `${paleta.textoClaro}1A`, color: `${paleta.textoClaro}CC` }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = paleta.colorPrimario; e.currentTarget.style.color = paleta.textoClaro; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${paleta.textoClaro}1A`; e.currentTarget.style.color = `${paleta.textoClaro}CC`; }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.47715 0 0 4.47715 0 10V26C0 31.5228 4.47715 36 10 36H26C31.5228 36 36 31.5228 36 26V10C36 4.47715 31.5228 0 26 0H10Z" fill="transparent"/><path d="M13.9363 5.96195C12.8344 4.86016 11.3653 4.2526 9.80556 4.2526C6.55169 4.2526 3.90562 6.89868 3.90562 10.1525C3.90562 11.1947 4.17724 12.2152 4.69315 13.1232L3.62688 17L7.60155 15.9555C8.47463 16.4253 9.46271 16.671 10.4682 16.671H10.472C13.7259 16.671 16.3719 14.0249 16.3719 10.771C16.3757 9.1942 15.7679 7.69677 14.666 6.59498H13.9363ZM10.472 15.632C9.5843 15.632 8.71556 15.3933 7.94528 14.936L7.76615 14.8296L5.34026 15.4665L5.99126 13.1118L5.8776 12.929C5.38378 12.1444 5.12134 11.238 5.12134 10.3155C5.12134 7.36224 7.53177 4.9518 10.4871 4.9518C11.9169 4.9518 13.2673 5.50901 14.2796 6.51752C15.2919 7.52604 15.8492 8.87563 15.8454 10.3117C15.8454 13.265 13.435 15.6754 10.4796 15.6754H10.472V15.632ZM13.4258 11.666C13.2638 11.5844 12.4674 11.192 12.3242 11.1408C12.181 11.0895 12.0772 11.0649 11.9675 11.2274C11.8579 11.3901 11.5476 11.756 11.4552 11.862C11.3629 11.9681 11.2687 11.9813 11.1066 11.8998C10.9446 11.8183 10.4132 11.6425 9.77583 11.0776C9.27856 10.6358 8.94474 10.0895 8.85223 9.92683C8.75971 9.76418 8.84277 9.67323 8.92394 9.59365C8.99763 9.52166 9.08643 9.40058 9.16766 9.31165C9.24888 9.22272 9.27533 9.15248 9.32822 9.04432C9.38112 8.93617 9.35467 8.84166 9.31415 8.76023C9.27363 8.6788 8.94474 7.87327 8.8087 7.54516C8.67266 7.21704 8.54041 7.25867 8.44215 7.25489C8.3439 7.25111 8.23999 7.25111 8.13608 7.25111C8.03217 7.25111 7.86403 7.28892 7.71853 7.45145C7.57303 7.61399 7.1517 8.00645 7.1517 8.80211C7.1517 9.59777 7.73365 10.3632 7.81301 10.4709C7.89237 10.5786 8.94852 12.2155 10.5694 12.8988C10.9548 13.0575 11.2609 13.1558 11.4989 13.2277C11.8844 13.3487 12.2358 13.3298 12.5154 13.2921C12.8253 13.2505 13.4674 12.9368 13.6035 12.5855C13.7395 12.2343 13.7395 11.9338 13.7036 11.8676C13.6677 11.8015 13.5657 11.7694 13.4036 11.6878L13.4258 11.666Z"/></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start w-full lg:max-w-[320px]">
              <h3 className="text-[16px] font-semibold font-['Inter'] mb-6" style={{ color: paleta.textoClaro }}>
                Contacto
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0" style={{ color: `${paleta.textoClaro}99` }} fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20"><path d="M10.501 18.1659C12.051 16.8276 16.6668 12.4942 16.6668 8.33341C16.6668 6.5653 15.9645 4.86961 14.7142 3.61937C13.464 2.36913 11.7683 1.66675 10.0002 1.66675C8.23205 1.66675 6.53636 2.36913 5.28612 3.61937C4.03588 4.86961 3.3335 6.5653 3.3335 8.33341C3.3335 12.4942 7.94933 16.8276 9.49933 18.1659C9.64373 18.2745 9.8195 18.3332 10.0002 18.3332C10.1808 18.3332 10.3566 18.2745 10.501 18.1659Z"/><path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"/></svg>
                  <span className="text-[14px] lg:text-[15px] font-normal font-['Inter']" style={{ color: `${paleta.textoClaro}B3` }}>
                    Av. Siempreviva 1234, CABA
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0" style={{ color: `${paleta.textoClaro}99` }} fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20"><path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z"/></svg>
                  <span className="text-[14px] lg:text-[15px] font-normal font-['Inter']" style={{ color: `${paleta.textoClaro}B3` }}>
                    (11) 4567-8900
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0" style={{ color: `${paleta.textoClaro}99` }} fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 20 20"><path d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z"/><path d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325"/></svg>
                  <span className="text-[14px] lg:text-[15px] font-normal font-['Inter']" style={{ color: `${paleta.textoClaro}B3` }}>
                    info@ejemplo.com
                  </span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        <div className="w-full mt-12 pt-8 border-t flex justify-center text-center" style={{ borderColor: `${paleta.textoClaro}1A` }}>
          <span className="text-[13px] md:text-[14px] font-normal font-['Inter']" style={{ color: `${paleta.textoClaro}66` }}>
            © {currentYear} {data.businessName} Pro. Todos los derechos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}