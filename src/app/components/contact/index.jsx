'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Integrate with your API here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 relative min-h-[250px] sm:min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/images/landingImages/Contact.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Contact us</h2>
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
            We'd love to hear from you. Fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-sm">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-sm">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <div className="flex items-start space-x-2 text-sm">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label htmlFor="terms" className="text-gray-600">
                I accept the <a href="#" className="underline text-purple-600">Terms</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
