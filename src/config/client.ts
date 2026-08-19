import type { ClientData } from '../types/index';

export const clientConfig: ClientData = {
  templateId: 'template-2', // Ya lo tenías cambiado
  businessName: 'Tu Logo',
  theme: {
    primaryColor: '#E58411', // El naranja del nuevo template
    secondaryColor: '#1e293b',
  },
  hero: {
    // Podés actualizar los textos acá también si querés que sean dinámicos
    title: 'Transformá tu casa en tu lugar favorito.',
    subtitle: 'Muebles de autor con envíos a todo el país. Visitá nuestro showroom o comprá online.',
    buttonText: 'Agendar visita al Showroom',
    images: {
      desktop: '/assets-t2/hero-desktop.webp', // <-- ACÁ ESTÁ LA MAGIA
      tablet: '/assets-t2/hero-tablet.webp',   // <-- ACÁ ESTÁ LA MAGIA
      mobile: '/assets-t2/hero-mobile.webp',   // <-- ACÁ ESTÁ LA MAGIA
    },
  },
  about: {
    title: '¿Por qué elegir nuestra cocina?',
    subtitle: 'Sabor artesanal en cada bocado. Cuidamos cada detalle, desde la cocción hasta el empaque, para que comer rico sea una experiencia de todos los días.',
    description: 'Somos unos apasionados por la buena comida. Cada plato que sale de nuestra cocina está preparado con ingredientes de primera calidad, cuidando cada detalle desde la cocción hasta el empaque. Creemos que comer rico tiene que ser una experiencia espectacular todos los días, por eso trabajamos con productos frescos y recetas caseras que no fallan.',
    images: {
      desktop: '/assets-t1/nosotros-desktop.webp',
      tablet: '/assets-t1/nosotros-tablet.webp',
      mobile: '/assets-t1/nosotros-mobile.webp',
    },
  },
  menu: {
    title: 'Nuestro Menú Destacado',
    categories: ['Todo', 'Hamburguesas', 'Tacos', 'Opciones Veggie', 'Bebidas'],
    items: [
      {
        id: '1',
        title: 'Burger Clásica Doble',
        description: 'Doble medallón de carne, doble cheddar, panceta crocante y salsa especial.',
        price: '$8.900',
        imagePath: '/assets-t1/menu-burger-doble.webp',
        category: 'Hamburguesas'
      },
      {
        id: '2',
        title: 'Tacos al Pastor',
        description: 'Tres tacos de carne marinada, cebolla morada, cilantro y salsa picante a elección.',
        price: '$7.400',
        imagePath: '/assets-t1/menu-tacos.webp',
        category: 'Tacos'
      },
      {
        id: '3',
        title: 'Burger Crispy',
        description: 'Pechuga de pollo frita extra crujiente, lechuga fresca y mayonesa casera.',
        price: '$8.200',
        imagePath: '/assets-t1/menu-burger-crispy.webp',
        category: 'Hamburguesas'
      },
      {
        id: '4',
        title: 'Combo Wrap',
        description: 'Wrap de carne braseada con vegetales asados, acompañado de papas rústicas.',
        price: '$9.100',
        imagePath: '/assets-t1/menu-wrap.webp',
        category: 'Hamburguesas'
      },
      {
        id: '5',
        title: 'Veggie Burger',
        description: 'Medallón de lentejas y quinoa, rúcula, tomate confitado y lactonesa de zanahoria.',
        price: '$7.900',
        imagePath: '/assets-t1/menu-burger-veggie.webp',
        category: 'Opciones Veggie'
      },
      {
        id: '6',
        title: 'Sándwich Especial',
        description: 'Jamón crudo, queso brie y tomates secos en pan de masa madre tostado.',
        price: '$8.600',
        imagePath: '/assets-t1/menu-sandwich.webp',
        category: 'Opciones Veggie'
      }
    ]
  },
  stats: {
    title: 'Creemos en la calidad absoluta',
    items: [
      { value: '10K+', label: 'Pedidos entregados' },
      { value: '98%', label: 'Clientes felices' },
      { value: '5+', label: 'Años de experiencia' },
      { value: '50+', label: 'Opciones en el menú' },
    ],
  },
  events: {
    title: 'Llevamos Nuestro Sabor A Tus Eventos',
    description: '¿Tenés un cumpleaños, una juntada con amigos o un evento de fin de año? Nos encargamos de la comida para que vos solo te preocupes por disfrutar. Armamos presupuestos a medida con opciones que le van a encantar a todos tus invitados.',
    buttonText: 'Consultar para Eventos',
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        id: '1',
        name: 'Martín L',
        text: 'Las mejores hamburguesas de la zona por escándalo. El pan es súper esponjoso y la carne un 10. ¡El pedido por WhatsApp fue rapidísimo!',
        imagePath: '/assets-t1/review-martin.webp',
        rating: 5,
      },
      {
        id: '2',
        name: 'Laura G',
        text: 'Pedimos para una juntada y llegaron impecables. Muy buena atención por mensaje y la comida llegó caliente. Súper recomendables.',
        imagePath: '/assets-t1/review-laura.webp',
        rating: 5,
      },
      {
        id: '3',
        name: 'Sofía M',
        text: 'Me encantó la opción veggie. Súper sabrosa y se nota que usan ingredientes frescos de verdad. Ya es nuestro lugar de cabecera.',
        imagePath: '/assets-t1/review-sofia.webp',
        rating: 5,
      }
    ]
  },
  location: {
    title: 'Nuestro Local.\n¿Dónde Encontrarnos?',
    description: '¿Preferís pasar a buscar tu pedido (Take Away) o comer al paso? Te esperamos en nuestro local con la mejor onda y la comida recién salida de la plancha. Vení a conocernos.',
    buttonText: 'Hacer pedido para retirar',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52481.33230328221!2d-58.620025736195614!3d-34.69833598711422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc638a192fc4b%3A0xc3b869408b067a99!2sIsidro%20Casanova%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1714000000000!5m2!1ses-419!2sar'
  },
  contact: {
    whatsapp: '5491100000000',
    instagram: 'https://instagram.com/tulogo',
    facebook: 'https://facebook.com/tulogo',
  }
};