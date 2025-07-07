import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const DarkModeToggle = ({ className = "" }) => {
  // Initialize from localStorage or system preference
  const getInitialMode = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`bg-white dark:bg-[#2b2b2b] dark:!text-white !py-1 !font-semibold rounded transition-colors duration-200 ${className}`}
    >
      <span className="flex items-center gap-2">
        {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        <span className="text-sm font-medium">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </span>
    </button>
  );
};

export default DarkModeToggle;

