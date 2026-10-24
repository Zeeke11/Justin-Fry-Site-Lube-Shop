import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  HelpCircle,
  Phone,
  Info
} from 'lucide-react';
import { servicesData, serviceCategories, faqs, pricingDisclaimer } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

const Services = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-24 pt-8 pb-16 animate-fade-in">
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Full Automotive Service Menu
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
          Valvoline Care & Precision Maintenance
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Every oil change includes our courtesy 21-point safety inspection and genuine Valvoline motor oil. Drive right in to 725 School St — no appointment needed for quick lube services!
        </p>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Transparent Pricing Notice */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 leading-relaxed text-left flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-amber-300 font-semibold">Pricing Transparency:</strong> {pricingDisclaimer}
          </span>
        </div>
      </section>

      {/* DETAILED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col justify-between border ${
                service.popular ? 'border-amber-500/40 ring-1 ring-amber-500/30' : 'border-white/10'
              } glass-card-hover relative`}
            >
              {service.popular && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-lg">
                  Most Popular Choice
                </div>
              )}

              {/* Service Card Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/40 to-transparent" />
                
                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-right">
                  <span className="text-base font-bold font-mono text-amber-400 block leading-none">
                    {service.price}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {service.priceNote}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                    <span>•</span>
                    <span>{service.appointmentRequired ? 'Appointment Bay' : 'Walk-In Friendly'}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                      Service Package Inclusions:
                    </span>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Service</span>
                  </button>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    aria-label="Call about this service"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 21-POINT COURTESY INSPECTION HIGHLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 bg-gradient-to-b from-[#131a26] to-[#0d121c]">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Standard On Every Oil Change
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white uppercase mt-2 tracking-tight">
              Our Complimentary 21-Point Courtesy Safety Check
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              We believe regular preventive checks prevent costly highway breakdowns. Whenever your car is on our service lift, our technicians perform a full digital health evaluation at zero charge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            {[
              { category: "Vital Under-Hood Fluids", items: "Engine oil, transmission, coolant freeze point, brake fluid moisture, power steering, washer reservoir" },
              { category: "Brake & Tire Wear", items: "Brake pad thickness visual, rotor condition, digital tread depth measurement, TPMS warning diagnostics" },
              { category: "Chassis & Steering", items: "Steering grease points, ball joints, tie rod ends, CV axle boot leaks, suspension bushing play" },
              { category: "Electrical & Vision", items: "Cold-cranking amp battery test, alternator output check, wiper blade tear inspect, headlights & taillights" }
            ].map((col, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="font-heading font-bold text-amber-400 text-sm">{col.category}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{col.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight uppercase">
            Automotive Care FAQs
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Clear, honest answers to the most common questions our Vandalia customers ask.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading font-bold text-white text-base sm:text-lg">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
