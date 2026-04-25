
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';
import ProductCard from './ProductCard';

const NewArrivalsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={`${theme.spacing.section}`}>
      <div className={theme.spacing.container}>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className={`text-3xl md:text-5xl font-bold ${theme.fonts.serif}`}>New Arrivals</h2>
            <p className="text-sm md:text-base opacity-60 mt-2">Discover our latest masterpieces</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-gray-200 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-gray-200 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {siteConfig.products.map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[320px] max-w-[320px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsCarousel;
