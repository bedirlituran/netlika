import React from 'react'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaInternetExplorer } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import Link from "next/link";
const Yenicarding = () => {
  return (
    <div>
      
<div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto">
            <PiTelevisionSimpleBold size={70} color='blue'/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Kabel Tv
        </h3>
        <div className='flex flex-col gap-2 mb-4' >
        <Link href='/Reqemsal' class=" text-gray-500 text-md dark:text-gray-300">
            Rəqəmsal Tv
        </Link>
        <Link href='/ChannelList' class=" text-gray-500 text-md dark:text-gray-300">
            Kanal Siyahısı
        </Link>
        </div>
       
        <Link href="/Muraciet" className="m-auto mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">
              Qoşul
            </Link>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto ">
            <FaInternetExplorer size={70} color='blue'/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Internet
        </h3>
        <div className='flex flex-col gap-2 mb-4' >
        <Link href='/' class=" text-gray-500 text-md dark:text-gray-300">
            Rəqəmsal Tv
        </Link>
        <Link href='/' class=" text-gray-500 text-md dark:text-gray-300">
            Kanal Siyahısı
        </Link>
        </div>
        
        <Link href="/Muraciet" className="m-auto mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">
              Qoşul
            </Link>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto">
            <SiSmartthings size={70} color='blue'/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            IP Tv
        </h3>
        <div className='flex flex-col gap-2 mb-4' >
        <Link href='/' class=" text-gray-500 text-md dark:text-gray-300">
            Gammanet Ip Tv
        </Link>
        <Link href='/' class=" text-gray-500 text-md dark:text-gray-300">
            Ip Tv Yüklə
        </Link>
        </div>
        <Link href="/Muraciet" className="m-auto mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">
              Qoşul
            </Link>
    </div>
    
</div>


    </div>
  )
}

export default Yenicarding

