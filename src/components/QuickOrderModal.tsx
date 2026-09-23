import React, { useState } from 'react';
import { X, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { Product, CartItem } from '../types';
import { CAKE_FLAVORS } from '../data/bakeryData';

interface QuickOrderModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onDirectOrder: (item: CartItem) => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectOrder,
}) => {
  if (!product) return null;

  const availableSizes = product.availableSizes || [
    { name: 'Standard (2.5 lbs)', multiplier: 1.0, label: 'Standard 2.5 lbs' },
    { name: 'Large (4 lbs)', multiplier: 1.5, label: 'Large 4 lbs' },
  ];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(
    product.name.toLowerCase().includes('chocolate')
      ? 'Chocolate'
      : product.name.toLowerCase().includes('vanilla')
      ? 'Vanilla'
      : product.name.toLowerCase().includes('red velvet')
      ? 'Red Velvet'
      : product.name.toLowerCase().includes('strawberry')
      ? 'Strawberry'
      : 'Chocolate'
  );
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isEggless, setIsEggless] = useState(false);

  const calculatedUnitPrice = Math.round(product.price * selectedSize.multiplier);
  const totalPrice = calculatedUnitPrice * quantity;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.name,
      flavor: `${selectedFlavor}${isEggless ? ' (Eggless)' : ''}`,
      customMessage: customMessage.trim(),
      quantity,
      unitPrice: calculatedUnitPrice,
    };
    onAddToCart(item);
    onClose();
  };

  const handleDirectOrder = () => {
    const item: CartItem = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.name,
      flavor: `${selectedFlavor}${isEggless ? ' (Eggless)' : ''}`,
      customMessage: customMessage.trim(),
      quantity,
      unitPrice: calculatedUnitPrice,
    };
    onDirectOrder(item);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full overflow-hidden border border-[#EADBCC] shadow-2xl relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="relative p-5 sm:p-6 bg-white border-b border-[#F2EAE1] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-xl object-cover border border-[#EADBCC]"
            />
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C5A059]">
                Customise Your Cake
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810]">
                {product.name}
              </h3>
              <p className="text-xs text-[#7A5B48]">
                Base: {product.formattedPrice}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7A5B48] hover:bg-[#EFE7DC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Size Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-2">
              Select Size &amp; Servings
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {availableSizes.map((size) => (
                <button
                  key={size.name}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs ${
                    selectedSize.name === size.name
                      ? 'border-[#3D2314] bg-[#3D2314] text-[#FAF8F5] shadow-xs'
                      : 'border-[#E2D5C4] bg-white text-[#2C1810] hover:bg-[#F5EFEB]'
                  }`}
                >
                  <p className="font-bold">{size.name}</p>
                  <p className={`text-[11px] mt-0.5 ${selectedSize.name === size.name ? 'text-[#D4B996]' : 'text-[#7A5B48]'}`}>
                    {size.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Sponge & Filling Flavor */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-2">
              Select Sponge / Filling Flavor
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CAKE_FLAVORS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFlavor(f.name)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                    selectedFlavor === f.name
                      ? 'border-[#C5A059] bg-[#EFE7DC] text-[#2C1810] font-bold shadow-2xs'
                      : 'border-[#E2D5C4] bg-white text-[#5C3D2E] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* Inscription on Cake */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5">
              Message on Cake (Optional)
            </label>
            <input
              type="text"
              maxLength={40}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="e.g. Happy 25th Birthday Sarah!"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2D5C4] text-[#2C1810] text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
            <span className="text-[10px] text-[#8A6A56] mt-1 block">
              Piped in elegant handwritten chocolate or vanilla icing. Max 40 characters.
            </span>
          </div>

          {/* Eggless Preference & Quantity */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F2EAE1]">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#2C1810]">
              <input
                type="checkbox"
                checked={isEggless}
                onChange={(e) => setIsEggless(e.target.checked)}
                className="w-4 h-4 rounded text-[#3D2314] focus:ring-[#C5A059]"
              />
              <span>100% Eggless Preparation (+PKR 200)</span>
            </label>

            {/* Quantity Counter */}
            <div className="flex items-center border border-[#E2D5C4] bg-white rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2.5 py-1 text-sm text-[#4A3022] hover:bg-[#FAF8F5]"
              >
                -
              </button>
              <span className="px-3 py-1 text-xs font-bold text-[#2C1810]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-2.5 py-1 text-sm text-[#4A3022] hover:bg-[#FAF8F5]"
              >
                +
              </button>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-white border-t border-[#F2EAE1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#8A6A56] block">
              Total Estimate
            </span>
            <span className="font-serif text-xl font-bold text-[#2C1810]">
              PKR {(totalPrice + (isEggless ? 200 * quantity : 0)).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-[#EFE7DC] text-[#2C1810] text-xs font-bold hover:bg-[#E5D7C7] transition-colors flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-[#7A5B48]" />
              <span>Add to Bag</span>
            </button>

            <button
              onClick={handleDirectOrder}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#3D2314] text-[#FAF8F5] text-xs font-bold hover:bg-[#201007] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#E0C79B]" />
              <span>Order Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
