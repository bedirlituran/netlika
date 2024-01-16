import React from 'react';
import Sosial from './Sosial';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-white py-8 '>
      <div className='container mx-auto text-center'>
        <p className='text-lg font-semibold'>
        "Gamma Net'i ziyaret etdiyiniz üçün təşəkkür edirik! Xidmətlərimizi araşdırın və əlaqədə qalın."
        </p>
        <p className='mt-4'>
          Bizi sosial media vasitəsilə izləyin:
          {/* Add your social media icons or links here */}
        </p>
      </div>
      <Sosial />
    </footer>
  );
}

export default Footer;

