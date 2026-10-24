import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-8 animate-fade-in">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" /> Legal & Customer Trust
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-slate-400">
          Last Updated: March 2026 • Mr. Lube (Vandalia, IL)
        </p>
      </div>

      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wider">
            1. Information We Collect
          </h2>
          <p>
            When you request service appointments or reach out via our contact form, Mr. Lube collects basic personal details (such as your name, phone number, email address, and vehicle make/model/year). We use this information solely to process your service request, provide accurate estimates, and communicate regarding your vehicle's maintenance status.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wider">
            2. We Never Sell Your Data
          </h2>
          <p>
            Mr. Lube does not sell, rent, or lease customer contact lists or personal data to any third-party advertisers or telemarketers. We are an independent local business and treat your privacy with the same respect we give our neighbors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wider">
            3. Vehicle Service Records & Warranty Compliance
          </h2>
          <p>
            We securely maintain maintenance records (such as oil change mileage, tire rotations, and brake replacements) to provide warranty proof in compliance with vehicle manufacturer requirements and the federal Magnuson-Moss Warranty Act.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wider">
            4. Contact Us
          </h2>
          <p>
            If you have questions regarding this policy or wish to review your stored vehicle records, please reach out to us at <strong>service@mrlubevandalia.com</strong> or call our front desk directly at <strong>(618) 283-5823</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
