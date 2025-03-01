import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
function Sosial() {
  return (
    <footer className="bg-gray-800 text-white p-1 font-custom">
      <div className="flex items-center justify-center space-x-6">
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaTwitter size={24} style={{ 'color': '#ffff00' }} />
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaInstagram size={24} style={{ 'color': '#ffff00' }}/>
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800"
        >
          <FaLinkedin size={24} style={{ 'color': '#ffff00' }}/>
        </Link>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub size={24} style={{ 'color': '#ffff00' }}/>
        </Link>
      </div>
    </footer>
  );
}

export default Sosial;
