
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    // Also trigger after 45 seconds on mobile (no mouse leave)
    const mobileTimer = setTimeout(() => {
      if (!dismissed && window.innerWidth < 768) {
        setShow(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(handleClose, 2500);
    }
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4"
        >
          <div className="absolute inset-0 bg-warmblack/70 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-espresso max-w-md w-full shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-cream/30 hover:text-cream transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="h-1 bg-gradient-to-r from-gold via-terracotta to-gold" />

            <div className="p-10 md:p-12">
              {!submitted ? (
                <>
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Don't Miss It</span>
                  <h3 className="text-3xl font-serif text-cream mb-4 leading-tight">
                    The next drop<br />won't wait.
                  </h3>
                  <p className="text-cream/50 text-sm font-light leading-relaxed mb-8">
                    Limited roasts. Rotating collabs. Intimate events. Get first access before they're gone.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="flex-1 px-4 py-3 bg-cream/5 border border-cream/15 text-cream text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-cream/25"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-terracotta text-cream text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-warmblack transition-all"
                    >
                      Join
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <h3 className="text-2xl font-serif text-cream mb-2">You're in the circle.</h3>
                  <p className="text-cream/50 text-sm">First pour is on us, next time you visit.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
