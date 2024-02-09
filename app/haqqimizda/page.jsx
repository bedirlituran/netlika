// GammaNetPage.js
"use client";
import React from 'react';
import { NextSeo } from 'next-seo';


const GammaNetPage = () => {
  return (
    <div>
      
      <NextSeo title="GammaNet Şirkəti" description='Gammanet ile Ən yüksək səviyyəli xidmətlər'/>

      <div className="flex-col m-auto items-start max-w-2xl p-8 shadow-md rounded-md py-20 dark:text-black" >
        <h1 className="text-4xl font-bold mb-4">GammaNet Şirkəti</h1>
        <p className="text-lg mb-6">
          Ən yüksək səviyyəli xidmətlər və təcrübə sahibi personalımızla GammaNet, əsasən müştərilərimizin etibarı və məmnuniyyəti üçün çalışan bir şirkətdir.
        </p>
        <p className="text-lg mb-6">
          <strong>12 illik Təcrübə:</strong> Ən çətin texnoloji və əlaqə texnologiyalarında 12 illik təcrübəmizlə, müştərilərimizə qətiyyətlə etibarlı və inkişaf etmiş xidmətlər təqdim edirik.
        </p>
        <p className="text-lg mb-6">
          <strong>Personal:</strong> İşimizin əsasını təşkil edən personalımız, peşəkarlığı və müştəri məmnuniyyəti ilə tanınır. Hər bir müştəri bizim üçün önəmlidir və onların tələblərinə uyğun həllər təklif edirik.
        </p>
        <p className="text-lg mb-6">
          <strong>Xidmətlərimiz:</strong> GammaNet, müştərilərinin tələblərinə cavab verə bilmək üçün TV, İnternet və IPTV xidmətləri təqdim edir. Ən son texnologiyalardan faydalanaraq, geniş və təkmilləşdirilmiş xidmətlər təklif edirik.
        </p>
        <p className="text-lg mb-6">
          <strong>Əlaqə:</strong> Bizimlə əlaqə saxlamaq və bizdən ən son xəbərləri almaq üçün sosial media platformalarımızı izləyin. Kampaniyalarımızdan və müştərilərimizə təqdim etdiyimiz maraqlı təkliflərdən xəbərdar olun.
        </p>
        <p className="text-lg mb-6">
          Bizə güvənən müştərilərimizə təşəkkür edirik və hər zaman onların tələblərinə cavab vermək üçün çalışırıq. Əgər sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlamağınızdan şad olarıq.
        </p>
      </div>
    </div>
  );
};

export default GammaNetPage;
