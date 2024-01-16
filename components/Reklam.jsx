import React from "react";
import Image from "next/image";
import Button from "./buttons/button";
const Reklam = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mt-20  w-full p-4  ">
        <div className="md:flex basis-1/2 flex justify-center items-center ">
          <Image
            src="/image/iptv.webp"
             width={700}
            height={700}
           
            quality={75}
            alt="alt"
            className="object-cover w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] "
          />
        </div>
        <div className="lg:flex  basis-1/2 justify-center items-center m-auto flex-col space-y-8 text-center">
          <p className="font-turan text-3xl  font-bold lg:text-4xl text-green-950">Sizi düşünərək hazırladıq</p>
          <h1 className="font-turan text-2xl lg:text-4xl font-semibold text-green-950">IPTV<br></br><span className="font-turan text-2xl  font-semibold lg:text-4xl text-red-500 ">+</span><br></br>İNTERNET</h1>
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Reklam;
