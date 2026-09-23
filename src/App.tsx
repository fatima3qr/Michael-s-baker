/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CustomCakes } from './components/CustomCakes';
import { FlavorsSection } from './components/FlavorsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { HowToOrder } from './components/HowToOrder';
import { ReviewsSection } from './components/ReviewsSection';
import { SpecialOffer } from './components/SpecialOffer';
import { OrderContactSection, OrderContactSectionRef } from './components/OrderContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickOrderModal } from './components/QuickOrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { BakeryDocumentView } from './components/BakeryDocumentView';
import { Product, CartItem } from './types';
import { Check, FileText } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForOrder, setSelectedProductForOrder] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDocumentMode, setIsDocumentMode] = useState(false);

  const orderFormRef = useRef<OrderContactSectionRef>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (it) =>
          it.productId === item.productId &&
          it.size === item.size &&
          it.flavor === item.flavor &&
          it.customMessage === item.customMessage
      );
      if (existing) {
        return prev.map((it) =>
          it.id === existing.id ? { ...it, quantity: it.quantity + item.quantity } : it
        );
      }
      return [...prev, item];
    });
    showToast(`Added ${item.name} to your shopping bag!`);
  };

  const handleDirectOrder = (item: CartItem) => {
    handleAddToCart(item);
    orderFormRef.current?.prefillForm({
      cakeType: item.name,
      flavor: item.flavor.split(' ')[0],
      cakeSize: item.size,
      additionalMessage: item.customMessage
        ? `Writing on cake: "${item.customMessage}"`
        : undefined,
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCustomCakeRequest = (cakeType?: string) => {
    orderFormRef.current?.prefillForm({
      cakeType: cakeType || 'Custom Birthday Cake',
      preferredDesign: `Theme request based on ${cakeType || 'Bespoke Celebration'}`,
    });
  };

  const handleFlavorSelect = (flavorName: string) => {
    orderFormRef.current?.prefillForm({
      flavor: flavorName,
    });
    showToast(`Selected ${flavorName} flavor in order form!`);
  };

  const handleOrderGalleryDesign = (designTitle: string) => {
    orderFormRef.current?.prefillForm({
      preferredDesign: `Inspiration: "${designTitle}" from gallery`,
    });
    showToast(`Loaded "${designTitle}" into order form!`);
  };

  const handleScrollToNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckoutFromCartToForm = () => {
    if (cart.length > 0) {
      const summaryList = cart
        .map((c) => `${c.name} (${c.size}, ${c.flavor}) x${c.quantity}`)
        .join(', ');
      orderFormRef.current?.prefillForm({
        cakeType: cart[0].name,
        flavor: cart[0].flavor.split(' ')[0],
        cakeSize: cart[0].size,
        additionalMessage: `Bag Items: ${summaryList}`,
      });
    } else {
      orderFormRef.current?.scrollIntoView();
    }
  };

  if (isDocumentMode) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#2C1810]">
        <Header
          cartCount={cart.reduce((sum, it) => sum + it.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOrderNowClick={() => {
            setIsDocumentMode(false);
            setTimeout(() => orderFormRef.current?.scrollIntoView(), 100);
          }}
          isDocumentMode={true}
          onToggleDocumentMode={() => setIsDocumentMode(false)}
        />
        <div className="pt-20">
          <BakeryDocumentView onBackToWebsite={() => setIsDocumentMode(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C1810]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#3D2314] text-[#FAF8F5] px-4 py-3 rounded-2xl shadow-xl border border-[#6B4423] text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-in slide-in-from-top duration-300">
          <div className="w-5 h-5 rounded-full bg-[#C5A059] text-[#3D2314] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header & Navigation */}
      <Header
        cartCount={cart.reduce((sum, it) => sum + it.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNowClick={() => orderFormRef.current?.scrollIntoView()}
        isDocumentMode={false}
        onToggleDocumentMode={() => setIsDocumentMode(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOrderClick={() => orderFormRef.current?.scrollIntoView()}
          onExploreMenuClick={() => handleScrollToNav('#menu')}
        />

        {/* 3. Featured Products Section (Best Sellers) */}
        <FeaturedProducts
          onProductOrder={(product) => setSelectedProductForOrder(product)}
          onProductView={(product) => setSelectedProductForOrder(product)}
        />

        {/* 4. Custom Cakes Section */}
        <CustomCakes
          onRequestCustomCake={handleCustomCakeRequest}
        />

        {/* 5. Cake Flavors Section */}
        <FlavorsSection
          onSelectFlavor={handleFlavorSelect}
        />

        {/* 6. About Us Section */}
        <AboutSection />

        {/* 7. Gallery Section */}
        <GallerySection
          onOrderDesign={handleOrderGalleryDesign}
        />

        {/* 8. How to Order Section */}
        <HowToOrder />

        {/* 9. Customer Reviews Section */}
        <ReviewsSection />

        {/* 10. Special Offer Section */}
        <SpecialOffer
          onOrderNow={() => orderFormRef.current?.scrollIntoView()}
        />

        {/* 11. Contact / Order Form Section */}
        <OrderContactSection ref={orderFormRef} />
      </main>

      {/* 12. Footer */}
      <Footer
        onNavClick={handleScrollToNav}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Interactive Cart Slide-over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutToForm={handleCheckoutFromCartToForm}
        onExploreMenu={() => handleScrollToNav('#menu')}
      />

      {/* Quick Order / Customization Modal */}
      {selectedProductForOrder && (
        <QuickOrderModal
          product={selectedProductForOrder}
          onClose={() => setSelectedProductForOrder(null)}
          onAddToCart={handleAddToCart}
          onDirectOrder={handleDirectOrder}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Floating Document View Toggle */}
      <button
        id="floating-document-toggle-btn"
        onClick={() => {
          setIsDocumentMode(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2.5 rounded-full bg-white text-[#2C1810] shadow-xl border border-[#DCD3C7] hover:bg-[#FAF8F5] transition-all flex items-center gap-2 text-xs font-semibold hover:shadow-2xl hover:scale-105 active:scale-95"
        title="View website content as a formal business and menu document"
      >
        <FileText className="w-4 h-4 text-[#C5A059]" />
        <span>View as Document</span>
      </button>

      {/* Back To Top Button */}
      <BackToTop />

    </div>
  );
}
