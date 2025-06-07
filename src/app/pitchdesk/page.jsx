import Image from 'next/image'
import React from 'react'
import UnderCons from '../../../public/images/UnderConstruction.png'

 const Pitchpage = () => {
  return (
    <section className='flex justify-center items-center'>
        <Image src={UnderCons} width={638} height={464} alt='UnderConstruction' />
    </section> 
  )
}

export default Pitchpage
