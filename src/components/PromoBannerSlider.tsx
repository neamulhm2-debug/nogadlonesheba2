import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/audio';

export interface PromoBanner {
  id: string;
  image: string;
  title: string;
  operator: string;
  offerDetail: string;
  objectPosition: string;
}

export const promoBanners: PromoBanner[] = [
  {
    id: 'robi-cashback',
    image: '/assets/aistudio/ngdrbi_52710ce1.jpeg',
    title: 'রবি রিচার্জে ৳১০০ পর্যন্ত ক্যাশব্যাক',
    operator: 'রবি',
    offerDetail: 'রবি রিচার্জে নগদ দিয়ে লেনদেন করলেই পেয়ে যাচ্ছেন আকর্ষণীয় ৳১০০ পর্যন্ত নিশ্চিত ক্যাশব্যাক অফার!',
    objectPosition: 'object-center',
  },
  {
    id: 'banglalink-installment',
    image: '/assets/aistudio/PervHcOUUsOkpsCMdZGW7MHY2MHA6R2bjShozub1_78f3e2e1.webp',
    title: 'বাংলালিংক কিস্তিতে স্মার্টফোন অফার',
    operator: 'বাংলালিংক',
    offerDetail: 'মাত্র ১৫% ডাউনপেমেন্টে ৯ মাসের সহজ কিস্তিতে ক্রেডিট কার্ড ছাড়াই পছন্দের স্মার্টফোন কিনুন নগদ দিয়ে!',
    objectPosition: 'object-[center_45%]',
  },
  {
    id: 'gp-internet-pack',
    image: '/assets/aistudio/e456fa104859419.5f6c2fbfb0a3b_b40b03a9.jpg',
    title: 'গ্রামীণফোন ১১৪ টাকায় ৫ জিবি অফার',
    operator: 'গ্রামীণফোন',
    offerDetail: 'সাশ্রয়ী মূল্যে ১১৪ টাকায় ৫ জিবি (৪ জিবি + ১ জিবি ৪জি) ইন্টারনেট প্যাক ৭ দিনের জন্য উপভোগ করুন!',
    objectPosition: 'object-[center_36%]',
  },
];

interface PromoBannerSliderProps {
  onBannerClick?: (banner: PromoBanner) => void;
}

export const PromoBannerSlider: React.FC<PromoBannerSliderProps> = ({ onBannerClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide horizontally every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promoBanners.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    sounds.playKeyClick();
    setCurrentIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playKeyClick();
    setCurrentIndex((prev) => (prev - 1 + promoBanners.length) % promoBanners.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playKeyClick();
    setCurrentIndex((prev) => (prev + 1) % promoBanners.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 35) {
      sounds.playKeyClick();
      if (diff > 0) {
        // Swipe left -> next
        setCurrentIndex((prev) => (prev + 1) % promoBanners.length);
      } else {
        // Swipe right -> prev
        setCurrentIndex((prev) => (prev - 1 + promoBanners.length) % promoBanners.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Horizontal Carousel Viewport with clean cut-fit cropping and smooth sliding animation */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-xs border border-slate-200/90 bg-slate-900 aspect-[2.95/1] cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          sounds.playKeyClick();
          if (onBannerClick) {
            onBannerClick(promoBanners[currentIndex]);
          }
        }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {promoBanners.map((banner) => (
            <div key={banner.id} className="w-full h-full shrink-0 relative bg-slate-900 overflow-hidden">
              <img
                src={banner.image}
                alt={banner.title}
                className={`w-full h-full object-cover ${banner.objectPosition} transition-all duration-300`}
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Subtle navigation chevrons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3 Animated Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {promoBanners.map((banner, idx) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => handleDotClick(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? 'w-5 bg-[#EC1C24] shadow-xs'
                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
            }`}
            title={banner.title}
          />
        ))}
      </div>
    </div>
  );
};
