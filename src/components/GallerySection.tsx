import React, { useState } from 'react';
import { X, ZoomIn, ArrowRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOrderDesign: (designTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOrderDesign }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Birthday', 'Wedding', 'Custom', 'Cupcakes', 'Luxury'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-2">
            Portfolio of Delights
          </span>
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            Our Cake Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#614434]">
            Browse our custom handcrafted centerpieces. Click any design to inspect details or request it for your event.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#3D2314] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#F2EAE1] text-[#5C3D2E] hover:bg-[#E8DCCF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#EADBCC] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-[#2C1810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-[#2C1810] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#3D2314] shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C1810] group-hover:text-[#6B4423] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A5B48] mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-[#F2EAE1] flex items-center justify-between text-[11px] text-[#C5A059] font-medium">
                  <span>Flavor: {item.flavorProfile.split('&')[0]}</span>
                  <span className="underline underline-offset-2">View details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full overflow-hidden border border-[#EADBCC] shadow-2xl relative flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C1810] transition-colors shadow-md"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Preview */}
            <div className="md:w-1/2 bg-[#2C1810] relative min-h-[300px] flex items-center justify-center">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[480px]"
              />
            </div>

            {/* Lightbox Info Panel */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFE7DC] text-[#5C3D2E]">
                  {activeLightboxItem.category} Cake
                </span>
                
                <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                  {activeLightboxItem.title}
                </h3>
                <div className="w-12 h-0.5 bg-[#C5A059]" />

                <p className="text-sm text-[#5C3D2E] leading-relaxed">
                  {activeLightboxItem.description}
                </p>

                <div className="p-3 rounded-xl bg-white border border-[#EADBCC] space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A6A56] font-bold block">
                    Recommended Flavor Profile
                  </span>
                  <p className="text-xs font-medium text-[#2C1810]">
                    {activeLightboxItem.flavorProfile}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  id="lightbox-order-this-design-btn"
                  onClick={() => {
                    const title = activeLightboxItem.title;
                    setActiveLightboxItem(null);
                    onOrderDesign(title);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#3D2314] text-[#FAF8F5] text-sm font-semibold hover:bg-[#201007] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#E0C79B]" />
                  <span>Order This Exact Design</span>
                  <ArrowRight className="w-4 h-4 text-[#E0C79B]" />
                </button>
                <p className="text-center text-[11px] text-[#7A5B48]">
                  Colors, inscriptions, and tier count can be tailored to your theme.
                </p>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
