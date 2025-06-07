"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {  FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Abhiram",
    role: "UI/UX designer @Zynspark",
    image: "/images/landingImages/team/Abhiram.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Shanmukh",
    role: "AI Researcher @Zynspark",
    image: "/images/landingImages/team/Shanmukh.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Akshay",
    role: "Developer @Zynspark",
    image: "/images/landingImages/team/Akshay.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Charan",
    role: "Product designer @Zynspark",
    image: "/images/landingImages/team/Charan.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Rakshit",
    role: "Documentation Researcher",
    image: "/images/landingImages/team/Akshay.svg",
    socials: { twitter: "#", instagram: "#", linkedin: "#" },
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
    <section className="py-16 bg-white text-center">
      <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl text-sm sm:text-base">
        Our Team
      </button>

      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[56px] leading-[67px] font-semibold mb-6 pt-10">
          Meet the Team Behind the Magic
        </h2>
        <p className="text-gray-700 mb-8 text-lg leading-[27px] w-[60%] mx-auto">
          At Zynspark, we're a group of creative thinkers, strategists, and
          problem-solvers. Together, we combine our expertise and passion to
          bring your ideas to life and make your brand shine.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={navigation}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="border  border-none p-10 rounded-2xl shadow-sm hover:shadow-lg transition bg-[#F4F4F4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] h-[200px] rounded-full mx-auto mb-8 object-cover"
                />
                <h4 className="text-[40px] leading-[50px] font-bold text-black">
                  {member.name}
                </h4>
                <p className="text-gray-600 mb-4 text-[20px] leading-[36px]">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-6 text-black">
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter className="w-[29px] h-[29px]" />
                  </a>
                  <a href={member.socials.reddit} target="_blank" rel="noreferrer">
                    <FaReddit className="w-[29px] h-[29px]" />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="w-[29px] h-[29px]" />
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
    </section>
  );
}
