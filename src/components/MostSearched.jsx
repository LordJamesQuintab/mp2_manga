import FakeData from '@/Shared/FakeData'
import React from 'react'
import Item from './Item';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MostSearched() {
  console.log(FakeData.carList);
  return (
    <div className='mx-24'>
      <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Anime Mangga</h2>
      
      <Carousel>
  <CarouselContent>
    
    {FakeData.carList.map((car,index)=>(
        <CarouselItem className="basis-1/4">
          <Item car={car}  />
          </CarouselItem> 
      ))} 
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
  )
}

export default MostSearched