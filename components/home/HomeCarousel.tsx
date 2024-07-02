'use client'
import React, { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'

const HomeCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )
  return (
    <>
      <Carousel 
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
    <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
              <Card className='border-none bg-midnight-900'>
                <CardContent className="flex items-center justify-center w-full p-0 md:pt-2">
                  <div className='flex flex-col lg:flex-row items-center lg:justify-center xl:gap-14'>
                    <div className='w-full md:w-[80%] lg:w-[60%] xl:w-[45%] flex flex-row'>
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
                        <span className='text-3xl lg:text-5xl xl:text-6xl font-serif text-midnight-300 pr-3'>&ldquo;</span>
                          Excellent Service!<br /><span className='lg:pl-10'>Thanks Smahh Staff</span>
                      </h2>
                    </div>
                    <div className='w-full md:w-[100%] lg:w-[38%] xl:w-[45%] pt-8 lg:pt-0'>
                      <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                      </p>
                      <h5 className='font-medium text-white pt-4'>Smith Corporation</h5>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </>
  )
}

export default HomeCarousel