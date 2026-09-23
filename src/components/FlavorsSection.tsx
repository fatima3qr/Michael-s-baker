import React from 'react';
import { CAKE_FLAVORS } from '../data/bakeryData';
import { Sparkles, Utensils } from 'lucide-react';

interface FlavorsSectionProps {
  onSelectFlavor: (flavorName: string) => void;
}

export const FlavorsSection: React.FC<FlavorsSectionProps> = ({ onSelectFlavor }) => {
  return (
    <section id="flavors" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7DC] text-[#5C3D2E] text-xs font-semibold uppercase tracking-wider mb-2">
            <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Master Sponge &amp; Fillings</span>
          </div>

          <h2
            id="flavors-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            Choose Your Flavor
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#614434]">
            Every recipe perfected over years of baking, made using real whole food ingredients
            and premium imported chocolates.
          </p>
        </div>

        {/* 8 Flavors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAKE_FLAVORS.map((flavor) => (
            <div
              key={flavor.id}
              id={`flavor-card-${flavor.id}`}
              className="bg-white rounded-2xl p-6 border border-[#EADBCC] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Image and Header */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={flavor.image}
                    alt={`${flavor.name} Cake Flavor`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#2C1810] shadow-xs">
                    {flavor.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C1810] group-hover:text-[#6B4423] transition-colors flex items-center justify-between">
                    <span>{flavor.name}</span>
                    <span
                      className="w-3 h-3 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: flavor.color }}
                      title={`${flavor.name} accent`}
                    />
                  </h3>
                  <p className="text-xs text-[#C5A059] font-medium tracking-wide mt-1">
                    {flavor.notes}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#664C3B] leading-relaxed">
                  {flavor.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-[#F2EAE1]">
                <button
                  onClick={() => onSelectFlavor(flavor.name)}
                  className="w-full py-2 px-3 rounded-xl bg-[#FAF8F5] text-[#3D2314] text-xs font-semibold hover:bg-[#3D2314] hover:text-[#FAF8F5] transition-colors border border-[#E0D3C5] flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>Choose {flavor.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
