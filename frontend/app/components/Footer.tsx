import React from 'react'
import {X,Facebook,Youtube,CircleFadingPlus,MapPin,Linkedin} from 'lucide-react'
function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          <a href="#" className="font-bold uppercase text-[13px] hover:text-gray-400">Find a Store</a>
          <a href="#" className="font-bold uppercase text-[12px] hover:text-gray-300">Become a Member</a>
          <a href="#" className="font-bold uppercase text-[12px] hover:text-gray-300">Sign Up using your google account</a>
          <a href="#" className="font-bold uppercase text-[12px] hover:text-gray-300">Send Us Feedback</a>
          <a href="#" className="font-bold uppercase text-[12px] hover:text-gray-300">Student Discounts</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold uppercase text-[13px]">Get Help</h4>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Order Status</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Delivery</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Returns</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Payment Options</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Contact Us</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold uppercase text-[13px]">About Arada</h4>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">News</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Careers</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Investors</a>
          <a href="#" className="text-gray-400 text-[12px] hover:text-white">Sustainability</a>
        </div>

        {/* Social Icons (Takes 2 cols on LG) */}
        <div className="lg:col-span-2 flex justify-start md:justify-end gap-4 mt-8 md:mt-0 max-h-9">
          <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-white hover:text-black transition-colors ">
            <X className="w-5 h-5"/>
          </a>
          <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-white hover:text-black transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-white hover:text-black transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-white hover:text-black transition-colors">
            <CircleFadingPlus className="w-5 h-5"/>
          </a>
          <a href="#" className="p-2 bg-gray-600 rounded-full hover:bg-white hover:text-black transition-colors">
            <Linkedin className="w-5 h-5"/>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800 text-[11px] text-gray-400">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-3 h-3" />
            <span className="font-medium">Addis Ababa Ethiopia</span>
          </div>
          <span>© 2026 Arada, All Rights Reserved</span>
        </div>
        
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-white">Guides</a>
          <a href="#" className="hover:text-white">Terms of Sale</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Arada Brands Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer