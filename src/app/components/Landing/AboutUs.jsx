'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from '../../../../public/images/landingImages/AboutUs.png';
import AboutLine from '../../../../public/images/landingImages/About.svg';

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 p-6 sm:p-10 lg:p-20 xl:p-40 h-screen">
      
      {/* Floating animated image */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="mb-10 lg:mb-0"
      >
        <Image 
          src={AboutImage} 
          width={400} 
          height={300} 
          alt="About"
          className="w-[280px] sm:w-[350px] lg:w-[400px]"
        />
      </motion.div>

      {/* Text Content */}
      <div className="w-full lg:w-1/4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">About Us</h1>
        <div className="flex gap-4 sm:gap-6">
          <div>
            <Image 
              src={AboutLine} 
              className="pt-1 w-[60px] sm:w-[80px] md:h-[220px] " 
              alt="AboutLine" 
            />
          </div>
          <div>
            <ul className="space-y-6 sm:space-y-8">
              <li>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Mission</h2>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                  At Zynspark, we empower startups by transforming bold ideas into impactful realities—driving growth, creativity, and long-term success every step of the way.
                </p>
              </li>
              <li>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Vision</h2>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">
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