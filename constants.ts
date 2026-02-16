
import { MenuItem, Partner, Event } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Drip Coffee', price: '3.50', category: 'Coffee', description: 'Rotating single-origin micro-roasts.' },
  { id: '2', name: 'Pour Over', price: '5.50', category: 'Coffee', description: 'V60 or Chemex preparation of our current featured bean.' },
  { id: '3', name: 'Espresso', price: '3.00', category: 'Espresso', description: 'Double shot of our seasonal espresso blend.' },
  { id: '4', name: 'Cappuccino', price: '4.50', category: 'Espresso', description: 'Equal parts espresso, steamed milk, and foam.' },
  { id: '5', name: 'Oat Milk Latte', price: '5.50', category: 'Espresso', description: 'Silky micro-foam with a creamy finish.' },
  { id: '6', name: 'Herbs & Kettles Tea', price: '4.50', category: 'Tea', description: 'Selection of direct-trade premium Indian teas.' },
  { id: '7', name: 'Birdhouse Tonic', price: '6.50', category: 'Specialty', description: 'Espresso, tonic water, rosemary, and seasonal citrus.' },
  { id: '8', name: 'Avocado Tartine', price: '12.00', category: 'Bites', description: 'Sourdough, radish, micro-greens, and chili oil.' },
  { id: '9', name: 'Seasonal Galette', price: '6.50', category: 'Pastries', description: 'Hand-folded pastry with seasonal Georgia fruit.' },
  { id: '10', name: 'Bianca Cavandi Pastry', price: '5.00', category: 'Pastries', description: 'Small-batch collaboration pastry.' },
];

export const PARTNERS: Partner[] = [
  { name: 'Dancing Goats', location: 'Decatur, GA', role: 'Roasting Partner' },
  { name: 'Portrait Coffee', location: 'Atlanta, GA', role: 'Roasting Partner' },
  { name: 'Chrome Yellow', location: 'Atlanta, GA', role: 'Roasting Partner' },
  { name: 'Herbs & Kettles', location: 'Atlanta, GA', role: 'Tea Partner' },
];

export const EVENTS: Event[] = [
  { 
    id: 'e1', 
    title: 'Thursday Coffee Tasting', 
    date: 'Every Thursday', 
    time: '10:00 AM', 
    description: 'Explore the nuances of different origins with our head roaster.', 
    price: '$12/person' 
  },
  { 
    id: 'e2', 
    title: 'Saturday Story Time', 
    date: 'Saturdays', 
    time: '9:30 AM', 
    description: 'A community favorite for the little ones in the Grange Hamlet.' 
  },
  { 
    id: 'e3', 
    title: 'Gallery Opening: Local Vistas', 
    date: 'First Fridays', 
    time: '6:00 PM', 
    description: 'New art exhibits featuring local Serenbe artists.' 
  }
];
