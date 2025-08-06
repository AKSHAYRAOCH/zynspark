"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {  FaLinkedin } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Abhiram",
    role: "UI/UX designer @Zynspark",
    image: "/images/landingImages/team/Abhiram.svg",
    socials: { twitter: "#", instagram: "#", linkedin: 'https://www.linkedin.com/company/zynspark/' },
  },
  {
    name: "Shanmukh",
    role: "AI Researcher @Zynspark",
    image: "/images/landingImages/team/Shanmukh.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "https://www.linkedin.com/company/zynspark/" },
  },
  {
    name: "Akshay",
    role: "Developer @Zynspark",
    image: "/images/landingImages/team/Akshay.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "https://www.linkedin.com/company/zynspark/" },
  },
  {
    name: "Charan",
    role: "Product designer @Zynspark",
    image: "/images/landingImages/team/Charan.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "https://www.linkedin.com/company/zynspark/" },
  },
  {
    name: "Rakshit",
    role: "Documentation Researcher",
    image: "/images/landingImages/team/Akshay.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "https://www.linkedin.com/company/zynspark/" },
  },
];

export default function OurTeam() {
  const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);

  return (
    <div className=" md:pl-16 bg-white text-center">
      <button className="text-white bg-black py-[12px] px-[11px] rounded-xl text-md md:py-[16px] md:px-[16px] md:rounded-xl md:text-xl font-medium">
        Our Team
      </button>

      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mx-6 md:mx-0 text-[30px] md:text-[56px] font-[600] mb-6 pt-8">
          Meet the Team Behind the Magic
        </h2>
        <p className="text-gray-700 mb-6 md:mb-16 font-[400] px-0 md:px-30 text-base md:text-[18px] leading-[27px] w-[85%] md:w-[60%] ">
          At Zynspark, we're a group of creative thinkers, strategists, and
          problem-solvers. Together, we combine our expertise and passion to
          bring your ideas to life and make your brand shine.
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          
          navigation={navigation}
        breakpoints={{
              480: {
                slidesPerView: 1.3,
                centeredSlides: false,
                spaceBetween: 10,
              },
              640: { 
                slidesPerView: 1.5,
                centeredSlides: false,
                spaceBetween: 20,
              },
              768: { 
                slidesPerView: 3.5,
                spaceBetween: 70,
                centeredSlides: false,
              },
              1024: { 
                slidesPerView: 3.5,
                spaceBetween: 250,
                centeredSlides: false,
              },
            }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} >
              <div className="m-10 border border-none rounded-3xl md:rounded-4xl h-[360px] w-[337.19px] md:h-[588px] md:w-[537.19px] shadow-sm hover:shadow-lg transition bg-[#F4F4F4] flex flex-col items-center justify-center ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[162px] h-[162px] md:w-[232px] md:h-[232px] rounded-full mx-auto md:mb-8 object-cover"
                />
                <h4 className="text-[30px] md:text-[50.81px] md:mb-4 leading-[50px] font-bold text-black">
                  {member.name}
                </h4>
                <p className="text-gray-600 md:mb-6 text-[15px] md:text-[25.41px] leading-[36px]">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-6 text-black">
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="w-[29.4px] h-[29.4px]" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8 gap-4">
          <button ref={prevRef} className="p-2 rounded-full text-black">
            <ChevronLeft />
          </button>
          <button ref={nextRef} className="p-2 rounded-full text-black">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
