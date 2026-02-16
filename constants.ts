
import { MenuItem, Partner, Event, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { 
    id: '1', 
    name: 'Single Origin Drip', 
    price: '4.25', 
    category: 'Coffee', 
    description: 'A rotating showcase of seasonal micro-lots.',
    technical: {
      origin: 'Ethiopia, Sidama',
      farm: 'Bensa Cooperative',
      elevation: '2,000 - 2,200 MASL',
      process: 'Natural / Dry Processed',
      roastPartner: 'Portrait Coffee',
      notes: ['Bergamot', 'Wild Strawberry', 'Earl Grey']
    }
  },
  { 
    id: '2', 
    name: 'Precision Pour Over', 
    price: '6.50', 
    category: 'Coffee', 
    description: 'Meticulously brewed via V60 to highlight delicate acidity.',
    technical: {
      origin: 'Colombia, Huila',
      farm: 'Finca La Reserva',
      process: 'Extended Fermentation Honey',
      roastPartner: 'Chrome Yellow',
      notes: ['Tropical Fruit', 'Cacao Nib', 'Cane Sugar']
    }
  },
  { 
    id: '3', 
    name: 'Signature Espresso', 
    price: '3.50', 
    category: 'Espresso', 
    description: 'Our house profile: balanced, sweet, and structurally sound.',
    technical: {
      origin: 'Brazil & Guatemala Blend',
      process: 'Mixed',
      roastPartner: 'Birdhouse (In-House)',
      notes: ['Toasted Almond', 'Dark Chocolate', 'Stone Fruit']
    }
  },
  { 
    id: '6', 
    name: 'Herbs & Kettles Nilgiri', 
    price: '5.00', 
    category: 'Tea', 
    description: 'Direct-trade premium Indian tea with exceptional clarity.',
    technical: {
      origin: 'Nilgiri Hills, India',
      process: 'High-Grown Orthodox',
      notes: ['Honeyed Apricot', 'Floral', 'Smooth Finish']
    }
  },
  { id: '8', name: 'Sourdough Tartine', price: '12.00', category: 'Bites', description: 'Local sourdough, radish, micro-greens, and Aleppo chili oil.' },
  { id: '10', name: 'Bianca Cavandi Pastry', price: '6.00', category: 'Pastries', description: 'Small-batch laminated pastry from our seasonal collaborator.' },
];

export const EVENTS: Event[] = [
  { 
    id: 'e1', 
    title: 'Thursday Cupping Lab', 
    date: 'Every Thursday', 
    time: '10:00 AM', 
    description: 'An intimate, technical exploration of our current roast rotation. Learn to identify defects and flavor markers like a pro.', 
    price: '$12/person',
    capacity: '12 Seats Only'
  },
  { 
    id: 'e2', 
    title: 'Saturday Story Time', 
    date: 'Saturdays', 
    time: '9:30 AM', 
    description: 'A Serenbe community staple. Warm milk, fresh pastries, and unhurried local tales for the little ones.' 
  },
  { 
    id: 'e3', 
    title: 'Artisan Dialogue: Bianca Cavandi', 
    date: 'March 14th', 
    time: '11:00 AM', 
    description: 'A deep-dive into the science of lamination and the craft of seasonal pastry collaboration.',
    capacity: 'Limited Entry'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', quote: "Finally, a shop that cares about the science of the extraction, not just the aesthetic of the cup.", author: "James T., Coffee Professional" },
  { id: 't2', quote: "The Sidama natural was perfectly dialed. No marketing fluff—just exceptional sourcing.", author: "Sarah L., Home Brewer" },
  { id: 't3', quote: "Birdhouse is the heartbeat of Grange Hamlet. Every visit feels like coming home.", author: "Serenbe Resident" }
];

export const PARTNERS: Partner[] = [
  { name: 'Dancing Goats', location: 'Decatur, GA', role: 'Roasting Partner' },
  { name: 'Portrait Coffee', location: 'Atlanta, GA', role: 'Roasting Partner' },
  { name: 'Chrome Yellow', location: 'Atlanta, GA', role: 'Roasting Partner' },
  { name: 'Herbs & Kettles', location: 'Atlanta, GA', role: 'Tea Partner' },
];
