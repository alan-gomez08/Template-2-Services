import type { ClientData } from '../types/index';

export const clientConfig: ClientData = {
  templateId: 'template-1',
  businessName: 'Tu Logo',
  theme: {
    primaryColor: '#ec4899', 
    secondaryColor: '#1e293b',
  },
  hero: {
    title: 'Bienvenidos! Preparamos El Mejor Sabor Para Vos.',
    subtitle: 'Ingredientes frescos, recetas auténticas y porciones generosas. Elegí lo que más te guste y te lo preparamos en el momento.',
    buttonText: 'Hacer Pedido por WhatsApp',
    images: {
      desktop: '/assets-t1/hero-desktop.webp', // Podés usar .jpg, .png o .webp
      tablet: '/assets-t1/hero-tablet.webp',
      mobile: '/assets-t1/hero-mobile.webp',
    }, // <-- ¡Acá es vital la coma, no un punto y coma!
  },
  contact: {
    whatsapp: '5491100000000',
    instagram: 'https://instagram.com/tulogo',
  }
};