// pages/index.js
"use client";
import React from "react";
import { NextSeo } from "next-seo";

const HomePage = () => {
  const handleDownloadClick = () => {
    window.location.href =
      "https://www.9apps.com/downloading/android-softs/ru-tvip-atv/";
  };

  const handlePhoneClick = () => {
    window.location.href = "";
  };

  return (
    <>
      <NextSeo
        title="Gammanet TV TMSPlayer Endirme Linkləri"
        description="TMS Player Endir"
      />
      <div className="min-h-screen  flex items-start justify-center">
        <div className="p-8  max-w-2xl w-full md:mt-20">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Gammanet TV Player Endirme Linkləri
          </h1>
          <p className="text-lg text-center mb-8">
            Keyfiyyətli yayımları yaşamaq üçün TMS Player'i endirin. Hər an, hər yerdə mümkündür!
          </p>
          <div className="flex flex-col gap-6 items-center">
            <button className="bg-red-400 py-2 px-4 rounded-lg text-white transition duration-300 hover:bg-red-500">
              <a href="https://www.9apps.com/downloading/android-softs/ru-tvip-atv/">
                TV üçün Endir
              </a>
            </button>
            <button className="bg-red-400 py-2 px-4 rounded-lg text-white transition duration-300 hover:bg-red-500">
              <a href="https://www.9apps.com/downloading/android-softs/ru-tvip-tv/">
                Telefon üçün Endir
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
