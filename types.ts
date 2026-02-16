
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: 'Coffee' | 'Espresso' | 'Tea' | 'Specialty' | 'Bites' | 'Pastries';
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
}

export type Page = 'home' | 'menu' | 'about' | 'market' | 'events' | 'visit';
