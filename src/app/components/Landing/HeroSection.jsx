"use client";

import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import Animations from "../Animations/Animations";
import Image from "next/image";
import Image1 from "../../../../public/images/landingImages/HeroSection/Group 80.png";
import Image2 from "../../../../public/images/landingImages/HeroSection/Group 81.png";
import Image3 from "../../../../public/images/landingImages/HeroSection/Group 82.png";
import Image4 from "../../../../public/images/landingImages/HeroSection/Group 83.png";
import Link from "next/link";
import Arrow from "../../../../public/images/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {

  const keywords = [
    "Web Design",
    "UI/UX",
    "Branding",
    "Marketing",
    "Ads Management",
    "Social Media Marketing",
    "Content Writing",
  ];

  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);


  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative bg-white overflow-hidden h-[90vh] min-h-[600px] md:h-screen border-none outline-none mt-10">

      {/* 🧩 Matter.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Animations />
      </div>

      {/* 🖼️ Background Decorative Images - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute top-[75px] left-80 z-0 group">
          <Image
            src={Image3}
            alt="decor"
            width={200}
            height={180}
            className="rotate-[-3deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[40deg]"
          />
        </div>

        <div className="absolute top-[50px] right-80 z-0 group">
          <Image
            src={Image2}
            alt="decor"
            width={200}
            height={180}
            className="rotate-[-2deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute right-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[140deg] transform"
            style={{ transform: "rotate(140deg) scaleX(-1)" }}
          />
        </div>

        <div className="absolute bottom-[180px] left-25 z-0 group">
          <Image
            src={Image4}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[3deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-120"
            style={{ top: "50%", transform: "translateY(-50%) scaleX(-1)" }}
          />
        </div>

        <div className="absolute bottom-[130px] right-15 z-0 group">
          <Image
            src={Image1}
            alt="decor"
            width={188}
            height={170}
            className="rotate-[2deg]"
          />
          <Image
            src={Arrow}
            alt="arrow"
            width={60}
            height={60}
            className="absolute -left-10 top-1/4 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-190"
          />
        </div>
      </div>

      {/* 🌟 Main Hero Content */}
      <div className="relative z-20 mt-[60px] md:mt-[200px] px-4 font-sans">
        <div className="flex justify-center items-center gap-2 md:gap-[10px]">
          <h1 className="text-[32px] sm:text-5xl md:text-[80px] leading-[1.2] md:leading-[96px] font-medium text-center">
            End-to-End Support for:
            <br className="hidden sm:block" />
            {hasMounted && (
            <AnimatePresence mode="wait">
                <motion.span
                  key={keywords[currentKeyword]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 w-full text-center text-[#A270FF] md:my-25 my-20" 
                >
                  {keywords[currentKeyword]}
                </motion.span>
              </AnimatePresence>
              )}
            {/* <span className="text-[#A270FF]">Web Design</span> */}
          </h1>
        </div>

        <div className="flex justify-center mt-4 md:mt-[30px] items-center font-sans px-2 sm:px-0 pt-25">
          <h2 className="text-center text-sm md:text-[18px] mx-auto">
            Zynspark blends creativity and strategy to help your brand grow.
          </h2>
        </div>

        <div className="flex justify-center items-center mt-6 p-8 md:mt-[15px] text-md sm:text-lg">
          <Link href="/contact" className="text-white bg-[#A270FF] hover:bg-[#8a5ceb] py-3 px-6 sm:py-[20px] sm:px-[40px] rounded-xl inline-block text-center transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;