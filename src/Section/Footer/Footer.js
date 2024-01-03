import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress, SiDiscover } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-2xl font-bold mb-4">Connect with us</h4>
          <div className="flex space-x-4">
            <a href="." className="text-blue-700 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="." className="text-blue-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="." className="text-red-500 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-2xl font-bold mb-4">Accepted Payment Methods</h4>
          <div className="flex space-x-4">
            <SiVisa size={24} className="text-gray-400" />
            <SiMastercard size={24} className="text-gray-400" />
            <SiAmericanexpress size={24} className="text-gray-400" />
            <SiDiscover size={24} className="text-gray-400" />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Helpful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="." className="hover:text-gray-300">FAQs</a>
            </li>
            <li>
              <a href="." className="hover:text-gray-300">Contact Us</a>
            </li>
            <li>
              <a href="." className="hover:text-gray-300">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h4>
          <form className="flex items-center ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none p-3 mb-2 rounded"
            />
            <button
              type="submit"
              className=" absolute mt-20 rounded bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
