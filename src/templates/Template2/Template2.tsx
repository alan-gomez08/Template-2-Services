import { useState } from 'react';
import { configT2 } from '../../config/dataT2.ts'; 
import NavbarT2 from './components/NavbarT2';
import HeroT2 from './components/HeroT2';
import NosotrosT2 from './components/NosotrosT2';
import ColeccionT2 from './components/ColeccionT2';
import InspiracionT2 from './components/InspiracionT2';
import ResenasT2 from './components/ResenasT2';
import LocationT2 from './components/LocationT2';
import FooterT2 from './components/FooterT2';
import CartDrawerT2 from './components/CartDrawerT2'; 

export default function Template2() {
  
  // ESTADO GLOBAL DEL CARRITO
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (productWithVariants: any) => {
    setCart(prevCart => {
      // Validamos por cartId (IdProducto + Talle + Color)
      const existingProduct = prevCart.find(item => item.cartId === productWithVariants.cartId);
      if (existingProduct) {
        return prevCart.map(item => item.cartId === productWithVariants.cartId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...productWithVariants, quantity: 1 }];
    });
  };

  const updateQuantity = (cartId: string, amount: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.cartId === cartId) {
          const newQuantity = item.quantity + amount;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(item => item !== null);
    });
  };

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
      className="w-full min-h-screen font-sans overflow-x-hidden relative"
      style={{ backgroundColor: paleta.fondoPrincipal }}
    >
      <NavbarT2 data={configT2} paleta={paleta} />
      <HeroT2 data={configT2} paleta={paleta} />
      <NosotrosT2 data={configT2} paleta={paleta} />
      
      {/* COLECCIÓN MUTANTE */}
      <ColeccionT2 data={configT2} paleta={paleta} addToCart={addToCart} />
      
      <InspiracionT2 data={configT2} paleta={paleta} />
      <ResenasT2 data={configT2} paleta={paleta} />
      <LocationT2 data={configT2} paleta={paleta} />
      <FooterT2 data={configT2} paleta={paleta} />

      {/* CARRITO (Se autodestruye si es módulo Turnos) */}
      <CartDrawerT2 data={configT2} paleta={paleta} cart={cart} updateQuantity={updateQuantity} />
    </main>
  );
}