
import { Footer } from "./components/Landing/Footer";
import { Header } from "./components/Landing/Header";
import "./globals.css";
import { DM_Sans } from 'next/font/google';
import StructuredData from "./components/SEO/StructuredData";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can customize this
  variable: '--font-dm-sans',    // Optional: to use as CSS variable
});

export const metadata = {
  title: {
    default: "Zynspark - Digital Agency | Web Design, UI/UX, Branding & Marketing",
    template: "%s | Zynspark"
  },
  description: "Zynspark is a leading digital agency providing end-to-end support for web design, UI/UX, branding, marketing, ads management, and social media marketing. Transform your brand with our creative and strategic solutions.",
  keywords: [
    "digital agency",
    "web design",
    "UI/UX design",
    "branding",
    "marketing",
    "ads management",
    "social media marketing",
    "content writing",
    "digital transformation",
    "creative agency"
  ],
  authors: [{ name: "Zynspark Team" }],
  creator: "Zynspark",
  publisher: "Zynspark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zynspark.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zynspark.com',
    title: 'Zynspark - Digital Agency | Web Design, UI/UX, Branding & Marketing',
    description: 'Zynspark is a leading digital agency providing end-to-end support for web design, UI/UX, branding, marketing, ads management, and social media marketing.',
    siteName: 'Zynspark',
    images: [
      {
        url: '/images/landingImages/HeroSection/Group 80.png',
        width: 1200,
        height: 630,
        alt: 'Zynspark Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zynspark - Digital Agency | Web Design, UI/UX, Branding & Marketing',
    description: 'Zynspark is a leading digital agency providing end-to-end support for web design, UI/UX, branding, marketing, ads management, and social media marketing.',
    images: ['/images/landingImages/HeroSection/Group 80.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={dmSans.className}>
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/images/logo.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="icon" href="/images/logo.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#A270FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zynspark" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
