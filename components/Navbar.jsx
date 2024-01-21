"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import { motion } from "framer-motion";

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
      <div className="font-sans file:flex items-center justify-between px-2 bg-white transition-colors duration-500  w-full h-20 sticky top-0 z-50 border-b border-gray-300  text-blue-950">
        <nav className="flex justify-between items-center font-medium lg:flex  lg:justify-between  h-20 lg:items-center sticky top-0 p-3 min-w-full">
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
                <RiPresentationFill size={20} />
                <label className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                  Ealqe:
                </label>
                <select onChange={handleSelectChange}>
                  <option
                    value="phone"
                    className="text-center text-md text-black">
                    0123104888
                  </option>
                  <option
                    value="email"
                    className="text-center text-md text-black">
                    gamma_net@mail.ru
                  </option>
                </select>
              </li>
            </ul>
          </div>

          <div className="  items-center  text-blue-950 hidden lg:block">
            <Link
              href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/6034"
              target="blank"
              className="bg-gradient-to-r from-red-700 via-red-900 to-red-400 p-1 rounded-2xl text-white">
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
          <motion.div
            className="absolute lg:hidden z-50 top-18 left-0 right-0  h-auto p-4  w-full bg-gray-100  translate-x-0 transition-translate duration-1000"
            initial={{ opacity: 0, transform: "translateX(100%)" }}
            animate={{ opacity: 1, transform: "translateX(0%)" }}
            transition={{ duration: 0.5 }}>
            <div className=" px-2 pt-2 pb-3 space-y-3 sm:px-3 top-18  ">
              <ul className="space-y-6 font-bold  flex flex-col items-center text-center justify-center border p-4">
                <li>
                  <Link
                    href="/"
                    className="text-black hover:text-blue-500 hover:border-b border-black tracking-wider transition-all duration-500">
                    Ana Səhifə
                  </Link>
                </li>
                <li>
                  <Link
                    href="/haqqimizda"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/xidmetler"
                    className="text-black hover:text-blue-500 tracking-wider transition-all duration-500">
                    Xidmətlər
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col items-center font-bold justify-center border p-4 gap-4">
                <li className="flex flex-row items-center bg-transparent">
                  <label className="text-black hover:text-blue-500 hover:border-b border-blue-500 tracking-wider transition-all duration-500">
                    Ealqe:
                  </label>
                  <select
                    onChange={handleSelectChange}
                    className="bg-transparent border-collapse outline-black">
                    <option
                      value="phone"
                      className="text-center text-md text-black">
                      0123104888
                    </option>
                    <option
                      value="email"
                      className="text-center text-md text-black">
                      gamma_net@mail.ru
                    </option>
                  </select>
                </li>
                <li className="flex  items-center  text-blue-950">
                  <Link
                    href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/6034"
                    target="blank"
                    className="bg-gradient-to-r from-red-700 via-red-900 to-red-400 p-1 rounded-2xl text-white">
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
