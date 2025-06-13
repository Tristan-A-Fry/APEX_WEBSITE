


import React, { useRef, useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import testImage from "../../../public/company/stock1.jpeg";
import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

import sm1 from "../../../public/software/sm_1.jpg"
import sm2 from "../../../public/software/sm_2.png"
import sm3 from "../../../public/software/sm_3.png"

const logoSizes = {
  sm_1: "h-48",
  sm_2: "h-48",
  sm_3: "h-48",
};

const timelineData = [
  {
    title: "Level 1",
    description: "• Communication Schedule \n •  High level strategic plan scheudle \n • One page with project key milestones",
  },
  {
    title: "Level 2",
    description:
      "• Project delivery manager schedule (Rollup of internal P6 CMS CPM Level 3 shcedule)",
  },
  {
    title: "Level 3 (Company)",
    description: "• Internal P6 CMS CPM level 3 schedule \n • Project team schedule \n • Risk schedule model ",
  },
  {
    title: "Level 3 (Contractors)",
    description: "• Contractors P6 CPM Level 3 schedule (External) \n • Resource loaded schedule \n • Project delivery manager, detailed schedule \n • Progress information ",
  },
];

const ScheduleManagementPage = () => {
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
        title="Schedule Management"
        subtitle="Clarity in Cost Tracking and Reporting"
        backgroundImage={testImage}
        position="center"
      />
      <div className="flex flex-col items-center bg-white min-h-screen py-12">
        {/* Header Section */}
        <div className="max-w-4xl mb-12 text-center mt-5">
          <p className="text-black font-semibold text-base leading-relaxed">
            The Schedule Management process leverages the Integrated Master Schedule (IMS) methodology to deliver structured, bottom-up scheduling from Level 1 to Level 3. Using tools like Primavera P6 and FUSE, it emphasizes the Critical Path Method (CPM) to ensure schedule integrity, diagnostics, and performance benchmarking. This approach enables clear communication, risk visibility, and accountability across all project levels—from high-level overviews to detailed contractor schedules—supporting informed decision-making and on-time project delivery.
          </p>

          <section id="software" className="py-20 bg-white dark:bg-[#2b2b2b]">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-4">
              {["sm_1", "sm_2", "sm_3"].map((software) => (
                <div
                  key={software}
                  className="w-60 h-56 bg-white rounded-lg flex items-center justify-center 
                             shadow-md hover:shadow-[0_4px_20px_rgba(239,68,68,0.6)] transition-shadow duration-300"
                >
                  <img
                    src={`/software/${software}.png`}
                    onError={(e) => {
                      e.target.src = `/software/${software}.jpg`;
                    }}
                    alt={`${software} logo`}
                    className={`object-contain ${
                      logoSizes[software] || logoSizes.default
                    }`}
                  />
                </div>
              ))}
            </div>
          </section>
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
                    title: "Schedule Management",
                    image: testImage,
                    category: "Our Services",
                    date: "May 15, 2025",
                    link: "/schedule-mangement",
                  },
                  {
                    title: "WBS Setup",
                    image: testImage,
                    category: "Our Operations",
                    date: "May 10, 2025",
                    link: "/wbs-setup",
                  },
                  {
                    title: "",
                    image: testImage,
                    category: "Our Services",
                    date: "May 05, 2025",
                    link: "/lower-completions",
                  },
                  {
                    title: "",
                    image: testImage,
                    category: "Our Operations",
                    date: "April 21, 2025",
                    link: "/upper-completions",
                  },
                ]}
              />
        </div>
      </div> 
    </div>
  );
};

export default ScheduleManagementPage;
