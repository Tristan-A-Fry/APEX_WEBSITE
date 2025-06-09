import { Link } from "react-router-dom";

export default function DrillingDropdown() {
  return (
    <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
      <li>
        <Link to="/subsea-inspections" className="block py-2 px-3 !text-gray-600 bg-white hover:bg-red-100 hover:text-red-500 !font-bold rounded">
          GO TO: Subsea Inspections
        </Link>
      </li>
    </ul>
  );
}
