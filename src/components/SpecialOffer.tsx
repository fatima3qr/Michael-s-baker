import React from 'react';
import { ArrowRight, Gift, Sparkles } from 'lucide-react';
import { luxuryCustomCake } from '../data/bakeryData';

interface SpecialOfferProps {
  onOrderNow: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderNow }) => {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        id="special-offer-banner"
        className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#523321] min-h-[380px] sm:min-h-[420px] flex items-center"
      >
        {/* Background Image */}
        <img
          src={luxuryCustomCake}
          alt="Michael's Baker Luxury Celebration Cake"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Deep rich chocolate gradient overlay for readability & luxury warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F0A]/95 via-[#2C1810]/85 to-[#2C1810]/60" />

        {/* Content Box */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0C79B]/20 border border-[#E0C79B]/40 text-[#E0C79B] text-xs font-semibold tracking-wider uppercase">
            <Gift className="w-3.5 h-3.5 text-[#E0C79B]" />
            <span>Celebration Offer</span>
          </div>

          <h2
            id="special-offer-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight leading-tight"
          >
            Make Your Celebration <br />
            <span className="italic font-normal text-[#E0C79B]">Sweeter</span>
          </h2>

          <p className="text-base sm:text-lg text-[#EADBCC] leading-relaxed max-w-xl">
            Order your custom cake today and make your special moment unforgettable.
            Complimentary designer candles and custom greeting cards included with every pre-order!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              id="special-offer-order-btn"
              onClick={onOrderNow}
              className="px-8 py-4 rounded-full bg-[#FAF8F5] text-[#2C1810] text-base font-bold hover:bg-[#EAE0D3] active:scale-[0.98] transition-all shadow-lg flex items-center gap-2 group"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs sm:text-sm text-[#D4B996] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E0C79B]" />
              Limited booking slots available this week
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
