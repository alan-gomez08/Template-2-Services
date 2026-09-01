import type { ClientData } from '../types/index';

export const configT2: any = {
  templateId: 'template-2',
  businessName: 'Tu Marca',
  
  // --- EL INTERRUPTOR MAESTRO ---
  config: {
    modulo: 'Turnos', // Catalogos - Turnos
    mostrarPrecios: true, // true  - false
    agendaModo: 'link', // whatsapp - link
    agendaLink: 'https://calendly.com/tu-usuario',
  },

  theme: { primaryColor: '#4A5D4E', secondaryColor: '#B58A61' },
  
  // === SECCIÓN: HERO ===
  hero: { 
    title: 'Encontrá Tu Equilibrio, Renovate Por Completo.', 
    subtitle: 'Frená la rutina y regalate un momento de paz. Descubrí nuestro oasis de relajación con masajes descontracturantes, circuitos hídricos y terapias holísticas.', 
    buttonText: 'Reservá Tu Día de Spa', 
    // 👇 LOGICA DE BOTÓN: 'whatsapp' para ícono/chat, 'calendar' para ícono de agenda/link externo.
    buttonType: 'whatsapp', 
    // 👇 LOGICA DE BOTÓN: Si elegiste 'calendar' arriba, este link es a donde te va a redirigir.
    buttonUrl: 'https://calendly.com/tu-usuario', 
    images: { 
      desktop: '/assets-t2/hero-desktop.webp', 
      tablet: '/assets-t2/hero-tablet.webp', 
      mobile: '/assets-t2/hero-mobile.webp' 
    } 
  },
  
  // === SECCIÓN: BENEFICIOS (¿Por qué elegir nuestros muebles?) ===
  stats: { 
    title: '¿Por qué elegir nuestros Spa?', 
    items: [
      {
        value: 'Terapeutas Especializados',
        label: 'Nuestro equipo evalúa las tensiones de tu cuerpo para ofrecerte masajes y terapias 100% personalizadas.'
      },
      {
        value: 'Entorno de Paz Total',
        label: 'Diseñamos cada espacio con aromaterapia, luz tenue y sonidos envolventes para que desconectes.'
      },
      {
        value: 'Cosmética Consciente',
        label: 'Utilizamos aceites esenciales y productos de origen natural que cuidan y nutren tu piel.'
      }
    ] 
  },

  // === SECCIÓN: NOSOTROS (Primer bloque de Inspiración) ===
  about: { 
    title: 'Creamos Momentos Para Que Vuelvas a Vos', 
    subtitle: 'NUESTRA FILOSOFÍA', 
    description: 'No ofrecemos solo masajes; creamos experiencias de sanación integral. Cada detalle de nuestro centro está pensado para equilibrar tu cuerpo, calmar tu mente y revitalizar tu energía para afrontar la semana.', 
    buttonText: 'Hablemos por WhatsApp',
    // 👇 LOGICA DE BOTÓN: Acá podés cambiarlo a 'calendar' si quisieras en esta sección
    buttonType: 'whatsapp', 
    // 👇 LOGICA DE BOTÓN: Como está en whatsapp, este campo se ignora. Si fuera 'calendar', llená la URL.
    buttonUrl: '',
    images: { 
      desktop: '/assets-t2/about.webp',
      tablet: '/assets-t2/about.webp',
      mobile: '/assets-t2/about.webp' 
    } 
  },
  
  // === SECCIÓN: CATÁLOGO DE PRODUCTOS ===
  menu: { 
    title: 'Los más elegidos', 
    categories: ['Destacados', 'Masajes', 'Faciales', 'Rituales'], 
    items: [
      { id: '1', title: 'Masaje Clasico"', description: 'Sillón tapizado premium', price: '$50.000', category: 'Destacados', imagePath: '/assets-t2/service-masajes.webp', colores: ['Beige', 'Gris', 'Verde Musgo'] },
      { id: '2', title: 'Piedras Calientes', description: '', price: '$75.000', category: 'Destacados', imagePath: '/assets-t2/service-piedras-calientes.webp' },
      { id: '3', title: 'Limpieza Profunda ', description: '', price: '$25.000', category: 'Destacados', imagePath: '/assets-t2/service-limpieza-profunda.webp', colores: ['Azul Noche', 'Esmeralda'] },
      { id: '4', title: 'Día de Spa Completo', description: '', price: '$180.000', category: 'Destacados', imagePath: '/assets-t2/service-dia-de-spa.webp' },
      { id: '5', title: 'Sofá Modular 3 Cuerpos', description: '', price: '$550.000', category: 'Sillones', imagePath: '/assets-t2/product-modular.webp', talles: ['2 Cuerpos', '3 Cuerpos', 'Esquinero'] },
      { id: '6', title: 'Sillón Individual Nórdico', description: '', price: '$140.000', category: 'Sillones', imagePath: '/assets-t2/product-nordico.webp' },
      
      { id: '7', title: 'Silla de Comedor "Oslo"', description: '', price: '$85.000', category: 'Sillas', imagePath: '/assets-t2/product-oslo.webp', colores: ['Madera Clara', 'Madera Oscura'] },
      { id: '8', title: 'Silla de Cabecera "Milán"', description: '', price: '$95.000', category: 'Sillas', imagePath: '/assets-t2/product-milan.webp' },
      { id: '9', title: 'Silla Eames Tapizada', description: '', price: '$65.000', category: 'Sillas', imagePath: '/assets-t2/product-eames.webp', colores: ['Gris Claro', 'Grafito', 'Mostaza'] },
      { id: '10', title: 'Banqueta Alta Barra', description: '', price: '$75.000', category: 'Sillas', imagePath: '/assets-t2/product-banqueta.webp' },
      { id: '11', title: 'Silla de Diseño "Windsor"', description: '', price: '$110.000', category: 'Sillas', imagePath: '/assets-t2/product-windsor.webp' },
      { id: '12', title: 'Silla de Exterior "Acapulco"', description: '', price: '$45.000', category: 'Sillas', imagePath: '/assets-t2/product-acapulco.webp', colores: ['Negro', 'Blanco', 'Turquesa'] },
      
      { id: '13', title: 'Mesa Ratona de Roble', description: '', price: '$120.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-ratona.webp' },
      { id: '14', title: 'Mesa de Comedor Extensible', description: '', price: '$480.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-comedor.webp', talles: ['1.40m a 1.80m', '1.60m a 2.00m'] },
      { id: '15', title: 'Mesa Auxiliar de Hierro', description: '', price: '$65.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-auxiliar.webp' },
      { id: '16', title: 'Escritorio Home Office', description: '', price: '$190.000', category: 'Mesas', imagePath: '/assets-t2/product-escritorio.webp' },
      { id: '17', title: 'Mesa de Centro Vidrio', description: '', price: '$150.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-vidrio.webp' },
      { id: '18', title: 'Mesa de Luz Nórdica', description: '', price: '$70.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-luz.webp' },
      
      { id: '19', title: 'Set Living Modular', description: '', price: '$85.000', category: 'Deco', imagePath: '/assets-t2/deco-set-living.webp' },
      { id: '20', title: 'Bahiut Nórdico', description: '', price: '$220.000', category: 'Deco', imagePath: '/assets-t2/deco-bahiut-madera.webp' },
      { id: '21', title: 'Consola Moderna Oscura', description: '', price: '$185.000', category: 'Deco', imagePath: '/assets-t2/deco-consola-moderna.webp' },
      { id: '22', title: 'Cajonera de Diseño', description: '', price: '$160.000', category: 'Deco', imagePath: '/assets-t2/deco-cajonera-diseno.webp' },
      { id: '23', title: 'Cómoda Azul Vintage', description: '', price: '$175.000', category: 'Deco', imagePath: '/assets-t2/deco-comoda-azul.webp' },
      { id: '24', title: 'Sillón 2 Cuerpos Madera', description: '', price: '$290.000', category: 'Deco', imagePath: '/assets-t2/deco-sillon-madera.webp' }
    ] 
  },
  
  // === SECCIÓN: BANNER INFERIOR (Segundo bloque de Inspiración) ===
  events: { 
    title: 'Ingredientes Puros, Resultados Reales.', 
    description: 'Creemos en el poder curativo de la naturaleza. Por eso, todos nuestros rituales se realizan con extractos botánicos, arcillas minerales y aceites puros prensados en frío, completamente libres de químicos invasivos.', 
    buttonText: 'Explorar Catálogo',
    // 👇 LOGICA DE BOTÓN: Igual que en about, este define qué mostrar.
    buttonType: 'whatsapp',
    buttonUrl: 'https://calendly.com/tu-usuario',
    images: [
      '/assets-t2/inspiracion-1.webp',
      '/assets-t2/inspiracion-2.webp',
      '/assets-t2/inspiracion-3.webp'
    ]
  },
  
  // === SECCIÓN: TESTIMONIOS ===
  testimonials: { 
    title: 'Experiencias De Quienes Ya Se Relajaron', 
    items: [
      {
        name: 'Federico G.',
        role: 'Castelar',
        content: 'Un lugar mágico. Fui por un día de spa con una amiga y salimos renovadas. La atención es impecable y la sala te transporta a otro mundo."',
        avatar: '/assets-t2/avatar1.webp',
        bgImage: '/assets-t2/review-bg-1.webp'
      },
      {
        name: 'Sofía',
        role: 'Ramos Mejía',
        content: '"Llegué con unos dolores de espalda tremendos por el trabajo. La terapeuta supo exactamente dónde trabajar. Volveré sin dudas el mes que viene."',
        avatar: '/assets-t2/avatar2.webp',
        bgImage: '/assets-t2/review-bg-2.webp'
      },
      {
        name: 'Martina L.',
        role: 'Ramos Mejía',
        content: ' "El mejor regalo de cumpleaños que me hicieron. Los aromas, la música, el trato súper cálido... una experiencia 10/10."',
        avatar: '/assets-t2/avatar3.webp',
        bgImage: '/assets-t2/review-bg-3.webp'
      }
    ] 
  },
  
  // === SECCIÓN: UBICACIÓN ===
  location: { 
    title: 'Nuestro Spa. Vení a vivir tu momento de relax.', 
    description: 'Estamos ubicados en un rincón tranquilo para que tu desconexión sea total. Vení a soltar el estrés, relajar tensiones y disfrutar del cuidado que te merecés. Tenemos cupos limitados por día para garantizar el silencio y tu tranquilidad.', 
    buttonText: 'Reserva tu dia de Spa', 
    // 👇 LOGICA DE BOTÓN: Define WhatsApp para el bloque de Ubicación.
    buttonType: 'calendar',
    buttonUrl: '',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276848!2d-58.43283182352824!3d-34.58249826078652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5840d58849b%3A0xc3b832b85e0ff0!2sPalermo%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar'
  },
  
  // === SECCIÓN: CONTACTO ===
  contact: { 
    whatsapp: '5491100000000', 
    instagram: 'https://instagram.com/tumarca', 
    facebook: 'https://facebook.com/tumarca' 
  }
};