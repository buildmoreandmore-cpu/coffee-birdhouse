
import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Mail, Bird } from 'lucide-react';

const FooterDropForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setJoined(true);
  };

  if (joined) {
    return <p className="text-gold text-sm font-medium">You're in. Watch for The Drop.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        required
        className="bg-cream/5 border border-cream/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold transition-colors"
      />
      <button className="bg-gold text-warmblack px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-cream transition-all whitespace-nowrap">
        Join
      </button>
    </form>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-warmblack text-cream/60 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <img src="/logo.png" alt="Birdhouse Coffee Room" className="h-20 w-auto mb-6 brightness-0 invert opacity-80" />
          <p className="max-w-md mb-8 leading-relaxed">
            Nestled in the Grange Hamlet of Serenbe, Birdhouse is a haven for those who appreciate the craft of slow-roast coffee and the warmth of genuine community.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/birdhouse.market" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors flex items-center gap-2"><Instagram size={24} /> <span className="text-sm">@birdhouse.market</span></a>
          </div>
        </div>

        {/* Hours & Contact */}
        <div>
          <h3 className="text-cream text-sm font-bold tracking-widest uppercase mb-6">Visit Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 text-gold" />
              <span>10625 Serenbe Lane, Unit A<br />Chattahoochee Hills, GA 30268</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold" />
              <span>(470) 756-5894</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold" />
              <span>source@birdhousemarket.info</span>
            </li>
          </ul>
        </div>

        {/* The Drop CTA */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Bird size={14} className="text-gold" />
            <h3 className="text-cream text-sm font-bold tracking-widest uppercase">The Drop</h3>
          </div>
          <p className="text-xs mb-4 leading-relaxed">First access to new roasts, limited collabs & event RSVPs before they go public.</p>
          <FooterDropForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Birdhouse Coffee Room & Market</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cream">Privacy Policy</a>
          <a href="#" className="hover:text-cream">Sustainability</a>
          <a href="#" className="hover:text-cream">Wholesale</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
