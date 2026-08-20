import { configT4 } from '../../config/dataT4'; // <-- IMPORTACIÓN NUEVA
import NavbarT4 from './components/NavbarT4';
import HeroT4 from './components/HeroT4';
import ServiciosT4 from './components/ServiciosT4';
import BeneficiosT4 from './components/BeneficiosT4';
import CtaT4 from './components/CtaT4';
import FooterT4 from './components/FooterT4';

export default function Template4() {
  return (
    <main className="w-full min-h-screen font-sans bg-white selection:bg-[#059669] selection:text-white overflow-x-hidden">
      <NavbarT4 data={configT4} />
      <HeroT4 data={configT4} />
      <ServiciosT4 data={configT4} />
      <BeneficiosT4 data={configT4} />
      <CtaT4 data={configT4} />
      <FooterT4 data={configT4} />
    </main>
  );
}