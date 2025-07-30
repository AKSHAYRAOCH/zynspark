'use client';

export default function ImpactSection() {
  const stats = [
    { value: '86%', label: 'Growth' },
    { value: '5', label: 'Current Projects' },
    { value: '90%', label: 'Customer Satisfaction' },
    { value: '200+', label: 'Number of Clients' },
  ];

  return (
    <div className="flex justify-center bg-[#f9f9f9] pb-20 md:pb-32 pt-12 px-4 sm:px-6 h-screen">
      <div className=" mx-auto mt-48">
        <div className="text-center">
          <button className="text-white bg-black py-2 px-4 md:px-[16px] md:py-[12px] rounded-lg text-sm sm:text-[20px] font-[600]">
            Testimonials
          </button>

          <h2 className="text-3xl sm:text-[56px] font-bold mt-6 mb-4 sm:my-8">
            Here's a glimpse of our impact and success
          </h2>

          <p className="text-gray-500 mb-12 sm:mb-20 mx-auto text-base sm:text-[18px]">
            Our results speak for themselves—driving engagement, conversions, and success.
          </p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 sm:gap-44 ">
          {stats.map((stat, index) => (
            <div key={index} className="flex border-l-2 flex-col justify-center content-center border-[#892ED3] pl-6 sm:pl-8 h-[120px] w-[166px] md:w-[206px] sm:h-[160px] md:h-[196px]">
              <h3 className="text-3xl sm:text-4xl md:text-[56px] font-semibold text-[#892ED3]">{stat.value}</h3>
              <p className="text-[#892ED3] font-normal text-lg sm:text-xl md:text-[28px] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}