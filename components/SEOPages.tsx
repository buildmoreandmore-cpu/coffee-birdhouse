
import React from 'react';
import Section from './Section';
import { Coffee, MapPin, Clock, Phone, ChevronRight, Zap, ArrowRight } from 'lucide-react';

interface SEOPageProps {
  onNavigate: (page: string) => void;
  onJoinDrop: () => void;
}

const NAP = () => (
  <address className="not-italic space-y-4 text-base">
    <div className="flex items-start gap-3">
      <MapPin size={18} className="shrink-0 text-terracotta mt-1" />
      <span>10625 Serenbe Lane, Unit A<br />Chattahoochee Hills, GA 30268</span>
    </div>
    <div className="flex items-center gap-3">
      <Clock size={18} className="shrink-0 text-terracotta" />
      <span>Mon–Fri 7:30 AM – 2:00 PM | Sat–Sun 8:00 AM – 2:00 PM</span>
    </div>
    <div className="flex items-center gap-3">
      <Phone size={18} className="shrink-0 text-terracotta" />
      <a href="tel:4707565894" className="hover:text-terracotta transition-colors">(470) 756-5894</a>
    </div>
  </address>
);

const DropCTA: React.FC<{ onJoinDrop: () => void }> = ({ onJoinDrop }) => (
  <div className="bg-espresso p-10 md:p-14 mt-16">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-gold mb-3">
          <Zap size={14} />
          <span className="font-bold tracking-[0.3em] uppercase text-[10px]">The Drop</span>
        </div>
        <h3 className="text-2xl font-serif text-cream">Get first access to new roasts & events.</h3>
      </div>
      <button
        onClick={onJoinDrop}
        className="shrink-0 flex items-center gap-3 px-10 py-5 bg-terracotta text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-warmblack transition-all"
      >
        <Zap size={14} /> Join The Drop
      </button>
    </div>
  </div>
);

// ========================================================
// LOCATION SEO PAGES
// ========================================================

