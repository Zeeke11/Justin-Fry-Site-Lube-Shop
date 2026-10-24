import React, { useState } from 'react';
import { X, Calendar, Clock, Car, CheckCircle2, ShieldCheck, PhoneCall, AlertCircle, Loader2 } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { submitFormspree } from '../config/formspree';

const BookingModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const [prevService, setPrevService] = useState(preselectedService);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    service: preselectedService || 'Valvoline™ Advanced Full Synthetic',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 10:30 AM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync service if preselectedService changes from parent
  if (preselectedService !== prevService) {
    setPrevService(preselectedService);
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await submitFormspree('booking', formData);
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong submitting your request. Please call us directly at (618) 699-4003.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#111622] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Car className="w-3.5 h-3.5" /> Authorized Valvoline Service • 725 School St
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Request Service Appointment
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Oil changes are always drive-up ready with no appointment needed! For brakes, tires, and scheduled maintenance, let us know your preferred slot and we’ll reserve your bay.
              </p>
            </div>

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
                    placeholder="e.g. John Miller"
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
                    placeholder="(618) 699-4003"
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
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Vehicle Year / Make / Model *</label>
                  <input
                    type="text"
                    name="vehicleMakeModel"
                    required
                    value={formData.vehicleMakeModel}
                    onChange={handleChange}
                    placeholder="e.g. 2021 Chevy Silverado 1500"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Primary Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                >
                  <option value="Valvoline™ Advanced Full Synthetic">Valvoline™ Advanced Full Synthetic (Starting at $79.95)</option>
                  <option value="Valvoline™ High Mileage with MaxLife™">Valvoline™ High Mileage with MaxLife™ (Starting at $69.95)</option>
                  <option value="Valvoline™ Daily Protection Synthetic Blend">Valvoline™ Daily Protection Synthetic Blend (Starting at $59.95)</option>
                  <option value="Valvoline™ Premium Blue Heavy-Duty Diesel">Valvoline™ Premium Blue Heavy-Duty Diesel (Starting at $129.95)</option>
                  <option value="Computerized Tire Rotation & Balance">Computerized Tire Rotation & Balance ($39.95)</option>
                  <option value="Tire Mounting / Sourcing Inquiry">Tire Mounting / Special Order Inquiry (Quote)</option>
                  <option value="Ceramic Brake Pad Service">Ceramic Brake Pad Service (Estimate)</option>
                  <option value="Complete Brake Pad & Rotor Package">Complete Brake Pad & Rotor Package (Estimate)</option>
                  <option value="Valvoline™ Brake Fluid Exchange">Valvoline™ Brake Fluid Exchange (Starting at $89.95)</option>
                  <option value="Cooling System & Water Pump Service">Cooling System & Water Pump Service (Estimate)</option>
                  <option value="Valvoline™ Transmission & Drivetrain Care">Valvoline™ Transmission & Drivetrain Care (Starting at $119.95)</option>
                  <option value="Battery Diagnosis & Replacement">Battery Diagnosis & Replacement (Free Test / Quote)</option>
                  <option value="21-Point Courtesy Inspection / Other">21-Point Courtesy Inspection / Other Concern</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Preferred Time Window</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white"
                  >
                    <option value="Morning (8:00 AM - 10:30 AM)">Morning (8:00 AM - 10:30 AM)</option>
                    <option value="Mid-Day (10:30 AM - 1:30 PM)">Mid-Day (10:30 AM - 1:30 PM)</option>
                    <option value="Afternoon (1:30 PM - 5:00 PM)">Afternoon (1:30 PM - 5:00 PM)</option>
                    <option value="Saturday Morning (8:00 AM - 12:00 PM)">Saturday Morning (8:00 AM - 12:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Special Notes or Symptoms</label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any sounds, vibrations, or specific requests..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-900/80 border border-white/10 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors text-white resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5 animate-shake">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-red-200">Request Could Not Be Sent</p>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 text-slate-950 font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 text-sm cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending Service Bay Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Service Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 100% Free Cancellation</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> Quick 1-Hour Confirmation</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Appointment Request Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>! Our service team at Mr. Lube in Vandalia has received your request for your <span className="text-white font-medium">{formData.vehicleMakeModel}</span>. We will call you at <span className="text-white font-mono">{formData.phone}</span> shortly to confirm your service bay.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={`tel:${businessInfo.phoneRaw}`} 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-amber-400 transition-colors"
              >
                <PhoneCall className="w-4 h-4" /> Need Immediate Bay? Call Now
              </a>
              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
