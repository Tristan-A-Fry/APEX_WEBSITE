import { Link } from "react-router-dom";

export default function ProjectControlsDropdown() {
  return (
        <ul className="flex flex-col py-2 px-4 text-sm text-gray-800">
          <li>
            <Link to="/project-controls" className="block py-2 px-3 !text-gray-600 bg-white dark:bg-[#2b2b2b] dark:!text-gray-300 hover:bg-red-100 hover:text-red-500 !font-bold rounded">
              GO TO: Project Controls 
            </Link>
          </li>
          <li>
            <Link to="/cost-control" className="block py-2 px-3 !text-black dark:!text-white bg-white dark:bg-[#2b2b2b] hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Cost Controls
            </Link>
          </li>
          <li>
            <Link to="/schedule-management" className="block py-2 px-3 !text-black dark:!text-white bg-white dark:bg-[#2b2b2b] hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Schedule Management
            </Link>
          </li>
          <li>
            <Link to="/quality-inspection" className="block py-2 px-3 !text-black dark:!text-white bg-white dark:bg-[#2b2b2b] hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              Quality Control and Inspection
            </Link>
          </li>
          <li>
            <Link to="/wbs-setup" className="block py-2 px-3 !text-black dark:!text-white bg-white dark:bg-[#2b2b2b] hover:bg-red-100 hover:text-red-500 font-semibold rounded">
              WBS Setup 
            </Link>
          </li>
        </ul>
  );
}
