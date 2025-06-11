import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 md:py-20 px-4 min-h-[326px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center sm:items-start sm:flex-row justify-between">
        <div className="text-blue-500 font-semibold text-lg mb-4 sm:mb-0">
          Zynspark
        </div>
        <div className="flex gap-6 mb-6 sm:mb-0 text-xl">
          {/* <RiFacebookCircleFill className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <BsTwitterX className="hover:text-gray-300 cursor-pointer" /> */}
          <a
            href="https://www.linkedin.com/company/zynspark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-4 max-w-7xl mx-auto w-full" />

      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
        <a href="#" className="hover:underline hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline hover:text-white">
          Terms of Service
        </a>
        <a href="#" className="hover:underline hover:text-white">
          Cookies Settings
        </a>
        <span className="text-center sm:text-left">
          © 2025 Zynspark. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
