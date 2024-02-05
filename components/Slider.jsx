// components/Carousel.js
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  "/image/sekil1.png",
  "/image/sekil2.png",
  "/image/sekil3.png",
  "/image/sekil4.png",
  "/image/sekil5.png",
];

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],
};

const Carousel = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 border border-black p-4 mb-10 w-[90%] rounded-xl shadow-xl">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">Kampanyalar</h1>

      <Slider {...settings} className="rounded-xl shadow-xl">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={image}
              width={500}
              height={800}
              alt={`Slide ${index + 1}`}
              className="rounded-box shadow-xl object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
