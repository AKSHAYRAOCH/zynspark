import React from 'react'
import ServiceHeroSection from './HeroSection'
import ElevateBusiness from './ElevateBusiness'
import IndustriesSection from './IndustriesSection'
import ImpactSection from './ImparctSection'
import ServiceProcessSection from './ServiceProcess'

export const ServicesComponent = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <div data-component="OurTeam">
        <ServiceHeroSection />
      </div>
        <ElevateBusiness />
        <IndustriesSection />
        <ImpactSection />
        <ServiceProcessSection />
    </div>
  )
}
