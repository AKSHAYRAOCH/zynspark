"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ContactImage from "../../../../public/images/landingImages/HeroSection/ContactUs.png";
import Link from "next/link";

export const LetsConnect = () => {
  return (
    <section className="text-center px-4 sm:px-6">
      <div className="bg-black rounded-xl w-full pt-8 md:pt-[60px] px-6 md:px-[100px]">
        <h1 className="text-3xl sm:text-5xl md:text-[80px] leading-[1.2] md:leading-[96px] font-semibold text-white">
          Transform Your Vision into Reality—Let's Connect!
        </h1>
        
        <Link
          href="/contact"
          className="text-white bg-[#A270FF] hover:bg-[#8a5ceb] py-3 px-6 md:py-[10px] md:px-[20px] rounded-xl mt-6 md:mt-[30px] text-base md:text-base inline-block text-center transition-colors duration-200"
        >
          Contact Us
        </Link>
        
        <div className="flex justify-center pt-10 md:pt-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-full max-w-[300px] md:max-w-[500px]"
          >
            <Image
              src={ContactImage}
              width={500}
              height={369}
              alt="ContactImage"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};