

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import breadcrumbsMap from "../utils/breadcrumbsConfig";

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/") {
    return null;
  }
  const buildBreadcrumbTrail = (path) => {
    const trail = [];
    let current = path;

    while (current) {
      const entry = breadcrumbsMap[current];
      if (!entry) break;
      trail.unshift({ path: current, name: entry.name });
      current = entry.parent;
    }

    return trail;
  };

  const breadcrumbs = buildBreadcrumbTrail(currentPath);

  return (
    <div className="bg-white dark:bg-[#2b2b2b] px-8 py-2 text-l !text-gray-700 dark:text-white !font-bold">
      <div className="flex items-center space-x-1">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <span key={crumb.path} className="flex items-center space-x-1">
              {index > 0 && <ChevronRightIcon className="w-6 h-6 text-gray-400" />}
              {isLast ? (
                <span className="text-gray-500 dark:text-gray-300">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="!text-gray-700 dark:!text-white hover:!text-red-600 hover-!underline !font-bold">
                  {crumb.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;

