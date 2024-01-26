"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { motion } from "framer-motion";
import { PiTelevisionFill } from "react-icons/pi";
import { SiPicartodottv } from "react-icons/si";



const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === "phone") {
      handlePhoneClick();
    } else if (selectedOption === "email") {
      handleEmailClick();
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+994123104888"; // Telefon uygulamasını başlatır
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:gamma_net@mail.ru"; // E-posta uygulamasını başlatır
  };

  return (
    <>
      <div className="font-sans file:flex items-center justify-between px-2 transition-colors duration-500  w-full h-20 sticky top-0 z-50  border-gray-300  text-blue-950" style={{ 'background': '#ffff00' }}>
        <nav className="flex justify-between items-center font-medium lg:flex  lg:justify-between  h-20 lg:items-center sticky top-0 p-3 min-w-full">
          <Link href="/">
            <Image
              src="/image/logo.webp"
              width={100}
              height={100}
              alt="alt"
              className="cursor-pointer  hover:scale-110 bg-transparent rounded-md transition-all duration-500 "
            />
          </Link>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <ul className="flex items-center text-blue-950 text lg:text-sm lg:flex lg:items-center lg:justify-between   lg:gap-8 ">
              <li className="flex gap-2 items-center">
                <FaHome size={20} />
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Ana Səhifə
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <BsPersonCircle size={20} />

                <Link
                  href="/haqqimizda"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Haqqıımızda
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <FaHandsHelping size={20} />

                <Link
                  href="/xidmetler"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Xidmətlər
                </Link>

              </li>

              <li className="flex gap-2 items-center">
              <PiTelevisionFill size={20} />

                <Link
                  href="/channelList"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Kanal Listi
                </Link>

              </li>


              <li className="flex gap-2 items-center">
              <SiPicartodottv size={20} />


                <Link
                  href="/channelList"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                 IP tv
                </Link>

              </li>






              <li className="flex gap-2 items-center">
                <HiPhone size={20} />
                <Link
                  href='/Muraciet' className="text-black hover:text-blue-500  hover:border-b border-blue-500 tracking-wider transition-all duration-500">

                  Əlaqə
                </Link>

              </li>

            </ul>
          </div>

          <div className="  items-center   text-black hidden lg:block">
            <Link
              href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/6034"
              target="blank"
              className="p-2 rounded-2xl text-black border border-black hover:bg-yellow-500 transition-all duration-500" >
              Online Ödə
            </Link>
          </div>
          <div className="lg:hidden flex items-center ">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-within:ring-white transition-all duration-500"
              onClick={toggleNavbar}>
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 transition-all duration-500  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
               
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isClick && (
          <motion.div
            className="absolute lg:hidden z-50 top-18 left-0 right-0  h-auto p-4  w-full translate-x-0 transition-translate duration-1000" style={{ 'background': 'yellow' }}
            initial={{ opacity: 0, transform: "translateX(100%)" }}
            animate={{ opacity: 1, transform: "translateX(0%)" }}
            transition={{ duration: 0.5 }}>
            <div className=" px-2 pt-2 pb-3 space-y-3 sm:px-3 top-18  ">
              <ul className="space-y-6 font-bold  flex flex-col items-center text-start justify-center border border-red-200 rounded-2xl p-4">
                <li className="flex gap-2">
                  <FaHome size={20} />
                  <Link
                    href="/"
                    className="text-black hover:text-blue-500 border-black tracking-wider transition-all duration-500">
                    Ana Səhifə
                  </Link>
                </li>
                <li className="flex gap-2">
               <BsPersonCircle size={20} />
                  <Link
                    href="/haqqimizda"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Haqqımızda
                  </Link>
                </li>
                <li className="flex gap-2">
                  <FaHandsHelping size={20} />
                  <Link
                    href="/xidmetler"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Xidmətlər
                  </Link>
                </li>
                <li className="flex gap-2">
              <PiTelevisionFill size={20} />

                <Link
                  href="/channelList"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Kanal Listi
                </Link>

              </li>
              <li className="flex gap-2 ">
              <SiPicartodottv size={20} />


                <Link
                  href="/channelList"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                 IP tv
                </Link>

              </li>
              </ul>
              <ul className="space-y-6 font-bold  flex flex-col items-center text-start justify-center border p-4  border-red-200 rounded-2xl">
                <li className="flex flex-row gap-2 items-center bg-transparent">
                <HiPhone size={20} />
                <Link
                  href='/Muraciet' className="text-black hover:text-blue-500 border-blue-500 tracking-wider transition-all duration-500">

                  Əlaqə
                </Link>
                </li>
                <li className="flex  items-center  text-blue-950">
                <Link
              href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/6034"
              target="blank"
              className="p-2  text-black   hover:bg-yellow-500 transition-all duration-500 border border-red-200 rounded-2xl" >
              Online Ödə
            </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
