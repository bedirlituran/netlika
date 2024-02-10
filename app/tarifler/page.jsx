"use client";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [price, setPrice] = useState(0);
  const qiymetRef = useRef();

  // Seçilen paket değiştikçe fiyatı güncelle
  useEffect(() => {
    if (selectedPackage !== null) {
      // Burada seçilen paketin fiyatını hesaplayabilir veya bir API'den alabilirsiniz
      // Bu örnekte, seçilen paketlerin sabit fiyatları olduğunu varsayıyoruz
      switch (selectedPackage) {
        case "3azn":
          setPrice(3);
          break;
        case "5azn":
          setPrice(5);
          break;
        case "10azn":
          setPrice(10);
          break;
        case "15azn":
          setPrice(15);
          break;
        case "60azn":
          setPrice(60);
          break;
        case "100azn":
          setPrice(100);
          break;
        default:
          setPrice(0);
          break;
      }
    }
  }, [selectedPackage]);

  // Checkbox değiştiğinde seçilen paketi güncelle
  const handleCheckboxChange = (e) => {
    const clickedPackage = e.target.value;

    // Eğer seçilen paket mevcutsa ve mevcut seçilen paketle aynı değilse,
    // seçilen paketi güncelle.
    if (selectedPackage !== null && selectedPackage !== clickedPackage) {
      setSelectedPackage(clickedPackage);
    } else if (selectedPackage === null) {
      setSelectedPackage(clickedPackage);
    }
  };

  return (
    <div className="p-20">
      <div className="flex-col items-center justify-start  p-24 text-black shadow-2xl border border-gray-400 rounded-xl">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-center md:text-3xl mb-10">
            Şəxsi məlumatlarını qeyd et
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Ad"
            className="input input-bordered placeholder:text-black w-[150] bg-gray-100"
          />
          <label htmlFor="soyad"></label>
          <input
            type="text"
            placeholder="Soyad"
            className="input input-bordered placeholder:text-black w-[150] bg-gray-100"
          />
          <label htmlFor="mobil"></label>
          <input
            type="mobile"
            placeholder="Mobil"
            className="input input-bordered placeholder:text-black w-[150] bg-gray-100"
          />
          <button className="p-3 bg-yellow-400 text-black rounded-xl ">
            Təsdiq et
          </button>
        </div>

        <div className="flex justify-center items-center  mt-12">
          <h1 className="font-bold text-center md:text-3xl">Tarif paketini seç</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-5">
          <div className="w-[300px] p-3 flex gap-2 items-center justify-around border border-gray-500">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="3azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "3azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
              3 AZN
            </button>
          </div>
          <div className="w-[300px] p-3 flex gap-2 items-center justify-around border border-gray-500">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="5azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "5azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
              5 AZN
            </button>
          </div>
          <div className="w-[300px] p-3 flex gap-2 items-center justify-around border border-gray-500">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="10azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "10azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
              10 AZN
            </button>
          </div>
        </div>
        <div className="flex-col text-center space-y-4 mt-12">
          <h1 className="font-bold text-3xl">Təsdiqlə və qoşul</h1>
          <p ref={qiymetRef} className="font-bold text-2xl text-red-400">
            {price} AZN
          </p>
          <button className=" bg-yellow-400 font-bold text-black p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
            <a href="https://short.fpay.az/gammanet"> Ödəniş et</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
