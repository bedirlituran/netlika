"use client"
import React from "react";
import {GrUserWorker} from "react-icons/gr"
import { BsSpeedometer } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";


const Feature = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Gamma net
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Niyə</span>
          </span>{' '}
          Biz?!<br></br>
          Üstünlükərimiz
        </h2>
        
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          
        <div className="flex justify-center items-center mb-4">
        <GrUserWorker size={40} color="red"/>
 
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Təcrübəli işçi kollektivi</h6>
          <p className="mb-3 text-sm text-gray-900">
          Mütəxəssislərimiz quraşdırılmanı qısa müddətə yerinə yetirəcək və istənilən problemi həll etməyə kömək edəcək.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex justify-center items-center mb-4">
        <BsSpeedometer size={40} color="red"/>
 
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Sürətli Bağlantı</h6>
          <p className="mb-3 text-sm text-gray-900">
          Saat, ərazi, hava şəraitindən asılı olmayaraq yüksək sürət və kəsintisiz qoşulma

          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex justify-center items-center mb-4">
        <PiTelevisionBold size={40} color="red"/>
 
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Ən reytinqli kanallar
</h6>
          <p className="mb-3 text-sm text-gray-900">
          HD keyfiyyətində ən reytinqli yerli və xarici televiziya kanallarını izləyin.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
        <div className="flex justify-center items-center mb-4">
        <Ri24HoursLine size={40} color="red"/>
 
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
          24/7 Dəstək

          </h6>
          <p className="mb-3 text-sm text-gray-900">
          İstənilən vaxt bizə zəng edin. Texniki dəstək 24/7 aktivdir.

          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;