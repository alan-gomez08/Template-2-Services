import NavbarT1 from './components/NavbarT1';
import HeroT1 from './components/HeroT1';
import NosotrosT1 from './components/NosotrosT1';
import MenuT1 from './components/MenuT1';
import StatsT1 from './components/StatsT1';
import TestimonialsT1 from './components/TestimonialsT1';
import LocationT1 from './components/LocationT1';
import FooterT1 from './components/FooterT1';
import { clientConfig } from '../../config/client';

export default function Template1() {
  return (
    <main className="w-full max-w-[100vw] min-h-screen bg-[#000000] font-sans overflow-x-hidden">
      <NavbarT1 data={clientConfig} />
      <HeroT1 data={clientConfig} />
      <NosotrosT1 data={clientConfig} />
      <MenuT1 data={clientConfig} />
      <StatsT1 data={clientConfig} />
      <TestimonialsT1 data={clientConfig} />
      <LocationT1 data={clientConfig} />
      <FooterT1 data={clientConfig} />
    </main>
  );
}