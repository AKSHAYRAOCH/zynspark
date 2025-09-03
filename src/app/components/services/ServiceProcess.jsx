'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function OurProcessSection() {
  const steps = [
    {
      id: 1,
      title: 'Discover & Diagnose',
      image: '/images/serviceimages/discover.png',
    },
    {
      id: 2,
      title: 'Define & Design',
      image: '/images/serviceimages/discover.png',
    },
    {
      id: 3,
      title: 'Deliver & Deploy',
      image: '/images/serviceimages/discover.png',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-16 items-center mt-10 md:mt-0 md:m-36">
      <div className=" md:mx-auto md:px-4 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side - Text and Steps */}
        <div>
          <div className="text-center md:text-left">
        <button className=" text-white bg-black py-2 px-4 md:px-[16px] md:py-[12px] rounded-lg text-sm sm:text-[20px]">
         
        Our Process
      </button>
       </div>

          <h2 className="text-[25px] text-center md:text-left sm:text-[30px] md:text-[56px] font-[600] leading-snug my-4">
            Planning to Execution –
            You can see it all
          </h2>

          <p className="text-gray-500 text-center md:text-left mb-10 max-w-lg text-base md:text-[18px] font-[400]">
            We collaborate closely, creating tailored strategies that deliver impactful results every step of the way.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-[262px] h-[50px] md:w-[562px] md:h-[100px] text-left py-4 px-6 rounded-xl text-[15px] md:text-[32px] font-medium transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-black text-white'
                    : 'border border-black text-black'
                }`}
              >
                {index + 1}. {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Animated Image */}
        <div className="flex justify-center">
          <motion.img
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            initial={{ opacity: 1, y: 20 }}
            animate={{
              opacity: 1.5,
              y: [0, -20, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
            className="w-[580px] h-[250px] md:w-[680px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
