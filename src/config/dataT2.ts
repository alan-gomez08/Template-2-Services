import type { ClientData } from '../types/index';

export const configT2: ClientData = {
  templateId: 'template-2',
  businessName: 'Tu Marca de Muebles',
  theme: { primaryColor: '#000000', secondaryColor: '#ffffff' },
  hero: { 
    title: 'Diseño Que\nTransforma Tu Hogar', 
    subtitle: 'Descubrí nuestra nueva colección de sillones y muebles de diseño. Confort y elegancia para cada rincón de tu casa.', 
    buttonText: 'Ver Colección', 
    images: { 
      desktop: '/assets-t2/hero-desktop.webp', 
      tablet: '/assets-t2/hero-tablet.webp', 
      mobile: '/assets-t2/hero-mobile.webp' 
    } 
  },
  // Dejo el resto vacío por ahora hasta que me pases los componentes
  about: { title: '', subtitle: '', description: '', images: { desktop: '', tablet: '', mobile: '' } },
  menu: { 
    title: 'Los más elegidos', 
    categories: ['Sillones', 'Sillas', 'Mesas', 'Deco'], 
    items: [
      // === SILLONES ===
      { id: '1', title: 'Poltrona "Roma"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-roma.webp' },
      { id: '2', title: 'Poltrona "Tartán"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-tartan.webp' },
      { id: '3', title: 'Sofá Modular 3 Cuerpos', description: '', price: '', category: 'Sillones', imagePath: '' },
      { id: '4', title: 'Sillón Individual Nórdico', description: '', price: '', category: 'Sillones', imagePath: '' },
      
      // === SILLAS ===
      { id: '5', title: 'Silla de Comedor "Oslo"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-oslo.webp' },
      { id: '6', title: 'Silla de Cabecera "Milán"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-milan.webp' },
      { id: '7', title: 'Silla Eames Tapizada', description: '', price: '', category: 'Sillas', imagePath: '' },
      { id: '8', title: 'Banqueta Alta Barra', description: '', price: '', category: 'Sillas', imagePath: '' },
      
      // === MESAS ===
      { id: '9', title: 'Mesa Ratona Roble', description: '', price: '', category: 'Mesas', imagePath: '' },
      { id: '10', title: 'Mesa de Comedor Extensible', description: '', price: '', category: 'Mesas', imagePath: '' },
      { id: '11', title: 'Mesa Auxiliar de Hierro', description: '', price: '', category: 'Mesas', imagePath: '' },
      { id: '12', title: 'Escritorio Home Office', description: '', price: '', category: 'Mesas', imagePath: '' },
      
      // === DECO ===
      { id: '13', title: 'Espejo Circular Minimal', description: '', price: '', category: 'Deco', imagePath: '' },
      { id: '14', title: 'Lámpara de Pie Nórdica', description: '', price: '', category: 'Deco', imagePath: '' },
      { id: '15', title: 'Alfombra de Yute Natural', description: '', price: '', category: 'Deco', imagePath: '' },
      { id: '16', title: 'Set de Almohadones Lino', description: '', price: '', category: 'Deco', imagePath: '' }
    ] 
  },
  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: { whatsapp: '', instagram: '', facebook: '' }
};