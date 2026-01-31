'use client';
import React from 'react'
import {Search,Heart,ShoppingBag,Menu,X} from 'lucide-react'
import {MAIN_NAV_ITEMS} from '../constants'
import { useState } from 'react'
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
      <nav className="flex items-center justify-between px-6 md:px-12 py-3 rounded-2xl bg-[#e0d9d9f4] mx-6 my-4">
        {/* Logo Placeholder - Swoosh shape via SVG */}
        <div className="shrink-0 cursor-pointer">
          <svg
            height="24"
            width="78"
            viewBox="0 0 69 24"
            role="img"
            aria-label="Arada echommerce"
            className="fill-current"
          >
            <path d="M0 0l49 20 20-16.5L23 24z"></path>
          </svg>
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