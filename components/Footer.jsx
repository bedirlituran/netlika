import React from 'react';
import Sosial from './Sosial';

const Footer = () => {
  return (
    <footer className=' w-full bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-white py-8 '>
      <div className='container mx-auto text-center'>
        <p className='text-lg font-semibold'>
        "Gamma Net'i ziyaret etdiyiniz üçün təşəkkür edirik! Xidmətlərimizi araşdırın və əlaqədə qalın."
        </p>
        <p className='mt-4'>
          Bizi sosial media vasitəsilə izləyin:
        </p>
        
      </div>
      <div className='mt-4'><Sosial /></div>
      
      <p className='mt-4 text-center'>
          Büutun hüquqlar qorunur © 2024 | Müəllif: Turan Bedirli | Əlaqə: <a href='tel:+994558080801' className='text-blue-500'>055 808 08 01</a>
        </p>
    </footer>
  );
}

export default Footer;

