import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Sosial() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex items-center justify-center space-x-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Sosial;
