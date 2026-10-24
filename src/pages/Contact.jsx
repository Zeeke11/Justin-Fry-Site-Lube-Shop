import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation, 
  AlertCircle, 
  ExternalLink, 
  Compass,
  Loader2
} from 'lucide-react';
import { businessInfo, checkIsOpen } from '../data/businessInfo';
import { submitFormspree } from '../config/formspree';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isOperational = checkIsOpen();
  const todayDayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon ...
  const adjustedTodayIndex = todayDayIndex === 0 ? 6 : todayDayIndex - 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await submitFormspree('contact', formData);
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong submitting your message. Please call us directly at (618) 699-4003.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 pt-8 pb-16 animate-fade-in">
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" /> Convenient Location in Vandalia
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
          Get In Touch & Visit Our Bays
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Have a question about tire sizes, brake symptoms, or fleet maintenance? Reach out or stop right in—oil changes need no appointment!
        </p>
      </section>

      {/* QUICK CONTACT CARDS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PHONE CARD */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Service Line</span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">(618) 699-4003</h3>
              <p className="text-xs text-slate-400 mt-1">Alt: (618) 283-9161 • Front desk & bay scheduling</p>
            </div>
            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors text-center"
            >
              Call Us Now
            </a>
          </div>

          {/* ADDRESS CARD */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Physical Address</span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">725 School St</h3>
              <p className="text-xs text-slate-400 mt-1">Vandalia, IL 62471 • Across from high school</p>
            </div>
            <a 
              href="https://maps.google.com/?q=725+School+St,+Vandalia,+IL+62471" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wider text-xs transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* LIVE STATUS CARD */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_8px_currentColor] ${
                  isOperational ? 'bg-emerald-400 text-emerald-400' : 'bg-amber-400 text-amber-400'
                }`} />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {isOperational ? 'Currently Open' : 'Currently Closed'}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                {isOperational ? 'Bays Ready Now' : 'Opens Mon-Fri 8:00 AM'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">Saturday: 8:00 AM - 12:00 PM • Sunday: Closed</p>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[11px] text-slate-300 text-center font-mono">
              ⚡ Walk-ins Always Welcomed
            </div>
          </div>
        </div>
      </section>

      {/* FORM & HOURS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CONTACT FORM (LEFT 7 COLS) */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                Send Us A Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white uppercase tracking-tight mt-1">
                Drop Us A Line
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out the form below and our Vandalia service manager will respond promptly.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Mike Peterson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(618) 555-0123"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mike@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Subject Inquiry</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Tire Quote">Tire Availability & Pricing</option>
                      <option value="Brake Inspection Inquiry">Brake Inspection Inquiry</option>
                      <option value="Fleet Services">Commercial / Fleet Account</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Message or Vehicle Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vehicle model, symptoms, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5 animate-shake">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-semibold text-red-200">Message Could Not Be Sent</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 text-slate-950 font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending Message to Shop...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. We've received your note and will get back to you at <span className="text-white font-mono">{formData.phone || formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage('');
                    setFormData({ name: '', phone: '', email: '', subject: 'General Question', message: '' });
                  }}
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* HOURS & LOCAL INFO (RIGHT 5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Operating Hours Table */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wider">
                  Operating Hours
                </h3>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  Live Status
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {businessInfo.hours.map((h, idx) => {
                  const isToday = idx === adjustedTodayIndex;
                  return (
                    <div 
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                        isToday 
                          ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold' 
                          : 'text-slate-300 border-b border-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
                        <span>{h.day}</span>
                        {isToday && <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 uppercase">Today</span>}
                      </span>
                      <span className={`font-mono text-xs ${h.opens === 'Closed' ? 'text-red-400 font-semibold' : ''}`}>
                        {h.opens === 'Closed' ? 'Closed' : `${h.opens} - ${h.closes}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-[11px] text-slate-400 font-mono leading-relaxed">
                * Note: Last quick-lube vehicle accepted 15 minutes prior to daily closing time.
              </div>
            </div>

            {/* Quick Drive-in Note */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" /> Drive-Thru Express Guarantee
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                No need to call ahead for standard Valvoline oil & filter changes or tire pressure checks. Drive straight into our service lane at 725 School St, Vandalia!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LOCATION & MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Location Card */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#0f1420]/95 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" /> Regional Hub
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white uppercase tracking-tight">
                  Mr. Lube Service Center
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Located at 725 School Street in Vandalia, Illinois. Centrally positioned across from the high school with easy drive-thru access and spacious bay clearance for trucks, cars, and SUVs.
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>725 School St, Vandalia, IL 62471</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Coordinates: 38°57'38"N 89°05'40"W</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Quick Navigation Links:
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=725+School+St,+Vandalia,+IL+62471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors inline-flex items-center gap-2"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://maps.apple.com/?address=725+School+St,+Vandalia,+IL+62471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wider text-xs transition-colors inline-flex items-center gap-2"
                  >
                    <span>Apple Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Visual */}
            <div className="lg:col-span-7 relative min-h-[320px] bg-[#0a0e17] overflow-hidden flex items-center justify-center p-6">
              {/* Stylized Vector Radar Map Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Concentric service radius circles */}
              <div className="absolute w-[460px] h-[460px] rounded-full border border-amber-500/15 animate-[spinSlow_60s_linear_infinite]" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-amber-500/25 border-dashed" />
              <div className="absolute w-[160px] h-[160px] rounded-full border border-amber-500/40" />

              {/* Central Map Pin */}
              <div className="relative z-10 text-center space-y-3">
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-amber-500/30 animate-ping" />
                  <div className="relative w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.8)]">
                    <MapPin className="w-6 h-6 fill-slate-950" />
                  </div>
                </div>

                <div className="bg-[#0f1420]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/30 shadow-xl inline-block">
                  <p className="font-heading font-bold text-white text-sm">Mr. Lube Service Center</p>
                  <p className="text-[11px] font-mono text-amber-400">Vandalia, IL (Main Corridor)</p>
                </div>
              </div>

              {/* Service Area Markers */}
              <div className="absolute top-8 right-12 text-right opacity-75 hidden sm:block">
                <span className="text-[10px] font-mono text-amber-400/80 uppercase">East Corridor</span>
                <p className="text-xs text-white font-medium">Brownstown (8 mi) • St. Elmo (14 mi)</p>
              </div>

              <div className="absolute bottom-8 left-8 text-left opacity-75 hidden sm:block">
                <span className="text-[10px] font-mono text-amber-400/80 uppercase">West & South Corridors</span>
                <p className="text-xs text-white font-medium">Mulberry Grove (9 mi) • Greenville (18 mi)</p>
              </div>

              <div className="absolute top-8 left-8 text-left opacity-75 hidden sm:block">
                <span className="text-[10px] font-mono text-amber-400/80 uppercase">North Corridor</span>
                <p className="text-xs text-white font-medium">Ramsey (12 mi) • Bingham (16 mi)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
