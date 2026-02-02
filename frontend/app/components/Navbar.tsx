'use client';
import React from 'react'
import Image from "next/image";
import {Search,Heart,ShoppingBag,Menu,X} from 'lucide-react'
import {MAIN_NAV_ITEMS} from '../constants'
import { useState } from 'react'
import aradaLogo from '@/public/image/Tertiary-logo.png'
import blackShoes1 from '@/public/image/black-shoes.jpg'
import blackShoes2 from '@/public/image/black-shoes-2.jpg'
function Navbar() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden md:flex justify-between items-center px-12 py-1 bg-[#F5F5F5] text-[12px] font-medium border-b border-gray-200">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-500">Find a Store</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-500">Help</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-500">Hi, Sign In</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-gray-500">Join Us</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#e0d9d9f4]">
        <div className='flex items-center justify-between  px-6 md:px-12 py-3   '>
          {/* Logo Placeholder - Swoosh shape via SVG */}
        <div className="shrink-0 cursor-pointer">
          <Image 
           src={aradaLogo}
           alt='arada brand logo image'
           width={78}
           
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {MAIN_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] font-medium border-b-2 border-transparent hover:border-black py-1 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2 group">
            <Search className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none ml-2 text-sm w-24 focus:w-48 transition-all duration-300"
            />
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </button>

          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        </div>
        <div className='flex  h-[50vh] '>
          {/* hidden */}
          <div className=" link-holder md:flex justify-between items-center w-8/12 mx-16">
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
          </div>
          <div className="image-holder flex h-[90%] justify-center w-[40%] gap-2 mb-4">
            <Image 
              src={blackShoes1}
              alt='second shoes'
              className='rounded-2xl w-[45%] object-cover'
            />
            <Image 
              src={blackShoes2}
              alt='second shoes'
              className='rounded-2xl w-[45%] object-cover'
            />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 bg-white lg:hidden overflow-y-auto">
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-10 py-4">
            {MAIN_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold flex items-center justify-between"
              >
                {item.label}
                <span className="text-xl">l</span>
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-500 mb-6">Become a Nike Member for the best products, inspiration and stories in sport. <a href="#" className="text-black font-bold underline">Learn more</a></p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-2 rounded-full font-medium">Join Us</button>
                <button className="border border-gray-300 px-6 py-2 rounded-full font-medium">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar