import Image from 'next/image'
import React from 'react'
import Logo1 from '../../../../public/images/landingImages/brands/Blumi LOGO.svg'
import Logo2 from '../../../../public/images/landingImages/brands/VR LOGO.svg'

export const TrustedCompanies = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-12 md:py-16 h-screen'>
      <h1 className='text-[46px] md:text-[56px] leading-16 font-medium mb-8 md:mb-20'>
        Trusted Companies
      </h1>
     
      <div className='flex justify-center flex-wrap items-center gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto'>
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
      </div>
    </div>
  )
}