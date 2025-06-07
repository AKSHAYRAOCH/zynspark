import React from 'react';
import SubTestimonials from './SubTestimonial';

const testimonialCategories = [
  'Web Design',
  'App Development',
  'Brand Strategy',
  'Other',
  'Marketing',
];

export const Testimonials = () => {
  const firstLine = testimonialCategories.slice(0, 3);
  const secondLine = testimonialCategories.slice(3);

  return (
    <section className="flex px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
        {/* Left side - 50% width */}
        <div className="w-full md:w-1/1 px-0 sm:px-0 lg:pl-[120px]">
          <div className="text-center sm:text-left mb-6">
            <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl text-sm sm:text-base">
              Testimonials
            </button>
          </div>

          <div className="w-full sm:w-4/5 mx-auto sm:mx-0 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-[56px] font-semibold leading-tight sm:leading-[120%] py-4 sm:py-5">
              What Our Clients Are Saying
            </h1>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-700 pb-6 sm:pb-8 font-roboto">
              We believe in building strong, lasting relationships with our clients. Hear how we've helped businesses succeed and grow, from brand building to digital transformation.
            </p>

            <div className="pb-4">
              <span className="text-base sm:text-lg font-semibold text-[#892ED3]">
                Filter by Service
              </span>
            </div>

            {/* First line - 3 categories */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mb-4">
              {firstLine.map((category, idx) => (
                <p
                  key={idx}
                  className="bg-[#EBE8FF] py-2.5 px-4 rounded-full text-[#892ED3] font-normal text-sm cursor-pointer hover:bg-[#d5d0f5] transition"
                >
                  {category}
                </p>
              ))}
            </div>

            {/* Second line - rest of the categories */}
            {secondLine.length > 0 && (
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
                {secondLine.map((category, idx) => (
                  <p
                    key={idx}
                    className="bg-[#EBE8FF] py-2.5 px-4 rounded-full text-[#892ED3] font-normal text-sm cursor-pointer hover:bg-[#d5d0f5] transition"
                  >
                    {category}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side - 50% width */}
        <div className="">
          <SubTestimonials />
        </div>
      </div>
    </section>
  );
};