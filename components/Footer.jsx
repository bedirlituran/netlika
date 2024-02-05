import React from 'react';
import Sosial from './Sosial';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-white p-2 '>
      <div className='container mx-auto text-center'>
        <p className='text-normal font-semibold'>
        "Gammanet'i ziyarət etdiyiniz üçün təşəkkür edirik! Xidmətlərimizi araşdırın və əlaqədə qalın."
        </p>        
      </div>
      <div className='mt-4'><Sosial /></div>
    </footer>
  );
}

export default Footer;

