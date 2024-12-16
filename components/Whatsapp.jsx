// pages/index.js veya istediğiniz sayfanın dosyası

"use client"
import React,{ useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [phoneNumber] = useState('+994776104888');

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div 
    className="font-custom text-center bg-green-400 p-5 rounded-full text-white fixed bottom-7 right-7 flex w-[70px] h-[70px] items-center justify-center cursor-pointer hover:bg-green-500 hover:shadow-2xl hover:scale-110 transition-all duration-500 z-50"
    onClick={openWhatsApp}>
    <FaWhatsapp size={70} />
  </div>
  
  );
};


export default WhatsAppButton;