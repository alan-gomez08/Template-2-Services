import type { ClientData } from '../types/index';

export const configT3: ClientData = {
  templateId: 'template-3',
  businessName: 'Template 3',
  theme: { primaryColor: '#000000', secondaryColor: '#ffffff' },
  hero: { title: '', subtitle: '', buttonText: '', images: { desktop: '', tablet: '', mobile: '' } },
  about: { title: '', subtitle: '', description: '', images: { desktop: '', tablet: '', mobile: '' } },
  menu: { title: '', categories: [], items: [] },
  stats: { title: '', items: [] },
  events: { title: '', description: '', buttonText: '' },
  testimonials: { title: '', items: [] },
  location: { title: '', description: '', buttonText: '', mapEmbedUrl: '' },
  contact: { whatsapp: '', instagram: '', facebook: '' }
};