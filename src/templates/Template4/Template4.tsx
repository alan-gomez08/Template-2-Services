import { configT4 } from '../../config/dataT4'; 
import NavbarT4 from './components/NavbarT4';
import HeroT4 from './components/HeroT4';
import ServiciosT4 from './components/ServiciosT4';
import BeneficiosT4 from './components/BeneficiosT4';
import CtaT4 from './components/CtaT4';
import FooterT4 from './components/FooterT4';

export default function Template4() {

  // 🎨 TABLERO DE COLORES T4 🎨
  const paleta = {
    fondoPrincipal: configT4?.theme?.secondaryColor || "#FFFFFF", // Blanco limpio general
    fondoGradienteInicio: "#ECFDF5", // emerald-50 (Para el hero y cards)
    fondoGradienteFin: "#F0FDFA",    // teal-50
    fondoFooter: "#111827",          // gray-900 (Footer oscuro)
    colorPrimario: configT4?.theme?.primaryColor || "#059669", // Verde Esmeralda
    colorSecundario: "#10B981",      // Variante de verde para gradientes
    textoPrimario: "#1E293B",        // slate-800
    textoSecundario: "#64748B",      // slate-500
    textoClaro: "#FFFFFF",           // Blanco para botones y footer
  };

  return (
    <main 
      className="w-full min-h-screen font-sans selection:text-white overflow-x-hidden"
      style={{ 
        backgroundColor: paleta.fondoPrincipal,
        '--tw-selection-background-color': paleta.colorPrimario 
      } as React.CSSProperties}
    >
      <NavbarT4 data={configT4} paleta={paleta} />
      <HeroT4 data={configT4} paleta={paleta} />
      <ServiciosT4 data={configT4} paleta={paleta} />
      <BeneficiosT4 data={configT4} paleta={paleta} />
      <CtaT4 data={configT4} paleta={paleta} />
      <FooterT4 data={configT4} paleta={paleta} />
    </main>
  );
}