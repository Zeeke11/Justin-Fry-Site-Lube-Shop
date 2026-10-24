import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { businessInfo, checkIsOpen } from '../data/businessInfo';

const Footer = () => {
  const [isOperational, setIsOperational] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      setIsOperational(checkIsOpen());
    };

    checkStatus(); // Initial check
    
    // Check every minute to keep it real-time
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0a0a0a] text-[#E8E4DD] pt-32 pb-12 px-8 md:px-20 rounded-[4rem] rounded-b-none mt-20 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20 max-w-screen-2xl mx-auto relative z-10">
        
        {/* BRAND COL */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold uppercase mb-6 tracking-[0.2em] font-heading">
              Mr.<span className="text-amber-400">Lube</span>
            </h3>
            <p className="opacity-60 text-xs tracking-wider leading-relaxed max-w-sm">
              Vandalia's Authorized Valvoline Service Center. Specializing in 15-minute warranty-approved oil changes, computerized wheel service, and precision brake systems.
            </p>
            <p className="mt-3 text-[11px] font-mono text-amber-400/90 font-medium">
              725 School St, Vandalia, IL 62471 • (618) 699-4003
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <div 
                className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentColor] ${
                  isOperational ? 'bg-green-500 text-green-500' : 'bg-[#E63B2E] text-[#E63B2E]'
                }`} 
              />
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                Status: {isOperational ? 'Open (Walk-ins Welcome)' : 'Closed'}
              </span>
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-mono text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Company</h4>
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest opacity-80">
            <Link to="/" className="hover:text-amber-500 transition-colors w-fit">Home</Link>
            <Link to="/about" className="hover:text-amber-500 transition-colors w-fit">About Us</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Services</Link>
            <Link to="/contact" className="hover:text-amber-500 transition-colors w-fit">Contact & Location</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="lg:col-span-1">
          <h4 className="font-mono text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Valvoline™ & Services</h4>
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest opacity-80">
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Valvoline Full Synthetic</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Valvoline MaxLife 75k+</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Valvoline Synthetic Blend</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Tire Rotation & Balance</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Ceramic Brake Pads</Link>
            <Link to="/services" className="hover:text-amber-500 transition-colors w-fit">Brake Rotor Overhaul</Link>
          </div>
        </div>

        {/* SERVICE AREAS & HOURS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AREAS */}
          <div>
            <h4 className="font-mono text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Service Areas</h4>
            <div className="flex flex-col gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80">
               {businessInfo.serviceAreas.map((area, idx) => (
                 <span key={idx} className="hover:text-amber-500 transition-colors cursor-default">{area}</span>
               ))}
            </div>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="font-mono text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-8">Hours</h4>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest opacity-80">
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Sun</span> <span className="text-[#E63B2E]">Closed</span></div>
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Mon</span> <span>8:00am - 5:00pm</span></div>
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Tue</span> <span>8:00am - 5:00pm</span></div>
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Wed</span> <span>8:00am - 5:00pm</span></div>
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Thu</span> <span>8:00am - 5:00pm</span></div>
              <div className="flex justify-between border-b border-white/5 pb-3"><span>Fri</span> <span>8:00am - 5:00pm</span></div>
              <div className="flex justify-between pb-3"><span>Sat</span> <span>8:00am - 12:00pm</span></div>
            </div>
          </div>
        </div>

      </div>

      {/* EXACT CUSTOM EMBLEM AND BOTTOM BAR FROM WEISS CONSTRUCTION */}
      <div className="border-t border-white/10 pt-8 w-full flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto tracking-widest gap-8 relative z-10 text-[10px] font-mono uppercase">
        <div className="flex flex-col md:flex-row gap-4 opacity-40 items-center">
          <span>© 2026 Mr. Lube</span>
          <span className="hidden md:block">|</span>
          <Link to="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
        </div>
        
        <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-20">
          <span className="opacity-40 group-hover:opacity-100 transition-opacity">Powered By</span>
          <div className="flex items-center gap-4 opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#4287f5] to-[#b142f5] text-sm uppercase drop-shadow-[0_0_10px_rgba(177,66,245,0.4)]">Vici Global</span>
            
            <div className="relative flex items-center justify-center w-16 h-16">
              {/* Outer Energy Rings */}
              <div className="absolute -inset-2 rounded-full border border-[#b142f5]/20 border-dashed animate-[spin_8s_linear_infinite]" />
              <div className="absolute -inset-1 rounded-full border border-[#4287f5]/30 animate-[spin_5s_linear_infinite_reverse]" />
              
              {/* Core Pulse Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4287f5] to-[#b142f5] blur-[15px] opacity-40 animate-pulse mix-blend-screen" />
              
              <img 
                src="/vici-logo.png" 
                alt="Vici Global Logo" 
                className="relative z-10 h-16 w-16 rounded-full object-cover animate-[powerPulsate_3s_ease-in-out_infinite]" 
              />
            </div>
          </div>
        </div>

        <span className="opacity-40">{businessInfo.coordinates.display} • 725 School St, Vandalia, IL • System Ready</span>
      </div>

      <style>{`
        @keyframes powerPulsate {
          0%, 100% {
            box-shadow: 0 0 15px rgba(177, 66, 245, 0.4), inset 0 0 10px rgba(66, 135, 245, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(177, 66, 245, 0.8), inset 0 0 20px rgba(66, 135, 245, 0.6);
            transform: scale(1.03);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
