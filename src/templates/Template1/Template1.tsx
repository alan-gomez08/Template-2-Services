// src/templates/Template1/index.tsx
import NavbarT1 from './components/NavbarT1';
import HeroT1 from './components/HeroT1';
import NosotrosT1 from './components/NosotrosT1';
import MenuT1 from './components/MenuT1';
import StatsT1 from './components/StatsT1';
import TestimonialsT1 from './components/TestimonialsT1';
import LocationT1 from './components/LocationT1';
import FooterT1 from './components/FooterT1';

import { configT1 } from '../../config/dataT1'; 

export default function Template1() {
  
  const paleta = {
    fondoPrincipal: configT1?.identidad?.colorSecundario || "#000000",
    fondoSecundario: "#111111",
    fondoCajas: "#1A1A1A",
    colorPrimario: configT1?.identidad?.colorPrincipal || "#F59E0B",
    fondoBoton: configT1?.identidad?.colorPrincipal || "#FFFFFF",
    textoBoton: "#000000",
    textoPrimario: "#FFFFFF",
    textoSecundario: "#A3A3A3",
  };

  return (
    <main 
      className="w-full max-w-[100vw] min-h-screen font-sans overflow-x-hidden"
      style={{ backgroundColor: paleta.fondoPrincipal }}
    >
      <NavbarT1 data={configT1} paleta={paleta} />
      <HeroT1 data={configT1} paleta={paleta} />
      <NosotrosT1 data={configT1} paleta={paleta} />
      <MenuT1 data={configT1} paleta={paleta} />
      <StatsT1 data={configT1} paleta={paleta} />
      <TestimonialsT1 data={configT1} paleta={paleta} />
      <LocationT1 data={configT1} paleta={paleta} />
      <FooterT1 data={configT1} paleta={paleta} />
    </main>
  );
}