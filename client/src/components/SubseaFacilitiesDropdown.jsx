
import { Link } from "react-router-dom";

export default function SubseaFacilitiesDropdown() {
  return (
    <div className="relative group">
      <div className="text-gray-700 hover:text-red-500 flex items-center gap-1 cursor-pointer">
        Subsea Facilities
        <span className="text-red-500 ransform transition-transform duration-200 group-hover:rotate-90">▶ </span>
      </div>

      <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 z-50">
        <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
          <li>
            <Link to="/subsea/field-development" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Subsea Field Development
            </Link>
          </li>
          <li>
            <Link to="/subsea/trees" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Subsea Trees
            </Link>
          </li>
          <li>
            <Link to="/subsea/umbilicals" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Umbilicals and Distribution
            </Link>
          </li>
          <li>
            <Link to="/subsea/controls" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Subsea and Topside Controls
            </Link>
          </li>
          <li>
            <Link to="/subsea/flowline" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Flowline Engineering
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
