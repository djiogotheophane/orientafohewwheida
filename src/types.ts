export type Language = 'fr' | 'en' | 'de';

export type Category = 'cleaning' | 'regulation' | 'supplementation';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: {
    fr: string;
    en: string;
    de: string;
  };
  benefits: {
    fr: string[];
    en: string[];
    de: string[];
  };
  composition: {
    fr: string[];
    en: string[];
    de: string[];
  };
  usage: {
    fr: string;
    en: string;
    de: string;
  };
  iconName: string; // Lucide icon name or type
  image?: string;
  tag?: {
    fr: string;
    en: string;
    de: string;
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  avatar: string;
  text: {
    fr: string;
    en: string;
    de: string;
  };
  role: {
    fr: string;
    en: string;
    de: string;
  };
}

export interface Appointment {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
  productOfInterest?: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
}
