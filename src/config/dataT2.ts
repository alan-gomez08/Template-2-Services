import type { ClientData } from '../types/index';

export const configT2: ClientData = {
  templateId: 'template-2',
  businessName: 'Tu Marca de Muebles',
  theme: { primaryColor: '#000000', secondaryColor: '#ffffff' },
  
  hero: { 
    title: 'Transforma tu casa en tu Lugar Favorito', 
    subtitle: 'Muebles de autor con envíos a todo el país. Visitá nuestro showroom o comprá online.', 
    buttonText: 'Agendar visita al Showroom', 
    images: { 
      desktop: '/assets-t2/hero-desktop.webp', 
      tablet: '/assets-t2/hero-tablet.webp', 
      mobile: '/assets-t2/hero-mobile.webp' 
    } 
  },
  
  about: { 
    title: '', 
    subtitle: '', 
    description: '', 
    images: { desktop: '', tablet: '', mobile: '' } 
  },
  
  menu: { 
    title: 'Los más elegidos', 
    categories: ['Sillones', 'Sillas', 'Mesas', 'Deco'], 
    items: [
      // === SILLONES (6 Ítems) ===
      { id: '1', title: 'Poltrona "Roma"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-roma.webp' },
      { id: '2', title: 'Poltrona "Tartán"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-tartan.webp' },
      { id: '3', title: 'Poltrona "Esmeralda"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-esmeralda.webp' },
      { id: '4', title: 'Sillón Rattan "Bali"', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-bali.webp' },
      { id: '5', title: 'Sofá Modular 3 Cuerpos', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-modular.webp' },
      { id: '6', title: 'Sillón Individual Nórdico', description: '', price: '', category: 'Sillones', imagePath: '/assets-t2/product-nordico.webp' },
      
      // === SILLAS (6 Ítems) ===
      { id: '7', title: 'Silla de Comedor "Oslo"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-oslo.webp' },
      { id: '8', title: 'Silla de Cabecera "Milán"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-milan.webp' },
      { id: '9', title: 'Silla Eames Tapizada', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-eames.webp' },
      { id: '10', title: 'Banqueta Alta Barra', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-banqueta.webp' },
      { id: '11', title: 'Silla de Diseño "Windsor"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-windsor.webp' },
      { id: '12', title: 'Silla de Exterior "Acapulco"', description: '', price: '', category: 'Sillas', imagePath: '/assets-t2/product-acapulco.webp' },
      
      // === MESAS (6 Ítems) ===
      { id: '13', title: 'Mesa Ratona de Roble', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-mesa-ratona.webp' },
      { id: '14', title: 'Mesa de Comedor Extensible', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-mesa-comedor.webp' },
      { id: '15', title: 'Mesa Auxiliar de Hierro', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-mesa-auxiliar.webp' },
      { id: '16', title: 'Escritorio Home Office', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-escritorio.webp' },
      { id: '17', title: 'Mesa de Centro Vidrio', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-mesa-vidrio.webp' },
      { id: '18', title: 'Mesa de Luz Nórdica', description: '', price: '', category: 'Mesas', imagePath: '/assets-t2/product-mesa-luz.webp' },
      
      // === DECO (6 Ítems) ===
      { id: '19', title: 'Set Living Modular', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-set-living.webp' },
      { id: '20', title: 'Bahiut Nórdico', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-bahiut-madera.webp' },
      { id: '21', title: 'Consola Moderna Oscura', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-consola-moderna.webp' },
      { id: '22', title: 'Cajonera de Diseño', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-cajonera-diseno.webp' },
      { id: '23', title: 'Cómoda Azul Vintage', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-comoda-azul.webp' },
      { id: '24', title: 'Sillón 2 Cuerpos Madera', description: '', price: '', category: 'Deco', imagePath: '/assets-t2/deco-sillon-madera.webp' }
    ] 
  },
  
  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: { whatsapp: '', instagram: '', facebook: '' }
};