"use client"
import React from 'react'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaInternetExplorer } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import Link from "next/link";
const Yenicarding = () => {
    return (
        <div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold font-turan tracking-wider mb-2 lg:mb-4 gap-3 text-center mt-6'>Kampaniyalar</h1>
            <div className="flex-wrap items-center justify-center gap-9 font-custom text-center sm:flex">

                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800 ">

                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto">
                            <PiTelevisionSimpleBold size={80} color='red' />
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-bold text-gray-700 sm:text-xl dark:text-white">
                        Kabel Tv
                    </h3>
                    <div className='flex flex-col gap-2 mb-4' >
                        <Link href='/Reqemsal' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Rəqəmsal Tv
                        </Link>
                        <Link href='/ChannelList' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Kanal Siyahısı
                        </Link>
                    </div>

                    <Link href="/Muraciet" className="m-auto mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">
                        Qoşul
                    </Link>
                </div>
                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto ">
                            <FaInternetExplorer size={80} color='yellow' />
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-bold text-gray-700 sm:text-xl dark:text-white">
                        Internet
                    </h3>
                    <div className='flex flex-col gap-2 mb-4' >
                        <Link href='/' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Tariflər
                        </Link>
                        <Link href='/' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Kampaniyalar
                        </Link>
                    </div>

                    <Link href="/Muraciet" className="m-auto mt-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">
                        Qoşul
                    </Link>
                </div>
                <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto">
                            <SiSmartthings size={80} color='green' />
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-bold text-gray-700 sm:text-xl dark:text-white">
                        IP Tv
                    </h3>
                    <div className='flex flex-col gap-2 mb-4' >
                        <Link href='/Iptv' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Gammanet Ip Tv
                        </Link>
                        <a href='https://play.google.com/store/apps/details?id=ru.tvip.atv' className=" text-gray-500 font-bold text-lg dark:text-gray-300">
                            Ip Tv Yüklə
                        </a>
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

