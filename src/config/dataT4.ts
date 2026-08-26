import type { ClientData } from '../types/index';

export const configT4: ClientData = {
  templateId: 'template-4',
  businessName: 'Tu Logo',
  theme: { primaryColor: '#059669', secondaryColor: '#F8FAFC' },
  
  hero: { 
    title: 'Eliminación Profesional de Moho', 
    subtitle: 'Proteja su hogar y su salud con nuestro servicio experto de remoción de moho. Soluciones seguras, efectivas y permanentes.', 
    buttonText: 'Solicitar Cotización Gratis', 
    images: { 
      desktop: '/assets-t4/hero-t4.webp', 
      tablet: '/assets-t4/hero-t4.webp', 
      mobile: '/assets-t4/hero-t4.webp' 
    } 
  },
  
  // Usamos el "About" para pasar los títulos de Beneficios
  about: { 
    title: '¿Por Qué Elegirnos?', 
    subtitle: 'Nos comprometemos a proporcionar el mejor servicio de eliminación de moho con resultados garantizados.', 
    description: '', 
    images: { desktop: '', tablet: '', mobile: '' } 
  },
  
  // Usamos el "Menu" para concentrar todas las grillas (Servicios, Beneficios y Compromisos)
  menu: { 
    title: 'Nuestros Servicios Especializados', 
    categories: ['Ofrecemos soluciones completas de eliminación de moho con tecnología de punta y personal altamente capacitado.'], 
    items: [
      // --- SERVICIOS ---
      { id: 's1', title: 'Remoción de Moho', description: 'Eliminación completa de moho negro, verde y blanco de todas las superficies de su propiedad con técnicas especializadas.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-remocion.svg' },
      { id: 's2', title: 'Inspección y Análisis', description: 'Evaluación profesional con equipos de detección avanzados para identificar moho oculto en paredes, techos y espacios.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-inspeccion.svg' },
      { id: 's3', title: 'Purificación del Aire', description: 'Limpieza del aire con sistemas HEPA para eliminar esporas de moho y mejorar la calidad del aire interior.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-purificacion.svg' },
      { id: 's4', title: 'Tratamiento Residencial', description: 'Servicios especializados para hogares, sótanos, áticos, baños y áreas propensas a humedad.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-residencial.svg' },
      { id: 's5', title: 'Servicios Comerciales', description: 'Soluciones para oficinas, restaurantes, hoteles y propiedades comerciales con mínima interrupción operativa.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-comercial.svg' },
      { id: 's6', title: 'Prevención y Sellado', description: 'Tratamientos preventivos y sellado de áreas para evitar el crecimiento futuro de moho y hongos.', price: '', category: 'servicios', imagePath: '/assets-t4/icon-prevencion.svg' },
      
      // --- BENEFICIOS ---
      { id: 'b1', title: 'Protección de la Salud', description: 'Elimine riesgos respiratorios, alergias y problemas de salud causados por la exposición al moho.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-salud.svg' },
      { id: 'b2', title: 'Soluciones Seguras', description: 'Utilizamos productos eco-amigables y métodos seguros aprobados por la EPA para su familia y mascotas.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-seguridad.svg' },
      { id: 'b3', title: 'Servicio Rápido', description: 'Completamos la mayoría de los trabajos en 1-3 días con mínima interrupción a su rutina diaria.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-rapidez.svg' },
      { id: 'b4', title: 'Garantía Extendida', description: 'Garantía de satisfacción con seguimiento gratuito para asegurar que el moho no regrese.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-garantia.svg' },
      { id: 'b5', title: 'Eco-Amigable', description: 'Productos biodegradables y procesos sostenibles que cuidan el medio ambiente.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-eco.svg' },
      { id: 'b6', title: 'Equipo Experto', description: 'Técnicos certificados por IICRC con capacitación continua en las últimas técnicas.', price: '', category: 'beneficios', imagePath: '/assets-t4/beneficio-equipo.svg' },
      
      // --- COMPROMISOS ---
      { id: 'c1', title: 'Certificaciones Profesionales', description: 'Certificados por IICRC y cumplimos con todas las normas de la industria.', price: '', category: 'compromisos', imagePath: '/assets-t4/compromiso-certificacion.svg' },
      { id: 'c2', title: '100% Asegurados', description: 'Cobertura completa de responsabilidad civil para su tranquilidad.', price: '', category: 'compromisos', imagePath: '/assets-t4/compromiso-seguro.svg' },
      { id: 'c3', title: 'Satisfacción Garantizada', description: 'No quedará satisfecho hasta que usted lo esté.', price: '', category: 'compromisos', imagePath: '/assets-t4/compromiso-satisfaccion.svg' }
    ] 
  },

  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: { whatsapp: '5491100000000', instagram: '', facebook: '' }
};