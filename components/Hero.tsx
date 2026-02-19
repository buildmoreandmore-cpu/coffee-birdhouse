
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onJoinDrop: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onJoinDrop }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-warmblack">
      {/* Background Image Placeholder with Overlay */}
      <div
        className="absolute inset-0 opacity-50 bg-cover bg-center scale-105"
        style={{
          backgroundImage: 'url("/photos/IMG_2575.jpg")',
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
          <h1 className="sr-only">Birdhouse Coffee Room & Market — Specialty Coffee in Serenbe, Chattahoochee Hills, Georgia</h1>
          <img src="/logo.png" alt="Birdhouse Coffee Room & Market — specialty micro-roasted coffee shop in Serenbe, Chattahoochee Hills GA, serving pour over coffee, espresso, tea and pastries in the Grange Hamlet" className="h-40 md:h-56 lg:h-64 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <p className="text-xl md:text-2xl text-cream/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed italic">
            A community worth being part of. First access to roasts, collabs & events in the heart of Grange Hamlet.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={onJoinDrop}
              className="group px-12 py-5 bg-terracotta text-cream text-xs font-bold tracking-[0.2em] uppercase hover:bg-roast transition-all duration-500 shadow-xl flex items-center gap-3"
            >
              <Zap size={14} /> Join The Drop
            </button>
            <button
              onClick={onExplore}
              className="px-12 py-5 border border-cream/20 text-cream text-xs font-bold tracking-[0.2em] uppercase hover:bg-cream/10 transition-all duration-500"
            >
              Explore the Pour
            </button>
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
