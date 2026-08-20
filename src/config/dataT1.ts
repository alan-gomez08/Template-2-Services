import type { ClientData } from '../types/index';

export const configT1: ClientData = {
  templateId: 'template-1',
  businessName: 'Tu Logo',
  theme: { primaryColor: '#ffffff', secondaryColor: '#111827' },
  hero: {
    title: 'Bienvenidos!\nPreparamos El\nMejor Sabor Para\nVos.',
    subtitle: 'Ingredientes frescos, recetas auténticas y una pasión genuina por la comida. ¡Descubrí tu nuevo plato favorito con nosotros!',
    buttonText: 'Hacer Pedido por WhatsApp',
    images: { desktop: '/assets-t1/hero-desktop.webp', tablet: '/assets-t1/hero-tablet.webp', mobile: '/assets-t1/hero-mobile.webp' },
  },
  about: { 
    title: '¿Por qué elegir nuestra cocina?', 
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    description: 'Creemos que la verdadera magia ocurre en la cocina. Por eso elegimos cuidadosamente cada ingrediente, priorizando la frescura y la calidad en cada paso de nuestra preparación. Queremos que cada bocado sea una experiencia memorable y única para vos, brindando el mejor servicio y los platos más sabrosos.', 
    images: { desktop: '/assets-t1/nosotros-desktop.webp', tablet: '/assets-t1/nosotros-tablet.webp', mobile: '/assets-t1/nosotros-mobile.webp' } 
  },
  
  menu: { 
    title: 'Nuestro Menú Destacado', 
    categories: ['Destacados', 'Hamburguesas', 'Tacos', 'Opciones Veggie', 'Bebidas'], 
    items: [
      // === DESTACADOS (6 Ítems) ===
      { id: '1', title: 'Burger Clásica Doble', description: 'Doble carne, doble queso cheddar, lechuga, tomate y salsa especial.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-burger-doble.webp' },
      { id: '2', title: 'Tacos al Pastor', description: 'Tres tacos de carne marinada, cebolla, cilantro fresco y un toque de lima.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-tacos.webp' },
      { id: '3', title: 'Burger Crispy', description: 'Doble medallón frito extra crujiente, lechuga, tomate y nuestra salsa casera.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-burger-crispy.webp' },
      { id: '4', title: 'Combo Wrap', description: 'Wrap de carne asada con papas fritas y bebida a elección.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-wrap.webp' },
      { id: '5', title: 'Veggie Burger', description: 'Medallón de lentejas y quinoa, rúcula, tomate, cebolla morada y mayonesa vegana.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-burger-veggie.webp' },
      { id: '6', title: 'Sándwich Especial', description: 'Jamón, queso, huevo, tomate y lechuga en pan de masa madre tostado.', price: '', category: 'Destacados', imagePath: '/assets-t1/menu-sandwich.webp' },
      
      // === HAMBURGUESAS (6 Ítems) ===
      { id: '7', title: 'Cheeseburger Simple', description: 'Medallón de carne de 120g, doble queso cheddar y aderezo de la casa.', price: '', category: 'Hamburguesas', imagePath: '' },
      { id: '8', title: 'Bacon BBQ Burger', description: 'Carne, cheddar, panceta ahumada, aros de cebolla y salsa barbacoa.', price: '', category: 'Hamburguesas', imagePath: '' },
      { id: '9', title: 'Smash Burger', description: 'Dos medallones smash con costra perfecta, queso dambo y cebolla.', price: '', category: 'Hamburguesas', imagePath: '' },
      { id: '10', title: 'Pollo Crispy Burger', description: 'Pechuga de pollo frita extracrujiente, lechuga iceberg y mayonesa.', price: '', category: 'Hamburguesas', imagePath: '' },
      { id: '11', title: 'Burger Blue Cheese', description: 'Medallón de carne, queso azul fundido, rúcula y cebolla caramelizada.', price: '', category: 'Hamburguesas', imagePath: '' },
      { id: '12', title: 'Mega Cuádruple', description: 'Para valientes: 4 carnes, 4 quesos, bacon y huevo frito.', price: '', category: 'Hamburguesas', imagePath: '' },

      // === TACOS (6 Ítems) ===
      { id: '13', title: 'Tacos de Birria', description: 'Carne de res cocinada a fuego lento, con consomé para mojar.', price: '', category: 'Tacos', imagePath: '' },
      { id: '14', title: 'Tacos de Carnitas', description: 'Cerdo confitado tradicional, cilantro, cebolla y salsa verde.', price: '', category: 'Tacos', imagePath: '' },
      { id: '15', title: 'Tacos de Pollo Asado', description: 'Pollo marinado al grill con pico de gallo y guacamole fresco.', price: '', category: 'Tacos', imagePath: '' },
      { id: '16', title: 'Tacos Dorados', description: 'Tacos fritos crujientes rellenos de pollo, cubiertos con crema y queso.', price: '', category: 'Tacos', imagePath: '' },
      { id: '17', title: 'Tacos de Pescado', description: 'Pescado rebozado, repollo morado y aderezo de chipotle.', price: '', category: 'Tacos', imagePath: '' },
      { id: '18', title: 'Tacos de Suadero', description: 'Carne de suadero suave y jugosa, servida con limón y salsa roja.', price: '', category: 'Tacos', imagePath: '' },

      // === OPCIONES VEGGIE (6 Ítems) ===
      { id: '19', title: 'Wrap de Falafel', description: 'Falafel casero, hummus, tomate, pepino y salsa tahini en pan pita.', price: '', category: 'Opciones Veggie', imagePath: '' },
      { id: '20', title: 'NotBurger Clásica', description: 'Medallón plant-based, queso vegetal, tomate y lechuga capuchina.', price: '', category: 'Opciones Veggie', imagePath: '' },
      { id: '21', title: 'Tacos de Setas', description: 'Setas salteadas al ajillo, guacamole y pico de gallo en tortilla de maíz.', price: '', category: 'Opciones Veggie', imagePath: '' },
      { id: '22', title: 'Ensalada Fresca', description: 'Mix de verdes, palta, cherrys, semillas y aderezo de mostaza y miel.', price: '', category: 'Opciones Veggie', imagePath: '' },
      { id: '23', title: 'Nuggets de Garbanzo', description: 'Porción de 8 nuggets crocantes a base de garbanzos con salsa alioli.', price: '', category: 'Opciones Veggie', imagePath: '' },
      { id: '24', title: 'Sándwich de Tofu', description: 'Tofu marinado a la plancha, vegetales grillados y pan integral.', price: '', category: 'Opciones Veggie', imagePath: '' },

      // === BEBIDAS (6 Ítems) ===
      { id: '25', title: 'Cerveza IPA Artesanal', description: 'Pinta de cerveza tirada, estilo India Pale Ale, notas cítricas.', price: '', category: 'Bebidas', imagePath: '' },
      { id: '26', title: 'Limonada con Menta', description: 'Exprimida en el momento con hojas de menta fresca y jengibre.', price: '', category: 'Bebidas', imagePath: '' },
      { id: '27', title: 'Gaseosa Línea Cola', description: 'Lata de 354ml, regular o sin azúcar.', price: '', category: 'Bebidas', imagePath: '' },
      { id: '28', title: 'Agua Mineral', description: 'Botella de 500ml, con o sin gas.', price: '', category: 'Bebidas', imagePath: '' },
      { id: '29', title: 'Jugo de Naranja', description: 'Jugo 100% natural exprimido de naranjas frescas.', price: '', category: 'Bebidas', imagePath: '' },
      { id: '30', title: 'Cerveza Lager Rubia', description: 'Pinta de cerveza tirada, suave, ligera y refrescante.', price: '', category: 'Bebidas', imagePath: '' }
    ] 
  },
  stats: { title: 'Creemos en la calidad absoluta', items: [{ value: '10K+', label: 'Pedidos entregados' }, { value: '98%', label: 'Clientes felices' }, { value: '5+', label: 'Años de experiencia' }, { value: '50+', label: 'Opciones en el menú' }] },
  events: { title: 'Llevamos Nuestro Sabor A Tus Eventos', description: '¿Tenés un cumpleaños, una juntada con amigos o un evento de fin de año? Nos encargamos de la comida para que vos solo te preocupes por disfrutar. Armamos un presupuesto a medida con las opciones que a vos más te gusten para tus invitados.', buttonText: 'Consultar por Eventos' },
  testimonials: { 
    title: 'Lo que dicen nuestros clientes', 
    items: [
      { 
        id: '1',
        name: 'Mateo J.', 
        rating: 5, 
        text: 'La mejor hamburguesa que probé en mi vida. La carne en su punto exacto y las papas súper crujientes. ¡10/10, sin dudas los vuelvo a elegir!',
        imagePath: '/assets-t1/review-martin.webp' 
      },
      { 
        id: '2',
        name: 'Laura C.', 
        rating: 5, 
        text: 'Excelente servicio. El pedido llegó súper rápido, caliente y todo estaba riquísimo. Súper recomendados y la atención es de primera.',
        imagePath: '/assets-t1/review-laura.webp'
      },
      { 
        id: '3',
        name: 'Sofía M.', 
        rating: 5, 
        text: 'Soy vegetariana y me cuesta encontrar opciones ricas. La veggie burger de acá es una locura, súper sabrosa y con ingredientes frescos de verdad.',
        imagePath: '/assets-t1/review-sofia.webp'
      }
    ] 
  },
  location: { title: 'Nuestro Local.\n¿Dónde Encontrarnos?', description: '¿Preferís pasar a buscar tu pedido? Estás invitado a conocer nuestro local, con un ambiente cálido y la mejor atención. Encontrá la sucursal más cercana y vení a visitarnos.', buttonText: 'Hacer pedido para retirar', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276848!2d-58.38375908477038!3d-34.60373888045942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11be2277a064115b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1680000000000!5m2!1ses-419!2sar' },
  contact: { whatsapp: '5491100000000', instagram: 'tu_instagram', facebook: 'tu_facebook' }
};