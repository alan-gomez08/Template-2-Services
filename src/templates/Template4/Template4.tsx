import { configT4 } from '../../config/dataT4'; 
import NavbarT4 from './components/NavbarT4';
import HeroT4 from './components/HeroT4';
import ServiciosT4 from './components/ServiciosT4';
import BeneficiosT4 from './components/BeneficiosT4';
import CtaT4 from './components/CtaT4';
import FooterT4 from './components/FooterT4';

export default function Template4() {

  // 🎨 TABLERO DE COLORES T4 🎨
// 🎨 TABLERO DE COLORES T4 (Estilo Profesional / Servicios) 🎨
  const paleta = {
    fondoPrincipal: configT4?.theme?.secondaryColor || "#FFFFFF", // Fondo blanco limpio general
    fondoGradienteInicio: "#ECFDF5", // Fondo verde súper suave (Para el Hero y fondos alternados)
    fondoGradienteFin: "#F0FDFA",    // Transición sutil del gradiente
    fondoFooter: "#111827",          // Azul/Gris muy oscuro para el footer
    colorPrimario: configT4?.theme?.primaryColor || "#059669", // Verde Esmeralda vibrante (Botones, íconos y banners de CTA)
    colorSecundario: "#10B981",      // Verde un tono más claro (Ideal para hover en botones)
    textoPrimario: "#1E293B",        // Gris oscuro (Para títulos principales)
    textoSecundario: "#64748B",      // Gris medio (Para párrafos y descripciones)
    textoClaro: "#FFFFFF",           // Texto blanco (Para contrastar sobre botones verdes y el footer oscuro)
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