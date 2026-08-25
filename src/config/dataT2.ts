import type { ClientData } from '../types/index';

export const configT2: any = {
  templateId: 'template-2',
  businessName: 'Tu Marca de Muebles',
  
  // --- EL INTERRUPTOR MAESTRO ---
  config: {
    modulo: 'turnos', // Cambialo a 'turnos' para ver cómo muta el template a servicios
    mostrarPrecios: true, // Si es false, oculta los precios y pide cotización por WhatsApp
    agendaModo: 'whatsapp', // 'whatsapp' | 'link' (Solo aplica si modulo es 'turnos')
    agendaLink: 'https://calendly.com/tu-usuario', // Link externo
  },

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
      // === SILLONES ===
      { id: '1', title: 'Poltrona "Roma"', description: 'Sillón tapizado premium', price: '$250.000', category: 'Sillones', imagePath: '/assets-t2/product-roma.webp', colores: ['Beige', 'Gris', 'Verde Musgo'] },
      { id: '2', title: 'Poltrona "Tartán"', description: '', price: '$210.000', category: 'Sillones', imagePath: '/assets-t2/product-tartan.webp' },
      { id: '3', title: 'Poltrona "Esmeralda"', description: '', price: '$320.000', category: 'Sillones', imagePath: '/assets-t2/product-esmeralda.webp', colores: ['Azul Noche', 'Esmeralda'] },
      { id: '4', title: 'Sillón Rattan "Bali"', description: '', price: '$180.000', category: 'Sillones', imagePath: '/assets-t2/product-bali.webp' },
      { id: '5', title: 'Sofá Modular 3 Cuerpos', description: '', price: '$550.000', category: 'Sillones', imagePath: '/assets-t2/product-modular.webp', talles: ['2 Cuerpos', '3 Cuerpos', 'Esquinero'] },
      { id: '6', title: 'Sillón Individual Nórdico', description: '', price: '$140.000', category: 'Sillones', imagePath: '/assets-t2/product-nordico.webp' },
      
      // === SILLAS ===
      { id: '7', title: 'Silla de Comedor "Oslo"', description: '', price: '$85.000', category: 'Sillas', imagePath: '/assets-t2/product-oslo.webp', colores: ['Madera Clara', 'Madera Oscura'] },
      { id: '8', title: 'Silla de Cabecera "Milán"', description: '', price: '$95.000', category: 'Sillas', imagePath: '/assets-t2/product-milan.webp' },
      { id: '9', title: 'Silla Eames Tapizada', description: '', price: '$65.000', category: 'Sillas', imagePath: '/assets-t2/product-eames.webp', colores: ['Gris Claro', 'Grafito', 'Mostaza'] },
      { id: '10', title: 'Banqueta Alta Barra', description: '', price: '$75.000', category: 'Sillas', imagePath: '/assets-t2/product-banqueta.webp' },
      { id: '11', title: 'Silla de Diseño "Windsor"', description: '', price: '$110.000', category: 'Sillas', imagePath: '/assets-t2/product-windsor.webp' },
      { id: '12', title: 'Silla de Exterior "Acapulco"', description: '', price: '$45.000', category: 'Sillas', imagePath: '/assets-t2/product-acapulco.webp', colores: ['Negro', 'Blanco', 'Turquesa'] },
      
      // === MESAS ===
      { id: '13', title: 'Mesa Ratona de Roble', description: '', price: '$120.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-ratona.webp' },
      { id: '14', title: 'Mesa de Comedor Extensible', description: '', price: '$480.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-comedor.webp', talles: ['1.40m a 1.80m', '1.60m a 2.00m'] },
      { id: '15', title: 'Mesa Auxiliar de Hierro', description: '', price: '$65.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-auxiliar.webp' },
      { id: '16', title: 'Escritorio Home Office', description: '', price: '$190.000', category: 'Mesas', imagePath: '/assets-t2/product-escritorio.webp' },
      { id: '17', title: 'Mesa de Centro Vidrio', description: '', price: '$150.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-vidrio.webp' },
      { id: '18', title: 'Mesa de Luz Nórdica', description: '', price: '$70.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-luz.webp' },
      
      // === DECO ===
      { id: '19', title: 'Set Living Modular', description: '', price: '$85.000', category: 'Deco', imagePath: '/assets-t2/deco-set-living.webp' },
      { id: '20', title: 'Bahiut Nórdico', description: '', price: '$220.000', category: 'Deco', imagePath: '/assets-t2/deco-bahiut-madera.webp' },
      { id: '21', title: 'Consola Moderna Oscura', description: '', price: '$185.000', category: 'Deco', imagePath: '/assets-t2/deco-consola-moderna.webp' },
      { id: '22', title: 'Cajonera de Diseño', description: '', price: '$160.000', category: 'Deco', imagePath: '/assets-t2/deco-cajonera-diseno.webp' },
      { id: '23', title: 'Cómoda Azul Vintage', description: '', price: '$175.000', category: 'Deco', imagePath: '/assets-t2/deco-comoda-azul.webp' },
      { id: '24', title: 'Sillón 2 Cuerpos Madera', description: '', price: '$290.000', category: 'Deco', imagePath: '/assets-t2/deco-sillon-madera.webp' }
    ] 
  },
  
  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: { whatsapp: '5491100000000', instagram: '', facebook: '' }
};