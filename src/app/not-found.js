import Link from 'next/link'

export const metadata = {
  title: "Page Not Found - 404",
  description: "The page you're looking for doesn't exist. Return to Zynspark's homepage to explore our digital agency services.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#A270FF] hover:bg-[#8a5ceb] text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
