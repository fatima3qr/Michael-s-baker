import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/bakeryData';
import { Product } from '../types';

interface FeaturedProductsProps {
  onProductOrder: (product: Product) => void;
  onProductView: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onProductOrder,
  onProductView,
}) => {
  const [filter, setFilter] = useState<'all' | 'cakes' | 'cupcakes' | 'custom'>('all');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts =
    filter === 'all'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((item) => item.category === filter);

  return (
    <section id="menu" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-2">
            Signature Confections
          </span>
          <h2
            id="best-sellers-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            Our Best Sellers
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#6B4B3A]">
            Customer favorites, freshly baked and beautifully crafted.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Favorites' },
              { id: 'cakes', label: 'Artisan Cakes' },
              { id: 'cupcakes', label: 'Gourmet Cupcakes' },
              { id: 'custom', label: 'Custom Designs' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-[#3D2314] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#F2EAE1] text-[#5C3D2E] hover:bg-[#E8DCCF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFEB]">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#3D2314]/90 backdrop-blur-xs text-[#FAF8F5] shadow-xs">
                    {product.badge}
                  </span>
                )}

                {/* Favorite button */}
                <button
                  onClick={(e) => toggleFavorite(product.id, e)}
                  aria-label="Add to favorites"
                  className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/85 backdrop-blur-xs text-[#4A2E1E] hover:text-[#C5A059] hover:bg-white transition-colors shadow-2xs"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites[product.id] ? 'fill-[#C5A059] text-[#C5A059]' : ''
                    }`}
                  />
                </button>

                {/* Quick preview hover trigger */}
                <button
                  onClick={() => onProductView(product)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-xs font-semibold text-[#2C1810] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm hover:bg-white"
                >
                  <Eye className="w-3.5 h-3.5" /> Quick View
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#7D5A44]">
                      {product.servings || 'Made to Order'}
                    </span>
                    {product.rating && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#3D2314]">
                        <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                        <span>{product.rating}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2C1810] group-hover:text-[#6B4423] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[#664C3B] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-[#F2EAE1] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A6A56] block">
                      Price
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#2C1810]">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <button
                    id={`order-btn-${product.id}`}
                    onClick={() => onProductOrder(product)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3D2314] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-[#201007] active:scale-[0.98] transition-all shadow-2xs hover:shadow"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#E0C79B]" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
