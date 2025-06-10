

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
    title: "AFE + WBS",
    description: "• Project Team \n •  Topside \n • Subsea \n •  Misc",
  },
  {
    title: "Consolidate VOWD",
    description:
      "• Forecast, EAC, Variances\n• Issues / Concerns\n• Review / Alignment Meetings",
  },
  {
    title: "Finalize",
    description: "• Generate Cost Phasing and Performance Scorecard",
  },
  {
    title: "Project Review",
    description: "• Publish & Report",
    image: graph,
  },
];

const CostControlsPage = () => {
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
        title="Cost Control"
        subtitle="Clarity in Cost Tracking and Reporting"
        backgroundImage={testImage}
        position="center"
      />
      <div className="flex flex-col items-center bg-white min-h-screen py-12">
        {/* Header Section */}
        <div className="max-w-4xl mb-12 text-center mt-5">
          <p className="text-black font-semibold text-base leading-relaxed">
            The "Cost" process provides a structured approach to managing project expenditures
            and schedules effectively. It begins with defining project controls software and
            tools, then moves into developing AFE (Authorization for Expenditure) and WBS
            (Work Breakdown Structure) to organize project components. Once these are
            established, the process involves consolidating VOWD (Value of Work Done),
            forecasts, and EAC (Estimate at Completion) while addressing issues and ensuring
            alignment through review meetings. Afterward, cost phasing and performance
            scorecards are generated to visualize progress and financial metrics. Finally, the
            process culminates in project review and reporting, ensuring transparency and
            informed decision-making throughout the project's lifecycle.
          </p>

          <section id="software" className="py-20 bg-white dark:bg-[#2b2b2b]">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 px-4">
              {["excel", "bolo", "coupa", "docvue", "atlas"].map((software) => (
                <div
                  key={software}
                  className="w-60 h-28 bg-white rounded-lg flex items-center justify-center 
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

export default CostControlsPage;



// import React, { useEffect, useRef, useState } from 'react';
//
// const steps = [
//   { title: 'Cost Control Process', content: '• Excel / Docs\n• Coupa, P2BOLO, DocVue, Atlas AFE' },
//   { title: 'AFE + WBS', content: '• Project Team\n• Topside, Subsea, Misc.' },
//   { title: 'Consolidate VOWD', content: '• Forecast, EAC, Variances\n• Issues/Concerns\n• Review/Alignment Meetings' },
//   { title: 'Finalize/Generate', content: '• Cost Phasing and Performance Scorecard' },
//   { title: 'Project Review', content: '• Publish/Report' },
// ];
//
// const CostControlsPage = () => {
//   const [openStep, setOpenStep] = useState(null);
//   const [circlePositions, setCirclePositions] = useState([]);
//   const pathRef = useRef(null);
//
//   useEffect(() => {
//     if (pathRef.current) {
//       const pathLength = pathRef.current.getTotalLength();
//       const positions = steps.map((_, index) => {
//         const distance = (index + 1) * (pathLength / (steps.length + 1));
//         return pathRef.current.getPointAtLength(distance);
//       });
//       setCirclePositions(positions);
//     }
//   }, []);
//
//   const toggleStep = (index) => {
//     setOpenStep(openStep === index ? null : index);
//   };
//
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-12 text-center">Cost and Schedule Controls</h1>
//
//       <div className="relative w-full overflow-x-auto">
//         {/* SVG Wave */}
//         <svg viewBox="0 0 1200 200" className="w-[1200px] h-80 mx-auto">
//           <path
//             ref={pathRef}
//             d="M 0 100 Q 150 0 300 100 T 600 100 T 900 100 T 1200 100"
//             fill="transparent"
//             stroke="#3b82f6"
//             strokeWidth="3"
//           />
//           {/* Circles */}
//           {circlePositions.map((point, index) => (
//             <g key={index} transform={`translate(${point.x},${point.y})`}>
//               <circle
//                 r="50"
//                 fill="white"
//                 stroke="#3b82f6"
//                 strokeWidth="2"
//                 className="cursor-pointer hover:fill-blue-50 transition"
//                 onClick={() => toggleStep(index)}
//               />
//               <text
//                 textAnchor="middle"
//                 alignmentBaseline="middle"
//                 fontSize="10"
//                 className="font-semibold"
//               >
//                 {steps[index].title}
//               </text>
//             </g>
//           ))}
//         </svg>
//         {/* Content below the diagram */}
//         <div className="flex justify-center mt-8">
//           {openStep !== null && (
//             <div className="bg-white rounded-lg shadow-md p-4 w-80 transition-all duration-300 ease-in-out">
//               {steps[openStep].content.split('\n').map((line, i) => (
//                 <p key={i} className="text-sm text-gray-700">• {line}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default CostControlsPage;
//




