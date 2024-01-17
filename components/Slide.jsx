"use client";
// components/Slide.js
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

const Slide = () => {
  const slides = [
    { url: '/image/slide2.webp' },
    { url: '/image/slide1.webp' },
    { url: '/image/slide3.webp' },
  ];

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

  // Otomatik geçiş için
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 2 saniyede bir geçiş

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  // Mobil kaydırma için
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      nextSlide();
    } else if (touchDiff < -50) {
      prevSlide();
    }
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      
    >
      {/* Carousel wrapper */}
      <div className="relative  min-w-full h-[400px] overflow-hidden rounded-lg md:h-[480px]">
        {/* Render the current slide */}
        {slides.map((slide, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === current ? '' : 'hidden'}`} data-carousel-item>
            <div
              className="absolute w-full h-full bg-center bg-cover "
              style={{ backgroundImage: `url(${slide.url})` }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === current} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
        ))}
      </div>
      {/* Slider controls */}
      <button type="button" onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <BsChevronCompactLeft className="w-6 h-6 text-white" />
      </button>
      <button type="button" onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <BsChevronCompactRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Slide;
