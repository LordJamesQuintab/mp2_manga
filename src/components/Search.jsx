import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from './ui/separator'
import { FaSearch } from "react-icons/fa";
import Data from '@/Shared/Data';

function Search() {
  return (
    <div className=' p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] '>
      <Select>
   <SelectTrigger  className=" outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Ghibli" />
   </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block" />
<Select>
   <SelectTrigger  className=" outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Anime" />
   </SelectTrigger>
  <SelectContent>
    {Data.CarMakes.map((maker,index)=>(
        <SelectItem value={maker.name}>{maker.name}</SelectItem>
     ))}
   
   
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block" />
<Select>
   <SelectTrigger className="  outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Trendings" />
   </SelectTrigger>
  <SelectContent>
    {Data.Pricing.map((price,index)=>(
    <SelectItem value={price.amount}>{price.amount}</SelectItem>
    ))}
   
  </SelectContent>
</Select>
<div>
<FaSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
</div>
    </div>
  )
}

export default Search
