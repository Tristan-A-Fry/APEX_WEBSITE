

import React, { useRef, useEffect, useState } from "react";
import bolo from "../../../public/software/p2.png";
import graph from "../../../public/software/graph.jpg";
import HeroSection from "../../components/HeroSection.jsx";
import testImage from "../../../public/company/stock1.jpeg";
import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

const logoSizes = {
  excel: "h-24",
  bolo: "h-10",
};

const timelineData = [
  {
    title: "Select",
    description:
      "• Concept Selection\n• Basic Engineering\n• Specialty Engineering\n• Project Cost AFE",
  },
  {
    title: "Appraise",
    description:
      "• Concept Evaluation\n• Studies\n• Initial Cost Estimation\n• Gap Analysis",
  },
  {
    title: "Develop",
    description:
      "• Define Development\n• Contracting Strategy\n• Tender Evaluation\n• Technical Specifications\n• Prepare Technical Docs",
  },
  {
    title: "Execute",
    description:
      "• Detailed Design\n• Drawing Approval\n• Fabrication\n• SIT\n• Installation\n• Commissioning",
  },
  {
    title: "Operate",
    description:
      "• Offshore Support\n• IMR\n• Life of Field Support\n• Preventive Maintenance\n• Spares Management\n• Plug & Abandonment",
  },
];

const SurfPage = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  // Initialize visibility state
  useEffect(() => {
    setVisibleItems(new Array(timelineData.length).fill(false));
  }, []);

  //For timeline boxes 
  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, timelineData.length);

    const observerOptions = {
      threshold: 0.2, // Trigger when 20% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setVisibleItems((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // For timline fill 
  useEffect(() => {
    if (!timelineRef.current) return;

    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection
        title="Surf Execution Framework"
        subtitle="End-to-End Field Development Planning and Delivery"
        backgroundImage={testImage}
        position="center"
      />
      <div className="flex flex-col items-center bg-white min-h-screen py-12">
        {/* Header Section */}
        <div className="max-w-4xl mb-12 text-center mt-5">
          <p className="text-black font-semibold text-base leading-relaxed">
            The SURF Execution Framework at Apex Subsea provides a structured approach to field development from concept selection to offshore operations. 
            The process begins with selecting and appraising key engineering criteria, progresses through project definition and procurement,
            and culminates in installation, commissioning, and life-of-field support. This comprehensive lifecycle ensures reliable subsea 
            and topside integration for successful delivery of oil & gas infrastructure.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative w-full max-w-5xl">
          {/* Timeline vertical line */}
          <div
            ref={timelineRef}
            className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 
            bg-gradient-to-b from-red-500 via-blue-900 to-red-500 rounded-full 
            z-0 origin-top ${timelineVisible ? "timelineFill" : ""}`}
          ></div>

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              {/* Timeline box */}
              {index % 2 === 0 ? (
                <div className="w-full md:w-1/2 pr-8">
                  <div
                    ref={(el) => (timelineRefs.current[index] = el)}
                    data-index={index}
                    className={`bg-white shadow-md border border-gray-200 rounded-lg p-4 max-w-3xl 
                    overflow-hidden ${
                      visibleItems[index] ? "fadeInUp" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    {/* Multiple images */}
                    {item.images && (
                      <div className="flex gap-2 mb-2">
                        {item.images.map((img, i) => (
                          <img
                            key={i}
                            src={img.src}
                            alt={`${item.title} ${i + 1}`}
                            style={{ width: img.width, height: img.height }}
                            className="object-cover rounded-md"
                          />
                        ))}
                      </div>
                    )}

                    {/* Single image */}
                    {!item.images && item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mb-2 w-full h-24 object-cover rounded-md"
                      />
                    )}

                    {/* Text content */}
                    <h3 className="text-xl font-bold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full md:w-1/2 pl-8 ml-auto">
                  <div
                    ref={(el) => (timelineRefs.current[index] = el)}
                    data-index={index}
                    className={`bg-white shadow-md border border-gray-200 rounded-lg p-4 max-w-3xl 
                    overflow-hidden ${
                      visibleItems[index] ? "fadeInUp" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Multiple images */}
                    {item.images && (
                      <div className="flex gap-2 mb-2">
                        {item.images.map((img, i) => (
                          <img
                            key={i}
                            src={img.src}
                            alt={`${item.title} ${i + 1}`}
                            style={{ width: img.width, height: img.height }}
                            className="object-cover rounded-md"
                          />
                        ))}
                      </div>
                    )}



                    {/* Text content */}
                    <h3 className="text-xl font-bold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                      {item.description}
                    </p>


                    {/* Single image */}
                    {!item.images && item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mt-4 w-full h-24 object-cover rounded-md"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Timeline circle */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 
                bg-black rounded-full 
                border-4 border-black z-10"
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-12 mt-24 w-full">
         <RelatedContent
                title="related content"
                items={[
                  {
                    title: "Systems Engineering",
                    image: testImage,
                    category: "Our Services",
                    date: "May 15, 2025",
                    link: "/systems-engineering",
                  },
                  {
                    title: "Skid Packaging",
                    image: testImage,
                    category: "Our Operations",
                    date: "May 10, 2025",
                    link: "/skid-packaging",
                  },
                  {
                    title: "Controls & DCS",
                    image: testImage,
                    category: "Our Services",
                    date: "May 05, 2025",
                    link: "/controls-dcs",
                  },
                  {
                    title: "Drilling & Completions",
                    image: testImage,
                    category: "Our Operations",
                    date: "April 21, 2025",
                    link: "/drillingcompletions",
                  },
                ]}
              />
        </div>
      </div> 
    </div>
  );
};

export default SurfPage;

