"use client";
import React, { useState, useEffect, useRef } from "react";

const Page = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [price, setPrice] = useState(0);
  const qiymetRef = useRef();

  useEffect(() => {
    if (selectedPackage !== null) {
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

  const handleCheckboxChange = (e) => {
    const clickedPackage = e.target.value;

    if (selectedPackage !== null && selectedPackage !== clickedPackage) {
      setSelectedPackage(clickedPackage);
    } else if (selectedPackage === null) {
      setSelectedPackage(clickedPackage);
    }
  };

  return (
    <div className="container mx-auto p-5 md:p-20">
      <div className="flex flex-col items-center justify-start p-5 md:p-24 text-black shadow-2xl border border-gray-400 rounded-xl">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-center md:text-3xl mb-5 md:mb-10">
            Şəxsi məlumatlarını qeyd et
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Ad"
            className="input input-bordered placeholder:opacity-75 w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2"
          />
          <input
            type="text"
            placeholder="Soyad"
            className="input input-bordered placeholder:opacity-75 w-full md:w-[300px] border-gray-400 bg-gray-100 mb-2"
          />
          <div className="flex items-center mb-2">
            <select
              className="input input-bordered placeholder:opacity-75 w-[100px] border-gray-400 bg-gray-100 mr-2"
              defaultValue=""
            >
              <option value="" disabled hidden>
                --
              </option>
              <option value="099">099</option>
              <option value="055">055</option>
              <option value="051">051</option>
              <option value="050">050</option>
              <option value="070">070</option>
              <option value="077">077</option>
            </select>
            <input
              type="text"
              placeholder="Telefon Nömrəsi"
              className="input input-bordered placeholder:opacity-50 border-gray-400 w-full bg-gray-100"
            />
          </div>
          <button className="p-3 bg-yellow-400 text-black rounded-xl w-full md:w-auto">
            Təsdiq et
          </button>
        </div>

        <div className="flex justify-center items-center mt-8 md:mt-12">
          <h1 className="font-bold text-center md:text-3xl">
            Tarif paketini seç
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-5">
          <div className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around bg-gray-100   border border-gray-400 rounded-lg">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="3azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "3azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl">
              3 AZN
            </button>
          </div>
          <div className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around  bg-gray-100  border border-gray-400 rounded-lg">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="5azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "5azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl">
              5 AZN
            </button>
          </div>
          <div className="w-full md:w-[400px] p-3 flex gap-2 items-center justify-around bg-gray-100  border border-gray-400 rounded-lg">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              value="10azn"
              onChange={handleCheckboxChange}
              checked={selectedPackage === "10azn"}
            />
            <h1>Standart - 3 gün (SuperSport daxil)</h1>
            <button className="flex bg-yellow-400 text-black p-2 rounded-2xl">
              10 AZN
            </button>
          </div>
        </div>
        <div className="flex-col text-center space-y-4 mt-8 md:mt-12">
          <h1 className="font-bold text-3xl">Təsdiqlə və qoşul</h1>
          <p ref={qiymetRef} className="font-bold text-2xl text-red-400">
            {price} AZN
          </p>
          <button className="bg-yellow-400 font-bold text-black p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
            <a href="https://short.fpay.az/gammanet"> Ödəniş et</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
