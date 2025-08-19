'use client';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../../public/images/logo.svg'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  // Add this useEffect to detect background changes
  // useLayoutEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Get the computed background color of the section
  //           const bgColor = window.getComputedStyle(entry.target).backgroundColor;
  //           // Determine if background is light or dark
  //           const isLight = isLightBackground(bgColor);
  //           setIsDarkBackground(isLight);
  //         }else{
  //           setIsDarkBackground(false);
  //         }
  //       });
  //     },{ threshold: [ 0.3, 0.4, 0.5] }
  // );
  // // Observe all sections on your page
  // const sections = document.querySelectorAll('section');
  // sections.forEach(section => observer.observe(section));

  // return () => observer.disconnect();
  // }, [10]);

  // // Helper function to determine if background is light
  // const isLightBackground = (bgColor) => {
  //   // Convert RGB to brightness value
  //   const rgb = bgColor.match(/\d+/g);
  //   if (rgb) {
  //     const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
  //     console.log(rgb);
  //     if(brightness <= 10){
  //       return false;
  //     }
  //     if(brightness >= 300 && brightness == 11){
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the intersecting element has data-component="LetsConnect"
          const dataComponent = entry.target.getAttribute('data-component');
          
          if (entry.isIntersecting && (dataComponent === 'LetsConnect'  || dataComponent === 'OurTeam')) {
            setIsDarkBackground(false);
          } else{
            setIsDarkBackground(true);
          }
        });
      },
      { 
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '-80px 0px 0px 0px' // Account for header height
      }
    );

    // Observe all sections with data-component attribute
    const sections = document.querySelectorAll('[data-component]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [isDarkBackground]);

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-white bg-opacity-50 z-40 transition-opacity duration-300 
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}
        onClick={() => setIsMenuOpen(false)}/>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="text-black">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Centered navigation items at top */}
        <nav className="px-4">      
          <ul className="flex flex-col items-center space-y-8 mt-4">
            <li>
              <a href="/" className="text-black hover:text-[#A270FF] transition-colors duration-200 text-xl" onClick={() => setIsMenuOpen(false)} >
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="text-black hover:text-[#A270FF] transition-colors duration-200 text-xl" onClick={() => setIsMenuOpen(false)}  >
                Service
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black hover:text-[#A270FF] transition-colors duration-200 text-xl" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-xl text-center"onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Header */}
      <header className="border fixed top-0 left-0  w-full z-50 backdrop-blur-md border-gray-200 dark:border-gray-800 rounded-2xl">
        <div className=" flex items-center justify-between px-4 sm:px-6 py-4 text-black dark:text-white">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <Link href="/" className="block">
                <Image src={logo} width={192} height={28} alt='Logo' />
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:block transition-all duration-300 `}>
            <ul className="flex space-x-6 text-base">
              <li>
                <a href="/" className={`transition-colors duration-200 ${isDarkBackground ? 'text-gray-900 hover:text-[#A270FF]' : 'text-purple-500 hover:text-white' }`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className={`transition-colors duration-200 ${isDarkBackground ? 'text-gray-900 hover:text-[#A270FF]': 'text-purple-500 hover:text-white'}`}>
                  Service
                </a>
              </li>
              <li>
                <a href="/contact" className={`transition-colors duration-200 ${isDarkBackground ? 'text-gray-900 hover:text-[#A270FF]' : 'text-purple-500 hover:text-white'}`}>
                  Contact Us
                </a>
              </li>
             </ul>
          </nav>

          {/* Desktop Buttons & Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/contact" className= {`px-4 py-2 text-white rounded-xl text-base hover:bg-gray-800 transition-colors duration-200 ${isDarkBackground ? 'bg-black':'bg-purple-500'}`} >
                Contact Us
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button className="text-black md:hidden" onClick={() => setIsMenuOpen(true)} >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};





// const isLightBackground = (bgColor) => {
//   // Convert RGB to brightness value
//   const rgb = bgColor.match(/\d+/g);
//   if (rgb) {
//     const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
//     console.log(rgb);
//     if(brightness <= 10){
//       return false;
//     }
//     if(brightness >= 300 && brightness == 11){
//       return false;
//     }
//   }
//   return true;
// };