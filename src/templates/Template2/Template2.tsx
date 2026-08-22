import { configT2 } from '../../config/dataT2'; 
import NavbarT2 from './components/NavbarT2';
import HeroT2 from './components/HeroT2';
import NosotrosT2 from './components/NosotrosT2';
import ColeccionT2 from './components/ColeccionT2';
import InspiracionT2 from './components/InspiracionT2';
import ResenasT2 from './components/ResenasT2';
import LocationT2 from './components/LocationT2';
import FooterT2 from './components/FooterT2';

export default function Template2() {
  
  // 🎨 TABLERO DE COLORES T2 🎨
  const paleta = {
    fondoPrincipal: "#FAF9F6",       // Fondo claro general
    fondoOscuro: "#000000",          // Fondo de la portada y menús móviles
    fondoCajas: "#FFFFFF",           // Fondo de tarjetas
    fondoSecundario: "#EEEEEE",      // Fondo de tags o separadores
    colorPrimario: "#E58411",        // Detalles llamativos (íconos, estrellas, links)
    colorAcento: "#3A4B3A",          // Fondo de botones principales y footer (Ej: verde musgo)
    textoPrimario: "#1E1D1B",        // Textos oscuros
    textoClaro: "#FFFFFF",           // Textos sobre fondos oscuros
  };

  return (
    <main 
      className="w-full min-h-screen font-sans overflow-x-hidden"
      style={{ backgroundColor: paleta.fondoPrincipal }}
    >
      <NavbarT2 data={configT2} paleta={paleta} />
      <HeroT2 data={configT2} paleta={paleta} />
      <NosotrosT2 data={configT2} paleta={paleta} />
      <ColeccionT2 data={configT2} paleta={paleta} />
      <InspiracionT2 data={configT2} paleta={paleta} />
      <ResenasT2 data={configT2} paleta={paleta} />
      <LocationT2 data={configT2} paleta={paleta} />
      <FooterT2 data={configT2} paleta={paleta} />
    </main>
  );
}