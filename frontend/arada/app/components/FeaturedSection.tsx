import React from 'react'

function FeaturedSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-8">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group cursor-pointer overflow-hidden rounded-lg h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1511499767350-a1590fdb7ca7?auto=format&fit=crop&q=80&w=1200"
            alt="Women's Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="font-medium mb-2">Step Into Style</p>
            <h3 className="text-3xl font-bold mb-6">The New Womens Essentials</h3>
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative group cursor-pointer overflow-hidden rounded-lg h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200"
            alt="Men's Training"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="font-medium mb-2">Performance Redefined</p>
            <h3 className="text-3xl font-bold mb-6">Nike Training Gear</h3>
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection