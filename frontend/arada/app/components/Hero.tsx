import React from 'react'

function Hero() {
  return (
    <section className="relative px-6 w-full">
      <div className="w-full relative overflow-hidden h-[60vh] md:h-[80vh] rounded-xl group">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="mt-12 flex flex-col items-center text-center">
        <p className="font-medium text-[16px] mb-2 uppercase tracking-tight">Nike Air Max Dn</p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-none">
          Feel The Unreal
        </h1>
        <p className="max-w-xl text-[16px] md:text-lg mb-8 leading-relaxed">
          The next generation of Air technology is here. Step into the future of comfort with the all-new Air Max Dn.
        </p>
        <div className="flex gap-3">
          <button className="bg-black text-white px-8 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero