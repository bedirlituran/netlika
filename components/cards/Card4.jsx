import React from "react";
import Image from "next/image";


const Card4 = () => {
  return (
    <div className=" relative flex flex-col items-center justify-center h-full cursor-pointer group transition-all duration-500  ">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold text-gray-950 text-3xl z-10 group-hover:top-5   transition-all duration-500">
        Smart Ip Tv
      </h1>
      <div>
        <Image
          src="/image/xidmet3.png"
          width={350}
          height={350}
          alt=""
       
          className="w-26 h-26 rounded-xl group-hover:scale-105  ease-in-out opacity-50 hover:opacity-100 transition duration-500"
        />
      </div>
      <button
        className=" text-black   p-3 w-36 h-16 rounded-2xl invisible  font-turan tracking-wider
text-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-bold  z-10 group-hover:visible   transition-all duration-500 shadow-2xl"style={{'background':'yellow'}}>
        Sifariş Et
      </button>
    </div>
  );
};

export default Card4;
