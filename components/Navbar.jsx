
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";



const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick)
  };
  return (
    <>
      <div className="font-sans file:flex items-center justify-between px-2 bg-white transition-colors duration-500  w-full h-20 sticky top-0 z-50 border-b border-gray-300 shadow-xl text-blue-950">
        <nav className="flex justify-between items-center font-medium lg:flex  lg:justify-between  h-20 lg:items-center sticky top-0 p-3 min-w-full" >
          <Link href="/">
            <Image
              src="/image/logo.webp"
              width={90}
              height={90}
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
                  href="/haqqında"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Haqqında
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <FaHandsHelping size={20} />

                <Link
                  href="/xidmətlər"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Xidmətlər
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <RiPresentationFill size={20} />

                <Link
                  href="/layihələr"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Layihələr
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex  items-center  text-blue-950">
                <Link href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/6034" target="blank" className="bg-gradient-to-r from-red-700 via-red-900 to-red-400 p-1 rounded-2xl text-white">Online Ödə</Link>
            
          </div>
          <div className="lg:hidden flex items-center ">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-within:ring-white transition-all duration-500"
              onClick={toggleNavbar}>
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 transition-all duration-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="green">
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
                  stroke="green">
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
          <div className="absolute lg:hidden z-50 top-18 left-0 right-0   w-full bg-gray-200  translate-x-0 transition-translate duration-1000">
            <div className=" px-2 pt-2 pb-3 space-y-3 sm:px-3 top-18  ">
              <ul className="space-y-6  flex flex-col items-center justify-start">
                <li>
                  <Link
                    href="/"
                    className="text-black hover:text-blue-500 hover:border-b border-black tracking-wider transition-all duration-500">
                    Ana Səhifə
                  </Link>
                </li>
                <li>
                  <Link
                    href="/haqqında"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Haqqında
                  </Link>
                </li>
                <li>
                  <Link
                    href="/xidmətlər"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Xidmətlər
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layihələr"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Layihələr
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
