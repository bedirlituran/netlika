// GammaNetPage.js
"use client";
import React from 'react';
import { NextSeo } from 'next-seo';


const GammaNetPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-2 overflow-y-hidden" >
      
      <NextSeo title="GammaNet Şirkəti" description='Gammanet ile Ən yüksək səviyyəli xidmətlər'/>

      <div className="max-w-2xl bg-white shadow-md rounded-md  px-8" >
        <h1 className="text-2xl font-bold mb-1">GammaNet Şirkəti</h1>
        <p className="text-normal mb-1">
          Ən yüksək səviyyəli xidmətlər və təcrübə sahibi personalımızla GammaNet, əsasən müştərilərimizin etibarı və məmnuniyyəti üçün çalışan bir şirkətdir.
        </p>
        <p className="text-normal mb-1">
          <strong>12 illik Təcrübə:</strong> Ən çətin texnoloji və əlaqə texnologiyalarında 12 illik təcrübəmizlə, müştərilərimizə qətiyyətlə etibarlı və inkişaf etmiş xidmətlər təqdim edirik.
        </p>
        <p className="text-normal mb-1">
          <strong>Personal:</strong> İşimizin əsasını təşkil edən personalımız, peşəkarlığı və müştəri məmnuniyyəti ilə tanınır. Hər bir müştəri bizim üçün önəmlidir və onların tələblərinə uyğun həllər təklif edirik.
        </p>
        <p className="text-normal mb-1">
          <strong>Xidmətlərimiz:</strong> GammaNet, müştərilərinin tələblərinə cavab verə bilmək üçün TV, İnternet və IPTV xidmətləri təqdim edir.
        </p>
        <p className="text-normal mb-2">
          <strong>Əlaqə:</strong> Bizimlə əlaqə saxlamaq və bizdən ən son xəbərləri almaq üçün sosial media platformalarımızı izləyin. Kampaniyalarımızdan və müştərilərimizə təqdim etdiyimiz maraqlı təkliflərdən xəbərdar olun.
        </p>
        <p className="text-normal mb-6">
          Bizə güvənən müştərilərimizə təşəkkür edirik və hər zaman onların tələblərinə cavab vermək üçün çalışırıq.
        </p>
      </div>
    </div>
  );
};

export default GammaNetPage;
