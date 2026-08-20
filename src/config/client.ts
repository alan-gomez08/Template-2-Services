import type { ClientData } from '../types/index';

export const clientConfig: ClientData = {
  // Mantenemos la variable de entorno para Vercel
  templateId: import.meta.env.VITE_TEMPLATE_ID || 'template-1',
  businessName: 'Tu Logo',
  theme: {
    primaryColor: '#ffffff', // Basado en tus botones blancos
    secondaryColor: '#111827', // Fondo oscuro
  },
  hero: {
    title: 'Bienvenidos!\nPreparamos El\nMejor Sabor Para\nVos.',
    subtitle: 'Ingredientes frescos, recetas auténticas y una pasión genuina por la comida. ¡Descubrí tu nuevo plato favorito con nosotros!',
    buttonText: 'Hacer Pedido por WhatsApp',
    images: {
      desktop: '/assets-t1/hero-bg.jpg', // Asegurate de que el nombre coincida con tu foto de la hamburguesa
      tablet: '/assets-t1/hero-bg.jpg',
      mobile: '/assets-t1/hero-bg.jpg',
    },
  },
  about: { 
    title: '¿Por qué elegir nuestra cocina?', 
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    description: 'Creemos que la verdadera magia ocurre en la cocina. Por eso elegimos cuidadosamente cada ingrediente, priorizando la frescura y la calidad en cada paso de nuestra preparación. Queremos que cada bocado sea una experiencia memorable y única para vos, brindando el mejor servicio y los platos más sabrosos.', 
    images: { 
      desktop: '/assets-t1/about-chef.jpg', // La foto del chef
      tablet: '/assets-t1/about-chef.jpg', 
      mobile: '/assets-t1/about-chef.jpg' 
    } 
  },
  menu: { 
    title: 'Nuestro Menú Destacado', 
    categories: ['Todo', 'Hamburguesas', 'Tacos', 'Opciones Veggie', 'Caldos'], 
    items: [
      { 
        name: 'Burger Clásica Doble', 
        description: 'Doble carne, doble queso cheddar, lechuga, tomate y salsa especial.', 
        price: '', // En tu foto no se ve el precio, si lo lleva ponelo acá
        category: 'Hamburguesas', 
        image: '/assets-t1/burger-doble.jpg' 
      },
      { 
        name: 'Tacos al Pastor', 
        description: 'Tres tacos de carne marinada, cebolla, cilantro fresco y un toque de lima.', 
        price: '', 
        category: 'Tacos', 
        image: '/assets-t1/tacos.jpg' 
      },
      { 
        name: 'Burger Crispy', 
        description: 'Doble medallón frito extra crujiente, lechuga, tomate y nuestra salsa casera.', 
        price: '', 
        category: 'Hamburguesas', 
        image: '/assets-t1/burger-crispy.jpg' 
      },
      { 
        name: 'Combo Wrap', 
        description: 'Wrap de carne asada con papas fritas y bebida a elección.', 
        price: '', 
        category: 'Todo', 
        image: '/assets-t1/wrap.jpg' 
      },
      { 
        name: 'Veggie Burger', 
        description: 'Medallón de lentejas y quinoa, rúcula, tomate, cebolla morada y mayonesa vegana.', 
        price: '', 
        category: 'Opciones Veggie', 
        image: '/assets-t1/veggie.jpg' 
      },
      { 
        name: 'Sándwich Especial', 
        description: 'Jamón, queso, huevo, tomate y lechuga en pan de masa madre tostado.', 
        price: '', 
        category: 'Todo', 
        image: '/assets-t1/sandwich.jpg' 
      }
    ] 
  },
  stats: { 
    title: 'Creemos en la calidad absoluta', 
    items: [
      { value: '10K+', label: 'Pedidos entregados' },
      { value: '98%', label: 'Clientes felices' },
      { value: '5+', label: 'Años de experiencia' },
      { value: '50+', label: 'Opciones en el menú' }
    ] 
  },
  events: { 
    title: 'Llevamos Nuestro Sabor A Tus Eventos', 
    description: '¿Tenés un cumpleaños, una juntada con amigos o un evento de fin de año? Nos encargamos de la comida para que vos solo te preocupes por disfrutar. Armamos un presupuesto a medida con las opciones que a vos más te gusten para tus invitados.', 
    buttonText: 'Consultar por Eventos' 
  },
  testimonials: { 
    title: 'What Our Clients Are Saying', 
    items: [
      { 
        name: 'Mateo J.', 
        rating: 5, 
        text: 'La mejor hamburguesa que probé en mi vida. La carne en su punto exacto y las papas súper crujientes. ¡10/10, sin dudas los vuelvo a elegir!' 
      },
      { 
        name: 'Laura C.', 
        rating: 5, 
        text: 'Excelente servicio. El pedido llegó súper rápido, caliente y todo estaba riquísimo. Súper recomendados y la atención es de primera.' 
      },
      { 
        name: 'Sofía M.', 
        rating: 5, 
        text: 'Soy vegetariana y me cuesta encontrar opciones ricas. La veggie burger de acá es una locura, súper sabrosa y con ingredientes frescos de verdad.' 
      }
    ] 
  },
  location: { 
    title: 'Nuestro Local.\n¿Dónde Encontrarnos?', 
    description: '¿Preferís pasar a buscar tu pedido? Estás invitado a conocer nuestro local, con un ambiente cálido y la mejor atención. Encontrá la sucursal más cercana y vení a visitarnos.', 
    buttonText: 'Hacer pedido para retirar', 
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276848!2d-58.38375908477038!3d-34.60373888045942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11be2277a064115b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1680000000000!5m2!1ses-419!2sar' 
  },
  contact: {
    whatsapp: '5491100000000',
    instagram: 'tu_instagram',
    facebook: 'tu_facebook',
  }
};