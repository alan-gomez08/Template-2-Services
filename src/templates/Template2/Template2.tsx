import { clientConfig } from '../../config/client';
import NavbarT2 from './components/NavbarT2';
import HeroT2 from './components/HeroT2';

export default function Template2() {
  return (
    <main className="w-full min-h-screen font-sans bg-[#FAF9F6]">
      <NavbarT2 data={clientConfig} />
      <HeroT2 data={clientConfig} />
    </main>
  );
}