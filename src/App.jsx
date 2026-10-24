import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b0f17] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar onOpenBooking={() => handleOpenBooking()} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />

        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          preselectedService={preselectedService} 
        />
      </div>
    </Router>
  );
}

export default App;
