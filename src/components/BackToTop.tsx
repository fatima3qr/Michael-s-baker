import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 left-6 z-40 p-3 rounded-full bg-[#3D2314] text-[#FAF8F5] shadow-xl hover:bg-[#201007] border border-[#6B4423] transition-all hover:-translate-y-1 active:scale-95 duration-200"
    >
      <ArrowUp className="w-5 h-5 text-[#E0C79B]" />
    </button>
  );
};
