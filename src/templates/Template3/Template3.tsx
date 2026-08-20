import { clientConfig } from '../../config/client';
import NavbarT3 from './components/NavbarT3';
import HeroT3 from './components/HeroT3';
import ServiciosT3 from './components/ServiciosT3';
import EquipoT3 from './components/EquipoT3';
import CtaT3 from './components/CtaT3';
import LocationT3 from './components/LocationT3';
import FooterT3 from './components/FooterT3'; // <-- Importamos

export default function Template3() {
  return (
    <main className="w-full min-h-screen font-sans bg-[#0F172A] selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      <NavbarT3 data={clientConfig} />
      <HeroT3 data={clientConfig} />
      <ServiciosT3 data={clientConfig} />
      <EquipoT3 data={clientConfig} />
      <CtaT3 data={clientConfig} />
      <LocationT3 data={clientConfig} />
      <FooterT3 data={clientConfig} /> {/* <-- Agregamos */}
    </main>
  );
}