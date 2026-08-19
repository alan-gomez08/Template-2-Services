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
    <main className="w-full min-h-screen bg-zinc-950 font-sans">
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