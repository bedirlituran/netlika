"use client";
import React, { useRef } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardingSlider = () => {
  const sliderRef = useRef(null);

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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Slider{...sliderSettings}>
          <div className="outline-none focus:outline-none">
            <div className="p-2">
              <Card icon="tv" stat="tv" orta="reqemsal" asagi="kanal" />
            </div>
          </div>
          <div className="outline-none focus:outline-none">
            <div className="p-2">
              <Card icon="internet" stat="internet" orta="tarif" asagi="kompaniya" />
            </div>
          </div>
          <div className="outline-none focus:outline-none">
            <div className="p-2">
              <Card icon="iptv" stat="iptv" orta="gammatv" asagi="gamma" />
            </div>
          </div>
          <div className="outline-none focus:outline-none">
            <div className="p-2">
              <Card icon="Odeme" stat="Odeme" orta="million" asagi="emanat" />
            </div>
          </div>
          {/* İhtiyaca göre daha fazla kart ekleyebilirsiniz */}
        </Slider>
      
      </div>
    </div>
  );
};

export default CardingSlider;