interface LocationPageProps extends SEOPageProps {
  city: string;
  state: string;
  distance: string;
  direction: string;
  landmarks: string[];
  competitors: string;
  bodyContent: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ city, state, distance, direction, landmarks, competitors, bodyContent, onNavigate, onJoinDrop }) => (
  <div className="pt-32 bg-cream min-h-screen">
    <Section>
      <div className="max-w-4xl mx-auto">
        <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Specialty Coffee Near {city}</span>
        <h1 className="text-5xl md:text-7xl font-serif text-espresso tracking-tight leading-none mb-8">
          Best Coffee Shop Near {city}, {state}
        </h1>
        <p className="text-xl font-light text-espresso/70 leading-relaxed mb-12 max-w-3xl">
          Birdhouse Coffee Room & Market is just {distance} {direction} of {city} in the Grange Hamlet of Serenbe, Chattahoochee Hills, GA. We serve specialty micro-roasted coffee, precision pour overs, curated tea from Herbs & Kettles, and artisan pastries — all in a biophilic space with rotating art exhibits.
        </p>

        <div className="bg-linen p-10 mb-16">
          <h2 className="text-2xl font-serif text-espresso mb-6">Visit Birdhouse Coffee Room</h2>
          <NAP />
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-espresso/80 font-light leading-relaxed">
          <h2 className="text-3xl font-serif text-espresso !font-normal">Why Drive to Birdhouse from {city}?</h2>
          <p>{bodyContent}</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">What We Serve</h2>
          <p>
            Our menu features precision pour over coffee brewed via V60, single origin drip from rotating micro-lots, signature espresso dialed in-house, and specialty drinks. We partner with Atlanta's finest ethical roasters — Portrait Coffee, Chrome Yellow, and Dancing Goats — and micro-roast our own blends. Our tea program features direct-trade premium selections from Herbs & Kettles, and our pastry case showcases seasonal laminated pastries from collaborator Bianca Cavandi.
          </p>

          {competitors && (
            <>
              <h2 className="text-3xl font-serif text-espresso !font-normal">Coffee Options Near {city}, {state}</h2>
              <p>{competitors} But if you're looking for a true specialty coffee experience — micro-roasted beans, precision extraction, rotating art exhibits, and a community-driven atmosphere in a biophilic setting — Birdhouse Coffee Room in Serenbe is worth the {distance} drive.</p>
            </>
          )}

          <h2 className="text-3xl font-serif text-espresso !font-normal">Things to Do Near {city} & Serenbe</h2>
          <ul className="space-y-2">
            {landmarks.map((landmark, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight size={16} className="shrink-0 text-terracotta mt-1" />
                <span>{landmark}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-serif text-espresso !font-normal">Plan Your Visit from {city}</h2>
          <p>
            Make a morning of it. Start with a pour over or espresso at Birdhouse (we open at 7:30 AM weekdays, 8:00 AM weekends), browse Hills & Hamlets Bookshop next door, then explore Serenbe's 16 miles of nature trails, visit Serenbe Farms, or catch a show at Serenbe Playhouse. It's not just a coffee run — it's a day trip worth planning.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all"
          >
            <MapPin size={16} /> Get Directions from {city}
          </a>
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-3 px-8 py-5 border border-espresso text-espresso text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all"
          >
            View Our Menu <ArrowRight size={14} />
          </button>
        </div>

        <DropCTA onJoinDrop={onJoinDrop} />
      </div>
    </Section>
  </div>
);

// ========================================================
// ATTRACTION SEO PAGES
// ========================================================

export const CoffeeNearCochranMill: React.FC<SEOPageProps> = ({ onNavigate, onJoinDrop }) => (
  <div className="pt-32 bg-cream min-h-screen">
    <Section>
      <div className="max-w-4xl mx-auto">
        <span className="text-sage font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Coffee + Trails</span>
        <h1 className="text-5xl md:text-7xl font-serif text-espresso tracking-tight leading-none mb-8">
          Coffee Before (or After) Hiking Cochran Mill Park
        </h1>
        <p className="text-xl font-light text-espresso/70 leading-relaxed mb-12 max-w-3xl">
          Cochran Mill Park has 800 acres and 18 miles of trails for hiking, mountain biking, and trail running — plus waterfalls, creek crossings, and the historic mill ruins. Birdhouse Coffee Room in nearby Serenbe is the closest specialty coffee shop, perfect for fueling up before your hike or unwinding after.
        </p>

        <div className="bg-linen p-10 mb-16">
          <h2 className="text-2xl font-serif text-espresso mb-6">Birdhouse Coffee Room — Minutes from Cochran Mill</h2>
          <NAP />
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-espresso/80 font-light leading-relaxed">
          <h2 className="text-3xl font-serif text-espresso !font-normal">The Perfect Trail Day</h2>
          <p>Start at Birdhouse with a Single Origin Drip or Precision Pour Over, grab a sourdough tartine for the trail, then head to Cochran Mill Park for a morning on the trails. The park features everything from easy creek-side walks to technical mountain bike trails through Georgia hardwood forest. After your hike, come back for an iced espresso and one of Bianca Cavandi's seasonal pastries.</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">What Makes Cochran Mill Park Special</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>800 acres of protected forest in Chattahoochee Hills</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>18 miles of multi-use trails (hiking, mountain biking, trail running)</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Waterfall and historic mill ruins</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Creek crossings and old-growth forest</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Free entry — open dawn to dusk</span></li>
          </ul>

          <h2 className="text-3xl font-serif text-espresso !font-normal">Make It a Full Serenbe Day</h2>
          <p>Since you're already in Chattahoochee Hills, combine your Cochran Mill hike with a full Serenbe experience. After coffee and trails, explore the Grange Hamlet — browse Hills & Hamlets Bookshop, visit Serenbe Farms, check the current art exhibit at Birdhouse, and catch a show at Serenbe Playhouse if it's the season.</p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all">
            <MapPin size={16} /> Get Directions
          </a>
          <button onClick={() => onNavigate('visit')} className="inline-flex items-center gap-3 px-8 py-5 border border-espresso text-espresso text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all">
            Serenbe Day Trip Guide <ArrowRight size={14} />
          </button>
        </div>
        <DropCTA onJoinDrop={onJoinDrop} />
      </div>
    </Section>
  </div>
);

export const CoffeeNearGARenFest: React.FC<SEOPageProps> = ({ onNavigate, onJoinDrop }) => (
  <div className="pt-32 bg-cream min-h-screen">
    <Section>
      <div className="max-w-4xl mx-auto">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Ren Fest + Coffee</span>
        <h1 className="text-5xl md:text-7xl font-serif text-espresso tracking-tight leading-none mb-8">
          Where to Get Coffee Near the Georgia Renaissance Festival
        </h1>
        <p className="text-xl font-light text-espresso/70 leading-relaxed mb-12 max-w-3xl">
          The Georgia Renaissance Festival runs April through May in Fairburn, GA — and Birdhouse Coffee Room in Serenbe is about 20 minutes away. Skip the festival food lines and start your Ren Fest day with real specialty coffee and artisan pastries.
        </p>

        <div className="bg-linen p-10 mb-16">
          <h2 className="text-2xl font-serif text-espresso mb-6">Birdhouse Coffee Room — 20 Minutes from GA Ren Fest</h2>
          <NAP />
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-espresso/80 font-light leading-relaxed">
          <h2 className="text-3xl font-serif text-espresso !font-normal">Georgia Renaissance Festival 2026</h2>
          <p>The Georgia Renaissance Festival (April 11 – May 31, 2026) is one of the Southeast's largest Renaissance fairs, featuring 160+ artisan shops, 15 entertainment stages, jousting tournaments, and themed weekends. Located off I-85 Exit 61 in Fairburn, it draws hundreds of thousands of visitors each spring season.</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">Make Birdhouse Your Pre-Ren Fest Stop</h2>
          <p>The festival gates open at 10:30 AM. Birdhouse Coffee Room opens at 7:30 AM (8:00 AM weekends). That gives you time for a leisurely pour over, a Bianca Cavandi pastry, and maybe a quick browse at Hills & Hamlets Bookshop — all before the gates open. It's the perfect way to ease into your Ren Fest adventure without the chaos.</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">Other Things to Do Near the GA Ren Fest</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Serenbe community — trails, farms, art galleries, outdoor theater</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Cochran Mill Park — 800 acres of hiking and waterfalls</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Serenbe Farms — organic farm tours ($18/person)</span></li>
            <li className="flex items-start gap-2"><ChevronRight size={16} className="shrink-0 text-terracotta mt-1" /><span>Inn at Serenbe — stay overnight and make it a full weekend</span></li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all">
            <MapPin size={16} /> Get Directions
          </a>
          <button onClick={() => onNavigate('menu')} className="inline-flex items-center gap-3 px-8 py-5 border border-espresso text-espresso text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all">
            View Our Menu <ArrowRight size={14} />
          </button>
        </div>
        <DropCTA onJoinDrop={onJoinDrop} />
      </div>
    </Section>
  </div>
);

// ========================================================
// FAQ PAGE
// ========================================================

export const FAQPage: React.FC<SEOPageProps> = ({ onNavigate, onJoinDrop }) => (
  <div className="pt-32 bg-cream min-h-screen">
    <Section>
      <div className="max-w-4xl mx-auto">
        <span className="text-terracotta font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Frequently Asked Questions</span>
        <h1 className="text-5xl md:text-7xl font-serif text-espresso tracking-tight leading-none mb-16">
          Everything You Need to Know About Birdhouse Coffee
        </h1>

        <div className="space-y-12">
          {[
            { q: "Is there a coffee shop in Serenbe?", a: "Yes! Birdhouse Coffee Room & Market is located in the Grange Hamlet of Serenbe at 10625 Serenbe Lane, Unit A, Chattahoochee Hills, GA 30268. We serve specialty micro-roasted coffee, curated tea from Herbs & Kettles, artisan pastries by Bianca Cavandi, and quick bites. We also feature rotating art exhibits and host community events." },
            { q: "What are the hours of Birdhouse Coffee Room?", a: "We're open Monday through Friday 7:30 AM – 2:00 PM and Saturday & Sunday 8:00 AM – 2:00 PM." },
            { q: "How far is Serenbe from Atlanta?", a: "Serenbe is about 45 minutes (35 miles) southwest of downtown Atlanta. Take I-85 South to Highway 74, then follow signs to Serenbe in Chattahoochee Hills, GA." },
            { q: "Where to eat breakfast in Serenbe?", a: "Birdhouse Coffee Room opens at 7:30 AM (8 AM weekends) and serves specialty coffee, artisan pastries from our seasonal collaborator Bianca Cavandi, sourdough tartines, and other quick bites. We're located in the Grange Hamlet, right next to Hills & Hamlets Bookshop." },
            { q: "Does Birdhouse Coffee have events?", a: "Yes! We host weekly Thursday Cupping Labs ($12/person, 12 seats only) where you can learn to identify flavor markers like a pro. Saturday Story Time is a free community event for kids. We also host Wednesday Night Cafe and rotating Artisan Dialogues with our collaborators. Join The Drop for 24-48 hour early access to event RSVPs." },
            { q: "Can you buy coffee beans at Birdhouse?", a: "Absolutely. Our market features whole-bean bags from our micro-roasts and partner roasts from Portrait Coffee, Chrome Yellow, and Dancing Goats. We also sell designer brewing equipment, Herbs & Kettles tea, and other curated artisan goods." },
            { q: "Where to get coffee near Cochran Mill Park?", a: "Birdhouse Coffee Room in Serenbe is the closest specialty coffee shop to Cochran Mill Park, both located in Chattahoochee Hills. Grab a pour over or espresso before or after your hike on Cochran Mill's 18 miles of trails and 800 acres of forest." },
            { q: "Where to get coffee near the Georgia Renaissance Festival?", a: "The Georgia Renaissance Festival is in Fairburn, GA, about 20 minutes from Birdhouse Coffee Room in Serenbe. We open at 7:30 AM — perfect for a specialty coffee stop before the Ren Fest gates open at 10:30 AM." },
            { q: "What is the Grange Hamlet at Serenbe?", a: "The Grange Hamlet is one of three hamlets in the Serenbe community, themed around agriculture and the arts. It's home to Birdhouse Coffee Room, Hills & Hamlets Bookshop, the General Store, Serenbe Farms, and several artisan studios and shops." },
            { q: "Can you visit Serenbe without staying at the Inn?", a: "Absolutely! Serenbe welcomes day visitors. Park in the public lots and explore the hamlets, trails, shops, and restaurants. Start at Birdhouse Coffee Room in the Grange Hamlet — we're the perfect home base for a Serenbe day trip." },
            { q: "Does Birdhouse Coffee have wifi?", a: "Yes, we offer wifi for guests. Our biophilic space with natural light and comfortable seating makes Birdhouse a unique and inspiring work-from-cafe experience, far from the typical coffee shop." },
            { q: "What makes Birdhouse different from other coffee shops?", a: "We micro-roast in-house and collaborate with Georgia's finest ethical roasters (Portrait Coffee, Chrome Yellow, Dancing Goats). Our rotating art exhibits change monthly, we host intimate community events, and we're located in the biophilic Serenbe community — a one-of-a-kind setting 45 minutes south of Atlanta." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-espresso/10 pb-10">
              <h2 className="text-2xl font-serif text-espresso mb-4">{faq.q}</h2>
              <p className="text-base text-espresso/70 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <DropCTA onJoinDrop={onJoinDrop} />
      </div>
    </Section>
  </div>
);

// ========================================================
// "BEST COFFEE SOUTH OF ATLANTA" PAGE
// ========================================================

export const BestCoffeeSouthAtlanta: React.FC<SEOPageProps> = ({ onNavigate, onJoinDrop }) => (
  <div className="pt-32 bg-cream min-h-screen">
    <Section>
      <div className="max-w-4xl mx-auto">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">South of the Perimeter</span>
        <h1 className="text-5xl md:text-7xl font-serif text-espresso tracking-tight leading-none mb-8">
          Best Specialty Coffee Shop South of Atlanta
        </h1>
        <p className="text-xl font-light text-espresso/70 leading-relaxed mb-12 max-w-3xl">
          If you're searching for third-wave specialty coffee south of Atlanta, Birdhouse Coffee Room & Market in Serenbe is worth the drive. We're the only micro-roasting coffee shop in Chattahoochee Hills — serving precision pour overs, ethically sourced espresso, and curated tea in a biophilic space with rotating art.
        </p>

        <div className="bg-linen p-10 mb-16">
          <h2 className="text-2xl font-serif text-espresso mb-6">Find Us in Serenbe</h2>
          <NAP />
          <p className="text-sm text-espresso/50 mt-6 italic">45 minutes southwest of downtown Atlanta. Located in the Grange Hamlet behind Hills & Hamlets Bookshop.</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-espresso/80 font-light leading-relaxed">
          <h2 className="text-3xl font-serif text-espresso !font-normal">What Sets Birdhouse Apart</h2>
          <p>While Atlanta proper has a thriving specialty coffee scene, the area south of the city has been underserved — until Birdhouse. We micro-roast in-house and partner with Portrait Coffee, Chrome Yellow, and Dancing Goats for rotating roasts. Every cup is dialed with precision, not shortcuts. Our tea program with Herbs & Kettles features direct-trade premium Nilgiri, and our pastry case showcases seasonal laminated pastries from Bianca Cavandi.</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">Serving Communities South of Atlanta</h2>
          <p>We welcome coffee lovers from across the south Atlanta metro — Fairburn (15 min), Palmetto (10 min), Peachtree City (20 min), Newnan (20 min), Fayetteville (25 min), Tyrone (20 min), Union City (25 min), and South Fulton (25 min). There's no Starbucks or chain coffee in Chattahoochee Hills — Birdhouse is the independent, locally-roasted alternative you've been looking for.</p>

          <h2 className="text-3xl font-serif text-espresso !font-normal">More Than Coffee</h2>
          <p>Birdhouse is a community hub. Thursday Cupping Labs teach you to taste like a professional. Saturday Story Time brings families together. Our market sells whole-bean bags, brewing equipment, and artisan goods. And the Serenbe community surrounding us offers 16 miles of trails, organic farm tours, outdoor theater, a world-class spa, and goat yoga. It's not just a coffee stop — it's a destination.</p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a href="https://www.google.com/maps/dir/?api=1&destination=10625+Serenbe+Lane+Unit+A+Chattahoochee+Hills+GA+30268" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-espresso text-cream text-xs font-bold uppercase tracking-[0.2em] hover:bg-terracotta transition-all">
            <MapPin size={16} /> Get Directions
          </a>
          <button onClick={() => onNavigate('visit')} className="inline-flex items-center gap-3 px-8 py-5 border border-espresso text-espresso text-xs font-bold uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition-all">
            Plan Your Day Trip <ArrowRight size={14} />
          </button>
        </div>
        <DropCTA onJoinDrop={onJoinDrop} />
      </div>
    </Section>
  </div>
);

// ========================================================
// LOCATION PAGE FACTORY
// ========================================================

export const CoffeeNearPalmetto: React.FC<SEOPageProps> = (props) => (
  <LocationPage {...props} city="Palmetto" state="GA" distance="10 minutes" direction="south"
    landmarks={["Serenbe community — 16 miles of trails, farms, art, theater", "Cochran Mill Park — 800 acres of hiking and waterfalls", "Serenbe Farms — organic farm tours and Saturday farmers market", "Hills & Hamlets Bookshop — independent bookstore next door to Birdhouse", "Inn at Serenbe — boutique accommodations with spa and yoga"]}
    competitors="Palmetto has limited coffee options, primarily 613 Main Restaurant & Coffee Bar."
    bodyContent="Palmetto is the mailing address for much of the Serenbe area, making Birdhouse Coffee Room your neighborhood specialty coffee shop. Unlike chain options, we micro-roast in-house and partner with Atlanta's finest ethical roasters. Our biophilic space features rotating art exhibits and a curated market. Saturday morning Story Time makes us a family destination, and Thursday Cupping Labs are perfect for coffee enthusiasts."
  />
);

export const CoffeeNearFairburn: React.FC<SEOPageProps> = (props) => (
  <LocationPage {...props} city="Fairburn" state="GA" distance="15 minutes" direction="southwest"
    landmarks={["Georgia Renaissance Festival — April through May, 160+ shops, jousting", "Serenbe community — trails, farms, art, outdoor theater", "Cochran Mill Park — hiking, mountain biking, waterfalls", "Sweetwater Creek State Park — 30 minutes north, Civil War ruins", "Trilith Studios / Town at Trilith — 25 minutes east in Fayetteville"]}
    competitors="Fairburn has Starbucks, Tim Hortons, and Dunkin', but very few independent specialty coffee options."
    bodyContent="Fairburn is home to the Georgia Renaissance Festival and sits at the crossroads of I-85 and Highway 74. But for real specialty coffee, you need to head 15 minutes southwest to Birdhouse in Serenbe. We're the antithesis of drive-through chains — precision-brewed pour overs, ethically sourced espresso, artisan pastries from Bianca Cavandi, and a light-filled space designed for unhurried connection."
  />
);

export const CoffeeNearPeachtreeCity: React.FC<SEOPageProps> = (props) => (
  <LocationPage {...props} city="Peachtree City" state="GA" distance="20 minutes" direction="west"
    landmarks={["100+ miles of golf cart paths in Peachtree City", "Serenbe community — trails, farms, art, theater", "Lake Peachtree and Drake Field", "Frederick Brown Jr. Amphitheater", "Cochran Mill Park — hiking and mountain biking"]}
    competitors="Peachtree City has Foxtail Coffee, Heirloom Donuts, 7 Brew, and several chains."
    bodyContent="Peachtree City is known for its golf cart culture and family-friendly atmosphere. But if you're a specialty coffee enthusiast looking for something beyond the usual, Birdhouse Coffee Room in Serenbe offers a completely different experience — micro-roasted beans, precision pour overs, a curated market, and the kind of atmosphere you'd expect from a Brooklyn concept transported to rural Georgia. The 20-minute drive west to Serenbe takes you through beautiful Chattahoochee Hills countryside."
  />
);

export const CoffeeNearNewnan: React.FC<SEOPageProps> = (props) => (
  <LocationPage {...props} city="Newnan" state="GA" distance="20 minutes" direction="west"
    landmarks={["Newnan Historic Downtown — antiques, shopping, dining", "Dunaway Gardens — sunken gardens and amphitheater", "Serenbe community — trails, farms, art, theater", "Cochran Mill Park — hiking and waterfalls", "Carl Miller Park — sports and recreation"]}
    competitors="Newnan has a growing coffee scene with Foxtail Coffee (Florida chain, 2 locations), Leaf and Bean, Blume Organics Boutique & Cafe, and Circa's Coffee House."
    bodyContent="Newnan's downtown has charm, but for a specialty coffee experience embedded in a biophilic wellness community, Birdhouse in Serenbe is worth the 20-minute drive. We offer what chains and even some independents can't — in-house micro-roasting, partnerships with Portrait Coffee and Chrome Yellow, rotating art exhibits, community events, and a curated market. It's not just coffee, it's an experience rooted in Serenbe's philosophy of nature, art, and connection."
  />
);

export const CoffeeNearFayetteville: React.FC<SEOPageProps> = (props) => (
  <LocationPage {...props} city="Fayetteville" state="GA" distance="25 minutes" direction="west"
    landmarks={["Trilith Studios / Town at Trilith — film studio community", "Fayetteville Historic Downtown — shops and dining", "Starr's Mill — iconic covered bridge and waterfall", "Serenbe community — trails, farms, art, theater", "Cochran Mill Park — hiking and mountain biking"]}
    competitors="Fayetteville has Java & Brie, Gremlin Growlers (growler shop with coffee), Blue Donkey Coffee, and Purpose Blend Cafe."
    bodyContent="Fayetteville is home to Trilith Studios (where major films and shows are produced) and a growing creative community. Birdhouse Coffee Room in Serenbe shares that creative DNA — our rotating art exhibits, artisan collaborations, and community events make it a gathering place for creatives, entrepreneurs, and anyone who appreciates the craft of slow-roasted, ethically sourced coffee. The 25-minute drive through Chattahoochee Hills is scenic and unhurried."
  />
);

export default LocationPage;
