import React from 'react'
import HeroSection from './HeroSection'
import { TrustedCompanies } from './TrustedCompanies'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
import OurProjects from './OurProject'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import { LetsConnect } from './LetsConnect'

export const Landing = () => {
  return (
    <div>
          <HeroSection />
        <TrustedCompanies />
        <Services />
        <Testimonials />
        <OurProjects />
        <AboutUs />
        <OurTeam />
        <LetsConnect />
    </div>
  )
}
