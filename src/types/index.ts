export interface ClientData {
  templateId: string;
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
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
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
  };
  testimonials: {
    title: string;
    items: {
      id: string;
      name: string;
      text: string;
      imagePath: string;
      rating: number;
    }[];
  };
  location: {
    title: string;
    description: string;
    buttonText: string;
    mapEmbedUrl: string;
  };
  contact: {
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}