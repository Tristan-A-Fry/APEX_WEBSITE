

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DrillingDropdown from "./DrillingDropdown";
import ProjectControlsDropdown from "./ProjectControlsDropdown";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const ProductsDropdown = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const dropdownRef = useRef(null);

  return (
    <div className="relative cursor-pointer px-1 py-3">
      <div
        ref={dropdownRef}
        className="relative cursor-pointer"
        // onMouseLeave={() => setOpenSubmenu(null)}
      >
        {/* Main Label */}
        <div
          onClick={() => setIsMainOpen(!isMainOpen)}
          className="font-semibold text-gray-700 dark:text-white hover:text-red-700 flex items-center gap-1"
        >
          Products & Services
          <span
            className={`text-red-700 transform transition-transform duration-400 ${
              isMainOpen ? "rotate-90" : ""
            }`}
          >
            <ChevronRightIcon className="w-5 h-5" strokeWidth={2} />
          </span>
        </div>

        {/* Main Dropdown */}
        {isMainOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
            {/* All Products & Services Link */}
            <div className="px-4 py-2 hover:bg-red-100">
              <Link to="/all-products-services" className="!text-black">
                All Products & Services
              </Link>
            </div>

            {/* Drilling Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "drilling") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("drilling");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                Drilling & Completions
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "drilling" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "drilling" && (
                <div className="px-4 py-2">
                  <DrillingDropdown />
                </div>
              )}
            </div>

            {/* Project Controls Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "project-controls") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("project-controls");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                Project Controls
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "project-controls" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "project-controls" && (
                <div className="px-4 py-2">
                  <ProjectControlsDropdown />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDropdown;






// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import DrillingDropdown from "./DrillingDropdown";
// import ProjectControlsDropdown from "./ProjectControlsDropdown";
//
// const ProductsDropdown = () => {
//   const [isDrillingOpen, setIsDrillingOpen] = useState(false);
//   const [isProjectControlsOpen, setIsProjectControlsOpen] = useState(false);
//
//   // Create a ref for the entire dropdown container
//   const dropdownRef = useRef(null);
//
//   // Add click outside detection
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsDrillingOpen(false);
//         setIsProjectControlsOpen(false);
//       }
//     };
//
//     document.addEventListener("mousedown", handleClickOutside);
//
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//
//   return (
//     <div className="relative group cursor-pointer px-1 py-3">
//       <div 
//         ref={dropdownRef} 
//         className="relative group cursor-pointer"
//         onMouseLeave={() => {
//           setIsDrillingOpen(false);
//           setIsProjectControlsOpen(false);
//         }}
//       >
//         {/* Main Hover Label */}
//         <span className="text-gray-700 hover:text-red-700 flex items-center gap-1">
//           Products & Services
//           <span className="text-red-700 transform transition-transform duration-200 group-hover:rotate-90">
//             ▶
//           </span>
//         </span>
//
//         {/* Main Dropdown (visible on hover) */}
//         <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
//         <div className="px-4 py-2 hover:bg-red-100">
//           <Link to="/all-products-services" className="!text-black">All Products & Services</Link>
//         </div>
//
//           {/* Drilling Dropdown */}
//           <div className="relative">
//             <div
//               onClick={() => {
//                 setIsDrillingOpen(!isDrillingOpen);
//                 setIsProjectControlsOpen(false);
//               }}
//               className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
//             >
//               Drilling & Completions
//               <span
//                 className={`transform transition-transform duration-200 ${
//                   isDrillingOpen ? "rotate-90" : ""
//                 } text-red-700`}
//               >
//                 ▶
//               </span>
//             </div>
//             {isDrillingOpen && (
//               <div className="absolute left-full top-0 mt-0 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
//                 <DrillingDropdown />
//               </div>
//             )}
//           </div>
//
//           {/* Project Controls Dropdown */}
//           <div className="relative">
//             <div
//               onClick={() => {
//                 setIsProjectControlsOpen(!isProjectControlsOpen)
//                 setIsDrillingOpen(false);
//               }}
//               className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
//             >
//               Project Controls
//               <span
//                 className={`transform transition-transform duration-200 ${
//                   isProjectControlsOpen ? "rotate-90" : ""
//                 } text-red-700`}
//               >
//                 ▶
//               </span>
//             </div>
//             {isProjectControlsOpen && (
//               <div className="absolute left-full top-0 mt-0 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
//                 <ProjectControlsDropdown />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default ProductsDropdown;
//
