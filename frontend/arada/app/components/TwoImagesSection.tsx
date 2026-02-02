import Image from 'next/image'
import React from 'react'
import sectionImage from '@/public/image/white-shoes.jpg'
import secondSectionImage from '@/public/image/green-shoes.jpg'
function TwoImagesSection() {
  return (
    <section className='w-screen flex justify-center  my-2 '>
        <div className="size-full relative">
            <Image 
                src={sectionImage}
                alt='image a person waring'
                className='h-[100vh] object-cover'
            />
            <div className="absolute bottom-10 left-10 grid gap-6">
                <div className='grid gap-2'>
                <p className='text-xl font-bold'><a href="#">coolest shoes</a></p>
                <h4 className='text-2xl font-bold'><a href="#">Run it back</a></h4>
                </div>
                <button className='bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors'><a href="#">shop now</a></button>
            </div>
        </div>
        <div className="size-full relative">
            <Image 
                src={secondSectionImage}
                alt='image a person waring'
                className='h-[100vh] object-cover'
            />
            <div className="absolute bottom-10 left-10 grid gap-6">
                <div className='grid gap-2'>
                <p className='text-xl font-bold'><a href="#">p-6000</a></p>
                <h4 className='text-2xl font-bold'><a href="#">Run it back</a></h4>
                </div>
                <button className='bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors '><a href="#">shop now</a></button>
            </div>
        </div>
    </section>
  )
}

export default TwoImagesSection