// components/Carousel.js
"use client"; 
// components/Carousel.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/image/sekil1.png',
  '/image/sekil2.png',
  '/image/sekil3.png',
  '/image/sekil4.png',
  '/image/sekil5.png',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [currentImage]);

  return (
    <>
      <h1 className='text-center text-5xl font-bold mb-8'>Kompaniyalar</h1>
      <div className="carousel carousel-center p-4 space-x-4 bg-gradient-to-r from-blue-800 via-gray-900 to-gray-800 rounded-box flex justify-center items-center w-[94%] m-auto mb-10">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentImage ? 'active' : ''}`}>
            <Image src={image} width={400} height={800} alt={`Slide ${index + 1}`} className="rounded-box" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
