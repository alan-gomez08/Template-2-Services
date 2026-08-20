import type { ClientData } from '../types/index';

export const configT3: ClientData = {
  templateId: 'template-3',
  businessName: 'Tu Logo',
  theme: { primaryColor: '#2563EB', secondaryColor: '#0F172A' },
  
  hero: { 
    title: 'Soluciones\nCorporativas', 
    subtitle: 'Llevamos la contabilidad y el marco legal de tu empresa al siguiente nivel.', 
    buttonText: 'Agendar Asesoría', 
    images: { 
      desktop: '/assets-t3/hero-desktop.webp', 
      tablet: '/assets-t3/hero-tablet.webp', 
      mobile: '/assets-t3/hero-mobile.webp' 
    } 
  },
  
  // EQUIPO T3 (Usamos la sección About)
  about: { 
    title: 'El Estudio', 
    subtitle: '', 
    description: 'En nuestro estudio, entendemos que cada decisión financiera y legal impacta directamente en el crecimiento y la estabilidad de tu negocio. Por eso, contamos con más de 15 años de trayectoria en el mercado brindando asesoramiento integral a Pymes, emprendedores y grandes corporaciones. Nuestro enfoque trasciende la simple liquidación de impuestos o la redacción de contratos; nos posicionamos como verdaderos socios estratégicos de nuestros clientes.\n\nTrabajamos bajo una estricta filosofía basada en la prevención de conflictos, la atención personalizada y la actualización constante frente a los continuos cambios normativos.', 
    images: { desktop: '/assets-t3/estudio-equipo.webp', tablet: '/assets-t3/estudio-equipo.webp', mobile: '/assets-t3/estudio-equipo.webp' } 
  },
  
  // LISTA DE EQUIPO T3 (Usamos la sección Stats)
  stats: { 
    title: '', 
    items: [
      { value: '', label: 'Profesionales matriculados y en constante capacitación' },
      { value: '', label: 'Atención personalizada y respuestas ágiles' },
      { value: '', label: 'Confidencialidad y seguridad de datos absoluta' },
      { value: '', label: 'Visión integral estratégica del negocio' }
    ] 
  },

  // SERVICIOS T3 (Usamos la sección Menu)
  menu: { 
    title: 'Nuestras Especialidades', 
    // Usamos el primer elemento de categories para pasar el subtítulo de la sección
    categories: ['Soluciones integrales para la tranquilidad financiera y legal de tu negocio.'], 
    items: [
      { id: '1', title: 'Asesoría Contable', description: 'Liquidación de impuestos, balances y auditorías financieras para mantener tus números al día.', price: '', category: '', imagePath: '/assets-t3/icon-contable.svg' },
      { id: '2', title: 'Liquidación de Sueldos', description: 'Gestión de nóminas, cargas sociales y asesoramiento laboral continuo para tu equipo.', price: '', category: '', imagePath: '/assets-t3/icon-sueldos.svg' },
      { id: '3', title: 'Asesoramiento Legal', description: 'Constitución de sociedades, redacción de contratos y defensa corporativa.', price: '', category: '', imagePath: '/assets-t3/icon-legal.svg' },
      { id: '4', title: 'Monotributo', description: 'Altas, recategorizaciones y control mensual de facturación para trabajadores independientes.', price: '', category: '', imagePath: '/assets-t3/icon-monotributo.svg' },
      { id: '5', title: 'Planificación Fiscal', description: 'Análisis de rentabilidad y estrategias legales para optimizar la carga impositiva de tu empresa.', price: '', category: '', imagePath: '/assets-t3/icon-fiscal.svg' },
      { id: '6', title: 'Gestión de Trámites', description: 'Habilitaciones, certificaciones y representación integral ante organismos públicos y AFIP.', price: '', category: '', imagePath: '/assets-t3/icon-tramites.svg' }
    ] 
  },

  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { 
    title: 'Nuestras Oficinas.\nVisitanos', 
    description: 'Estamos ubicados en el centro estratégico para tu comodidad. Vení a tomar un café con nosotros y analicemos el estado de tu empresa cara a cara con total confidencialidad.', 
    buttonText: 'Agendar Reunión Presencial', 
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276848!2d-58.38375908477038!3d-34.60373888045942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11be2277a064115b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1680000000000!5m2!1ses-419!2sar' 
  },
  contact: { whatsapp: '5491100000000', instagram: '', facebook: '' }
};