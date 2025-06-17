import { Link } from "react-router-dom";

export default function SurfDropdown() {
  return (
    <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
      <li>
        <Link to="/surf-sps" className="block py-2 px-3 !text-gray-600 bg-white hover:bg-red-100 hover:text-red-500 !font-bold rounded">
          GO TO: SURF & SPS 
        </Link>
      </li>
      <li>
        <Link to="/surf-execution" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500  rounded">
          SURF Execution Framework 
        </Link>
      </li>
      <li>
        <Link to="/systems-engineering" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500  rounded">
          Systems Engineering 
        </Link>
      </li>
      <li>
        <Link to="/skid-packaging" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500  rounded">
          Skid Packaging and I&E Management 
        </Link>
      </li>
      <li>
        <Link to="/controls-dcs" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500  rounded">
          Controls & DCS Integration 
        </Link>
      </li>
    </ul>
  );
}
