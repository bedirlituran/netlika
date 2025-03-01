import React from 'react';
import Sosial from './Sosial';
import Link from "next/link";


const Footer = () => {
  return (
    <div>
         <footer className=' text-center  w-full bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 text-white p-2 '>
      <div className='container mx-auto text-center'>
        <p className='text-normal font-semibold'>
        "Gammanet'i ziyarət etdiyiniz üçün təşəkkür edirik! Xidmətlərimizi araşdırın və əlaqədə qalın."
        </p>        
      </div>
      <div className='mt-4'><Sosial /></div>
     <Link href="/Privacy_policy">Məxfilik Siyasəti</Link>
    </footer>
    </div>
 
  );
}

export default Footer;

