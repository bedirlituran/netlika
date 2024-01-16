"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import ThemeComp from "./ThemeComp";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <div className=" file:flex items-center justify-between px-2 bg-white transition-colors duration-500  w-full h-18 sticky top-0 z-50">
        <nav className="flex justify-between items-center lg:flex  lg:justify-between  h-18 lg:items-center sticky top-0 p-2 uppercase font-bold space-x-2 min-w-full lg:text-sm  opacity-95 " >
          <div>
            <Image
              src="/image/logo.webp"
              width={100}
              height={100}
              alt="alt"
              className="bg-transparent object-cover rounded-2xl flex items-center justify-center "
            />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <ul className="lg:flex lg:items-center lg:justify-between  lg:text-sm  lg:gap-8 ">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link
                  href="/haqqında"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Haqqında
                </Link>
              </li>
              <li>
                <Link
                  href="/xidmətlər"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="/layihələr"
                  className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Layihələr
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex  items-center gap-4 ">
           
              <ThemeComp />
            

            <BiPhoneCall
              size={25}
              color="black"
              className="hidden lg:block transition-all duration-500 cursor-pointer hover:text-blue-500"
            />

<a href="tel:+994126104888" className="text-black hover:text-blue-500 cursor-pointer hidden lg:block transition-all duration-500">
  (012) 610 48 88
</a>
            <CiMail
              size={25}
              color="black"
              className="hidden md:hidden lg:block transition-all duration-500 cursor-pointer hover:text-blue-500"
            />
           <a href="mailto:gamma_net@mail.ru" className="text-black hover:text-blue-500 hidden lg:block transition-all duration-500 cursor-pointer md:hidden">
  gamma_net@mail.ru
</a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-within:ring-white transition-all duration-500"
              onClick={toggleNavbar}>
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 transition-all duration-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black">
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
                  className="h-8 w-8 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black">
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
