'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from '../../../../public/images/landingImages/AboutUs.png';
import AboutLine from '../../../../public/images/landingImages/About.svg';

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-50 bg-white h-full md:h-screen m-4 mb:m-20">
      
      {/* Floating animated image */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="mt-20 md:mt-0 mb-10 md:mb-0"
      >
        <Image 
          src={AboutImage} 
          width={400} 
          height={300} 
          alt="About"
          className="w-[380px] sm:w-[450px] lg:w-[650px]"
        />
      </motion.div>

      {/* Text Content */}
      <div className="w-full lg:w-xl">
        <h1 className="text-[30px] sm:text-[56px] font-bold text-gray-800 mb-6 sm:mb-12">About Us</h1>
        <div className="flex gap-4 sm:gap-6 my-10">
          <div className="mt-2">
            <Image 
              src={AboutLine} 
              className="w-[78px] md:w-[55px]" 
              alt="AboutLine" 
            />
          </div>
          <div>
            <ul className="space-y-6 sm:space-y-8">
              <li>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-800 mb-2">Mission</h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-[18px]">
                  At Zynspark, we empower startups by transforming bold ideas into impactful realities—driving growth, creativity, and long-term success every step of the way.
                </p>
              </li>
              <li className="mt-10 md:mt-24">
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-800 mb-2">Vision</h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-[18px] mb-20 md:mb-0">
                  To be the leading creative partner for startups, shaping a future where every great idea gets the strategy, design, and momentum it needs to thrive.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}