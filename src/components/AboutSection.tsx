import React, { useState } from 'react';
import { Heart, Check, Award, X, Sparkles } from 'lucide-react';
import { bakeryChefAbout, ABOUT_PILLARS, BAKERY_INFO } from '../data/bakeryData';

export const AboutSection: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F6F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bakery Photography Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative offset frame */}
              <div className="absolute -inset-4 rounded-3xl bg-[#E8DAC7] rotate-2 -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <img
                  src={bakeryChefAbout}
                  alt="Michael's Baker Pastry Chef at work"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#EADBCC] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#3D2314] text-[#E0C79B] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-[#C5A059]">
                      Artisan Craftsmanship
                    </p>
                    <p className="text-sm font-semibold text-[#2C1810]">
                      Every cake individually baked, layered, and decorated by hand
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating quote badge */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#3D2314] text-[#FAF8F5] p-3.5 rounded-2xl shadow-xl items-center gap-2.5 border border-[#6B4423]">
                <Heart className="w-5 h-5 text-[#E0C79B] fill-[#E0C79B]" />
                <span className="text-xs font-semibold tracking-wide">
                  100% Passion • 0% Artificial Preservatives
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story & 5 Pillars */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block">
                The Heritage &amp; Craft
              </span>
              <h2
                id="about-us-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight leading-tight"
              >
                Made With Passion, <br />
                <span className="italic font-normal text-[#6B4423]">Baked With Love</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#C5A059] my-3" />
            </div>

            <p className="text-base sm:text-lg text-[#5A3E31] leading-relaxed">
              At <strong className="text-[#2C1810] font-semibold">{BAKERY_INFO.name}</strong>,
              we believe that every milestone deserves a centerpiece as extraordinary as the moment itself.
              Founded with a passion for European confectionery traditions and modern culinary design, we
              handcraft celebration cakes, birthday gateaux, and bespoke tiered creations that delight
              both the eyes and the palate.
            </p>

            <p className="text-sm sm:text-base text-[#664C3B] leading-relaxed">
              From the delicate whip of fresh cream to the velvety texture of imported Belgian chocolate,
              our kitchen prioritizes wholesome ingredients and meticulous decoration. Whether you are
              celebrating a child's first birthday or a grand golden wedding jubilee, we pour genuine care
              into every whisk, fold, and piped rosette.
            </p>

            {/* 5 Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 border border-[#E5D7C7] hover:bg-white transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#3D2314] text-[#E0C79B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2C1810]">{pillar.title}</h4>
                    <p className="text-[11px] text-[#7A5B48] leading-snug mt-0.5">
                      {pillar.description.slice(0, 65)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                id="about-learn-more-btn"
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#3D2314] text-[#FAF8F5] text-sm font-semibold hover:bg-[#201007] transition-all shadow-sm border border-[#523321]"
              >
                Learn More About Us
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Story Modal Dialog */}
      {showStoryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#EADBC8] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6B4423] hover:bg-[#EFE7DC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059]">
                Our Kitchen Manifesto
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
                The Story Behind Michael's Baker
              </h3>
              <div className="w-12 h-0.5 bg-[#C5A059]" />

              <p className="text-sm text-[#5C3D2E] leading-relaxed">
                Michael's Baker began with a humble whisk, a family notebook filled with heritage recipes,
                and an unyielding dream: to restore real bakery authenticity to modern celebrations.
                Tired of chemical pre-mixes and artificial syrups common in commercial baking, we
                committed to traditional small-batch baking.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">Our 5 Baking Promises</h4>
                {ABOUT_PILLARS.map((p, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-[#EADBCC]">
                    <p className="text-xs font-bold text-[#3D2314] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> {p.title}
                    </p>
                    <p className="text-xs text-[#6B4B3A] mt-1">{p.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-6 py-2.5 rounded-full bg-[#3D2314] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2C1810]"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
