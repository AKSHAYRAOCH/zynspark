import React from 'react'
import { ServicesComponent } from '../components/services'

export const metadata = {
  title: "Our Services",
  description: "Discover our comprehensive digital services including web design, UI/UX, branding, marketing, ads management, and social media marketing. Transform your business with Zynspark's expertise.",
  keywords: [
    "web design services",
    "UI/UX design",
    "branding services",
    "digital marketing",
    "ads management",
    "social media marketing",
    "content writing",
    "digital agency services"
  ],
  openGraph: {
    title: "Our Services | Zynspark",
    description: "Discover our comprehensive digital services including web design, UI/UX, branding, marketing, ads management, and social media marketing.",
    url: "https://zynspark.com/service",
    images: [
      {
        url: '/images/landingImages/services/service1.png',
        width: 1200,
        height: 630,
        alt: 'Zynspark Services',
      },
    ],
  },
  twitter: {
    title: "Our Services | Zynspark",
    description: "Discover our comprehensive digital services including web design, UI/UX, branding, marketing, ads management, and social media marketing.",
    images: ['/images/landingImages/services/service1.png'],
  },
};

const Servicepage = () => {
  return (
    <div>
   <ServicesComponent />
    </div>
  )
}

export default Servicepage
