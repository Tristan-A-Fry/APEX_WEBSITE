

import React from "react";
import excel from "../../../public/software/excel.jpg";
import bolo from "../../../public/software/p2.png";
import graph from "../../../public/software/graph.jpg";

const timelineData = [
  {
    title: "AFE + WBS",
    description:
      "• Project Team \n •  Topside \n • Subsea \n •  Misc",
  },
  {
    title: "Consolidate VOWD",
    description:
      "• Forecast, EAC, Variances\n• Issues / Concerns\n• Review / Alignment Meetings",
  },
  {
    title: "Finalize",
    description:
      "• Generate Cost Phasing and Performance Scorecard",
  },
  {
    title: "Project Review",
    description:
      "• Publish & Report",
    image: graph,
  },
];

const CostControlsPage = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen py-12 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Cost Control</h1>
        <p className="text-gray-700 text-base leading-relaxed">
          The "Cost" process provides a structured approach to
          managing project expenditures and schedules effectively. It begins with defining
          project controls software and tools, then moves into developing AFE (Authorization
          for Expenditure) and WBS (Work Breakdown Structure) to organize project components.
          Once these are established, the process involves consolidating VOWD (Value of Work
          Done), forecasts, and EAC (Estimate at Completion) while addressing issues and
          ensuring alignment through review meetings. Afterward, cost phasing and performance
          scorecards are generated to visualize progress and financial metrics. Finally, the
          process culminates in project review and reporting, ensuring transparency and
          informed decision-making throughout the project's lifecycle.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-5xl">
        {/* Timeline vertical line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 
          bg-gradient-to-b from-red-500 via-blue-500 to-red-500 rounded-full 
          z-0 origin-top timelineFill"
        ></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-center mb-12">
            {/* Timeline box */}
            {index % 2 === 0 ? (
              <div className="w-full md:w-1/2 pr-8">
                <div
                  className="bg-white shadow-md border border-gray-200 rounded-lg p-4 max-w-3xl 
                  overflow-hidden fadeInUp"
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

                  {/* Single image */}
                  {!item.images && item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mb-2 w-full h-24 object-cover rounded-md"
                    />
                  )}

                  {/* Text content */}
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full md:w-1/2 pl-8 ml-auto">
                <div
                  className="bg-white shadow-md border border-gray-200 rounded-lg p-4 max-w-3xl 
                  overflow-hidden fadeInUp"
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

                  {/* Single image */}
                  {!item.images && item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mb-2 w-full h-24 object-cover rounded-md"
                    />
                  )}

                  {/* Text content */}
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm whitespace-pre-line break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            )}

            {/* Timeline circle */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 
              bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full 
              border-4 border-black z-10"
            ></div>
          </div>
        ))}
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




