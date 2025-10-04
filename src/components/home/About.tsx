import React from 'react';
import aiImage from '../../assets/images/11.jpg'; // your image path

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-16 font-sans">
      {/* Badge + Heading: center-aligned in mobile, stacked in desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:items-start md:gap-10 text-center md:text-left mb-6">
        {/* Badge and Heading in mobile stacked inline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-block border border-purple-500 text-white font-semibold text-sm px-4 py-1 rounded bg-transparent mb-3 md:mb-6">
            Built by Founders, for Founders
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight whitespace-nowrap md:whitespace-normal">
  Our Vision, Our Mission
</h2>

        </div>

        {/* Right: Paragraph */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-10 md:mt-0">
          A powerful and privacy-first platform, crafted for founders, startups,
          and growing businesses from Customer Relationship Managementand operations to billing and
          productivity — Founders Club powers your journey.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="bg-[#0C0D1A] rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 overflow-hidden md:mx-0 text-center md:text-left">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aiImage}
            alt="AI Creative"
            className="object-cover w-full h-full max-h-[300px] md:max-h-none"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-5">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">
            We're not just another Software Company
          </h3>
         <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
  We're builders, dreamers, and doers—just like you. Founders Club was born from real challenges, real late nights, and the relentless pursuit to simplify business. We've felt the chaos of juggling too many tools, the frustration of broken workflows, and the pressure of scaling with limited resources. That's why we created a platform that works the way founders think—fast, flexible, and focused on what really matters.
</p>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
