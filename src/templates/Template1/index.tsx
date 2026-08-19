import type { ClientData } from '../../types';
import NavbarT1 from './components/NavbarT1';
import HeroT1 from './components/HeroT1';

interface Props {
  data: ClientData;
}

export default function Template1({ data }: Props) {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* 1. Navegación */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavbarT1 data={data} />
      </div>
      
      {/* 2. Contenido Principal */}
      <main>
        <HeroT1 data={data} />
      </main>
    </div>
  );
}