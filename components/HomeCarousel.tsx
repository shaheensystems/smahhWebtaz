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
    Autoplay({ delay: 5000, stopOnInteraction: true })
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
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center w-full p-6">
                  <div className='flex flex-col md:flex-row justify-center'>
                    <div className='w-2/5 flex flex-row'>
                      <div>
                        <h2 className='text-6xl font-serif'>&#34;</h2>
                      </div>
                      <h2 className="text-4xl font-bold">Excellent Service!<br /> Thanks Smahh Staff</h2>
                    </div>
                    <div className='w-2/5'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                      <h5>Smith Corporation</h5>
                    </div>
                  
                  </div>
                </CardContent>
              </Card>
            </div>
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