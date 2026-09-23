import React from 'react';
import { ArrowRight, Sparkles, Award, Star } from 'lucide-react';
import { heroArtisanCake, BAKERY_INFO } from '../data/bakeryData';

interface HeroProps {
  onOrderClick: () => void;
  onExploreMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreMenuClick }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5EFEB] via-[#FAF8F5] to-[#FAF8F5]"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#EADBC8]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Trust statement pill */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DC] border border-[#E0D0BE] text-[#5C3D2E] text-xs sm:text-sm font-medium tracking-wide shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>{BAKERY_INFO.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C1810] leading-[1.12]"
            >
              Handcrafted Cakes <br className="hidden sm:inline" />
              Made for Your <span className="italic font-normal text-[#6B4423]">Special Moments</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-subheading"
              className="text-base sm:text-lg text-[#5A3E31] leading-relaxed max-w-xl font-normal"
            >
              {BAKERY_INFO.subTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-primary-order-btn"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3D2314] text-[#FAF8F5] text-base font-semibold hover:bg-[#25150C] active:scale-[0.98] transition-all shadow-md hover:shadow-lg border border-[#4F2D1A] group"
              >
                <span>Order Your Cake</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-menu-btn"
                onClick={onExploreMenuClick}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/90 text-[#3D2314] text-base font-semibold hover:bg-[#F2EAE1] active:scale-[0.98] transition-all border border-[#DCCBB8] shadow-2xs hover:shadow"
              >
                Explore Our Menu
              </button>
            </div>

            {/* Quick social proof metrics */}
            <div className="pt-6 border-t border-[#E8DBD0] w-full grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">5,000+</p>
                <p className="text-xs text-[#7A5B48] mt-0.5">Celebrations Baked</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                </p>
                <p className="text-xs text-[#7A5B48] mt-0.5">Customer Rating</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">100%</p>
                <p className="text-xs text-[#7A5B48] mt-0.5">Fresh Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Cake Showcase Photography */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual backdrop frame */}
            <div className="relative w-full max-w-[480px] sm:max-w-[520px]">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#E2D2BE] via-[#F0E6D8] to-transparent -rotate-1 opacity-70 blur-xs -z-10" />

              {/* Main Image Container */}
              <div
                id="hero-image-card"
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
              >
                <img
                  src={heroArtisanCake}
                  alt="Michael's Baker Handcrafted Celebration Cake"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent opacity-80" />

                {/* Bottom text banner on photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#EFE7DC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D2314] flex items-center justify-center text-[#E0C79B] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Artisan Highlight</p>
                      <p className="text-sm font-semibold text-[#2C1810]">Artisanal Buttercream &amp; Gold Leaf</p>
                    </div>
                  </div>
                  <button
                    onClick={onOrderClick}
                    className="text-xs font-semibold text-[#3D2314] hover:text-[#C5A059] underline underline-offset-2 shrink-0"
                  >
                    Customise
                  </button>
                </div>
              </div>

              {/* Floating luxury callout chip (top right) */}
              <div
                id="hero-floating-badge"
                className="absolute -top-4 -right-2 sm:-right-4 bg-[#3D2314] text-[#FAF8F5] px-4 py-2 rounded-xl shadow-lg border border-[#6B4423] text-xs font-medium flex items-center gap-2 transform rotate-2 animate-bounce-subtle"
              >
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>Baked Fresh Daily</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
