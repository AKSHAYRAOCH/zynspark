import React from 'react'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-4xl border p-4 shadow-md bg-white flex-shrink-0  border-gray-300 ">
    <div className="rounded-4xl border p-4 shadow-md bg-white flex-shrink-0  border-gray-300">
      <img
        src={image}
        alt={title}
        className="rounded-2xl w-[570px] h-[225px]  object-cover object-top"
      />
      <div className="border mt-4 rounded-2xl p-4 border-gray-300  w-[570px] h-[225px] text-left "> 
        <p className="bg-black text-white inline-block  px-[35px] py-[15px] gap-[10px] font-[500] rounded-2xl text-[24px] mb-4">
          {title}
        </p>
        <p className="text-[#00000099] text-base sm:text-lg md:text-[18px]">{description}</p>
      </div>
    </div>
    </div>
  )
}

//border-[#1B1A1C14]