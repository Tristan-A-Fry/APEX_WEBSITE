
// src/components/DrillingDropdown.jsx
import { Link } from "react-router-dom";

export default function DrillingDropdown() {
  return (
    <div className="relative group">
      <div className="text-gray-700 hover:text-red-500 flex items-center gap-1 cursor-pointer">
        Drilling and Completions
        <span className="text-red-500 ransform transition-transform duration-200 group-hover:rotate-90">▶ </span>
      </div>

      <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 z-50">
        <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
          <li>
            <Link to="/drilling/rig-selection" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Rig Selection
            </Link>
          </li>
          <li>
            <Link to="/drilling/drilling" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Drilling
            </Link>
          </li>
          <li>
            <Link to="/drilling/lower-completions" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Lower Completions
            </Link>
          </li>
          <li>
            <Link to="/drilling/upper-completions" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Upper Completions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
