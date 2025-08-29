import Script from 'next/script'

export default function StructuredData({ type = 'organization' }) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zynspark",
    "url": "https://zynspark.com",
    "logo": "https://zynspark.com/images/logo.svg",
    "description": "Zynspark is a leading digital agency providing end-to-end support for web design, UI/UX, branding, marketing, ads management, and social media marketing.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://zynspark.com/contact"
    },
    "sameAs": [
      "https://linkedin.com/company/zynspark",
      "https://twitter.com/zynspark",
      "https://facebook.com/zynspark"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.4867"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Professional web design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User interface and user experience design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding",
            "description": "Brand identity and design services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Social media management and marketing"
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zynspark",
    "url": "https://zynspark.com",
    "description": "Zynspark is a leading digital agency providing end-to-end support for web design, UI/UX, branding, marketing, ads management, and social media marketing.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zynspark.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const data = type === 'website' ? websiteData : organizationData;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
