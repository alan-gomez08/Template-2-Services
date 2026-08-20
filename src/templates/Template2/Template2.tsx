import { clientConfig } from '../../config/client';
import NavbarT2 from './components/NavbarT2';
import HeroT2 from './components/HeroT2';
import NosotrosT2 from './components/NosotrosT2';
import ColeccionT2 from './components/ColeccionT2';
import InspiracionT2 from './components/InspiracionT2';
import ResenasT2 from './components/ResenasT2';
import LocationT2 from './components/LocationT2';
import FooterT2 from './components/FooterT2'; // <-- Importalo

export default function Template2() {
  return (
    <main className="w-full min-h-screen font-sans bg-[#FAF9F6] overflow-x-hidden">
      <NavbarT2 data={clientConfig} />
      <HeroT2 data={clientConfig} />
      <NosotrosT2 data={clientConfig} />
      <ColeccionT2 data={clientConfig} />
      <InspiracionT2 data={clientConfig} />
      <ResenasT2 data={clientConfig} />
      <LocationT2 data={clientConfig} />
      <FooterT2 data={clientConfig} /> {/* <-- Agregalo acá */}
    </main>
  );
}