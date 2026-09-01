export interface ClientData {
  templateId?: string;
  businessName: string;
  
  // Configuraciones generales (Template 2)
  config?: {
    modulo?: string;
    mostrarPrecios?: boolean;
    agendaModo?: string;
    agendaLink?: string;
    [key: string]: any;
  };
  
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };

  // Navegación dinámica (Template 3)
  nav?: {
    links?: { name: string; href: string }[];
    buttonText?: string;
  };

  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonType?: string; // Nuevo
    buttonUrl?: string;  // Nuevo
    images: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };

  about: {
    title: string;
    subtitle?: string;
    description: string;
    buttonText?: string; // Nuevo
    buttonType?: string; // Nuevo
    buttonUrl?: string;  // Nuevo
    images: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };

  menu: {
    title: string;
    categories: string[];
    items: {
      id: string;
      title: string;
      description: string;
      price: string;
      imagePath: string;
      category: string;
      colores?: string[]; // Nuevo
      talles?: string[];  // Nuevo
    }[];
  };

  stats: {
    title: string;
    items: {
      value: string;
      label: string;
    }[];
  };

  events: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string; // Nuevo
    buttonUrl?: string;  // Nuevo
    images?: string[];   // Nuevo
  };

  // Sección Inspiración (Template 2)
  inspiracion?: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    buttonType?: string;
    buttonUrl?: string;
    images?: string[];
  };

  // Preguntas Frecuentes (Template 3)
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Call to Action (Template 3)
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string;
    buttonUrl?: string;
  };

  testimonials: {
    title: string;
    items: {
      id?: string;
      name: string;
      text?: string;
      content?: string; // Nuevo T2/T3
      role?: string;    // Nuevo T2/T3
      imagePath?: string;
      avatar?: string;  // Nuevo T2/T3
      bgImage?: string; // Nuevo T2/T3
      rating?: number;
    }[];
  };

  location: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string; // Nuevo
    buttonUrl?: string;  // Nuevo
    mapEmbedUrl: string;
  };

  contact: {
    whatsapp: string;
    instagram?: string;
    facebook?: string;
  };
}