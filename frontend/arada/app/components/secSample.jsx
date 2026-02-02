
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-gray-200 shadow-sm">
            Just In
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-sm">
            Sale
          </span>
        )}
        <img 
          src={isHovered ? product.hoverImage : product.mainImage} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105"
        />
        <div className={`absolute bottom-0 left-0 right-0 bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center space-x-2`}>
          <button className="bg-[#212121] text-white px-6 py-3 text-[12px] font-bold tracking-widest uppercase w-full hover:bg-gray-800 transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-[15px] font-bold">{product.name}</h3>
        <p className="text-[13px] text-gray-500">{product.category}</p>
        <div className="flex items-center space-x-2 pt-1">
          {product.colors.map(color => (
            <div key={color} className="w-4 h-4 rounded-full border border-gray-300 bg-gray-200" title={color} />
          ))}
          <span className="text-[12px] text-gray-400">+{Math.floor(Math.random() * 10) + 1} more</span>
        </div>
        <div className="pt-2 border-t border-gray-100 mt-2">
           <span className="text-[14px] font-bold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};