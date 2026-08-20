import NavbarT1 from './components/NavbarT1';
import HeroT1 from './components/HeroT1';
import NosotrosT1 from './components/NosotrosT1';
import MenuT1 from './components/MenuT1';
import StatsT1 from './components/StatsT1';
import TestimonialsT1 from './components/TestimonialsT1';
import LocationT1 from './components/LocationT1';
import FooterT1 from './components/FooterT1';

// Importamos la configuración específica del Template 1
import { configT1 } from '../../config/dataT1'; 

export default function Template1() {
  return (
    <main className="w-full max-w-[100vw] min-h-screen bg-[#000000] font-sans overflow-x-hidden">
      <NavbarT1 data={configT1} />
      <HeroT1 data={configT1} />
      <NosotrosT1 data={configT1} />
      <MenuT1 data={configT1} />
      <StatsT1 data={configT1} />
      <TestimonialsT1 data={configT1} />
      <LocationT1 data={configT1} />
      <FooterT1 data={configT1} />
    </main>
  );
}