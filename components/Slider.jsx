// components/Carousel.js
"use client"; 
// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = [
  '/image/sekil1.png',
  '/image/sekil2.png',
  '/image/sekil3.png',
  '/image/sekil4.png',
  '/image/sekil5.png',
];

const settings = {
  dots: true,
  infinite: true,
  speed: 3000, // 2 saniyede bir geçiş
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // 2 saniyede bir otomatik geçiş
};

const Carousel = () => {
  return (
    <>
      <h1 className='text-center text-4xl font-bold mb-8'>Kompaniyalar</h1>
      <Slider {...settings} className='flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 border border-black p-4 mb-10'>
        {images.map((image, index) => (
          <div key={index} className="carousel-item ">
            <Image src={image} width={400} height={800} alt={`Slide ${index + 1}`} className="ml-2 rounded-box" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
