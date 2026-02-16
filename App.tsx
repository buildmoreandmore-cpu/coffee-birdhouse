
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import InteractiveMap from './components/InteractiveMap';
import TheDropModal from './components/TheDropModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import { Page } from './types';
import { MENU_ITEMS, PARTNERS, EVENTS, TESTIMONIALS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Coffee, Star, Map as MapIcon, ChevronRight, Zap, Download, Palette, MapPin, Calendar, Camera } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [dropModalOpen, setDropModalOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero onExplore={() => setCurrentPage('menu')} onJoinDrop={() => setDropModalOpen(true)} />

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
              Birdhouse isn't just a coffee shop. It's a curated environment where Serenbe's wellness philosophy meets precision craft. Our rotating art exhibits and light-filled corners are designed for unhurried connection.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('about')}
                className="group flex items-center gap-6 text-espresso font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-espresso pb-2 hover:border-terracotta hover:text-terracotta transition-all"
              >
                Meet the Creatives <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

        {/* Drop CTA in Pouring Section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setDropModalOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold/10 transition-all"
          >
            <Zap size={14} /> Drop members get first pour on new roasts
          </button>
        </div>
      </Section>

      {/* Social Proof */}
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

      {/* Events & Community - Scarcity + Early Access */}
      <Section className="bg-sage/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
             <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Intimate Gatherings</span>
             <h2 className="text-5xl font-serif text-espresso">Grange Hamlet Events</h2>
          </div>
          <button
            onClick={() => setDropModalOpen(true)}
            className="flex items-center gap-2 text-terracotta text-xs font-bold uppercase tracking-widest border-b border-terracotta pb-2 hover:text-espresso hover:border-espresso transition-all"
          >
            <Zap size={12} /> Drop members get early RSVP
          </button>
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
                <button
                  onClick={() => setDropModalOpen(true)}
                  className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-terracotta"
                >
                  Reserve Spot <ChevronRight size={14} />
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
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-6 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all shadow-lg"
                >
                  Get Directions <MapIcon size={18} />
                </a>
                <button
                  onClick={() => setCurrentPage('visit')}
                  className="inline-flex items-center gap-3 px-8 py-5 border border-espresso text-espresso text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all"
                >
                  <Download size={14} /> Day Trip Guide
                </button>
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

  // LEAD MAGNET 2: The Collab Wall — About/Story Page
  const renderAbout = () => (
    <div className="pt-32 bg-cream min-h-screen">
      {/* Hero */}
      <Section>
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-xs">The Collab Wall</span>
          <h1 className="text-6xl md:text-8xl font-serif text-espresso tracking-tight leading-none">
            Art, Coffee &<br />Community
          </h1>
          <p className="text-xl md:text-2xl font-light text-espresso/60 leading-relaxed italic max-w-3xl mx-auto">
            "This is where Atlanta's creative community meets the craft of slow coffee. Every wall tells a story. Every cup is a collaboration."
          </p>
          <div className="w-32 h-[2px] bg-terracotta mx-auto" />
        </div>
      </Section>

      {/* Current Art Exhibit */}
      <Section className="bg-linen/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/5] bg-sage/10 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=1200"
                alt="Current Art Exhibit"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warmblack/80 to-transparent p-8">
                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Current Exhibit</span>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Palette size={16} className="text-terracotta" />
              <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-[10px]">Featured Artist — March 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">
              "Roots & Light"
            </h2>
            <p className="text-lg text-espresso/70 leading-relaxed font-light">
              A mixed-media exploration of botanical forms and Southern light, created by Atlanta-based artist Camille Torres. Each piece reflects the biophilic ethos that defines Birdhouse — where the natural world isn't just a backdrop, but the main character.
            </p>
            <p className="text-sm text-espresso/50 italic">
              The exhibit rotates monthly. Each piece is available for purchase through the artist.
            </p>
            <div className="bg-cream p-6 border-l-4 border-terracotta">
              <p className="text-sm font-medium text-espresso">The current exhibit runs through March 15.</p>
              <p className="text-sm text-espresso/60 mt-1">Come see it before it changes.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Collaborators */}
      <Section>
        <div className="text-center mb-20">
          <span className="text-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Creative Ecosystem</span>
          <h2 className="text-5xl font-serif text-espresso">Behind Every Cup</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Portrait Coffee',
              role: 'Roasting Partner',
              image: 'https://images.unsplash.com/photo-1447933601403-56dc2df5e78f?auto=format&fit=crop&q=80&w=800',
              story: 'Founded in Atlanta with a mission to diversify specialty coffee. Their Ethiopia Sidama is our current spotlight — chosen for its bergamot florality and precision processing.',
              location: 'Atlanta, GA'
            },
            {
              title: 'Bianca Cavandi',
              role: 'Pastry Collaborator',
              image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
              story: 'A small-batch lamination artist whose seasonal pastries rotate monthly at Birdhouse. Her work is a study in butter, flour, and patience — the anti-industrial approach.',
              location: 'Serenbe, GA'
            },
            {
              title: 'Hills & Hamlets Bookstore',
              role: 'Neighbor & Community Partner',
              image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
              story: 'Right next door. Their curation of independent titles and our craft pour-overs create a natural rhythm — browse, then sit with something beautiful.',
              location: 'Grange Hamlet, Serenbe'
            }
          ].map((collab, i) => (
            <div key={i} className="group">
              <div className="aspect-square overflow-hidden bg-linen mb-8">
                <img src={collab.image} alt={collab.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">{collab.role}</span>
              <h3 className="text-2xl font-serif text-espresso mt-2 mb-4">{collab.title}</h3>
              <p className="text-sm text-espresso/60 leading-relaxed font-light">{collab.story}</p>
              <p className="text-[10px] uppercase tracking-widest text-espresso/30 mt-4">{collab.location}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Collab Wall CTA */}
      <Section dark className="bg-espresso text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <Camera size={32} className="text-gold mx-auto" />
          <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
            You can't get the full picture from a screen.
          </h2>
          <p className="text-lg text-cream/60 font-light leading-relaxed">
            The art changes monthly. The food collabs rotate. The community is always evolving. You have to be in the room where it happens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={() => setDropModalOpen(true)}
              className="flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
            >
              <Zap size={14} /> Get notified on new collabs
            </button>
            <button
              onClick={() => setCurrentPage('visit')}
              className="text-cream/60 text-xs font-bold uppercase tracking-widest border-b border-cream/20 pb-1 hover:text-cream hover:border-cream transition-all"
            >
              Plan your visit
            </button>
          </div>
        </div>
      </Section>
    </div>
  );

  // LEAD MAGNET 3: Serenbe Saturday — Visit/Day Trip Page
  const renderVisit = () => {
    const [guideEmail, setGuideEmail] = useState('');
    const [guideDownloaded, setGuideDownloaded] = useState(false);

    const handleGuideDownload = (e: React.FormEvent) => {
      e.preventDefault();
      if (guideEmail) setGuideDownloaded(true);
    };

    return (
      <div className="pt-32 bg-cream min-h-screen">
        {/* Hero */}
        <Section>
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs">Your First Visit</span>
            <h1 className="text-6xl md:text-8xl font-serif text-espresso tracking-tight leading-none">
              Serenbe Saturday
            </h1>
            <p className="text-xl md:text-2xl font-light text-espresso/60 leading-relaxed italic max-w-3xl mx-auto">
              From Atlanta to Serenbe in 45 minutes. A day you won't forget.
            </p>
            <div className="w-32 h-[2px] bg-terracotta mx-auto" />
          </div>
        </Section>

        {/* Guide Download CTA */}
        <Section className="bg-linen/50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream p-12 md:p-16 shadow-xl border-t-4 border-gold">
              <div className="flex items-center gap-3 mb-6">
                <Download size={18} className="text-gold" />
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">Free Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-4 leading-tight">
                The Perfect Serenbe Saturday
              </h2>
              <p className="text-lg text-espresso/70 font-light leading-relaxed mb-2">
                Coffee, trails & everything in between. Your insider's guide to a perfect day trip starting at Birdhouse.
              </p>
              <p className="text-sm text-espresso/50 mb-8">
                Makes the 45-minute drive feel like a pilgrimage, not a commute.
              </p>

              {!guideDownloaded ? (
                <form onSubmit={handleGuideDownload} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={guideEmail}
                    onChange={(e) => setGuideEmail(e.target.value)}
                    placeholder="Email for your free guide"
                    required
                    className="flex-1 px-5 py-4 bg-linen border border-espresso/10 text-espresso text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-espresso/30"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all whitespace-nowrap"
                  >
                    Get the Guide
                  </button>
                </form>
              ) : (
                <div className="bg-sage/10 p-6 text-center">
                  <p className="text-lg font-serif text-espresso">Check your inbox — your Saturday starts now.</p>
                  <p className="text-sm text-espresso/50 mt-2 italic">Start your Saturday at the Room. We open at 7:30.</p>
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* The Itinerary Preview */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-espresso mb-16 text-center">A Day at Serenbe</h2>
            <div className="space-y-0">
              {[
                { time: '7:30 AM', title: 'First Pour at Birdhouse', description: 'Start with our Single Origin Drip or a Precision Pour Over. Grab a window seat and let the morning light do its thing.', icon: <Coffee size={20} /> },
                { time: '9:00 AM', title: 'The Trails', description: 'Step outside and walk the 15 miles of nature trails winding through Serenbe. The forest canopy is a different world from the city you just left.', icon: <MapPin size={20} /> },
                { time: '11:00 AM', title: 'Hills & Hamlets Bookstore', description: 'Right next door to Birdhouse. Browse their curated selection of indie titles, local zines, and beautifully printed goods.', icon: <Palette size={20} /> },
                { time: '12:00 PM', title: 'Lunch in the Hamlet', description: 'The Farmhouse restaurant sources directly from Serenbe Farms. Or grab something lighter from the market — either way, you\'re eating local.', icon: <Calendar size={20} /> },
                { time: '2:00 PM', title: 'The Farm & Art Walk', description: 'Visit Serenbe Farms, explore the rotating public art installations, and discover why this community draws creatives from across the Southeast.', icon: <Camera size={20} /> },
              ].map((stop, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-linen border-2 border-espresso/10 flex items-center justify-center text-terracotta group-hover:border-terracotta group-hover:bg-terracotta/5 transition-all">
                      {stop.icon}
                    </div>
                    {i < 4 && <div className="w-[2px] h-full min-h-[80px] bg-espresso/10" />}
                  </div>
                  <div className="pb-16">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">{stop.time}</span>
                    <h3 className="text-2xl font-serif text-espresso mt-2 mb-3">{stop.title}</h3>
                    <p className="text-base text-espresso/60 font-light leading-relaxed max-w-lg">{stop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Visit CTA */}
        <Section dark className="bg-espresso text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
              Start your Saturday<br />at the Room.
            </h2>
            <p className="text-cream/60 text-lg font-light">We open at 7:30. Bring someone you've been meaning to catch up with.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
              >
                <MapIcon size={16} /> Get Directions
              </a>
              <button
                onClick={() => setDropModalOpen(true)}
                className="flex items-center gap-2 text-cream/60 text-xs font-bold uppercase tracking-widest border-b border-cream/20 pb-1 hover:text-cream hover:border-cream transition-all"
              >
                <Zap size={12} /> Join The Drop
              </button>
            </div>
          </div>
        </Section>
      </div>
    );
  };

  // Market Page with Drop Member Badges
  const renderMarket = () => (
    <div className="pt-32 bg-cream min-h-screen">
      <Section>
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-20">
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs">The Market</span>
          <h1 className="text-6xl md:text-8xl font-serif text-espresso tracking-tight leading-none">
            Take the Feeling Home
          </h1>
          <p className="text-xl font-light text-espresso/60 leading-relaxed italic max-w-2xl mx-auto">
            Small-batch goods and transparent roasts. Curated from the community, for the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'Ethiopia Sidama Bensa — Whole Bean', price: '$22', weight: '12 oz bag', partner: 'Portrait Coffee', badge: true },
            { name: 'Birdhouse Signature Blend', price: '$18', weight: '12 oz bag', partner: 'In-House Roast', badge: true },
            { name: 'Colombia Huila — Pour Over Grind', price: '$24', weight: '12 oz bag', partner: 'Chrome Yellow', badge: true },
            { name: 'Herbs & Kettles Nilgiri Tea', price: '$16', weight: '50g tin', partner: 'Direct Trade' },
            { name: 'Ceramic Pour Over Set', price: '$48', weight: 'Handmade', partner: 'Local Ceramicist' },
            { name: 'Birdhouse Tote — Canvas', price: '$28', weight: 'Organic Cotton', partner: 'Serenbe Made' },
          ].map((product, i) => (
            <div key={i} className="group bg-linen p-10 relative hover:shadow-lg transition-all duration-500">
              {product.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold/10 text-gold px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                  <Zap size={10} /> Drop First
                </div>
              )}
              <div className="aspect-square bg-cream mb-8 flex items-center justify-center">
                <Coffee size={48} className="text-espresso/10" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">{product.partner}</span>
              <h3 className="text-xl font-serif text-espresso mt-2 mb-2 group-hover:text-terracotta transition-colors">{product.name}</h3>
              <p className="text-xs text-espresso/40 mb-4">{product.weight}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-serif text-espresso">{product.price}</span>
                <button className="text-xs font-bold uppercase tracking-widest text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
                  Details <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Drop CTA for Market */}
      <Section dark className="bg-espresso text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-2 text-gold">
            <Zap size={18} />
            <span className="font-bold tracking-[0.3em] uppercase text-xs">The Drop</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
            New roasts sell out.<br />Drop members don't miss.
          </h2>
          <p className="text-cream/50 text-lg font-light leading-relaxed">
            Get 24-48 hour early access to every new roast drop, limited collab, and seasonal release. Pre-order bags for shipping before they go public.
          </p>
          <button
            onClick={() => setDropModalOpen(true)}
            className="inline-flex items-center gap-3 px-12 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
          >
            <Zap size={14} /> Be First — Join The Drop
          </button>
        </div>
      </Section>
    </div>
  );

  // Events Page — Full with early access emphasis
  const renderEvents = () => (
    <div className="pt-32 bg-cream min-h-screen">
      <Section>
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-20">
          <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-xs">Intimate Gatherings</span>
          <h1 className="text-6xl md:text-8xl font-serif text-espresso tracking-tight leading-none">
            Grange Hamlet<br />Happenings
          </h1>
          <p className="text-xl font-light text-espresso/60 leading-relaxed italic max-w-2xl mx-auto">
            Limited. Intimate. Worth planning around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative bg-linen p-12 border-t-4 border-espresso hover:border-terracotta transition-all duration-500">
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
                <button
                  onClick={() => setDropModalOpen(true)}
                  className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-terracotta hover:gap-4 transition-all"
                >
                  Reserve <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access Banner */}
        <div className="bg-espresso p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-gold mb-3">
              <Zap size={14} />
              <span className="font-bold tracking-[0.3em] uppercase text-[10px]">Drop Members</span>
            </div>
            <h3 className="text-3xl font-serif text-cream">Get early RSVP access to every event.</h3>
            <p className="text-cream/50 text-sm mt-2">4 seats left? You already knew about it 48 hours ago.</p>
          </div>
          <button
            onClick={() => setDropModalOpen(true)}
            className="shrink-0 flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
          >
            <Zap size={14} /> Join The Drop
          </button>
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
            {currentPage === 'about' && renderAbout()}
            {currentPage === 'market' && renderMarket()}
            {currentPage === 'events' && renderEvents()}
            {currentPage === 'visit' && renderVisit()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* The Drop Modal */}
      <TheDropModal isOpen={dropModalOpen} onClose={() => setDropModalOpen(false)} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  );
};

export default App;
