"use client";
import React, { useRef, useEffect, useState } from "react";
import { ServiceCard } from "../cards/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Branding",
    description:
      "We create bold, memorable brand identities that cut through the noise. From strategy to visuals, we turn your vision into a cohesive brand experience.",
    image: "/images/landingImages/services/service1.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "We build and execute social strategies that grow your brand and spark engagement. From content planning to analytics, we handle it all—platform to post.",
    image: "/images/landingImages/services/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/landingImages/services/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/landingImages/services/service1.png",
  },
  {
    title: "Pitch Deck",
    description:
      "We design compelling pitch decks that tell your story with clarity and impact. From visuals to messaging, we help you win over investors and clients.",
    image: "/images/landingImages/services/service1.png",
  },
];

export const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="text-center px-4 sm:px-6 lg:px-8">
      <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
        Our Services
      </button>
      
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-[45%] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 text-center pt-6 sm:pt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight sm:leading-snug md:leading-normal">
          What We Do - Crafted for Your Success
        </h2>
        <p className="text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 text-gray-600">
          From SEO and branding to web design and content, Zynspark crafts
          strategies that deliver real results. Let's bring your vision to life.
        </p>
      </div>

      <div className="py-8 sm:py-10 md:py-12 relative">
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            breakpoints={{
              480: {
                slidesPerView: 1.3,
                centeredSlides: false
              },
              640: { 
                slidesPerView: 1.5,
                centeredSlides: false
              },
              768: { 
                slidesPerView: 3,
                spaceBetween: 15,
                centeredSlides: false,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="px-2 sm:px-3"> {/* Added padding for better mobile spacing */}
                  <ServiceCard {...service} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex justify-center mt-6 sm:mt-8 gap-4">
          <button 
            ref={prevRef} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button 
            ref={nextRef} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};