import { clientConfig } from '../../config/client';
import NavbarT4 from './components/NavbarT4';
import HeroT4 from './components/HeroT4';
import ServiciosT4 from './components/ServiciosT4';
import BeneficiosT4 from './components/BeneficiosT4';
import CtaT4 from './components/CtaT4'; // <-- Importamos
import FooterT4 from './components/FooterT4';

export default function Template4() {
  return (
    <main className="w-full min-h-screen font-sans bg-white selection:bg-[#059669] selection:text-white overflow-x-hidden">
      <NavbarT4 data={clientConfig} />
      <HeroT4 data={clientConfig} />
      <ServiciosT4 data={clientConfig} />
      <BeneficiosT4 data={clientConfig} />
      <CtaT4 data={clientConfig} /> {/* <-- Lo agregamos antes del Footer */}
      <FooterT4 data={clientConfig} />
    </main>
  );
}