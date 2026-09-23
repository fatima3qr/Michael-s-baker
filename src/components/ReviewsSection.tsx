import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-2">
            Warm Words
          </span>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#614434]">
            Real feedback from celebrations across the city.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADBCC] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Top star rating & quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E0D3C5]" />
                </div>

                <p className="text-sm text-[#4A3022] italic leading-relaxed font-serif">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EAE1] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#2C1810] flex items-center gap-1">
                    <span>— {review.name}</span>
                    <span title="Verified Customer" className="inline-flex">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    </span>
                  </h4>
                  <span className="text-[11px] text-[#8A6A56] block">
                    {review.celebration}
                  </span>
                </div>
                <span className="text-[10px] text-[#A68A77] font-medium">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
