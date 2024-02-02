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
    window.location.href = 'https://www.9apps.com/downloading/android-softs/ru-tvip-tv/';
  }

  return (
    <div className='flex justify-center items-center p-20'>
      
      <button onClick={handleDownloadClick}>TMS'i İndir</button>
      <button onClick={handlePhoneClick}>telefon ucun</button>
    </div>
  );
};

export default HomePage;
