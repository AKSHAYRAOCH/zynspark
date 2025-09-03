"use client"


import React, { useState } from 'react';
import SubTestimonials from './SubTestimonial';

const testimonialCategories = [
  'Web Design',
  'Branding',
  'Pitch Desk',
  'Digital Marketing',
  'Ads Management',
  'Cyber Security',
];

export const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const firstLine = testimonialCategories.slice(0, 3);
  const secondLine = testimonialCategories.slice(3);

  return (
    <section className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-white h-full">
      <div className="flex max-w-screen-xl flex-col md:flex-row w-full">
        {/* Left side */}
        <div className="w-full mx-0 mr-6 my-36 md:w-1/1 px-0 sm:px-0 ">
          <div className="text-center sm:text-left mb-6">
            <button className="text-white bg-black py-[12px] px-[11px] text-md md:py-[12px] md:px-[16px] rounded-lg md:text-xl font-medium">
              Testimonials
            </button>
          </div>

          <div className="w-full sm:w-lg mx-auto sm:mx-0 text-center leading-relaxed sm:text-left">
            <h1 className="text-[30px] md:text-[56px] font-[600] leading-snug mb-4">
              What Our Clients Are Saying
            </h1>
            <p className="text-base md:text-[18px] font-[400] leading-relaxed text-gray-900 mb-9 md:pr-12 pb-6 sm:pb-8 font-roboto">
              We believe in building strong, lasting relationships with our clients. Hear how we've helped businesses succeed and grow, from brand building to digital transformation.
            </p>

            <div className="pb-4">
              <span className="text-base md:text-[18px] font-semibold text-[#892ED3]">
                Filter by Service
              </span>
            </div>

            {/* First line */}
            <div className=' mr-4 '>

            
            <div className=" flex justify-center items-center flex-wrap sm:justify-start mb-4 gap-2.5 ">
              {firstLine.map((category, idx) => (
                <p
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 px-5 md:py-4 md:px-10 rounded-full text-sm cursor-pointer transition ${
                    selectedCategory === category
                      ? 'bg-[#892ED3] text-white'
                      : 'bg-[#EBE8FF] text-[#892ED3] hover:bg-[#d5d0f5]'
                  }`}
                >
                  {category}
                </p>
              ))}
            </div>

            {/* Second line */}
            {secondLine.length > 0 && (
              <div className=" flex justify-center items-center flex-wrap sm:justify-start gap-2.5">
                {secondLine.map((category, idx) => (
                  <p
                    key={idx}
                    onClick={() => setSelectedCategory(category)}
                    className={`py-2 px-5 md:py-4 rounded-full text-sm cursor-pointer transition ${
                      selectedCategory === category
                        ? 'bg-[#892ED3] text-white'
                        : 'bg-[#EBE8FF] text-[#892ED3] hover:bg-[#d5d0f5]'
                    }`}
                  >
                    {category}
                  </p>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          <SubTestimonials selectedCategory={selectedCategory} />
        </div>
      </div>
    </section>
  );
};
