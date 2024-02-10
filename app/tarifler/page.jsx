"use client";
import React from "react";
import { useRef } from "react";

const page = () => {

  const qiymetRef = useRef();
 
  return (
    <div className="p-20">
      <div className="flex-col items-center justify-start  p-24 text-black shadow-2xl border border-yellow-400 rounded-xl">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl mb-4">
            {" "}
            Şəxsi məlumatlarını qeyd et
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Ad"
            className="input input-bordered w-[150] bg-transparent"
          />
          <label htmlFor="soyad"></label>
          <input
            type="text"
            placeholder="Soyad"
            className="input input-bordered w-[150] bg-transparent"
          />
          <label htmlFor="mobil"></label>
          <input
            type="mobile"
            placeholder="Mobil"
            className="input input-bordered w-[150] bg-transparent"
          />
          <button className="p-3 bg-yellow-400 text-black rounded-xl ">
            Təsdiq et
          </button>
        </div>

        <div className="flex justify-center items-center  mt-12">
          <h1 className="font-bold text-3xl">Tarif paketini seç</h1>
        </div>
        <div className="flex mt-5">
          <div className="flex flex-col basis-1/2 justify-center items-center gap-4">

            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                3 AZN
              </button>
            </div>
            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                5 AZN
              </button>
            </div>
            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                10 AZN
              </button>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 justify-center items-center gap-4">
            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                15 AZN
              </button>
            </div>
            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                60 AZN
              </button>
            </div>
            <div className="w-[400px] p-3 flex gap-2 items-center justify-between border border-yellow-500">

              {" "}<input  type="checkbox" className="checkbox checkbox-warning" />
              <h1>Standart - 3 gün (SuperSport daxil)</h1>
              <button className="flex bg-yellow-400 text-black p-2 rounded-2xl ">
                100 AZN
              </button>
            </div>
           
          </div>
          
        </div>
        <div className="flex-col text-center space-y-4 mt-12">
          <h1 className="font-bold text-3xl">Təsdiqlə və qoşul</h1>
          <p ref={qiymetRef} className="font-bold text-2xl text-red-400">60 AZN</p>
          <button  className=" bg-yellow-400 font-bold text-black p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
          <a href='https://short.fpay.az/gammanet'> Ödəniş et</a>
               
              </button>
        </div>
        
      </div>
    </div>
  );
};

export default page;
