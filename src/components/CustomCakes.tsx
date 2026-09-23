import React from 'react';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { CUSTOM_CAKE_TYPES } from '../data/bakeryData';

interface CustomCakesProps {
  onRequestCustomCake: (cakeType?: string) => void;
}

export const CustomCakes: React.FC<CustomCakesProps> = ({ onRequestCustomCake }) => {
  return (
    <section
      id="custom-cakes"
      className="py-20 md:py-28 bg-[#F6F0E8] relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EADBC8]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8D9C5]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADBC8] text-[#5C3D2E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Bespoke Confectionery</span>
          </div>

          <h2
            id="custom-cakes-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            Your Dream Cake, Made Just for You
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#614434] leading-relaxed">
            Have something special in mind? Tell us your theme, colors, flavor and design,
            and we'll create a cake that's uniquely yours.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#7D5A44] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> 1-on-1 Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Color Matching &amp; Moodboards
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Safe Temperature-Controlled Delivery
            </span>
          </div>
        </div>

        {/* Custom Cake Showcase Cards (6 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CUSTOM_CAKE_TYPES.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5D7C7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#F5EFEB]">
                <img
                  src={cake.image}
                  alt={cake.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                />
                
                {/* Badge */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#3D2314]/90 backdrop-blur-xs text-[#FAF8F5]">
                  {cake.badge}
                </span>

                {/* Lead time pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-medium text-[#4A3022] flex items-center gap-1 shadow-2xs">
                  <Clock className="w-3 h-3 text-[#C5A059]" />
                  <span>Lead Time: {cake.estimatedLeadTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2C1810]">
                    {cake.title}
                  </h3>
                  <p className="text-sm text-[#664C3B] leading-relaxed">
                    {cake.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2EAE1] flex items-center justify-between">
                  <span className="text-xs text-[#8A6A56] font-medium">
                    {cake.popularFor}
                  </span>

                  <button
                    onClick={() => onRequestCustomCake(cake.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D2314] hover:text-[#C5A059] transition-colors py-1 group/btn"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Call to Action Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#3D2314] to-[#D4AF37] shadow-lg">
            <button
              id="request-custom-cake-cta-btn"
              onClick={() => onRequestCustomCake('Custom Bespoke Cake')}
              className="px-8 sm:px-10 py-4 rounded-full bg-[#3D2314] text-[#FAF8F5] text-base sm:text-lg font-semibold hover:bg-[#25150C] active:scale-[0.98] transition-all flex items-center gap-3 border border-[#6B4423]"
            >
              <Sparkles className="w-5 h-5 text-[#E0C79B]" />
              <span>Request a Custom Cake</span>
              <ArrowRight className="w-5 h-5 text-[#E0C79B]" />
            </button>
          </div>
          <p className="text-xs text-[#7A5B48] mt-3">
            No design is too simple or too complex. Bring your vision to life today!
          </p>
        </div>

      </div>
    </section>
  );
};
