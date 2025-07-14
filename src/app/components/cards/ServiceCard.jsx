import React from 'react'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-3xl md:rounded-4xl border p-3 md:p-4 shadow-md bg-white flex-shrink-0  border-gray-300 ">
    <div className="rounded-3xl md:rounded-4xl border p-3 md:p-4 shadow-md bg-white flex-shrink-0  border-gray-300">
      <img
        src={image}
        alt={title}
        className="rounded-xl md:rounded-2xl  w-[250px] h-[150px] md:w-[570px] md:h-[225px]  object-cover object-top"
      />
      <div className="border mt-4 rounded-xl md:rounded-2xl  p-4 border-gray-300 w-[235px] h-[150px] md:w-[570px] md:h-[225px] text-left "> 
        <p className="bg-black text-white inline-block px-[15px] py-[5px]  md:px-[35px] md:py-[15px] gap-[10px] font-[500] rounded-lg md:rounded-2xl text-[12px] md:text-[24px] mb-4">
          {title}
        </p>
        <p className="text-[#00000099] text-[10px] md:text-[18px]">{description}</p>
      </div>
    </div>
    </div>
  )
}

//border-[#1B1A1C14]