'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const floatingImages = [
  { src: 'images/serviceimages/avatar1.svg', style: 'top-40 left-[35%] ', name: 'Ads Management' },
  { src: 'images/serviceimages/avatar2.svg', style: 'top-[30%] left-40', name: 'Web Design' },
  { src: 'images/serviceimages/avatar3.svg', style: 'top-[20%] right-[25%]', name: 'Social Media Marketing' },
  { src: 'images/serviceimages/avatar4.svg', style: 'top-[50%] right-[10%]', name: 'Branding' },
  { src: 'images/serviceimages/avatar5.svg', style: 'bottom-[10%] right-[15%]', name: 'Pitch Desk' },
  { src: 'images/serviceimages/avatar6.svg', style: ' bottom-[10%] right-[40%]', name: 'Content Writing' },
  { src: 'images/serviceimages/avatar7.svg', style: 'bottom-[20%] right-[70%]', name: 'Web development' },
  { src: 'images/serviceimages/avatar8.svg', style: 'bottom-[10%] left-[5%]', name: 'SEO Services' },
];

const rotatingKeywords = [
  "Digital Presence",
  "Brand Identity",
  "Online Growth",
  "Customer Reach",
  "Business Impact",
];

export default function ServiceHeroSection() {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black min-h-screen h-full md:h-screen text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Images */}
      <div className="hidden md:block">
        {floatingImages.map((img, idx) => (
          <div key={idx} className={`absolute ${img.style} group`}>
            <Image
              src={img.src}
              alt={`avatar-${idx}`}
              width={66}
              height={66}
              className="rounded-md z-10"
            />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-[16px] text-[#892ED3]
             rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {img.name}
            </span>
          </div>
        ))}
      </div>

      {/* Centered Content */}
      <div className="flex flex-col justify-center items-center z-20 max-w-6xl">
        <h1 className="text-[25px] sm:text-[30px] md:text-[60px] lg:text-[80px] px-10 sm:px-6 md:px-28 font-bold">
          Seamless Services for a Stronger
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingKeywords[currentKeywordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400"
              >
                {rotatingKeywords[currentKeywordIndex]}
              </motion.span>
            </AnimatePresence>
          
        </h1>

        <p className="text-[15px] text-center md:text-[18px] px-8 sm:px-6 md:px-0 text-gray-300 mt-2">
          We don't just provide services; we create experiences that truly connect, engage, and deliver results.
        </p>
      </div>
    </div>
  );
}
