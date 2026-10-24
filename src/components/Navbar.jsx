import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight, Droplet } from 'lucide-react';
import { businessInfo, checkIsOpen } from '../data/businessInfo';

const Navbar = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOperational, setIsOperational] = useState(checkIsOpen());
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOperational(checkIsOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on navigation without triggering effect warning
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Banner Bar with hours & location for quick access */}
      <div className="bg-[#090d14] border-b border-white/5 py-2 px-4 sm:px-6 lg:px-8 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              725 School St, Vandalia, IL 62471
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Mon-Fri 8AM-5PM • Sat 8AM-12PM
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            {/* Live Operational Status */}
            <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider">
              <span className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor] ${
                isOperational ? 'bg-emerald-500 text-emerald-500' : 'bg-amber-500 text-amber-500'
              }`} />
              <span className={isOperational ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                {isOperational ? 'Open Now (Walk-ins Welcome)' : 'Closed Now (Opens 8:00 AM)'}
              </span>
            </div>

            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono font-bold tracking-wider transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f17]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
          : 'bg-[#0b0f17]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Valvoline partner marker */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform">
                <Droplet className="w-6 h-6 fill-slate-950" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 border border-amber-400 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                    Mr.<span className="text-amber-400">Lube</span>
                  </span>
                </div>
                <div className="text-[10px] font-mono tracking-wider uppercase text-slate-400 -mt-1 font-semibold flex items-center gap-1.5">
                  <span>725 School St</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-amber-400 font-bold">Valvoline™ Certified</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Shop</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Bay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenBooking}
                className="p-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
                aria-label="Schedule Service"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0c101a] px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Service Appointment
              </button>

              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
