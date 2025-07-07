
import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import stock1 from "../../public/company/stock1.jpeg";
import aboutImage1 from "../../public/company/stock1.jpeg"; // Replace with your actual image path
import aboutImage2 from "../../public/company/stock1.jpeg"; // Replace with your actual image path
import aboutImage3 from "../../public/company/stock1.jpeg"; // Replace with your actual image path


const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Discover Our Story"
        backgroundImage={aboutImage1}
        position="top"
      />

      <div className="flex flex-col items-center gap-12 py-12 px-4 dark:bg-[#2b2b2b]">
        {/* Section 1 */}
        <div className="bg-[#9C1D20] text-white rounded-lg shadow-lg max-w-5xl w-full overflow-hidden h-[450px] flex items-center justify-center p-6">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full h-full">
            {/* Image */}
            <div className="w-1/2 h-full flex justify-center">
              <img
                src={aboutImage1}
                alt="Our Story"
                className="h-full w-auto object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
              <h2 className="!text-5xl md:text-4xl font-bold mb-4 text-red-400">Our Story</h2>
              <p className="text-3xl">
                Since its founding in 2017, Apex Subsea has earned a reputation of providing high quality
                and on-time engineering and project management services for the oil and gas industry.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#000871] text-white rounded-lg shadow-lg max-w-5xl w-full overflow-hidden h-[450px] flex items-center justify-center p-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full h-full">
            {/* Image */}
            <div className="w-1/2 h-full flex justify-center">
              <img
                src={aboutImage1}
                alt="Our Story"
                className="h-full w-auto object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
              <h2 className="!text-5xl md:text-4xl font-bold mb-4 text-[#3645ff]">Client Success</h2>
              <p className="text-3xl">
                Our success is explained by the passion of our team to exceed the expectations of our clients. As a result, we enjoy exceptional client satisfaction ratings and repeat business.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-[#9C1D20] text-white rounded-lg shadow-lg max-w-5xl w-full overflow-hidden h-[450px] flex items-center justify-center p-6">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full h-full">
            {/* Image */}
            <div className="w-1/2 h-full flex justify-center">
              <img
                src={aboutImage3}
                alt="Our Capabilities"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="!text-5xl md:text-4xl font-bold mb-4 text-red-400">Our Expertise</h2>
              <p className="mb-4 text-3xl">
                As a PE registered company in Texas, we provide expertise in Conceptual Design, Front End Engineering and Design (FEED), Detailed Engineering, Materials Management, Regulatory Compliance, Project Planning, Construction Management, Logistics Support, Inspection, and Commissioning.
              </p>
              <p className="text-3xl">
                Today, Our Team Consist of 55+ Members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;


