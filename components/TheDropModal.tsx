
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

interface TheDropModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TheDropModal: React.FC<TheDropModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-warmblack/80 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-cream max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-espresso/40 hover:text-espresso transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-terracotta via-gold to-terracotta" />

            <div className="p-10 md:p-14">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Zap size={16} className="text-terracotta" />
                    <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-[10px]">The Drop</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-4 leading-tight">
                    Be first.
                  </h2>
                  <p className="text-lg text-espresso/70 font-light leading-relaxed mb-2">
                    Get 24-48 hour early access to new roast drops, limited collabs, and event RSVPs before they go public.
                  </p>
                  <p className="text-sm text-espresso/50 italic mb-10">
                    That feeling when it's all sold out — but you were already in.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                        className="w-full px-5 py-4 bg-linen border border-espresso/10 text-espresso text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-espresso/30"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone for SMS drops (optional)"
                        className="w-full px-5 py-4 bg-linen border border-espresso/10 text-espresso text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-espresso/30"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all duration-500"
                    >
                      Join The Drop
                    </button>
                    <p className="text-[10px] text-espresso/30 text-center tracking-wide">
                      Weekly "what's pouring + what's dropping." Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-6">&#9749;</div>
                  <h3 className="text-3xl font-serif text-espresso mb-4">You're in.</h3>
                  <p className="text-lg text-espresso/70 font-light leading-relaxed mb-2">
                    Welcome to The Drop. You'll be first to know when something special is pouring.
                  </p>
                  <p className="text-sm text-terracotta italic">
                    Check your inbox for a welcome from the Room.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TheDropModal;
