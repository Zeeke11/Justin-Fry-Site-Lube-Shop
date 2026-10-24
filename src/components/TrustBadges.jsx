import React from 'react';
import { Zap, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Authorized Valvoline",
      subtitle: "Official Valvoline Advanced Full Synthetic, MaxLife & Premium Blue fluids."
    },
    {
      icon: Zap,
      title: "15-Minute Drive-Thru",
      subtitle: "No appointment needed for oil changes. Drive right in to 725 School St."
    },
    {
      icon: Wrench,
      title: "ASE Master Care",
      subtitle: "Factory-trained precision, computer diagnostics, and correct torque specs."
    },
    {
      icon: ThumbsUp,
      title: "Zero Pressure Upsells",
      subtitle: "Hometown honesty in Vandalia. Clear recommendations, no hidden fees."
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#0f1420]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div 
              key={idx}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white tracking-wide group-hover:text-amber-400 transition-colors">
                  {badge.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
