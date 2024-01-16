"use client";
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';

const Slide = () => {
  const slides = [
    '/image/slide2.webp',
    '/image/slide1.webp',
    '/image/slide3.webp',
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const changeSlide = (index) => {
    setCurrent(index);
  };

  const beforeSlideChange = (_, next) => {
    setCurrent(next);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: beforeSlideChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className='max-w-[1400px] w-screen mx-auto relative'>
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className='w-full h-[400px] lg:h-[620px] relative'>
            <Image src={slide} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>

      

      <div className=' overflow-x-hidden'>
        <BsChevronLeft
          className='absolute top-1/2 left-4 text-5xl text-black cursor-pointer hover:text-gray-500 duration-500'
          onClick={() => sliderRef.current.slickPrev()}
        />
        <BsChevronRight
          className='absolute top-1/2 right-4 text-5xl text-black cursor-pointer hover:text-gray-500 duration-500'
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
};

export default Slide;
