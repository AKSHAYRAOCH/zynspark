'use client';
import { FaBullhorn, FaPaintBrush, FaPencilAlt, FaThLarge, FaAd, FaFileAlt } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const services = [
  { icon: <CgWebsite size={36} />, title: 'Web Design' },
  { icon: <FaPaintBrush size={36} />, title: 'Web Development' },
  { icon: <FaFileAlt size={36} />, title: 'Branding' },
  { icon: <FaBullhorn size={36} />, title: 'Social-Media Marketing' },
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
    <section className=" bg-white py-12 md:py-20 px-4 sm:px-6 md:h-screen mt-44 mb-16">
      <div className="max-w-6xl mx-auto text-center ">
        <button className="text-white bg-black px-[16px] py-[12px] rounded-xl  text-sm md:text-[20px]">
          Our Services 
        </button>
        <h1 className="text-[25px] sm:text-[30px] sm:text-3xl md:text-[56px] font-semibold mt-4 sm:mt-6">
          Services Designed to <br /> Elevate Your Business
        </h1>
        <p className="text-[#000000B2] mt-3 sm:mt-4 text-[15px] sm:text-[18px] leading-6 sm:leading-8 font-[400px] md:mx-auto">
          Our services drive growth, engagement, and lasting impact with tailored solutions that exceed expectations.
        </p>

        {/* First Row - 5 items (3 on tablet, 2 on mobile) */}
        <div className="mt-12 grid grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:place-items-center">
          {firstRow.map((service, index) => (
            <div key={index}
              className="bg-[#892ED314] text-[#892ED3] rounded-lg w-full md:max-w-[140px] max-w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] md:w-[162px] md:h-[162px] p-2
              flex flex-col items-center justify-center text-center">
              <div className=" mb-6 sm:mb-5 mr-4 md:mr-0 md:mb-2 w-[15px] h-[15px] hidden sm:w-[18px] sm:h-[18px] md:w-[48px] md:h-[48px] ">{service.icon}</div>
              <span className="p-2 text-[9px] sm:text-[18px] font-[400px]">{service.title}</span>
            </div>
          ))}
        </div>

        {/* Second Row - 4 items (3 on tablet, 2 on mobile) */}
        <div className="mt-6 sm:mt-8 grid grid-cols-4 md:flex md:flex-wrap md:justify-center gap-4 sm:gap-6 md:gap-14 place-items-center">
          {secondRow.map((service, index) => (
            <div
              key={index + 5}
              className="bg-[#892ED314] text-[#892ED3] rounded-lg w-full md:max-w-[140px]  max-w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] md:w-[162px] md:h-[162px] p-2
              flex flex-col items-center justify-center text-center"
            >
              <div className="mb-6 sm:mb-5 mr-4 md:mr-0 md:mb-2 hidden sm:w-[18px] sm:h-[18px] md:w-[48px] md:h-[48px] ">{service.icon}</div>
              <span className="p-2 text-[9px] sm:text-[18px] font-[400px]">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}