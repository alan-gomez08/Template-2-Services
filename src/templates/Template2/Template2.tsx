import { configT2 } from '../../config/dataT2'; // <-- IMPORTACIÓN NUEVA
import NavbarT2 from './components/NavbarT2';
import HeroT2 from './components/HeroT2';
import NosotrosT2 from './components/NosotrosT2';
import ColeccionT2 from './components/ColeccionT2';
import InspiracionT2 from './components/InspiracionT2';
import ResenasT2 from './components/ResenasT2';
import LocationT2 from './components/LocationT2';
import FooterT2 from './components/FooterT2';

export default function Template2() {
  return (
    <main className="w-full min-h-screen font-sans bg-[#FAF9F6] overflow-x-hidden">
      <NavbarT2 data={configT2} />
      <HeroT2 data={configT2} />
      <NosotrosT2 data={configT2} />
      <ColeccionT2 data={configT2} />
      <InspiracionT2 data={configT2} />
      <ResenasT2 data={configT2} />
      <LocationT2 data={configT2} />
      <FooterT2 data={configT2} />
    </main>
  );
}