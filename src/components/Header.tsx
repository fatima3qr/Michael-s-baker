import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Cake, PhoneCall, FileText } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNowClick: () => void;
  isDocumentMode?: boolean;
  onToggleDocumentMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOrderNowClick,
  isDocumentMode = false,
  onToggleDocumentMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Custom Cakes', href: '#custom-cakes' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EADBC8]/60 py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#3D2314] text-[#FAF8F5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Cake className="w-5 h-5 text-[#E0C79B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810] leading-none">
                Michael's <span className="text-[#C5A059] font-normal italic">Baker</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#7D5A44] mt-0.5">
                Artisan Confectionery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#5C3D2E] hover:text-[#2C1810] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Document Mode Toggle */}
            {onToggleDocumentMode && (
              <button
                id="header-toggle-doc-btn"
                onClick={onToggleDocumentMode}
                className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isDocumentMode
                    ? 'bg-[#C5A059] text-[#2C1810] border-[#B28B42] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#3D2314] hover:bg-[#EFE7DC] border-[#DCD3C7]'
                }`}
                title={isDocumentMode ? "Switch to interactive website" : "View as formal business & menu document"}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isDocumentMode ? 'Storefront' : 'Document View'}</span>
              </button>
            )}

            {/* Cart Trigger */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2.5 text-[#3D2314] hover:bg-[#EFE7DC] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#3D2314] text-[#FAF8F5] text-[11px] font-bold flex items-center justify-center ring-2 ring-[#FAF8F5]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <button
              id="header-order-now-btn"
              onClick={onOrderNowClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#3D2314] text-[#FAF8F5] text-sm font-semibold hover:bg-[#2C1810] active:scale-[0.98] transition-all shadow-sm hover:shadow border border-[#523321]"
            >
              Order Now
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-lg text-[#3D2314] hover:bg-[#EFE7DC] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#EADBC8] shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#4A3022] hover:bg-[#EFE7DC] hover:text-[#2C1810] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EADBC8] flex flex-col gap-2.5">
              {onToggleDocumentMode && (
                <button
                  id="mobile-toggle-doc-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleDocumentMode();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#DCD3C7] bg-[#FAF8F5] text-[#3D2314] text-center text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#C5A059]" />
                  <span>{isDocumentMode ? 'Switch to Storefront Website' : 'View Official Bakery Document'}</span>
                </button>
              )}

              <button
                id="mobile-order-now-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderNowClick();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#3D2314] text-[#FAF8F5] text-center font-semibold hover:bg-[#2C1810] transition-colors shadow-sm"
              >
                Order Your Cake Now
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-[#7D5A44] pt-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Need assistance? {BAKERY_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
