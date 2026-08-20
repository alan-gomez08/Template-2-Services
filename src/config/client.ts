import type { ClientData } from '../types/index';

export const clientConfig: ClientData = {
  templateId: 'template-4', // Activamos el Template 4
  businessName: 'Tu Logo',
  theme: {
    primaryColor: '#059669', // Emerald 600
    secondaryColor: '#f8fafc', 
  },
  hero: {
    title: 'Eliminación Profesional de Moho',
    subtitle: 'Proteja su hogar y su salud con nuestro servicio experto de remoción de moho. Soluciones seguras, efectivas y permanentes.',
    buttonText: 'Contactar por WhatsApp',
    images: {
      desktop: '/assets-t4/hero-t4.webp',
      tablet: '/assets-t4/hero-t4.webp',
      mobile: '/assets-t4/hero-t4.webp',
    },
  },
  // Mantenemos el resto vacío o con datos anteriores, los actualizaremos luego
  about: { title: '', subtitle: '', description: '', images: { desktop: '', tablet: '', mobile: '' } },
  menu: { title: '', categories: [], items: [] },
  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: {
    whatsapp: '5491100000000',
    instagram: '',
    facebook: '',
  }
};