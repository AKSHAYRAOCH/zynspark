import React from 'react'
import ContactForm from '../components/contact'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Zynspark for your digital transformation needs. Contact our team for web design, UI/UX, branding, marketing, and social media services.",
  keywords: [
    "contact zynspark",
    "digital agency contact",
    "web design contact",
    "marketing agency contact",
    "branding services contact",
    "UI/UX design contact"
  ],
  openGraph: {
    title: "Contact Us | Zynspark",
    description: "Get in touch with Zynspark for your digital transformation needs. Contact our team for web design, UI/UX, branding, marketing, and social media services.",
    url: "https://zynspark.com/contact",
    images: [
      {
        url: '/images/landingImages/Contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Zynspark',
      },
    ],
  },
  twitter: {
    title: "Contact Us | Zynspark",
    description: "Get in touch with Zynspark for your digital transformation needs. Contact our team for web design, UI/UX, branding, marketing, and social media services.",
    images: ['/images/landingImages/Contact.png'],
  },
};

const Contact = () => {
  return (
    <div>
        <ContactForm />
    </div>
  )
}

export default Contact