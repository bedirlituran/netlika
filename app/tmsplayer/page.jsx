// pages/index.js
'use client';
import React from 'react';

const HomePage = () => {
  const handleDownloadClick = () => {
    // TMS programını başlatan kod buraya gelecek
    // Örneğin, bir link aracılığıyla kullanıcıyı TMS programının indirme sayfasına yönlendirebilirsiniz
    window.location.href = 'https://tr.aptoide.com/download?app_id=66861512&store_name=aptoide-web&entry_point=appstore_appview_header_desktop_v10';
  };

  return (
    <div>
      <h1>Next.js Project</h1>
      <button onClick={handleDownloadClick}>TMS'i İndir</button>
    </div>
  );
};

export default HomePage;
