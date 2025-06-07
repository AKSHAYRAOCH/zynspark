import Image from 'next/image'
import React from 'react'
import Logo1 from '../../../../public/images/landingImages/brands/Blumi LOGO.svg'
import Logo2 from '../../../../public/images/landingImages/brands/VR LOGO.svg'

export const TrustedCompanies = () => {
  return (
    <section className='text-center px-4 py-12 md:py-16'>
      <h1 className='text-[56px] leading-16  sm:text-4xl md:text-5xl lg:text-[56px] mb-8 md:mb-12'>
        Trusted Companies
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto'>
        <div className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto'>
          <Image 
            src={Logo1} 
            alt='Blumi logo' 
            layout='responsive'
            width={224} 
            height={112}
          />
        </div>
        <div className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto'>
          <Image 
            src={Logo2} 
            alt='VR logo' 
            layout='responsive'
            width={224} 
            height={112}
          />
        </div>
      </div>
    </section>
  )
}