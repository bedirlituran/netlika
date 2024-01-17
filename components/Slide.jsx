"use client";
import React,{useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";

const Slide = () => {
 
  const slides = [
    { url: '/image/slide2.webp' },
    { url: '/image/slide1.webp' },
    { url: '/image/slide3.webp' },
    
    
  ]

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const index = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(index);

  };
  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const index = isLastSlide ? 0 : current + 1;
    setCurrent(index);
  };

  
  return (
    <div className='max-w-[1400px] h-[450px] lg:h-[620px]  w-full m-auto   relative'>
      <div style={{backgroundImage:`url(${slides[current].url})`}} className='w-full h-full rounded-2xl  bg-cover bg-center  duration-500 m-auto'></div>
      
      <BsChevronCompactLeft onClick={prevSlide} className='absolute top-1/2 left-0 text-5xl text-black cursor-pointer hover:text-gray-500 duration-500'/>
      <BsChevronCompactRight onClick={nextSlide}  className='absolute top-1/2 right-0 text-5xl text-black cursor-pointer hover:text-gray-500 duration-500'/>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2 mb-2'>
        {slides.map((slide, index) => (
          <GoDotFill key={index} className={`text-2xl  text-black cursor-pointer ${index === current ? 'text-white transition-all duration-500'  : ''}`} onClick={() => setCurrent(index)} />
        ))}
        </div>
    </div>
  )
}

export default Slide
