import React from 'react';
import { Cake, Palette, CalendarCheck, Sparkles } from 'lucide-react';
import { ORDER_STEPS } from '../data/bakeryData';

export const HowToOrder: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake':
        return <Cake className="w-6 h-6 text-[#E0C79B]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#E0C79B]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#E0C79B]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#E0C79B]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F6F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-2">
            Seamless Ordering
          </span>
          <h2
            id="how-to-order-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            How to Order
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#614434]">
            Four effortless steps from inspiration to the sweetest bite.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {ORDER_STEPS.map((step, index) => (
            <div
              key={step.step}
              id={`order-step-${step.step}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADBCC] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Step indicator number */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#3D2314] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(step.icon)}
                </div>
                <span className="font-serif text-2xl font-bold text-[#D4B996]">
                  {step.step}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#2C1810]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#664C3B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-8 h-0.5 bg-[#EADBCC] group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-300 mt-6" />
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#7D5A44]">
            Need a last-minute same-day cake? Contact us directly via WhatsApp for studio stock availability.
          </p>
        </div>

      </div>
    </section>
  );
};
