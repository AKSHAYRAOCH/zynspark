import Image from 'next/image'
import React from 'react'
import UnderCons from '../../../public/images/UnderConstruction.png'

export const metadata = {
  title: "Pitch Desk",
  description: "Our pitch desk is currently under construction. Check back soon for our comprehensive presentation of Zynspark's digital agency services and capabilities.",
  keywords: [
    "pitch desk",
    "zynspark presentation",
    "digital agency pitch",
    "under construction"
  ],
  openGraph: {
    title: "Pitch Desk | Zynspark",
    description: "Our pitch desk is currently under construction. Check back soon for our comprehensive presentation of Zynspark's digital agency services and capabilities.",
    url: "https://zynspark.com/pitchdesk",
    images: [
      {
        url: '/images/UnderConstruction.png',
        width: 1200,
        height: 630,
        alt: 'Pitch Desk Under Construction',
      },
    ],
  },
  twitter: {
    title: "Pitch Desk | Zynspark",
    description: "Our pitch desk is currently under construction. Check back soon for our comprehensive presentation of Zynspark's digital agency services and capabilities.",
    images: ['/images/UnderConstruction.png'],
  },
};

 const Pitchpage = () => {
  return (
    <section className='flex justify-center items-center'>
        <Image src={UnderCons} width={638} height={464} alt='UnderConstruction' />
    </section> 
  )
}

export default Pitchpage
