
// Definimos que solo existen estas 4 plantillas
export type TemplateType = 'template-1' | 'template-2' | 'template-3' | 'template-4';

export interface SocialLinks {
  whatsapp: string; // Obligatorio
  instagram?: string; // Opcional (por eso el signo de interrogación)
  facebook?: string;
}

export interface ClientData {
  templateId: TemplateType;
  businessName: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    images: {
      desktop: string;
      tablet: string;
      mobile: string;
  };
  contact: SocialLinks;
}