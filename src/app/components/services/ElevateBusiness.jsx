'use client';
import { FaBullhorn, FaPaintBrush, FaPencilAlt, FaThLarge, FaAd, FaFileAlt } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const services = [
  { icon: <CgWebsite size={36} />, title: 'Web Development' },
  { icon: <FaPaintBrush size={36} />, title: 'Web Design' },
  { icon: <FaFileAlt size={36} />, title: 'Branding' },
  { icon: <FaBullhorn size={36} />, title: 'Social Media Marketing' },
  { icon: <FaPencilAlt size={36} />, title: 'Content Writing' },
  { icon: <FaThLarge size={36} />, title: 'Product Design' },
  { icon: <IoIosSearch size={36} />, title: 'SEO Services' },
  { icon: <FaAd size={36} />, title: 'Ads Management' },
  { icon: <FaFileAlt size={36} />, title: 'Pitch Deck' },
];

export default function ElevateBusiness() {
  const firstRow = services.slice(0, 5);
  const secondRow = services.slice(5);

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <button className="text-white bg-black py-2 px-4 rounded-xl mt-4 text-sm md:text-base">
          Our Services
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 sm:mt-6">
          Services Designed to <br /> Elevate Your Business
        </h1>
        <p className="text-[#000000B2] mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 font-normal max-w-2xl mx-auto">
          Our services drive growth, engagement, and lasting impact with tailored solutions that exceed expectations.
        </p>

        {/* First Row - 5 items (3 on tablet, 2 on mobile) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 place-items-center">
          {firstRow.map((service, index) => (
            <div
              key={index}
              className="bg-[#892ED314] text-[#892ED3] rounded-lg w-full max-w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[162px] md:h-[162px] p-4 sm:p-6
              flex flex-col items-center justify-center text-center"
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-xs sm:text-sm font-medium">{service.title}</span>
            </div>
          ))}
        </div>

        {/* Second Row - 4 items (3 on tablet, 2 on mobile) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-4 sm:gap-6 md:gap-14 place-items-center">
          {secondRow.map((service, index) => (
            <div
              key={index + 5}
              className="bg-[#892ED314] text-[#892ED3] rounded-lg w-full max-w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[162px] md:h-[162px] p-4 sm:p-6
              flex flex-col items-center justify-center text-center"
            >
              <div className="mb-2">{service.icon}</div>
              <span className="text-xs sm:text-sm font-medium">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}