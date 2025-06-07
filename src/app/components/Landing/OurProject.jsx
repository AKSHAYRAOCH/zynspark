"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Arrow from '../../../../public/images/arrow.svg'

const projectData = [
  {
    name: "Blumi",
    tag: "E-Commerce Website",
    avatar: "/images/landingImages/project/blumi.svg",
    projectImage: "/images/landingImages/project/BlumiProject.png",
    description:
      "At Zynspark, we create compelling identities that connect, inspire, and leave a lasting impact.",
  },
  {
    name: "VR Tech",
    tag: "Virtual Reality App",
    avatar: "/images/landingImages/project/VR.svg",
    projectImage: "/images/landingImages/project/VR.png",
    description:
      "VR Tech delivers immersive experiences that redefine interaction and engagement through cutting-edge virtual reality.",
  },
];

export default function OurProjects() {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const [countKey, setCountKey] = useState(0);

  // Update key to reset CountUp every time it enters view
  useEffect(() => {
    if (inView) {
      setCountKey(prev => prev + 1);
    }
  }, [inView]);

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-20 px-4 sm:px-6 lg:px-16 text-center">
      {/* Heading */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 md:mb-4">
          Our Projects
        </h1>
        <span className="text-base md:text-lg leading-6 md:leading-7 text-[#000000B2]">
          At Prolancers, we create compelling identities that <br className="hidden sm:block" /> connect,
          inspire, and leave a lasting impact.
        </span>
      </div>

      {/* Project Showcase */}
      <div className="border-2 border-[#1B1A1C14] p-2 sm:p-4 rounded-3xl md:rounded-4xl">
        
      <div className="bg-white relative rounded-xl md:rounded-2xl shadow-md p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-10 mx-auto">
  {/* Left Card */}
  <div className="border-2 border-[#1B1A1C14] py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-16 rounded-xl md:rounded-2xl w-full lg:w-1/2 relative z-10 bg-white">
 
    <div className="flex-1">
      {/* Avatar Icons */}
      <div className="flex gap-2 sm:gap-4 justify-center mb-4 md:mb-6">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className={`cursor-pointer p-1 sm:p-2 transition-transform duration-300 ${
              selectedProject.name === project.name
                ? "scale-110 sm:scale-130"
                : "border-purple-200"
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.avatar}
              alt={project.name}
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <span className="text-xs sm:text-sm font-normal">{project.name}</span>
          </div>
        ))}
        
      </div>

      <div className="mb-3 md:mb-4 text-center">
        <Image
          src={selectedProject.avatar}
          alt={selectedProject.name}
          width={48}
          height={48}
          className="mx-auto w-12 h-12 md:w-16 md:h-16"
        />
        <h3 className="text-xl md:text-2xl font-bold mt-2">
          {selectedProject.name}
        </h3>
        <span className="text-xs md:text-sm text-[#892ED3] bg-[#892ED314] rounded-full px-3 py-1 md:px-4 md:py-2 inline-block mt-2">
          {selectedProject.tag}
        </span>
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1 my-2 md:my-3">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <span key={idx} className="text-yellow-400 text-lg md:text-xl">
              ★
            </span>
          ))}
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 max-w-xs md:max-w-sm mx-auto text-center">
        {selectedProject.description}
      </p>
    </div>
  </div>
  <Image src={Arrow} width={100} height={100} alt="Arrow"   className="hidden lg:block relative right-0"/>
  {/* Project Image */}
  <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
    <Image
      src={selectedProject.projectImage}
      alt="Project Screenshot"
      fill
      className="object-contain"
    />
  </div>
</div>

<div
      ref={ref}
      className="bg-white rounded-xl md:rounded-2xl shadow-md mt-6 md:mt-6 py-6 px-4 md:py-10 md:px-6 mx-auto"
    >
      <span className="text-xs md:text-sm text-black bg-[#722CFF14] px-3 py-2 md:px-8 md:py-4 font-medium ">
        Our Achievements 🥳
      </span>

      <div className="flex flex-col sm:flex-row justify-around items-center mt-4 md:mt-14 gap-4 sm:gap-6 md:gap-10">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            <CountUp key={`${countKey}-clients`} end={10} duration={6} />+
          </h3>
          <p className="text-sm md:text-base text-[#00000099] mt-1">Repeated clients</p>
        </div>

        <div className="flex gap-6">
          <div className="md:w-16 md:h-16 mx-auto bg-gradient-to-tr from-purple-400 to-pink-300 rounded-full 
          flex items-center justify-center
           text-white text-base md:text-lg font-semibold" />

          <div className="flex flex-col items-start">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              <CountUp key={`${countKey}-projects`} end={20} duration={2} />+
            </h3>
            <p className="text-sm md:text-base text-[#00000099] mt-1">No of Projects</p>
          </div>
        </div>
 
 
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            <CountUp key={`${countKey}-partners`} end={5} duration={8} />+
          </h3>
          <p className="text-sm md:text-base text-[#00000099] mt-1">Partnership</p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
