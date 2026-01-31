'use client'; // required if you're using Next.js App Router

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl font-semibold">Latest & Greatest</h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-3 bg-[#F5F5F5] rounded-full hover:bg-[#E5E5E5]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 bg-[#F5F5F5] rounded-full hover:bg-[#E5E5E5]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {MOCK_PRODUCTS.map(product => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[280px] md:w-[440px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden bg-[#F5F5F5] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:opacity-90"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-[16px]">{product.name}</h3>
                <p className="text-gray-500 text-[14px]">
                  {product.category}
                </p>
              </div>
              <p className="font-medium text-[16px]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
