import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Name Surname",
    position: "Position, Company name",
    image: "/images/serviceimages/avatar1.svg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 md:h-5 md:w-5"
    viewBox="0 0 20 20"
    fill={filled ? "#facc15" : "#e5e7eb"}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.158 3.561a1 1 0 00.95.69h3.746c.969 0 1.371 1.24.588 1.81l-3.03 2.2a1 1 0 00-.364 1.118l1.158 3.561c.3.921-.755 1.688-1.538 1.118l-3.03-2.2a1 1 0 00-1.175 0l-3.03 2.2c-.783.57-1.838-.197-1.538-1.118l1.158-3.561a1 1 0 00-.364-1.118l-3.03-2.2c-.783-.57-.38-1.81.588-1.81h3.746a1 1 0 00.95-.69l1.158-3.561z" />
  </svg>
);

const TestimonialCard = ({ name, position, image, stars, text }) => (
  <div className="rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm bg-white w-full max-w-xs md:max-w-sm">
    <div className="flex mb-2 md:mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < stars} />
      ))}
    </div>
    <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">"{text}"</p>
    <div className="flex items-center gap-2 md:gap-3">
      <Image
        src={image}
        alt={name}
        width={32}
        height={32}
        className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10"
      />
      <div>
        <p className="text-xs md:text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{position}</p>
      </div>
    </div>
  </div>
);

const SubTestimonials = () => {
  return (
    <div className="bg-white">
      {/* Mobile View - Single Column */}
      <div className="md:hidden px-4 py-8">
        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {testimonials.map((t, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Double Column Scroll */}
      <div className="hidden md:flex gap-4 lg:gap-10 px-4 lg:px-8 py-8">
        <div className="w-[235px]  lg:max-w-[300px] h-[500px] overflow-y-auto hide-scrollbar mt-50">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
        <div className="w-[235px] lg:max-w-[300px] h-[700px] overflow-y-auto hide-scrollbar ">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTestimonials;