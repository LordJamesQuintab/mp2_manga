import React from 'react'
import { Separator } from '@radix-ui/react-select'
import { LuFuel } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

  
function Item({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
      <img src={car?.image} width={'100%'} height={250} 
      className='rounded-t-xl'
      />
      <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2'>Solo Leveling Mangga</h2>
        <Separator/>
        
      </div>

    </div>
  )
}

export default Item
