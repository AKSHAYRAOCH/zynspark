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
    avatar: "/images/landingImages/project/Blumi.svg",
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
    <section className="bg-[#f5f5f5] py-12 md:py-20 px-4 sm:px-6 lg:px-16 text-center h-full" >

      {/* Heading */}
      <div className="m-9">
        <h1 className="text-[30px] sm:text-4xl md:text-[56px] font-semibold text-gray-900 mb-3 md:mb-4">
          Our Projects
        </h1>
        <span className="text-base md:text-lg leading-6 md:leading-7 pb-4 text-[#000000B2]">
          At Prolancers, we create compelling identities that <br className="hidden sm:block" /> connect,
          inspire, and leave a lasting impact.
        </span>
      </div>

      {/* Project Showcase */}
      <div className="flex md:justify-center">
        <div className=" border-2 border-[#1B1A1C14] p-2 sm:p-4 rounded-3xl md:rounded-4xl  w-full md:w-[1680px]">
          <div className="bg-white relative rounded-xl md:rounded-2xl shadow-md flex flex-col md:flex-row p-2 md:p-0 w-full md:w-[1630px] mx-auto">

            {/* Left Card */}
            <div className="flex border-2 border-[#1B1A1C14] py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-16 md:m-10 rounded-xl md:rounded-2xl w-full h-[452px] md:w-[664px] md:h-[512px] lg:w-1/2 relative z-10 bg-white">
              <div className="flex flex-col justify-center m-2 w-full">

                {/* Avatar Icons */}
                <div className="flex gap-1 md:gap-4 justify-between mb-6 md:mb-3 border border-gray-200 rounded-full md:h-[5.5vw] pl-4 pr-4 pt-1 pb-3 md:pb-4 w-48 ml-[50px] md:ml-44">
                  {projectData.map((project, idx) => (
                  <div key={idx} className={`cursor-pointer transition-transform duration-300 ${selectedProject.name === project.name? "scale-110 text-[14px]": "border-purple-200" }`} onClick={() => setSelectedProject(project)}>
                    <Image src={project.avatar} alt={project.name} width={49} height={49} className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mt-3 transition-shadow duration-300 ${
                    selectedProject.name === project.name
                    ? "drop-shadow-lg"
                    : "opacity-70" }`}/>
                    <span className="text-[14px] font-light md:font-extralight">{project.name}</span>
                  </div> ))}
                </div>

                <div className="mb-2 text-center">
                  <Image src={selectedProject.avatar} alt={selectedProject.name} width={89} height={89} className="mx-auto w-20 h-20 md:w-[89px] md:h-[89px]" />
                  <h3 className="text-xl md:text-[40px] font-bold mt-2"> {selectedProject.name} </h3>
                  <span className="text-xs md:text-[15px] text-[#892ED3] bg-[#892ED314] rounded-full px-3 py-1 md:px-[24px] md:py-[8px] inline-block mt-2">{selectedProject.tag}</span>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 my-2"> {Array(5).fill(0).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg md:text-[36px]">
                    ★
                  </span> ))}
                </div>

                {/* Description */}
                <p className="text-[15px] md:text-[18px] text-gray-600 md:max-w-[26vw] mx-auto font-extralight text-center">
                  {selectedProject.description}
                </p>
              </div>
            </div>
            {/* <Image src={Arrow} width={100} height={100} alt="Arrow" className="hidden lg:block relative right-0"/> */}
            {/* Project Image */}
      
            <Image src={selectedProject.projectImage} width={848}  height={513} alt="Project Screenshot"  className=" left-0 top-0 sm:h-full mt-5 md:mt-0" />
     
          </div>

<div ref={ref} className="bg-white md:h-[290px] w-full md:w-[1632px] rounded-xl md:rounded-4xl shadow-md mt-6 md:mt-6 py-6 px-4 md:py-16 md:px-6 mx-auto">
  <span className="text-md md:text-2xl text-black bg-[#722CFF14] px-3 py-2 md:px-4 md:py-3 font-[500] rounded-xl">
    Our Achievements 🥳
  </span>

      <div className="flex flex-col sm:flex-row justify-around items-center mt-4 md:mt-14 gap-4 sm:gap-6 md:gap-10">
        <div className="text-center">
          <h3 className="text-xl md:text-[32px] font-bold text-gray-900">
            <CountUp key={`${countKey}-clients`} end={10} duration={6} />+
          </h3>
          <p className="text-[13px] md:text-[18px] font-light text-[#00000099]  mt-1">Repeated clients</p>
        </div>

        <div className="flex gap-6 ">
        {/* progress circle */}
        <svg className="hidden md:block w-[65px] h-[65px] md:w-[95px] md:h-[95px] -rotate-90" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="progressGradient" x1="80%" y1="70%" x2="20%" y2="100%">
      <stop offset="53%" stopColor="#E9A0FF" />
      <stop offset="100%" stopColor="#FFA0A2" />
    </linearGradient>
  </defs>
  
  <circle cx="37.5" cy="37.5" r="33.5" fill="none" stroke="#e5e7eb" strokeWidth="8"></circle>
  
  <circle cx="37.5" cy="37.5" r="33.5" fill="none" stroke="url(#progressGradient)" strokeWidth="8" strokeDasharray="210" strokeDashoffset="210" strokeLinecap="round">
    <animate attributeName="stroke-dashoffset" 
             values="210;52.5" 
             dur="2s" 
             fill="freeze" 
             calcMode="spline" 
             keySplines="0.4 0 0.2 1" 
             keyTimes="0;1" />
  </circle>
</svg>



          <div className="flex flex-col md:items-start pt-2 text-center ">
            <h3 className="text-xl md:text-[32px] font-bold text-gray-900 ">
              <CountUp key={`${countKey}-projects`} end={20} duration={2} />+
            </h3>
            <p className="text-[13px] md:text-[18px] font-light text-[#00000099] mt-1 ">No of Projects</p>
          </div>
          
        </div>
        
 
 
        <div className="text-center">
          <h3 className="text-xl md:text-[32px] font-bold text-gray-900">
            <CountUp key={`${countKey}-partners`} end={5} duration={8} />+
          </h3>
          <p className="text-[13px] md:text-[18px] font-light text-[#00000099] mt-1">Partnership</p>
        </div>
      </div>
    </div>
      </div>
      </div>

    </section>
  );
}



