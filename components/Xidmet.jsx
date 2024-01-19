import Card2 from "./cards/Card2";
import React from "react";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";

const Xidmet = () => {
  return (
    <>
      <div className="rounded-2xl flex flex-col items-center justify-center m-auto bg-gray-100 min-h-auto  p-6 mt-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold font-turan tracking-wider mb-2 lg:mb-4 gap-2">
          Xidmətlər
        </h1>
        <p className="font-turan font-light text-2xl sm:text-3xl md:text-3xl my-2 lg:my-5">
          Sayt üzərindən sifariş
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-16
        ">
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </>
  );
};

export default Xidmet;

