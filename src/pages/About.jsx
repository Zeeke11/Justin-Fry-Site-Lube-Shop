import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wrench, 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  Award 
} from 'lucide-react';

const About = ({ onOpenBooking }) => {
  return (
    <div className="space-y-24 pt-8 pb-16 animate-fade-in">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
          <HeartHandshake className="w-3.5 h-3.5" /> Built On Local Trust
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
          Hometown Auto Care Rooted in Vandalia
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          We founded Mr. Lube on one simple premise: providing fast, top-tier automotive care without high-pressure sales games.
        </p>
      </section>

      {/* STORY & FACILITY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Our Journey & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase tracking-tight leading-tight">
              A Modern Shop Built With Old-School Integrity
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Living and working in Vandalia means our customers aren't just work order numbers—they are our neighbors, teachers, farmers, and friends. We know how frustrating it is when a routine oil change turns into a high-pressure sales pitch for hundreds of dollars in unnecessary flushes.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Mr. Lube, we flipped that script. As an Authorized Valvoline Service Center, we invested in purpose-built drive-thru lube bays right at 725 School St, computerized tire balancers, and ASE-trained technicians so you get dealership-grade Valvoline lubricants and honest local service in 15 minutes flat.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="font-heading text-2xl font-bold text-amber-400">100%</span>
                <p className="text-xs text-slate-300 mt-1 font-medium">Fayette County Hometown Owned</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="font-heading text-2xl font-bold text-amber-400">25k+</span>
                <p className="text-xs text-slate-300 mt-1 font-medium">Vehicles Safely Serviced</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/images/shop-exterior.jpg" 
                alt="Mr. Lube Valvoline Service Bays in Vandalia, IL" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0f1420]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">Mr. Lube Service Center</h4>
                  <p className="text-xs text-slate-400 font-mono">725 School St • Vandalia, IL 62471</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-mono font-bold uppercase">
                  Valvoline™ Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE SHOP PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            The Values We Work By
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight uppercase mt-2">
            The Four Pillars of Mr. Lube
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Absolute Transparency",
              text: "No hidden fees, no mystery charges. We explain every inspection finding in plain language and show you the old parts when requested."
            },
            {
              icon: Clock,
              title: "Speed Without Shortcuts",
              text: "Our multi-technician service pit flow enables comprehensive 15-minute oil changes and 21-point checks without skipping a single step."
            },
            {
              icon: Wrench,
              title: "Certified Craftsmanship",
              text: "Equipped with state-of-the-art diagnostic scanners, laser wheel balancers, and factory torque specs for every vehicle make and model."
            },
            {
              icon: Award,
              title: "Warranty Protection",
              text: "We strictly utilize manufacturer-certified Dexos1, API SP, and OEM oils ensuring your manufacturer warranty stays fully valid."
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CUSTOMER LOUNGE & EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Premium Guest Amenities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase tracking-tight">
                Wait in Comfort
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Comfortable waiting lounge & family friendly.
              </p>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px]">
              <img 
                src="/images/customer-lounge.jpg" 
                alt="Mr. Lube Customer Lounge in Vandalia, IL" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#131a26]/80 lg:from-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY COMMITMENT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase tracking-tight">
            Visit Us Today in Vandalia
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Experience the difference of honest, quick automotive service. No appointment necessary for oil changes, tire rotations, and battery inspections!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Request Service Appointment
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Directions & Hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
