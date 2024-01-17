"use client"
// CardingSlider.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardingSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-5 sm:my-10">
      <Slider {...sliderSettings}>
        <div className="px-2">
          <Card icon="tv" stat="tv" orta="reqemsal" asagi="kanal" />
        </div>
        <div className="px-2">
          <Card icon="internet" stat="internet" orta="tarif" asagi="kompaniya" />
        </div>
        <div className="px-2">
          <Card icon="iptv" stat="iptv" orta="gammatv" asagi="gamma" />
        </div>
        <div className="px-2">
          <Card icon="Odeme" stat="Odeme" orta="million" asagi="emanat" />
        </div>
        {/* İhtiyaca göre daha fazla kart ekleyebilirsiniz */}
      </Slider>
    </div>
  );
};

export default CardingSlider;
