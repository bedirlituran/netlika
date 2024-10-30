"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaHandsHelping } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import { motion } from "framer-motion";
import { PiTelevisionFill } from "react-icons/pi";
import { SiPicartodottv } from "react-icons/si";
import { MdCastConnected } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = (type) => {
    if (type === "phone") window.location.href = "tel:+994123104888";
    else if (type === "email") window.location.href = "mailto:gamma_net@mail.ru";
  };

  return (
    <div className="font-sans flex items-center justify-between px-2 w-full h-20 sticky top-0 z-50 border-gray-300 text-blue-950" style={{ background: '#ffff00' }}>
      <nav className="flex justify-between items-center p-3 w-full">
        <Link href="/">
          <Image src="/image/logo2.webp" width={120} height={40} alt="Gammanet.az" priority className="cursor-pointer bg-transparent rounded-md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="flex items-center text-blue-950 lg:gap-8">
            {[
              { href: "/", label: "Ana Səhifə", icon: <FaHome /> },
              { href: "/haqqimizda", label: "Haqqımızda", icon: <BsPersonCircle /> },
              { href: "/qosul", label: "Qoşul", icon: <MdCastConnected /> },
              { href: "/xidmetler", label: "Xidmətlər", icon: <FaHandsHelping /> },
              { href: "/channelList", label: "Kanal Listi", icon: <PiTelevisionFill /> },
              { href: "/tmsplayer", label: "IP tv", icon: <SiPicartodottv /> },
              { href: "/elaqe2", label: "Əlaqə", icon: <HiPhone /> },
            ].map((item, index) => (
              <li key={Item.id || index} className="flex gap-2 items-center">
                {item.icon}
                <Link href={item.href} className="text-black hover:text-blue-500 hover:border-b border-blue-500 transition-all duration-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Online Payment Link */}
        <div className="hidden lg:block">
          <Link href="https://short.fpay.az/gammanet" target="_blank" className="p-2 rounded-2xl text-black border border-black hover:bg-yellow-500 transition-all duration-500">
            Online Ödə
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-white transition-all duration-500 focus:outline-none">
            {isMenuOpen ? (
              <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute lg:hidden z-50 top-18 left-0 right-0 h-auto p-4 w-full bg-yellow-400 transition-transform duration-1000"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
            <ul className="space-y-6 font-bold flex flex-col items-center border border-red-200 rounded-2xl p-4">
              {[
                { href: "/", label: "Ana Səhifə", icon: <FaHome /> },
                { href: "/haqqimizda", label: "Haqqımızda", icon: <BsPersonCircle /> },
                { href: "/qosul", label: "Qoşul", icon: <MdCastConnected /> },
                { href: "/xidmetler", label: "Xidmətlər", icon: <FaHandsHelping /> },
                { href: "/channelList", label: "Kanal Listi", icon: <PiTelevisionFill /> },
                { href: "/tmsplayer", label: "IP tv", icon: <SiPicartodottv /> },
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  {item.icon}
                  <Link href={item.href} className="text-black hover:text-blue-500 border-black tracking-wider transition-all duration-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-6 font-bold flex flex-col items-center border p-4 border-red-200 rounded-2xl">
              <button onClick={() => handleRedirect("phone")} className="flex gap-2 items-center text-black hover:text-blue-500 tracking-wider">
                <HiPhone size={20} /> Əlaqə
              </button>
              <Link href="https://short.fpay.az/gammanet" target="_blank" className="p-2 text-black hover:bg-yellow-500 transition-all duration-500 border border-red-200 rounded-2xl">
                Online Ödə
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
