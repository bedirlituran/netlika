import React from 'react';
import Link from 'next/link';

export const Pricing = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" flex flex-col text-center file:max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"style={{'color':'yellow'}}
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-center">İnternet</span>
            </span>{' '}
            və TV paketləri.
          </h2>
          <p className="text-center text-gray-700 md:text-lg">
            Zövqünüzə uyğun paketləri bizdən sifariş edə bilərsiniz.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Start</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">TV</div>
              </div>
              <div className="mt-2 space-y-3">
                <Link href='/channelList' className="text-gray-700 cursor-poinet  hover:underline hover:text-blue-400 transition-all duration-500">150 + baxımlı kanal</Link>
                <div className="text-gray-700">30 + HD of kanal</div>
                <div className="text-gray-700">100 + xarici kanal</div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className=" marker:bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-black inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': '#ffff00' }}
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
              <div className="  inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400"style={{'background':'yellow'}}>
                Çox Seçilən
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">Pro</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">TV+İnternet</div>
                
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">Gpon internet</div>
                <div className="text-gray-700">100 Mbs qədər sürət</div>
                <div className="text-gray-700">300 + Tv kanal</div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className=" marker:bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-black inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': '#ffff00' }}
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
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Business</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">İP Tv</div>
                
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">300 + yerli və xarici kanal</div>
                <div className="text-gray-700">Keyfiyyətli Tv yayini</div>
                <div className="text-gray-700">24/7 Xidmət</div>
              </div>
              <div className='mt-2 space-y-3 ml-4'><a
              href="/Muraciet"
              className=" marker:bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-black inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"style={{ 'background': '#ffff00' }}
            >
              Sifariş Et
            </a></div>
            </div>
            <div>
             
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
               Ip tv ile keyfiyyətli yayımı yaşa və həzz al.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Pricing;