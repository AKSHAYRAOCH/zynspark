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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text and Steps */}
        <div>
        <button className="text-white bg-black py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-xl mt-4 sm:mt-[30px] text-sm sm:text-base">
        Our Process
      </button>

          <h2 className="text-3xl sm:text-4xl font-bold leading-snug my-4">
            Planning to Execution – <br />
            You can see it all
          </h2>

          <p className="text-gray-500 mb-10 max-w-md">
            We collaborate closely, creating tailored strategies that deliver impactful results every step of the way.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 ${
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
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
