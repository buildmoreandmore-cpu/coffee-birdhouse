
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import InteractiveMap from './components/InteractiveMap';
import { Page } from './types';
import { MENU_ITEMS, PARTNERS, EVENTS, TESTIMONIALS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Coffee, Info, Star, Map as MapIcon, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero onExplore={() => setCurrentPage('menu')} />
      
      {/* From the Roaster Spotlight */}
      <Section className="!py-0 relative z-20">
        <div className="bg-linen max-w-4xl mx-auto -mt-20 p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Coffee size={120} />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs">From the Roaster</span>
            <h2 className="text-3xl md:text-4xl font-serif text-espresso leading-tight">
              Current Spotlight: Ethiopia Sidama Bensa
            </h2>
            <p className="text-lg text-espresso/80 leading-relaxed font-light">
              "This natural process micro-lot from the Bensa Cooperative represents the peak of high-elevation clarity. We selected this specific roast from Portrait Coffee for its remarkable bergamot florality and strawberry jam acidity. It's the anti-hype coffee—pure, transparent, and technically superb."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-espresso/10">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-1">Elevation</span>
                <span className="text-sm font-medium">2,200 MASL</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-1">Process</span>
                <span className="text-sm font-medium">Natural</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-1">Partner</span>
                <span className="text-sm font-medium">Portrait Coffee</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-1">Notes</span>
                <span className="text-sm font-medium">Floral, Berry</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Room - Story Section */}
      <Section className="relative mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-linen overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
                  alt="Birdhouse Interior" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 px-8 py-6 bg-cream shadow-xl hidden md:block">
                <p className="font-serif italic text-lg text-espresso">"A biophilic refuge."</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-10">
            <span className="text-sage font-bold tracking-[0.3em] uppercase text-xs">Biophilic Space</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-espresso">
              The anti-hype <br /><span className="text-terracotta">gathering place.</span>
            </h2>
            <p className="text-xl text-espresso/70 leading-relaxed font-light">
              Birdhouse isn't just a coffee shop. It's a curated environment where Serenbe's wellness philosophy meets precision craft. Our rotating art exhibits and light-filled corners are designed for unhurried connection. You need to feel this space in person to understand the gap between looking and being.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => setCurrentPage('about')}
                className="group flex items-center gap-6 text-espresso font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-espresso pb-2 hover:border-terracotta hover:text-terracotta transition-all"
              >
                Our Sourcing Philosophy <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* What We're Pouring - Technical Preview */}
      <Section dark className="bg-warmblack">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">The Lab Rotation</span>
            <h2 className="text-5xl md:text-7xl font-serif text-cream leading-tight">What We're Pouring</h2>
          </div>
          <p className="text-cream/40 text-lg font-light max-w-xs border-l border-gold/20 pl-8 leading-relaxed">
            Meticulously dialed profiles. No generic claims. Just pure, honest origin stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU_ITEMS.filter(i => i.technical).map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="group p-10 bg-cream/[0.03] border border-cream/10 rounded-sm hover:border-gold/40 transition-all duration-500"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8 flex justify-between items-center">
                <span>{item.category}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Technical</span>
              </div>
              <h3 className="text-2xl font-serif text-cream mb-6">{item.name}</h3>
              <div className="space-y-4 text-xs font-light text-cream/50 mb-10">
                <div className="flex justify-between border-b border-cream/5 pb-2">
                  <span>Origin</span>
                  <span className="text-cream/80">{item.technical?.origin}</span>
                </div>
                <div className="flex justify-between border-b border-cream/5 pb-2">
                  <span>Partner</span>
                  <span className="text-cream/80">{item.technical?.roastPartner}</span>
                </div>
                <div className="flex justify-between">
                  <span>Process</span>
                  <span className="text-cream/80">{item.technical?.process}</span>
                </div>
              </div>
              <p className="text-sm italic text-gold/80 mb-8 leading-relaxed">
                Notes: {item.technical?.notes?.join(', ')}
              </p>
              <div className="h-[2px] w-12 bg-gold/30 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof - Authentic Reactions */}
      <Section className="bg-linen/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="space-y-6">
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-xl font-serif text-espresso leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold">— {t.author}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Events & Community - Scarcity Driven */}
      <Section className="bg-sage/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
             <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Intimate Gatherings</span>
             <h2 className="text-5xl font-serif text-espresso">Grange Hamlet Events</h2>
          </div>
          <p className="text-espresso/60 text-sm tracking-widest uppercase font-bold border-b border-terracotta pb-2">Limited Availability</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative bg-cream p-12 shadow-sm border-t-4 border-espresso hover:border-terracotta transition-all duration-500">
              {event.capacity && (
                <div className="absolute top-0 right-0 bg-terracotta text-cream px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {event.capacity}
                </div>
              )}
              <div className="text-xs font-bold text-terracotta uppercase tracking-widest mb-6">{event.date} • {event.time}</div>
              <h3 className="text-3xl font-serif mb-6 group-hover:text-terracotta transition-colors">{event.title}</h3>
              <p className="text-base text-espresso/70 mb-10 leading-relaxed font-light">{event.description}</p>
              <div className="flex items-center justify-between">
                {event.price && <span className="text-sm font-bold text-espresso">{event.price}</span>}
                <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Find Us / Visit */}
      <Section className="pb-0! pt-0!">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          <div className="lg:col-span-5 py-32 lg:pr-24">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Plan Your Visit</span>
            <h2 className="text-5xl font-serif mb-12 text-espresso">Experience Birdhouse.</h2>
            <div className="space-y-16">
              <div className="group">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-6 flex items-center gap-3">
                   <div className="w-8 h-[1px] bg-terracotta" /> The Hamlet
                </h4>
                <p className="text-2xl font-light leading-snug">
                  10625 Serenbe Lane, Unit A<br />
                  Chattahoochee Hills, GA 30268
                </p>
                <p className="text-sm text-espresso/50 mt-6 leading-relaxed max-w-sm italic">
                  Find us tucked behind Hills & Hamlets Bookstore. About 45 unhurried minutes from Atlanta.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-4">Daily Ritual</h4>
                   <p className="text-xl font-light">7:30 AM – 2:00 PM</p>
                </div>
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-4">Connect</h4>
                   <a href="tel:4707565894" className="text-xl font-light hover:text-terracotta transition-colors">(470) 756-5894</a>
                </div>
              </div>
              <div className="pt-8">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-6 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all shadow-lg"
                >
                  Get Directions <MapIcon size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] lg:h-auto relative bg-linen overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-1000">
            <InteractiveMap />
          </div>
        </div>
      </Section>
    </>
  );

  const renderMenu = () => {
    const categories = ['Coffee', 'Espresso', 'Tea', 'Specialty', 'Bites', 'Pastries'];
    return (
      <div className="pt-40 bg-cream min-h-screen">
        <Section className="pb-32">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Precision & Terroir</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 text-espresso tracking-tight">The Menu</h1>
            <p className="text-xl font-light leading-relaxed text-espresso/60 italic max-w-2xl mx-auto">
              "We source as curators, roasting as scientists. Every cup is a result of technical experimentation and ethical transparency."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
            {categories.map(cat => (
              <div key={cat} className="space-y-12">
                <div className="flex items-center gap-6 border-b border-espresso/10 pb-6">
                  <h3 className="text-4xl font-serif text-espresso">{cat}</h3>
                  <div className="h-[2px] flex-grow bg-terracotta/20" />
                </div>
                <div className="space-y-16">
                  {MENU_ITEMS.filter(item => item.category === cat).map(item => (
                    <div key={item.id} className="group flex flex-col gap-4">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-2xl font-serif text-espresso group-hover:text-terracotta transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-xl font-serif italic text-roast">${item.price}</span>
                      </div>
                      
                      {item.technical && (
                        <div className="grid grid-cols-2 gap-y-2 gap-x-8 py-4 border-y border-espresso/5">
                           <div className="text-[10px] uppercase tracking-widest font-bold text-espresso/40">
                             Origin: <span className="text-espresso/70 ml-2 font-normal">{item.technical.origin}</span>
                           </div>
                           <div className="text-[10px] uppercase tracking-widest font-bold text-espresso/40">
                             Partner: <span className="text-espresso/70 ml-2 font-normal">{item.technical.roastPartner}</span>
                           </div>
                           <div className="text-[10px] uppercase tracking-widest font-bold text-espresso/40">
                             Process: <span className="text-espresso/70 ml-2 font-normal">{item.technical.process}</span>
                           </div>
                           <div className="text-[10px] uppercase tracking-widest font-bold text-espresso/40">
                             Elevation: <span className="text-espresso/70 ml-2 font-normal">{item.technical.elevation || 'N/A'}</span>
                           </div>
                        </div>
                      )}

                      {item.technical?.notes && (
                         <p className="text-sm font-light text-terracotta italic leading-relaxed">
                           Tasting Notes: {item.technical.notes.join(', ')}
                         </p>
                      )}

                      {item.description && (
                        <p className="text-base text-espresso/70 font-light leading-relaxed">
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
        <Section className="bg-linen py-32">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-sage mb-6">Ethical Sourcing & Transparency</h4>
            <h3 className="text-4xl font-serif text-espresso leading-tight">We build relationships with roasters who challenge the status quo.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto border-t border-espresso/10 pt-20">
            {PARTNERS.map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="text-2xl font-serif text-espresso">{p.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-terracotta font-bold">{p.role}</div>
                <div className="text-xs uppercase tracking-widest text-espresso/40">{p.location}</div>
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
        <div className="max-w-5xl mx-auto space-y-16">
          <h1 className="text-7xl md:text-9xl font-serif text-espresso tracking-tighter leading-none">{title}</h1>
          <p className="text-2xl md:text-3xl font-light text-espresso/70 leading-relaxed italic max-w-3xl">
            "{content}"
          </p>
          <div className="w-32 h-[2px] bg-terracotta" />
          <div className="space-y-12 text-xl font-light leading-relaxed max-w-2xl">
            <p>We are currently curating a deeper digital experience to reflect our biophilic philosophy. Every word is being chosen with the same care we use to dial in our espresso.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-4 font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-espresso pb-2 hover:text-terracotta hover:border-terracotta transition-all"
            >
              Return to the Room <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );

  return (
    <div className="font-sans selection:bg-terracotta/30 scroll-smooth">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {currentPage === 'home' && renderHome()}
            {currentPage === 'menu' && renderMenu()}
            {currentPage === 'about' && renderSimplePage('The Philosophy', 'Rooted in nature, obsessed with craft, driven by community.')}
            {currentPage === 'market' && renderSimplePage('The Market', 'Small-batch goods and transparent roasts for your home laboratory.')}
            {currentPage === 'events' && renderSimplePage('Gathering', 'Limited, intimate, and worth planning around.')}
            {currentPage === 'visit' && renderSimplePage('Visit Us', 'Walk through the door and close the anticipation gap.')}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
