import React from 'react';
import Link from 'next/link';

export const Pricing = () => {
    return (
      <div className="px-2 py-1 mb-16 mx-auto font-bold bg-gray-50 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 overflow-y-hidden">
        <div className=" flex flex-col text-center file:max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          
          <p className=" text-gray-700 text-3xl ">
            Zövqünüzə uyğun paketləri bizdən sifariş edə bilərsiniz.
          </p>
        </div>
        <div className="grid max-w-md gap-4 row-gap-3 lg:max-w-screen-lg sm:row-gap-8 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto mb-20">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
           
              <div className="flex items-center justify-center">
                <div className="mr-1 text-4xl font-bold">Kabel Tv</div>
              </div>
              <div className="mt-2 space-y-3">
                <Link href='/channelList' className="text-gray-700 cursor-poinet  hover:underline hover:text-blue-400 transition-all duration-500">120 SD  kanal</Link>
                <div className="text-gray-700">30 HD kanal</div>
                <div className="text-gray-700"></div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className="  text-white inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': 'red' }}
            >
              Sifariş Et
            </a></div>
            </div>
            <div>
             
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Keyfiyyətli və Zövqlü yayımı GammaNet ilə yaşa.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
              <div className="  inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400"style={{'background':'black'}}>
                Çox Seçilən
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold"></div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-4xl font-bold">İnternet</div>
                
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Gpon internet</div>
                <div className="text-gray-700">36 Mbs-100Mbs qədər sürət</div>
                <div className="text-gray-700"></div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className="  text-white inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': 'red' }}
            >
              Sifariş Et
            </a></div>
            </div>
           
            <div>
           
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                İnternet istifadəsindən heç zaman belə zövq almamısınınız.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 text-center transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold"></div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-4xl font-bold">İP Tv</div>
                
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">200 SD , 110 SD Kanal </div>
                <div className="text-gray-700">Keyfiyyətli Tv yayımı</div>
                <div className="text-gray-700"></div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className="  text-white inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': 'red' }}
            >
              Sifariş Et
            </a></div>
            </div>
            <div>
             
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
               Ip tv ile keyfiyyətli yayımı yaşa və Gammanet-lə həzz al.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Pricing;