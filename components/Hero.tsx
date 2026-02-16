
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
        className="absolute inset-0 opacity-60 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000")',
          filter: 'sepia(20%) contrast(110%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warmblack/20 to-warmblack/80" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
            Specialty Coffee & Market
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream leading-tight mb-8">
            Birdhouse
          </h1>
          <p className="text-lg md:text-xl text-cream/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed italic">
            "A place to gather, connect, and discover in the heart of Serenbe."
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={onExplore}
              className="px-10 py-4 bg-terracotta text-cream text-sm font-semibold tracking-widest uppercase hover:bg-roast transition-all duration-300 w-full md:w-auto"
            >
              Explore the Menu
            </button>
            <div className="text-cream/80 text-sm font-light">
              7:30 AM – 2:00 PM Daily
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/40 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
