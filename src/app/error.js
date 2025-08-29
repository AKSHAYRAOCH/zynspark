'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, but something went wrong. Please try again or contact us if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block bg-[#A270FF] hover:bg-[#8a5ceb] text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
          >
            Try again
          </button>
          <a 
            href="/contact" 
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-xl transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
