"use client"


import React, { useState } from 'react';
import SubTestimonials from './SubTestimonial';

const testimonialCategories = [
  'Web Design',
  'App Development',
  'Brand Strategy',
  'Pitch Desk',
  'Digital Marketing',
  'Cyber Security',
];

export const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const firstLine = testimonialCategories.slice(0, 3);
  const secondLine = testimonialCategories.slice(3);

  return (
    <section className="flex px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-32 flex flex-col md:flex-row w-full">
        {/* Left side */}
        <div className="w-full md:w-1/1 px-0 sm:px-0 lg:pl-[120px]">
          <div className="text-center sm:text-left mb-6">
            <button className="text-white bg-black py-[12px] px-[11px] text-md md:py-[12px] md:px-[16px] rounded-lg md:text-xl font-medium">
              Testimonials
            </button>
          </div>

          <div className="w-full sm:w-lg mx-auto sm:mx-0 text-center leading-relaxed sm:text-left">
            <h1 className="text-[30px] md:text-[56px] font-[600] leading-snug mb-8">
              What Our Clients Are Saying
            </h1>
            <p className="text-[18px] font-[400] leading-relaxed text-gray-900 mb-9 pr-12 pb-6 sm:pb-8 font-roboto">
              We believe in building strong, lasting relationships with our clients. Hear how we've helped businesses succeed and grow, from brand building to digital transformation.
            </p>

            <div className="pb-4">
              <span className="text-base md:text-[18px] font-semibold text-[#892ED3]">
                Filter by Service
              </span>
            </div>

            {/* First line */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-[10px] mb-4">
              {firstLine.map((category, idx) => (
                <p
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-[12px] px-[18px] rounded-full text-sm cursor-pointer transition ${
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
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                {secondLine.map((category, idx) => (
                  <p
                    key={idx}
                    onClick={() => setSelectedCategory(category)}
                    className={`py-2.5 px-4 rounded-full text-sm cursor-pointer transition ${
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

        {/* Right side */}
        <div className="">
          <SubTestimonials selectedCategory={selectedCategory} />
        </div>
      </div>
    </section>
  );
};
