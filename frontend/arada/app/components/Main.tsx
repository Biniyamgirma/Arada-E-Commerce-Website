import React from 'react'
import ProductCarousel from './ProductCarousel';
import FeaturedSection from './FeaturedSection';
import Hero from './Hero';
import Image from 'next/image';
import greenShoes from '@/public/image/green-shoes.jpg'
import TwoImagesSection from "./TwoImagesSection";

function Main() {
  return (
    <main className="flex-grow">
        <Hero />
        <TwoImagesSection />
        <ProductCarousel />
        <TwoImagesSection />
        <section className="px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100">
          <div>
            <h4 className="font-bold mb-6">Icons</h4>
            <ul className="space-y-4 text-gray-500 text-[16px]">
              <li><a href="#" className="hover:text-black">Air Force 1</a></li>
              <li><a href="#" className="hover:text-black">Huarache</a></li>
              <li><a href="#" className="hover:text-black">Air Max 90</a></li>
              <li><a href="#" className="hover:text-black">Air Max 97</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Shoes</h4>
            <ul className="space-y-4 text-gray-500 text-[16px]">
              <li><a href="#" className="hover:text-black">All Shoes</a></li>
              <li><a href="#" className="hover:text-black">Custom Shoes</a></li>
              <li><a href="#" className="hover:text-black">Jordan Shoes</a></li>
              <li><a href="#" className="hover:text-black">Running Shoes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Clothing</h4>
            <ul className="space-y-4 text-gray-500 text-[16px]">
              <li><a href="#" className="hover:text-black">All Clothing</a></li>
              <li><a href="#" className="hover:text-black">Modest Wear</a></li>
              <li><a href="#" className="hover:text-black">Hoodies & Pullovers</a></li>
              <li><a href="#" className="hover:text-black">Shirts & Tops</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Kids</h4>
            <ul className="space-y-4 text-gray-500 text-[16px]">
              <li><a href="#" className="hover:text-black">Infant & Toddler Shoes</a></li>
              <li><a href="#" className="hover:text-black">Kids Shoes</a></li>
              <li><a href="#" className="hover:text-black">Kids Jordan Shoes</a></li>
              <li><a href="#" className="hover:text-black">Kids Basketball Shoes</a></li>
            </ul>
          </div>
        </section>
        <div className="mt-8 mb-16 px-6 md:px-12">
          <div className="relative h-[60vh] md:h-[80vh] overflow-hidden rounded-xl group cursor-pointer">
            <Image 
              src={greenShoes}
              alt='green shoes'
              
            />
            <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Run the Night</h2>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Shop Running
              </button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main