// pages/index.js
"use client";
import React from 'react';
import { NextSeo } from 'next-seo';

const HomePage = () => {
  return (
    <div>
    <div className=" dark:bg-gray-900 flex flex-col items-center justify-around md:mt-28 lg:p-10 md:p-8 ">
      <NextSeo title="Bizimlə əlaqə" description='Gammanet ile əlaqə'/>
      <div className="container mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10 font-semibold text-gray-800 dark:text-white">
            Bizimlə əlaqə
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          <div className="text-center">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg md:text-xl font-medium text-red-500 dark:text-white">İP TV</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">077 223 44 71<br />077 223 44 35 <br/>077 466 05 05</p>
          </div>

          <div className="text-center">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg md:text-xl font-medium text-red-500 dark:text-white">Kabel Tv & Internet</h2>
          
            <p className="mt-2 text-gray-500 dark:text-gray-400">-<br></br>077 610 48 88<br />012 310 48 88</p>
          </div>

          <div className="text-center">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg md:text-xl font-medium text-red-500 dark:text-white">Email</h2>
          
            <p className="mt-2 text-gray-500 dark:text-gray-400">-<br></br>email əlaqə<br></br>gamma_net@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;
