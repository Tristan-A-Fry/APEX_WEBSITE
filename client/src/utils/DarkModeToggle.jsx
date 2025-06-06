

import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="!p-2 !font-semibold !bg-white dark:!bg-[#2b2b2b] dark:!text-white rounded"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;

