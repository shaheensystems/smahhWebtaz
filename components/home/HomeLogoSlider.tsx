'use client'

import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Amazon from '@/public/assets/logo-amazon.png'

const HomeLogoSlider = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false
  }
  return (
    <Slider {...settings}>
      <div>
        <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
      <div>
      <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
      <div>
      <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
      <div>
      <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
      <div>
      <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
      <div>
      <Image src={Amazon} alt='Logo' width={80} height={80} />
      </div>
    </Slider>
  )
}

export default HomeLogoSlider