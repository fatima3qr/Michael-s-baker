import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { BAKERY_INFO } from '../data/bakeryData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckoutToForm: () => void;
  onExploreMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutToForm,
  onExploreMenu,
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemList = cart
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.name} (${it.size}, ${it.flavor}) x${it.quantity} - PKR ${(
            it.unitPrice * it.quantity
          ).toLocaleString()}${it.customMessage ? ` [Text: "${it.customMessage}"]` : ''}`
      )
      .join('\n');

    const msg = encodeURIComponent(
      `Hi Michael's Baker! I would like to place an order for the following items:\n\n${itemList}\n\n*Estimated Total: PKR ${subtotal.toLocaleString()}*\n\nPlease confirm availability and payment details.`
    );
    window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] h-full flex flex-col shadow-2xl border-l border-[#EADBCC] animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-5 bg-white border-b border-[#F2EAE1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#3D2314] text-[#E0C79B] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                Your Cake Selection
              </h3>
              <span className="text-[11px] text-[#7A5B48]">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in shopping bag
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7A5B48] hover:bg-[#EFE7DC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFE7DC] flex items-center justify-center text-[#7A5B48]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#7A5B48] max-w-xs">
                  Explore our handcrafted signature cakes, cupcakes, and bespoke birthday specials.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onExploreMenu();
                }}
                className="px-5 py-2.5 rounded-full bg-[#3D2314] text-[#FAF8F5] text-xs font-semibold hover:bg-[#201007] transition-all"
              >
                Browse Best Sellers
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-[#EADBCC] shadow-2xs flex gap-3.5 relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover border border-[#EADBCC] shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-serif text-sm font-bold text-[#2C1810] pr-4">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9E8675] hover:text-red-600 transition-colors p-1"
                      title="Remove cake"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7A5B48]">
                    {item.size} • {item.flavor}
                  </p>

                  {item.customMessage && (
                    <p className="text-[10px] italic text-[#C5A059] bg-[#FAF8F5] p-1 rounded border border-[#EFE7DC]">
                      Writing: "{item.customMessage}"
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#E2D5C4] rounded-md overflow-hidden bg-[#FAF8F5]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-[#4A3022] hover:bg-[#EFE7DC]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#2C1810]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-[#4A3022] hover:bg-[#EFE7DC]"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#2C1810]">
                      PKR {(item.unitPrice * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-5 bg-white border-t border-[#F2EAE1] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5B48]">
                Estimated Subtotal
              </span>
              <span className="font-serif text-2xl font-bold text-[#2C1810]">
                PKR {subtotal.toLocaleString()}
              </span>
            </div>
            <p className="text-[11px] text-[#8A6A56]">
              *Excludes delivery fees calculated at order confirmation based on location.
            </p>

            <div className="space-y-2 pt-1">
              <button
                id="cart-checkout-form-btn"
                onClick={() => {
                  onClose();
                  onCheckoutToForm();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#3D2314] text-[#FAF8F5] text-xs sm:text-sm font-bold hover:bg-[#201007] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Proceed to Order Request Form</span>
                <ArrowRight className="w-4 h-4 text-[#E0C79B]" />
              </button>

              <button
                id="cart-checkout-whatsapp-btn"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Instantly via WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
