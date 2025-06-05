import React from 'react'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-3xl border p-4 shadow-md bg-white flex-shrink-0 border-[#1B1A1C14] h-[450px] ">
    <div className="rounded-3xl border p-4 shadow-md bg-white w-full max-w-xs sm:max-w-sm flex-shrink-0 border-[#1B1A1C14] h-[420px]  sm:h-[420px] md:h-[420px]  ">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-[160px] sm:h-[180px] md:h-[200px]  object-cover"
      />
      <div className="border mt-4 rounded-2xl p-4 border-[#1B1A1C14]"> 
        <p className="bg-black text-white inline-block px-4 py-2 rounded-xl mb-4">
          {title}
        </p>
        <p className="text-gray-700 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
    </div>
  )
}