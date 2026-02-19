
import React, { useState } from 'react';
import Section from './Section';
import InteractiveMap from './InteractiveMap';
import {
  Coffee, MapPin, Palette, Calendar, Camera, Download, ChevronRight,
  Zap, Clock, CreditCard, Users, Map as MapIcon, ArrowRight,
} from 'lucide-react';

interface VisitPageProps {
  onJoinDrop: () => void;
}

const VisitPage: React.FC<VisitPageProps> = ({ onJoinDrop }) => {
  const [guideEmail, setGuideEmail] = useState('');
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  const handleGuideDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (guideEmail) setGuideDownloaded(true);
  };

  const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268';

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
        {/* Hero Photo */}
        <div className="mt-16 aspect-[21/9] overflow-hidden shadow-2xl">
          <img
            src="/photos/IMG_2524.jpg"
            alt="Inside Birdhouse Coffee Room — customers at counter, full room view"
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
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

      {/* What to Expect */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">First-Time Visitor</span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso">What to Expect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee size={22} />,
                title: 'The Vibe',
                description: 'A biophilic space with natural light, live-edge tables, birdcages overhead, and rotating art on the walls. It\'s calm, warm, and intentionally unhurried.',
                accent: 'border-terracotta',
              },
              {
                icon: <MapPin size={22} />,
                title: 'Where We Are',
                description: 'Tucked behind Hills & Hamlets Bookstore in the Grange Hamlet of Serenbe, Chattahoochee Hills. About 45 minutes southwest of Atlanta.',
                accent: 'border-sage',
              },
              {
                icon: <Clock size={22} />,
                title: 'Hours',
                description: 'Mon–Fri: 7:30 AM – 2:00 PM. Sat–Sun: 8:00 AM – 2:00 PM. Best time to visit is early morning for the quietest experience.',
                accent: 'border-gold',
              },
              {
                icon: <CreditCard size={22} />,
                title: 'Payment & Ordering',
                description: 'Order at the counter. We accept all cards and Apple Pay. No tipping screens — just genuine conversation with our baristas.',
                accent: 'border-espresso',
              },
              {
                icon: <ArrowRight size={22} />,
                title: 'Pet-Friendly',
                description: 'Well-behaved pups are welcome on the patio. Serenbe\'s trails are also dog-friendly — just bring a leash and water.',
                accent: 'border-terracotta',
              },
              {
                icon: <Users size={22} />,
                title: 'Kids & Families',
                description: 'Saturday Story Time is our weekly family event. We have coloring supplies and a communal table where kids can create while you sip.',
                accent: 'border-sage',
              },
            ].map((card, i) => (
              <div key={i} className={`bg-linen p-8 border-t-2 ${card.accent}`}>
                <div className="text-terracotta mb-4">{card.icon}</div>
                <h3 className="text-xl font-serif text-espresso mb-3">{card.title}</h3>
                <p className="text-sm text-espresso/60 font-light leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* What to Expect Photo */}
          <div className="mt-12 aspect-[16/10] overflow-hidden shadow-lg">
            <img
              src="/photos/IMG_2534.jpg"
              alt="Birdhouse owner smiling at a child at the register — welcoming and friendly"
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      {/* Expanded Itinerary */}
      <Section className="bg-linen/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-espresso mb-16 text-center">A Day at Serenbe</h2>
          <div className="space-y-0">
            {[
              {
                time: '7:30 AM',
                title: 'First Pour at Birdhouse',
                description: 'Start with our Single Origin Drip or a Precision Pour Over. Grab a window seat and let the morning light do its thing.',
                icon: <Coffee size={20} />,
                image: '/photos/IMG_2913.jpg',
                imageAlt: 'Pour over being made — gooseneck kettle into V60 dripper',
                tip: 'Ask for the barista\'s pick — they always have a favorite micro-lot that didn\'t make the menu board.',
              },
              {
                time: '9:00 AM',
                title: 'The Trails',
                description: 'Step outside and walk the 15 miles of nature trails winding through Serenbe. The forest canopy is a different world from the city you just left.',
                icon: <MapPin size={20} />,
                tip: 'The Selborne Trail loop (2.2 miles) is the most scenic and starts just behind the Inn.',
              },
              {
                time: '10:30 AM',
                title: 'Story Time & Community',
                description: 'If you\'re visiting on a Saturday with kids, join our free Story Time at the communal table. Arts, crafts, and the kind of analog fun that screens can\'t replace.',
                icon: <Users size={20} />,
                image: '/photos/IMG_2596.jpg',
                imageAlt: 'Kids doing arts and crafts at the communal table at Birdhouse',
                tip: 'Story Time runs 10:30–11:30 AM every Saturday. No RSVP needed — just show up.',
              },
              {
                time: '11:00 AM',
                title: 'Hills & Hamlets Bookstore',
                description: 'Right next door to Birdhouse. Browse their curated selection of indie titles, local zines, and beautifully printed goods.',
                icon: <Palette size={20} />,
                tip: 'Ask the bookseller about their "Serenbe shelf" — locally authored titles you won\'t find anywhere else.',
              },
              {
                time: '12:00 PM',
                title: 'Lunch in the Hamlet',
                description: 'The Farmhouse restaurant sources directly from Serenbe Farms. Or grab something lighter from the market — either way, you\'re eating local.',
                icon: <Calendar size={20} />,
                tip: 'The Farmhouse fills up on weekends. Walk in before noon or make a reservation.',
              },
              {
                time: '2:00 PM',
                title: 'The Farm & Art Walk',
                description: 'Visit Serenbe Farms, explore the rotating public art installations, and discover why this community draws creatives from across the Southeast.',
                icon: <Camera size={20} />,
                tip: 'Farm tours are $18/person and run on Saturdays. Book ahead — they\'re popular.',
              },
              {
                time: '4:00 PM',
                title: 'Second Cup & Sunset',
                description: 'Circle back to Birdhouse for an afternoon espresso. Grab the bench out front and watch the hamlet wind down. Some days, the best part of the trip is this last hour.',
                icon: <Coffee size={20} />,
                image: '/photos/IMG_2878.jpg',
                imageAlt: 'Both owners sitting together at the live-edge table with coffees',
                tip: 'We close at 2 PM, but the Grange hamlet stays alive. The General Store is open later if you need a last souvenir.',
              },
            ].map((stop, i, arr) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-linen border-2 border-espresso/10 flex items-center justify-center text-terracotta group-hover:border-terracotta group-hover:bg-terracotta/5 transition-all shrink-0">
                    {stop.icon}
                  </div>
                  {i < arr.length - 1 && <div className="w-[2px] h-full min-h-[80px] bg-espresso/10" />}
                </div>
                <div className="pb-16 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold">{stop.time}</span>
                  <h3 className="text-2xl font-serif text-espresso mt-2 mb-3">{stop.title}</h3>
                  <p className="text-base text-espresso/60 font-light leading-relaxed max-w-lg mb-4">{stop.description}</p>

                  {stop.image && (
                    <div className="aspect-[16/10] overflow-hidden shadow-lg mb-4 max-w-lg">
                      <img
                        src={stop.image}
                        alt={stop.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  )}

                  {stop.tip && (
                    <div className="border-l-2 border-gold/40 pl-4 max-w-lg">
                      <p className="text-sm text-espresso/50 italic">
                        <span className="text-gold font-bold not-italic text-[10px] uppercase tracking-widest">Insider tip</span>
                        <br />
                        {stop.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Getting Here / Directions */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Getting Here</span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso">Find Your Way to the Room</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Route Cards */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  from: 'From Atlanta',
                  time: '~45 min',
                  route: 'Take I-85 South to Exit 61 (Highway 74). Head west through Palmetto, follow signs to Serenbe. GPS will get you there — trust the country roads.',
                },
                {
                  from: 'From Peachtree City',
                  time: '~20 min',
                  route: 'Head west on Highway 74 through Palmetto. Turn left on Selborne Lane, then follow to Serenbe. A beautiful, easy drive through Chattahoochee Hills.',
                },
                {
                  from: 'From Newnan',
                  time: '~20 min',
                  route: 'Take Highway 29 North to Palmetto, then Highway 74 East briefly before turning onto the Serenbe roads. Scenic route through rolling farmland.',
                },
              ].map((route, i) => (
                <a
                  key={i}
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-linen p-8 border-t-2 border-espresso/10 hover:border-terracotta transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-serif text-espresso group-hover:text-terracotta transition-colors">{route.from}</h3>
                    <span className="text-sm font-bold text-terracotta">{route.time}</span>
                  </div>
                  <p className="text-sm text-espresso/60 font-light leading-relaxed">{route.route}</p>
                  <div className="mt-4 flex items-center gap-2 text-terracotta text-xs font-bold uppercase tracking-widest">
                    <MapIcon size={14} /> Open in Google Maps <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            {/* Parking / Good to Know Card */}
            <div className="bg-espresso p-8 text-cream">
              <h3 className="text-xl font-serif text-cream mb-6">Good to Know</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Parking</h4>
                  <p className="text-sm text-cream/60 font-light leading-relaxed">Free parking in the Grange Hamlet lot, right outside Birdhouse. Overflow parking is available along Serenbe Lane on busy Saturdays.</p>
                </div>
                <div>
                  <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">GPS Quirks</h4>
                  <p className="text-sm text-cream/60 font-light leading-relaxed">Some GPS apps try to route you through gravel roads. Stick to the paved route via Highway 74 — it's the smoothest path.</p>
                </div>
                <div>
                  <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Cell Service</h4>
                  <p className="text-sm text-cream/60 font-light leading-relaxed">Signal is spotty in parts of Chattahoochee Hills. Download your directions before you lose bars — it's part of the charm.</p>
                </div>
                <div>
                  <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Walkability</h4>
                  <p className="text-sm text-cream/60 font-light leading-relaxed">Once you park, everything in the Grange Hamlet is walkable. Birdhouse, the bookstore, the market, and trailheads are all within a 3-minute stroll.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Directions Photo */}
          <div className="mt-12 aspect-[16/10] overflow-hidden shadow-lg">
            <img
              src="/photos/IMG_2549.jpg"
              alt="Busy counter scene at Birdhouse from the customer point of view"
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      {/* Interactive Map */}
      <Section className="pb-0! pt-0!">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          <div className="lg:col-span-5 py-24 lg:pr-16">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Find Us</span>
            <h2 className="text-4xl font-serif mb-8 text-espresso">Birdhouse Coffee Room</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-terracotta" /> Address
                </h4>
                <p className="text-xl font-light leading-snug">
                  10625 Serenbe Lane, Unit A<br />
                  Chattahoochee Hills, GA 30268
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-3">Hours</h4>
                  <p className="text-base font-light">Mon–Fri 7:30–2:00</p>
                  <p className="text-base font-light">Sat–Sun 8:00–2:00</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta mb-3">Phone</h4>
                  <a href="tel:4707565894" className="text-base font-light hover:text-terracotta transition-colors">(470) 756-5894</a>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-6 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all shadow-lg"
              >
                Get Directions <MapIcon size={18} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] lg:h-auto relative bg-linen overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-1000">
            <InteractiveMap />
          </div>
        </div>
      </Section>

      {/* Seasonal Tips */}
      <Section className="bg-linen/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Year-Round</span>
            <h2 className="text-4xl md:text-5xl font-serif text-espresso">Seasonal Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                season: 'Spring',
                accent: 'border-sage',
                description: 'Wildflowers line the trails. The Georgia Renaissance Festival starts in April. Morning light through the Birdhouse windows is at its most golden.',
                highlights: ['Best trail conditions', 'Ren Fest nearby (April–May)', 'Farm tours begin', 'Patio season opens'],
              },
              {
                season: 'Summer',
                accent: 'border-terracotta',
                description: 'Georgia heat calls for iced espresso and cold brew. Arrive early — the morning cool is magical, and shade on the trails is generous.',
                highlights: ['Iced drinks menu', 'Serenbe Playhouse outdoor shows', 'Longest daylight hours', 'Early morning is best'],
              },
              {
                season: 'Fall',
                accent: 'border-gold',
                description: 'Peak season. The foliage turns, the trails are stunning, and there\'s nothing like a pour over on a crisp morning. Plan ahead — weekends get busy.',
                highlights: ['Peak foliage on trails', 'Harvest dinners at the farms', 'Ideal driving weather', 'Saturday crowds — arrive early'],
              },
              {
                season: 'Winter',
                accent: 'border-espresso',
                description: 'The quietest, most intimate time to visit. Fireplace seating, warm light, and the kind of slow morning you don\'t get in the city. Layer up for the trails.',
                highlights: ['Fireplace seating inside', 'Smallest crowds', 'Hot chocolate & seasonal drinks', 'Holiday market in December'],
              },
            ].map((s, i) => (
              <div key={i} className={`bg-cream p-8 border-t-2 ${s.accent}`}>
                <h3 className="text-2xl font-serif text-espresso mb-3">{s.season}</h3>
                <p className="text-sm text-espresso/60 font-light leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-espresso/70 flex items-center gap-2">
                      <ChevronRight size={12} className="text-terracotta shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
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
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
            >
              <MapIcon size={16} /> Get Directions
            </a>
            <button
              onClick={onJoinDrop}
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

export default VisitPage;
