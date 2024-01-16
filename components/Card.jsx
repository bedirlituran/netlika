
import React from "react";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaInternetExplorer } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import Link from "next/link";

const Card = ({ icon, stat, orta, asagi,link,urlip }) => {
  const icons = {
    tv: <PiTelevisionSimpleBold size={70} color="red" />,
    internet: <FaInternetExplorer size={70} color="gray" />,
    iptv: <SiSmartthings size={70} color="yellow" />,
    Odeme: <MdOutlinePayments size={70} color="green"/>,
  };

  const stats = {
    tv: "Kabel Tv",
    internet: "İnternet",
    iptv: "IP TV",
    Odeme: "Ödəmə üsulları",
  };

  const ortas = {
    reqemsal: "Reqemsal TV",
    tarif: "Tariflər",
    gammatv: "GammaNet iptv",
    million: "Million ",
  };

  const asagilar = {
    gammaip: "GammaNet App",
    gamma: "Iptv endir",
    kanal: "Kanal siyahısı",
    kompaniya: "Kompaniya",
    emanat: "E-manat",
  };

  const links = {
    reqemsal: "/Reqemsal",
    tarif: "/tarifler",
    gammatv: "/gammatv",
    million: "/million",
    gammaip: "/gammaip",
    gamma: "/Gamma",
    kanal: "/ChannelList",
    kompaniya: "/kompaniya",
    emanat: "/emanat",
  };
  

  return (
    <div className="font-turan -mt-2 p-2 w-[350px] lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 cursor-pointer md:flex md:flex-nowrap rounded-2xl flex flex-col justify-center items-center">
      <div className="h-[350px] w-[350px] md:w-full md:flex flex justify-center items-center placeholder:first:group rounded-2xl bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 hover:bg-red-200 hover:text-slate-100 transition-all duration-500 shadow-xl">
        <div className="flex flex-col gap-3 mx-auto max-w-xs px-8 w-[260px] flex-wrap">
          <div className="flex flex-row gap-7 items-center justify-center">
            {icons[icon]} {/* Icon prop'u kullan */}
            <p className="text-base font-bold text-gray-950 group-hover:text-white duration-500 uppercase">{stats[stat]}</p>
          </div>
          <div className="mt-6 flex items-baseline justify-center gap-x-2">
          
              <Link href={links[orta]} className="m-auto  rounded-md px-3 py-2 text-center text-lg font-semibold text-black shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan ">
                {ortas[orta]}
              </Link>
            
          </div>
          <div className="flex items-baseline justify-center gap-x-2">
            
              <Link href={links[asagi]} className="m-auto  rounded-md px-3 py-2 text-center text-lg font-semibold text-black shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan">
                {asagilar[asagi]}
              </Link>
            
          </div>
          <div className="mt-20">
          <Link href="/Muraciet" className="m-auto mt-10  rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-turan uppercase">Qoşul</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
