import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(
    BAKERY_INFO.whatsappDefaultMsg
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Tooltip message popover */}
      {showTooltip && (
        <div className="relative bg-white text-[#2C1810] px-4 py-2.5 rounded-2xl shadow-xl border border-[#EADBCC] text-xs font-medium max-w-xs animate-in slide-in-from-bottom-2 duration-300 flex items-center gap-2">
          <span>Order via WhatsApp directly!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="text-[#9E8675] hover:text-[#2C1810] p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#EADBCC] transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Michael's Baker on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-108 active:scale-95 transition-all duration-200 border-2 border-white group"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
