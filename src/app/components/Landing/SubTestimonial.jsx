import React from "react";
import Image from "next/image";

const testimonials = [
    {
      name: "VR Tech",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "Working with company was a game-changer for us. Their frontend team delivered a pixel-perfect UI for our immersive VR dashboard — responsive, efficient, and fully optimized for performance. Their ability to understand product vision and translate it into intuitive design truly stood out.",
      categories: [ "Digital Marketing", "Branding", "Web Design" , "Pitch Desk"],
    },
    {
      name: "Blumi",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "We partnered with company to revamp our frontend layer. Their team was fast, focused, and full of good ideas. They helped us launch on time with a sleek user interface and minimal bugs. We look forward to working together again.",
      categories: ["Pitch Desk", "Digital Marketing", "App Development", "Web Design"],
    },
    {
      name: "FinEdge",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "From logo design to tone of voice, every branding element aligned perfectly with our core values. It’s rare to find such consistency and innovation.",
      categories: ["Brand Strategy", "Digital Marketing" , "Pitch Desk"],
    },
    {
      name: "NextGen Mobility",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "We needed a brand refresh that reflected our transition to EVs, and the team nailed it. The rebranding sparked renewed trust from our investors and customers alike.",
      categories: ["Brand Strategy", "Pitch Desk"],
    },
    {
      name: "GreenGrid Energy",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "Our brand now reflects our sustainable mission thanks to their thoughtful, eco-conscious design philosophy. A brilliant team to work with!",
      categories: ["Brand Strategy", "App Development" , "Pitch Desk"],
    },
    {
      name: "EduWave",
      position: "Position, Company name",
      image: "/images/serviceimages/avatar1.svg",
      stars: 5,
      text: "They transformed our dull identity into a youthful, dynamic brand that resonates with students and educators alike. The storytelling behind the branding was top-notch.",
      categories: ["Brand Strategy" , 'App Development'],
    },
    {
        name: "Finsq",
        position: "CTO, Tech Firm D",
        image: "/images/serviceimages/avatar1.svg",
        stars: 5,
        text: "Blumi’s product saw a major UI/UX uplift thanks to DevNexus. The new design system built with Tailwind and React improved our usability scores by 35%. The DevNexus team was proactive, communicative, and deeply committed to quality.”",
        categories: ["Web Design", "Marketing" , "Brand Strategy"],
      },
      {
        name: "MindNest",
        position: "Head of Product, Company B",
        image: "/images/serviceimages/avatar1.svg",
        stars: 5,
        text: "Partnering with Blumi was one of the best tech decisions we’ve made. Their attention to UI details, performance optimization, and user-first thinking transformed our product experience. They work like an in-house team.",
        categories: ["Web Design", 'App Development' , "Digital Marketing"],
      },
      {
        name: " EdTrack",
        position: "Manager, Org C",
        image: "/images/serviceimages/avatar1.svg",
        stars: 5,
        text: "Blumi’s frontend team helped us revamp our e-learning platform with modern, scalable code. From React components to mobile responsiveness, everything was delivered clean and fast. Communication was always clear and deadlines were met without compromise.",
        categories: ["Web Design", "App Development" , "Digital Marketing"],
      },
      {
        name: "HealthSpan Clinics",
        position: "Manager, Org C",
        image: "/images/serviceimages/avatar1.svg",
        stars: 5,
        text: "We were amazed by the emotional connection the new branding created with our patients. It’s both professional and human — exactly what we needed.",
        categories: ["Web Design", "App Development" , "Digital Marketing" , "Pitch Desk"],
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
  <div className="rounded-4xl border border-gray-200 p-4 md:p-6 shadow-sm bg-white w-full max-w-xs md:max-w-sm">
    <div className="flex ">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < stars} />
      ))}
    </div>
    <p className="text-sm md:text-lg mb-3 md:mb-4">"{text}"</p>
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

const SubTestimonials = ({ selectedCategory }) => {
    const filteredTestimonials = selectedCategory
      ? testimonials.filter(t => t.categories?.includes(selectedCategory))
      : testimonials;
  
    return (
      <div className="bg-white">
        {/* Mobile View */}
        <div className="md:hidden px-4 py-8">
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {filteredTestimonials.map((t, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
  
        {/* Desktop View */}
        <div className="hidden md:flex gap-4 px-4 lg:px-8 py-8">
          <div className="w-[352px] h-[800px]  overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-1 gap-4">
              {filteredTestimonials.slice(0, Math.ceil(filteredTestimonials.length / 2)).map((t, index) => (
                <TestimonialCard key={index} {...t} />
              ))}
            </div>
          </div>
          <div className="w-[352px] h-[500px] overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-1 gap-4">
              {filteredTestimonials.slice(Math.ceil(filteredTestimonials.length / 2)).map((t, index) => (
                <TestimonialCard key={index} {...t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default SubTestimonials;