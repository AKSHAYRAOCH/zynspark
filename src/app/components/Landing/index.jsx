import React from 'react'
import HeroSection from './HeroSection'
import { TrustedCompanies } from './TrustedCompanies'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
import OurProjects from './OurProject'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import { LetsConnect } from './LetsConnect'

const Landing = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
        <HeroSection />
        <TrustedCompanies />
        <Services />
        <Testimonials />
        <OurProjects />
        <AboutUs />
        <OurTeam />
        <div data-component="LetsConnect">
          <LetsConnect />
        </div>
    </div>
  )
}


export default Landing
