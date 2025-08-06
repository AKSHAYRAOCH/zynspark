import React from 'react'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-3xl md:rounded-4xl border p-3 md:p-4 m-2 shadow-md bg-white flex-shrink-0  border-gray-300 ">
    <div className="rounded-3xl md:rounded-4xl border p-3 md:p-4 shadow-md bg-white flex-shrink-0  border-gray-300">
      <img
        src={image}
        alt={title}
        className="rounded-xl md:rounded-2xl  w-[300px] md:w-[570px] h-[225px]  object-cover object-top"
      />
      <div className="border mt-4 rounded-xl md:rounded-2xl  p-4 h-[225px] border-gray-300 text-left "> 
        <p className="bg-black text-white inline-block px-[15px] py-[5px] md:px-[35px] md:py-[15px] gap-[10px] font-[500] rounded-lg md:rounded-2xl text-[15px] md:text-[24px] mb-4">
          {title}
        </p>
        <p className="text-[#00000099] text-[13px] md:text-[18px]">{description}</p>
      </div>
    </div>
    </div>
  )
}

//border-[#1B1A1C14]