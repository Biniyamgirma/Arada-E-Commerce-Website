import React from 'react'
import Image from 'next/image'
import heroImage from '@/public/image/banner.jpg'
import secondImage from '@/public/image/black-shoes-10.jpg'

function Hero() {
  return (
    <section className="relative  w-full">
      <div className="w-screen relative overflow-hidden h-[60vh] md:h-[100vh] rounded-xl group">
        <Image
         src={heroImage}
         alt='hero'
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         >

        </Image>
        <Image 
          src={secondImage}
          alt='hel'

        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="mt-12 flex flex-col items-center text-center absolute z-20 inset-1/5 text-white">
        <p className="font-medium text-[16px] mb-2 uppercase tracking-tight">Arada Brand Max Dn</p>
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

export default Hero;