
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-warmblack">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 opacity-50 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000")',
          filter: 'sepia(30%) contrast(110%) brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warmblack/30 to-warmblack/90" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-gold text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-6 opacity-80">
            Crafting Coffee & Community at Serenbe
          </span>
          <h1 className="text-7xl md:text-9xl font-serif text-cream leading-none mb-10 tracking-tight">
            Birdhouse
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed italic">
            A window into the unhurried life. Experience the craft of slow-roast coffee in the heart of Grange Hamlet.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button 
              onClick={onExplore}
              className="group px-12 py-5 bg-terracotta text-cream text-xs font-bold tracking-[0.2em] uppercase hover:bg-roast transition-all duration-500 shadow-xl"
            >
              Explore the Pour
            </button>
            <div className="text-cream/60 text-sm font-medium tracking-widest uppercase border-l border-cream/20 pl-8 hidden md:block">
              Daily • 7:30 – 2:00
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-cream/30 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
        <ChevronDown size={18} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
