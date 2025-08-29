import Image from 'next/image'
import React from 'react'
import Logo1 from '../../../../public/images/landingImages/brands/Blumi LOGO.svg'
import Logo2 from '../../../../public/images/landingImages/brands/VR LOGO.svg'
import Logo3 from '../../../../public/images/landingImages/brands/Pellifi.png'

export const TrustedCompanies = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen md:max-h-fit bg-white'>
      <h1 className='text-[30px] md:text-[56px] leading-16 font-semibold mb-8 md:mb-20 mt-54'>
        Collaborated Companies
      </h1>
     
      <div className='flex justify-center flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mb-54'>
        <div className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto'>
          <Image 
            src={Logo1} 
            alt='Blumi logo' 
            layout='responsive'
            width={254} 
            height={112}
          />
        </div>
        <div className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto'>
          <Image 
            src={Logo2} 
            alt='VR logo' 
            layout='responsive'
            width={254} 
            height={112}
          />
        </div>
        <div className='pt-4 p-1 w-32 sm:w-40 md:w-48 lg:w-56 h-28 bg-gray-200 rounded-2xl'>
          <Image 
            src={Logo3} 
            alt='VR logo' 
            layout='responsive'
            width={254} 
            height={112}
          />
        </div>
      </div>
    </div>
  )
}