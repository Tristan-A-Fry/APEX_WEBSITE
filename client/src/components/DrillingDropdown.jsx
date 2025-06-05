
// src/components/DrillingDropdown.jsx
import { Link } from "react-router-dom";

export default function DrillingDropdown() {
  return (
    <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
      <li>
        <Link to="/drillingcompletions" className="block py-2 px-3 !text-gray-600 bg-white hover:bg-red-100 hover:text-red-500 !font-bold rounded">
          GO TO: Drilling & Completions
        </Link>
      </li>
      <li>
        <Link to="/rig-selection" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
          Rig Selection
        </Link>
      </li>
      <li>
        <Link to="/drilling" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
          Drilling
        </Link>
      </li>
      <li>
        <Link to="/lower-completions" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
          Lower Completions
        </Link>
      </li>
      <li>
        <Link to="/upper-completions" className="block py-2 px-3 !text-black bg-white hover:bg-red-100 hover:text-red-500 font-semibold rounded">
          Upper Completions
        </Link>
      </li>
    </ul>
  );
}
