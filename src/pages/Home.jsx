import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import { featuredSpecialties } from '../data/servicesData';
import { reviewsData } from '../data/reviewsData';
import { businessInfo, checkIsOpen } from '../data/businessInfo';

const Home = ({ onOpenBooking }) => {
  const isOperational = checkIsOpen();

  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
        {/* Background Image with High-Contrast Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-shop.jpg" 
            alt="Mr. Lube Service Center Interior in Vandalia, IL" 
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/85 to-[#0b0f17]/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0f17]/60 to-[#0b0f17]" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Real-time Bay Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-mono mb-8 animate-fade-in shadow-lg">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor] ${
              isOperational ? 'bg-emerald-400 text-emerald-400' : 'bg-amber-400 text-amber-400'
            }`} />
            <span className="text-white font-medium">
              {isOperational ? 'Drive-Thru Bays Open Now' : 'Closed Now • Opens at 8:00 AM'}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              725 School St • Valvoline™ Certified
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight uppercase max-w-5xl mx-auto leading-tight sm:leading-none">
            Fast, Honest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              Auto Care
            </span> In Vandalia
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Authorized Valvoline Service Center specializing in <span className="text-white font-medium">15-minute quick oil changes</span>, precision computerized tire balancing, and certified brake repairs. No appointments required for oil services!
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold uppercase tracking-wider text-sm transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
              <span>Schedule Service Bay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono font-bold tracking-wider text-sm transition-all flex items-center justify-center gap-3 hover:border-amber-400/50"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call {businessInfo.phone}</span>
            </a>
          </div>

          {/* Quick Notice */}
          <p className="mt-4 text-xs text-slate-400 font-mono">
            ⚡ Drive-thru Valvoline oil service: Average turnaround under 18 minutes • Walk-ins always welcome
          </p>
        </div>
      </section>

      {/* TRUST BADGES BAR */}
      <TrustBadges />

      {/* CORE SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> What We Specialize In
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight uppercase">
              Core Automotive Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Professional, factory-compliant maintenance engineered to keep your car, truck, or fleet running at peak reliability.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono text-xs uppercase tracking-widest font-bold group"
          >
            <span>View All Packages & Pricing</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Feature Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSpecialties.map((service) => (
            <div 
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/30 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-amber-400 font-mono text-xs font-bold">
                  {service.price}
                </span>
                {service.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 font-bold block">
                      {service.duration}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      725 School St
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3.5 space-y-1.5 pt-3 border-t border-white/5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(service.bookingService || service.title)}
                    className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Reserve Bay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-400">
                    {service.priceNote ? service.priceNote.split('•')[0] : 'Vandalia, IL'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE MR. LUBE SECTION (THE DIFFERENCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> The Mr. Lube Standard
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight uppercase leading-tight">
              Honest Recommendations. <br />
              <span className="text-amber-400">Zero Pushy Sales.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We started Mr. Lube because we believe Fayette County drivers deserve better than big-chain pressure tactics. When you pull into our shop, our technicians perform a genuine 21-point courtesy check. If your air filter or brakes still have plenty of life, we’ll tell you straight up.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Complimentary 21-Point Digital Inspection with every oil change",
                "OEM-Specified Dexos & API Certified Synthetic Fluids only",
                "Heated, high-clearance bays accommodating large pickups & farm trucks",
                "Clean customer lounge with complimentary coffee, Wi-Fi & bay viewing",
                "12-Month / 12,000-Mile warranty on parts & labor"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/images/shop-exterior.jpg" 
                alt="Mr. Lube Service Center Exterior in Vandalia, IL" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0f1420]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-heading font-bold text-lg">725 School St, Vandalia, IL</h4>
                    <p className="text-xs text-slate-400 font-mono">Located right across from the high school • Easy drive-thru access</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=725+School+St,+Vandalia,+IL+62471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-y border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {businessInfo.stats.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-5xl font-extrabold font-heading text-amber-400 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> Real Google & Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight uppercase">
            Trusted Across Fayette County
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Real feedback from verified drivers and neighbors in Vandalia, Brownstown, and surrounding communities.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400" /> 4.6 / 5.0
            </span>
            <span className="text-slate-500">•</span>
            <span>Verified Local Auto Center Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
            <div 
              key={rev.id}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.isGoogle ? (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span>Google Review</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400">
                      <span>Verified Review</span>
                    </div>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
                {rev.service && (
                  <div className="mt-3 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{rev.service}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{rev.name}</h4>
                  <span className="text-[11px] font-mono text-slate-400">{rev.location}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM DRIVE-THRU CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 p-8 sm:p-12 text-slate-950 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-950 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold inline-block">
              No Waiting In The Cold
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase tracking-tight text-slate-950 leading-tight">
              Ready for Your 15-Minute Oil Service?
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
              No appointment needed for oil changes. Just pull in to 725 School St in Vandalia, stay in your car or relax in our customer lounge, and we’ll have you back on the road in minutes with fresh Valvoline motor oil.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {businessInfo.phone}
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 border border-slate-950/20 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Brakes / Tires
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
