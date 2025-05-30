
import { Link } from "react-router-dom";
import React, {useState} from "react";
import DrillingDropdown from "./DrillingDropdown.jsx";

const ProductsDropdown = () => { 
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isDrillingOpen, setIsDrillingOpen] = useState(false);

  return (
    <div className="relative group">
      <button 
        onClick={() => setIsMainOpen(!isMainOpen)}
        className="text-gray-700 hover:text-red-500 flex items-center gap-1 cursor-pointer"
      >
        Products & Services 
        <span className="text-red-500 ransform transition-transform duration-200 group-hover:rotate-90">▶ </span>
      </button>

      {/* Main DropDown*/
      {isMainOpen && (
        <div className="relative">
            <button>
          {/* SubMenu*/}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
