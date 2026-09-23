import React from 'react';
import { Cake, Instagram, Facebook, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface FooterProps {
  onNavClick: (href: string) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onScrollToTop }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Custom Cakes', href: '#custom-cakes' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="site-footer" className="bg-[#21110B] text-[#FAF8F5] pt-16 pb-12 border-t border-[#3D2314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2314]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#3D2314] text-[#E0C79B] flex items-center justify-center border border-[#6B4423]">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5]">
                Michael's <span className="text-[#C5A059] font-normal italic">Baker</span>
              </span>
            </div>

            <p className="text-sm text-[#D4C3B2] italic font-serif max-w-sm">
              "Freshly baked. Beautifully crafted. Made for your moments."
            </p>

            <p className="text-xs text-[#A89280] leading-relaxed max-w-md">
              Karachi’s bespoke custom cake studio crafting tiered wedding gateaux, birthday centerpieces, and artisanal desserts with uncompromising ingredient purity.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2" aria-label="Social Media Links">
              <a
                id="social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-[#331B10] hover:bg-[#C5A059] text-[#FAF8F5] flex items-center justify-center transition-colors border border-[#4D2D1E]"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 rounded-full bg-[#331B10] hover:bg-[#C5A059] text-[#FAF8F5] flex items-center justify-center transition-colors border border-[#4D2D1E]"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* TikTok custom stylized icon container */}
              <a
                id="social-tiktok"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok profile"
                className="w-9 h-9 rounded-full bg-[#331B10] hover:bg-[#C5A059] text-[#FAF8F5] flex items-center justify-center transition-colors border border-[#4D2D1E] text-xs font-bold"
              >
                TK
              </a>

              <a
                id="social-whatsapp"
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  BAKERY_INFO.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp direct chat"
                className="w-9 h-9 rounded-full bg-[#331B10] hover:bg-[#25D366] text-[#FAF8F5] flex items-center justify-center transition-colors border border-[#4D2D1E]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavClick(link.href)}
                    className="text-xs sm:text-sm text-[#D4C3B2] hover:text-[#FAF8F5] transition-colors py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Studio Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">
              Studio Hours &amp; Location
            </h4>
            <p className="text-xs text-[#D4C3B2] leading-relaxed">
              <strong className="text-[#FAF8F5]">Location:</strong> {BAKERY_INFO.location}
            </p>
            <p className="text-xs text-[#D4C3B2] leading-relaxed">
              <strong className="text-[#FAF8F5]">Hours:</strong> {BAKERY_INFO.hours}
            </p>
            <p className="text-xs text-[#D4C3B2] leading-relaxed">
              <strong className="text-[#FAF8F5]">Inquiries:</strong> {BAKERY_INFO.email}
            </p>
            <p className="text-[11px] text-[#8E7665] pt-1">
              *All cakes baked to order. Studio pickup and temperature-controlled delivery available.
            </p>
          </div>

        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8675]">
          <p>© 2026 Michael's Baker. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Freshly crafted with <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" /> in Karachi
            </span>

            <button
              onClick={onScrollToTop}
              className="p-2 rounded-full bg-[#331B10] hover:bg-[#3D2314] text-[#E0C79B] transition-colors border border-[#4D2D1E]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
