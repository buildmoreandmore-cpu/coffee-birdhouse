
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import InteractiveMap from './components/InteractiveMap';
import { Page } from './types';
import { MENU_ITEMS, PARTNERS, EVENTS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Coffee, Utensils, Calendar, Map as MapIcon, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero onExplore={() => setCurrentPage('menu')} />
      
      {/* The Room - Story Section */}
      <Section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] bg-linen overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior of Birdhouse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-sage font-semibold tracking-widest uppercase text-sm">The Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              A biophilic refuge for the senses.
            </h2>
            <p className="text-lg text-espresso/80 leading-relaxed font-light">
              Located in the Grange Hamlet at Serenbe, our space is designed to bridge the gap between nature and the everyday. With ever-changing local art exhibits and the warm glow of natural light, every corner of Birdhouse is an invitation to pause.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setCurrentPage('about')}
                className="group flex items-center gap-4 text-espresso font-bold uppercase tracking-widest text-sm"
              >
                Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform text-terracotta" size={20} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Roasts */}
      <Section dark className="bg-espresso">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Craft & Origin</span>
            <h2 className="text-4xl md:text-6xl font-serif text-cream">What We're Pouring</h2>
          </div>
          <p className="text-cream/60 max-w-sm font-light">
            We micro-roast in-house and collaborate with Georgia's finest ethical roasters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Single Origin Ethiopia', notes: 'Jasmine, Peach, Honey', tag: 'Light Roast' },
            { name: 'Birdhouse Blend', notes: 'Dark Chocolate, Toasted Almond', tag: 'Signature' },
            { name: 'Guest: Portrait Coffee', notes: 'Caramel, Fig, Pecan', tag: 'Atlanta Local' }
          ].map((roast, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-cream/5 border border-cream/10 rounded-sm hover:border-gold/30 transition-all duration-500"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{roast.tag}</div>
              <h3 className="text-2xl font-serif text-cream mb-4">{roast.name}</h3>
              <p className="text-sm text-cream/50 mb-8 italic">{roast.notes}</p>
              <div className="h-px w-12 bg-gold/50" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Market */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm">The Market</span>
            <h2 className="text-4xl md:text-5xl font-serif">Take the feeling home.</h2>
            <p className="text-lg font-light leading-relaxed">
              Our curated market features bags of our whole-bean roasts, designer brewing equipment, and artisanal goods sourced from the local Georgia community.
            </p>
            <button 
              onClick={() => setCurrentPage('market')}
              className="px-8 py-3 bg-espresso text-cream text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
            >
              Shop the Market
            </button>
          </div>
          <div className="lg:col-span-7">
             <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] overflow-hidden"><img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" /></div>
               <div className="aspect-[3/4] overflow-hidden mt-12"><img src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" /></div>
             </div>
          </div>
        </div>
      </Section>

      {/* Events & Community */}
      <Section className="bg-sage/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Grange Hamlet Happenings</h2>
          <p className="text-espresso/60 uppercase tracking-widest text-xs font-bold">More than coffee. Community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-cream p-10 border-b-2 border-sage/20 hover:border-terracotta transition-colors shadow-sm">
              <div className="text-xs font-bold text-terracotta uppercase tracking-widest mb-2">{event.date} • {event.time}</div>
              <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
              <p className="text-sm text-espresso/70 mb-6">{event.description}</p>
              {event.price && <div className="text-xs font-medium bg-linen inline-block px-3 py-1 rounded-full">{event.price}</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* Find Us / Location */}
      <Section className="pb-0!">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-20 lg:pr-20">
            <h2 className="text-4xl font-serif mb-8">Come say hello.</h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">Location</h4>
                <p className="text-xl font-light">
                  10625 Serenbe Lane, Unit A<br />
                  Chattahoochee Hills, GA 30268
                </p>
                <p className="text-sm text-espresso/60 mt-2">
                  Located behind Hills & Hamlets Bookstore in the Grange Hamlet.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">Daily Hours</h4>
                   <p className="text-lg font-light">7:30 AM – 2:00 PM</p>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-4">Phone</h4>
                   <p className="text-lg font-light">(470) 756-5894</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b-2 border-espresso pb-2 hover:text-terracotta hover:border-terracotta transition-all"
              >
                Get Directions <MapIcon size={16} />
              </a>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto min-h-[500px] relative overflow-hidden bg-linen shadow-inner">
            <InteractiveMap />
          </div>
        </div>
      </Section>
    </>
  );

  const renderMenu = () => {
    const categories = ['Coffee', 'Espresso', 'Tea', 'Specialty', 'Bites', 'Pastries'];
    return (
      <div className="pt-32 bg-cream min-h-screen">
        <Section className="pb-12">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-4 block">Crafted with Intention</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-espresso">The Menu</h1>
            <p className="text-lg font-light leading-relaxed text-espresso/70">
              We source our beans through ethical partnerships, focusing on small-batch roasts that highlight the unique terroir of each origin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {categories.map(cat => (
              <div key={cat} className="space-y-10">
                <div className="flex items-center gap-4 border-b border-espresso/10 pb-4">
                  <h3 className="text-3xl font-serif text-espresso">{cat}</h3>
                  <div className="h-[1px] flex-grow bg-espresso/10" />
                </div>
                <div className="space-y-8">
                  {MENU_ITEMS.filter(item => item.category === cat).map(item => (
                    <div key={item.id} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-lg font-serif italic text-roast">${item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-espresso/60 font-light leading-snug">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Roasting Partners */}
        <Section className="bg-linen py-20">
          <div className="text-center mb-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-sage mb-2">Our Sourcing Philosophy</h4>
            <h3 className="text-3xl font-serif">Community Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
            {PARTNERS.map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-serif text-espresso mb-1">{p.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-espresso/40">{p.location}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    );
  };

  const renderSimplePage = (title: string, content: string) => (
    <div className="pt-40 min-h-screen bg-cream">
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-6xl md:text-8xl font-serif text-espresso">{title}</h1>
          <p className="text-xl md:text-2xl font-light text-espresso/70 leading-relaxed italic">
            "{content}"
          </p>
          <div className="w-24 h-px bg-terracotta" />
          <div className="space-y-8 text-lg font-light leading-relaxed">
            <p>Our website is currently being refreshed to better serve the Serenbe community. Check back soon for the full experience.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-espresso pb-1"
            >
              Return Home <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );

  return (
    <div className="font-sans selection:bg-terracotta/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentPage === 'home' && renderHome()}
            {currentPage === 'menu' && renderMenu()}
            {currentPage === 'about' && renderSimplePage('Our Story', 'Rooted in nature, community, craft, and art.')}
            {currentPage === 'market' && renderSimplePage('The Market', 'Small-batch goods and fine roasts delivered to your door.')}
            {currentPage === 'events' && renderSimplePage('Gathering', 'Workshops, tastings, and storytelling for all ages.')}
            {currentPage === 'visit' && renderSimplePage('Visit Us', 'Experience the unhurried life at Serenbe.')}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
