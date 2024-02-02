// pages/index.js
'use client';
import React from 'react';

const HomePage = () => {
  const handleDownloadClick = () => {
    // TMS programını başlatan kod buraya gelecek
    // Örneğin, bir link aracılığıyla kullanıcıyı TMS programının indirme sayfasına yönlendirebilirsiniz
    window.location.href = 'https://www.9apps.com/downloading/android-softs/ru-tvip-atv/';
  };

  const handlePhoneClick = () => {
    window.location.href = '';
  }

  return (
    <div className='flex flex-col h-screen gap-6 justify-center items-center'>
      <h1 className='text-3xl font-bold'>Player Endirme Linkləri</h1>
      
      <button className='bg-red-500 p-2 rounded-2xl text-white '><a href="https://www.9apps.com/downloading/android-softs/ru-tvip-atv/">Tv üçün yüklə</a></button>
      <button className='bg-red-500 p-2 rounded-2xl text-white '><a href="https://www.9apps.com/downloading/android-softs/ru-tvip-tv/">Telefon üçün yüklə</a></button>
    </div>
  );
};

export default HomePage;
