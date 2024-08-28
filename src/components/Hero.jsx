import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[840px] w-full bg-[#d49ef2]'>
        <h2 className='text-lg'>Find your Anime Mangga</h2>
        <h2 className='text-[60px] font-bold'>Manga Hinog</h2>

        <Search/>
        <img src='/g-removebg-preview.png' className='mt-10' />
      </div>
    </div>
  )
}

export default Hero
