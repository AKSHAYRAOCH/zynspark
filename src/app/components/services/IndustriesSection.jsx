'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io"; 

export default function IndustriesSection() {
  const services = [
    { title: 'Branding/ Strategy', img: '/images/serviceimages/Brand.png' },
    { title: 'UI/UX Design', img: '/images/serviceimages/UIUX.png' },
    { title: 'Social Media Marketing', img: '/images/serviceimages/SocialMedia.png' },
  ];

  const industries = ['Tech', 'Real Estate', 'Pharma', 'Food'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f7f7f7] py-12 md:py-20 px-4 sm:px-6 h-screen ">
      <div className="mx-auto my-10 text-center">
        <button className="text-white bg-black py-2 px-4 md:px-[16px] md:py-[12px] rounded-lg text-sm sm:text-[20px] font-[600]">
          Industries
        </button>

        <h2 className="text-3xl sm:text-[56px] font-bold my-4 sm:my-0 flex flex-row justify-center items-center gap-2 flex-wrap">
          <div className='pt-6'>We work across{' '}</div>
          <span className="relative h-[40px] w-[100px] sm:w-[120px] ">
            <AnimatePresence mode="wait">
              <motion.span
                key={industries[currentIndex]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-0 w-full text-[#892ED3] text-center whitespace-nowrap"
              >
                {industries[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="text-[#000000B2] flex justify-center mb-8 sm:mb-10 text-base sm:text-[18px] mt-6 font-[400] max-w-full mx-auto">
          At Prolancers, we craft powerful identities that engage, inspire, and make a lasting impression.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-9">
          {services.map((item, index) => (
            <div key={index} className="flex justify-between flex-col py-24 bg-white rounded-[32px] shadow-sm hover:shadow-md transition overflow-hidden group relative h-[588px] w-[515px]">               
            <img src={item.img} alt={item.title} className="ml-24 w-full h-32 sm:h-40 md:h-[283px] md:w-[296px] object-contain"/>               
            <h3 className="font-[600] text-base sm:text-lg md:text-[30px]">{item.title}</h3>               
            <div className="absolute inset-0 bg-black backdrop-blur-sm flex items-center justify-center text-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 gap-1">                 
              <span className="text-white text-lg sm:text-xl md:text-4xl font-medium">Know More</span>                 
              <IoIosArrowForward className='text-white text-lg sm:text-xl md:text-4xl' />               
            </div>             
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}