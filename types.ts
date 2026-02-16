
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: 'Coffee' | 'Espresso' | 'Tea' | 'Specialty' | 'Bites' | 'Pastries';
  technical?: {
    origin?: string;
    farm?: string;
    elevation?: string;
    process?: string;
    roastPartner?: string;
    notes?: string[];
  };
}

export interface Partner {
  name: string;
  location: string;
  role: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price?: string;
  capacity?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export type Page = 'home' | 'menu' | 'about' | 'market' | 'events' | 'visit';
