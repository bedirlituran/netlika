// pages/index.js
"use client";
import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";

const HomePage = () => {
  const handleDownloadClick = () => {
    // TMS programını başlatan kod buraya gelecek
    // Örneğin, bir link aracılığıyla kullanıcıyı TMS programının indirme sayfasına yönlendirebilirsiniz
    window.location.href =
      "https://www.9apps.com/downloading/android-softs/ru-tvip-atv/";
  };

  const handlePhoneClick = () => {
    window.location.href = "";
  };

  return (
    <>
      <NextSeo
        title="Gammanet tv TmsPlayer Endirme Linkləri"
        description="TMS Player Endir"
      />
      <div className="h-screen flex items-center justify-center relative">
        <div className="flex  justify-center items-center ">
          <div className="flex flex-col items-center justify-center rounded-2xl shadow-2xl gap-6 h-[400px] w-[500px] md:w-[500px] p-8 transition-shadow duration-300  border sm:items-center hover:shadow">
            <h1 className="text-3xl font-bold mb-8 md:mb-20 ">
              Player Endirme Linkləri
            </h1>
            <p className="text-xl text-center font-semibold">
               Ip tv ile keyfiyyətli yayımı yaşa və həzz al.
              </p>
              <div className="flex gap-4 mt-20">
              <button className="bg-red-400 p-2 shadow-2xl rounded-xl text-white transition-shadow duration-300 border sm:items-center hover:shadow mb-4">
              <a href="https://www.9apps.com/downloading/android-softs/ru-tvip-atv/">
                Tv üçün yüklə
              </a>
            </button>
            <button className="bg-red-400 p-2 shadow-2xl rounded-xl text-white transition-shadow duration-300 border sm:items-center hover:shadow mb-4">
              <a href="https://www.9apps.com/downloading/android-softs/ru-tvip-tv/">
                Telefon üçün yüklə
              </a>
            </button>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
