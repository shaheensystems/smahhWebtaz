'use client'

import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomeLogoSlider = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 12000,
    autoplaySpeed: 12000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const logoImages: { alt: string; src: string; }[] = [
    {
      src: "/assets/logo-whitecliffe.png",
      alt: "WhitecliffeLogo",
    },
    {
      src: "/assets/logo-amazon.png",
      alt: "Amazon Logo",
    },
    {
      src: "/assets/logo-company.png",
      alt: "Company Logo",
    },
    {
      src: "/assets/logo-google.png",
      alt: "Google Logo",
    },
    {
      src: "/assets/logo-microsoft.png",
      alt: "Microsoft Logo",
    },
    {
      src: "/assets/logo-cisco.png",
      alt: "Cisco Logo",
    },
    {
      src: "/assets/logo-whitecliffe.png",
      alt: "WhitecliffeLogo",
    },
    {
      src: "/assets/logo-amazon.png",
      alt: "Amazon Logo",
    },
    {
      src: "/assets/logo-company.png",
      alt: "Company Logo",
    },
    {
      src: "/assets/logo-google.png",
      alt: "Google Logo",
    },
    {
      src: "/assets/logo-microsoft.png",
      alt: "Microsoft Logo",
    },
    {
      src: "/assets/logo-cisco.png",
      alt: "Cisco Logo",
    },
  ]
  return (
    <div className='pt-20 pb-10'>
      <Slider {...settings}>
        {logoImages?.map((image, index) => (
          <div key={index} className='px-20'>
          <Image src={image.src} alt={image.alt} width={130} height={130}  />
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeLogoSlider