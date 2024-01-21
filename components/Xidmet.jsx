"use client";
import { useState,useEffect } from "react";
import Card2 from "./cards/Card2";
import React from "react";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


const Xidmet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    // Otomatik kaydırma için setInterval kullanımı
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Her 3 saniyede bir kaydırma (ayarlayabilirsiniz)

    return () => {
      // Component kaldırıldığında setInterval'i temizle
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <>
      <div className="rounded-2xl flex flex-col items-center justify-center m-auto bg-gray-100 min-h-auto  p-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold font-turan tracking-wider mb-2 lg:mb-4 gap-2">
          Xidmətlər
        </h1>
        <p className="font-turan font-light text-2xl sm:text-3xl md:text-3xl my-2 lg:my-5">
          Sayt üzərindən sifariş
        </p>

        <div className="slider-container transition-all duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-1  gap-6 mt-8 lg:mt-16">
        {currentIndex === 0 && <Card2 />}
        {currentIndex === 1 && <Card3 />}
        {currentIndex === 2 && <Card4 />}
      </div>
      <div className="flex justify-center items-center gap-8 mt-3 font-bold text-3xl">

      <FaChevronLeft onClick={prevSlide} className="cursor-pointer hover:text-blue-400 transition-colors duration-500"/>
      <FaChevronRight onClick={nextSlide}className="cursor-pointer hover:text-blue-400 transition-colors duration-500"/>
      </div>
      
    </div>
      </div>
    </>
  );
};

export default Xidmet;

